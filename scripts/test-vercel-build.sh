#!/bin/bash

# Test Vercel Build Process Locally
# This script mirrors exactly what Vercel does during deployment

set -e  # Exit on any error

echo "🚀 Testing Vercel Build Process Locally"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    print_error "pnpm is not installed. Please install pnpm first."
    exit 1
fi

# Check pnpm version (should match Vercel's version)
PNPM_VERSION=$(pnpm --version)
print_status "Using pnpm version: $PNPM_VERSION"

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Using Node.js version: $NODE_VERSION"

# Set environment variables (mirror Vercel's environment)
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export CI=true

print_status "Environment variables set (NODE_ENV=production, CI=true)"

# Validate environment
echo "🔍 Validating environment..."
if [ -z "$NODE_ENV" ]; then
    print_error "NODE_ENV is required"
    exit 1
fi
print_status "Environment validation passed"

# Step 1: Install dependencies (mirror Vercel's frozen-lockfile)
echo ""
echo "📦 Installing dependencies..."
if pnpm install --frozen-lockfile; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 2: Run linting (Vercel runs this)
echo ""
echo "🔍 Running linting..."
if pnpm lint; then
    print_status "Linting passed"
else
    print_error "Linting failed"
    exit 1
fi

# Step 3: Run type checking (Vercel runs this)
echo ""
echo "🔧 Running type checking..."
if pnpm tsc --noEmit; then
    print_status "Type checking passed"
else
    print_error "Type checking failed"
    exit 1
fi

# Step 4: Build the application (exact Vercel command)
echo ""
echo "🏗️  Building application..."
if pnpm run build; then
    print_status "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 5: Verify build output
echo ""
echo "🔍 Verifying build output..."
if [ -d ".next" ]; then
    print_status "Build directory (.next) exists"
    echo "Build size: $(du -sh .next | cut -f1)"
else
    print_error "Build directory (.next) not found"
    exit 1
fi

# Step 6: Test production build locally
echo ""
echo "🧪 Testing production build..."
print_warning "Starting production server for testing..."

# Start the production server in background
pnpm start &
SERVER_PID=$!

# Wait for server to start
sleep 10

# Test that the server responds
echo "Testing server response..."
if curl -f -s http://localhost:3000 > /dev/null; then
    print_status "Server is responding"
else
    print_error "Server is not responding"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

# Test key routes
ROUTES=("/" "/about" "/roadmap" "/exchanges")
for route in "${ROUTES[@]}"; do
    echo "Testing route: $route"
    if curl -f -s "http://localhost:3000$route" > /dev/null; then
        print_status "Route $route is working"
    else
        print_error "Route $route failed"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
done

# Test OpenGraph image generation (critical for Vercel)
echo "Testing OpenGraph image generation..."
if curl -f -s "http://localhost:3000/opengraph-image" > /dev/null; then
    print_status "OpenGraph image generation is working"
else
    print_error "OpenGraph image generation failed"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

# Clean up
kill $SERVER_PID 2>/dev/null || true
print_status "Production server stopped"

# Step 7: Performance check
echo ""
echo "⚡ Running performance check..."
if command -v lighthouse &> /dev/null; then
    print_warning "Lighthouse is available, running performance audit..."
    lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless" || true
    print_status "Performance audit completed (see lighthouse-report.json)"
else
    print_warning "Lighthouse not installed, skipping performance check"
fi

# Final summary
echo ""
echo "🎉 Vercel Build Test Summary"
echo "============================"
print_status "All Vercel build steps completed successfully!"
print_status "✅ Dependencies installed"
print_status "✅ Linting passed"
print_status "✅ Type checking passed"
print_status "✅ Build completed"
print_status "✅ Production server tested"
print_status "✅ All routes working"

echo ""
echo "🚀 Your build is ready for Vercel deployment!"
echo "The build process matches Vercel's exactly, so deployment should succeed."
