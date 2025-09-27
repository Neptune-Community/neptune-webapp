# Neptune Community Webapp - Deployment Guide

## 🚀 Vercel Deployment

This guide covers deploying the Neptune Community webapp to Vercel with a robust CI/CD pipeline.

### Prerequisites

- GitHub repository connected to Vercel
- Vercel account with project access
- Environment variables configured

### Quick Deploy

1. **Connect Repository to Vercel**
   ```bash
   # Import project from GitHub
   # Vercel will auto-detect Next.js configuration
   ```

2. **Configure Environment Variables**
   ```bash
   # In Vercel dashboard, add these environment variables:
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

3. **Deploy**
   ```bash
   # Automatic deployment on push to main branch
   git push origin main
   ```

## 🔧 CI/CD Pipeline

### Local Testing

Test the Vercel build process locally:

```bash
# Run the complete Vercel build simulation
pnpm test:vercel

# Or run individual steps
pnpm install --frozen-lockfile
pnpm lint
pnpm tsc --noEmit
pnpm build
```

### GitHub Actions

The CI/CD pipeline includes:

- **Multi-Node Testing**: Tests on Node.js 18, 20, and 22
- **Build Caching**: Optimized build times with Next.js cache
- **Environment Validation**: Ensures required variables are set
- **Comprehensive Testing**: Linting, type checking, and E2E tests
- **OpenGraph Testing**: Validates image generation
- **Artifact Upload**: Build artifacts for debugging

### Pipeline Features

#### 1. **Exact Vercel Mirroring**
```yaml
# Uses same versions as Vercel
pnpm: 10.17.1
node: 20 (primary), 18, 22 (matrix)
frozen-lockfile: true
```

#### 2. **Build Caching**
```yaml
# Caches Next.js build artifacts
paths:
  - .next/cache
  - .next/static
key: nextjs-${{ hashFiles('**/pnpm-lock.yaml') }}-${{ hashFiles('**/*.ts', '**/*.tsx') }}
```

#### 3. **Environment Validation**
```bash
# Validates required environment variables
NODE_ENV=production
CI=true
NEXT_TELEMETRY_DISABLED=1
```

#### 4. **Comprehensive Testing**
- **Linting**: Biome code quality checks
- **Type Checking**: TypeScript validation
- **Build Testing**: Production build verification
- **Route Testing**: All pages and API endpoints
- **OpenGraph Testing**: Social media image generation
- **E2E Testing**: Playwright browser tests

## 🐛 Troubleshooting

### Common Build Issues

#### 1. **OpenGraph Image Generation Error**
```bash
Error: ENOENT: no such file or directory, open '/vercel/path0/public/neptune.svg'
```

**Solution**: The OpenGraph image now has robust error handling:
- Tries multiple file paths
- Falls back gracefully if logo not found
- Continues build without logo if needed

#### 2. **ESLint/Biome Warnings as Errors**
```bash
Error: Command "pnpm run build" exited with 1
```

**Solution**: Fix linting issues:
```bash
# Auto-fix formatting and imports
pnpm lint --write

# Check for remaining issues
pnpm lint
```

#### 3. **TypeScript Errors**
```bash
Type error: Cannot find module '@/components/...'
```

**Solution**: Check import paths and type definitions:
```bash
# Run type checking
pnpm tsc --noEmit

# Check for missing types
pnpm tsc --noEmit --strict
```

#### 4. **Client/Server Component Issues**
```bash
Error: Event handlers cannot be passed to Client Component props
```

**Solution**: Ensure proper component separation:
- Add `"use client"` to components using hooks/event handlers
- Move metadata exports to layout files for client components
- Use proper Next.js App Router patterns

### Debugging Steps

1. **Test Locally First**
   ```bash
   pnpm test:vercel
   ```

2. **Check Build Logs**
   - Review Vercel build logs for specific errors
   - Check GitHub Actions logs for CI/CD issues

3. **Verify Environment**
   ```bash
   # Check environment variables
   echo $NODE_ENV
   echo $CI
   ```

4. **Validate Dependencies**
   ```bash
   # Ensure lockfile is up to date
   pnpm install --frozen-lockfile
   ```

## 📊 Performance Monitoring

### Lighthouse CI

The pipeline includes Lighthouse CI for performance monitoring:

```javascript
// lighthouserc.js
assertions: {
  "categories:performance": ["warn", { minScore: 0.8 }],
  "categories:accessibility": ["error", { minScore: 0.9 }],
  "categories:best-practices": ["warn", { minScore: 0.8 }],
  "categories:seo": ["warn", { minScore: 0.8 }],
}
```

### Build Optimization

- **Static Generation**: All pages pre-rendered
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in Next.js analyzer

## 🔒 Security

### Security Headers

The app includes comprehensive security headers:

```typescript
// next.config.ts
headers: [
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "..." },
]
```

### CI/CD Security

- **Dependency Scanning**: Automated vulnerability checks
- **Secret Scanning**: GitHub secret detection
- **Build Isolation**: Secure build environment
- **Artifact Security**: Secure artifact storage

## 📈 Monitoring & Alerts

### Deployment Status

The pipeline provides clear status notifications:

- ✅ **Success**: Build ready for deployment
- ❌ **Failure**: Detailed error reporting
- 🔍 **Debug**: Artifact upload for investigation

### Performance Tracking

- **Build Time**: Tracked across Node.js versions
- **Bundle Size**: Monitored for regressions
- **Test Coverage**: Maintained above thresholds
- **Performance Scores**: Lighthouse CI monitoring

## 🚀 Best Practices

### Development Workflow

1. **Local Development**
   ```bash
   pnpm dev
   ```

2. **Pre-commit Testing**
   ```bash
   pnpm test:vercel
   ```

3. **Push to Main**
   ```bash
   git push origin main
   # Triggers automatic deployment
   ```

### Code Quality

- **Linting**: Biome for consistent code style
- **Type Safety**: TypeScript strict mode
- **Testing**: Comprehensive test coverage
- **Documentation**: Clear code comments

### Deployment Strategy

- **Automatic**: Deploy on main branch push
- **Preview**: Deploy on pull request
- **Rollback**: Easy rollback via Vercel dashboard
- **Monitoring**: Real-time deployment status

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## 🆘 Support

For deployment issues:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review build logs in Vercel dashboard
3. Check GitHub Actions workflow runs
4. Run local tests with `pnpm test:vercel`

---

**Last Updated**: September 2024  
**Pipeline Version**: v2.0  
**Next.js Version**: 15.5.4
