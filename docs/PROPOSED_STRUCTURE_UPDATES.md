# PROPOSED_STRUCTURE_UPDATES.md

## Overview

This document outlines the proposed structure updates for a production-ready Next.js 15 boilerplate with shadcn/ui and tRPC integration. The structure follows Next.js App Router conventions and incorporates best practices for scalability, maintainability, and type safety.

## Essential Additions

### 1. Environment Configuration

```
├── .env.example                 # Environment variables template
├── .env.local                   # Local development environment (gitignored)
├── .env.production              # Production environment variables
└── .env.development             # Development environment variables
```

### 2. Middleware

```
├── middleware.ts                # Next.js middleware for auth, redirects, headers
└── lib/
    └── middleware/
        ├── auth.ts              # Authentication middleware utilities
        ├── logging.ts           # Request/response logging
        └── security.ts          # Security headers and CSP
```

### 3. API Routes Structure

```
app/
└── api/
    ├── trpc/
    │   └── [trpc]/
    │       └── route.ts         # tRPC API handler
    ├── auth/
    │   ├── [...nextauth]/
    │   │   └── route.ts         # NextAuth.js handler
    │   └── callback/
    │       └── route.ts         # OAuth callback handler
    ├── health/
    │   └── route.ts             # Health check endpoint
    └── webhooks/
        └── github/
            └── route.ts         # GitHub webhook handler
```

### 4. Type Definitions

```
types/
├── auth.ts                      # Authentication types
├── user.ts                      # User-related types
├── api.ts                       # API response types
├── trpc.ts                      # tRPC-specific types
├── database.ts                  # Database schema types
└── index.ts                     # Export all types
```

### 5. Validation Schemas

```
lib/
└── validations/
    ├── auth.ts                  # Authentication schemas (Zod)
    ├── user.ts                  # User validation schemas
    ├── common.ts                # Common validation schemas
    └── index.ts                 # Export all schemas
```

### 6. Custom Hooks

```
hooks/
├── use-auth.ts                  # Authentication hook
├── use-trpc.ts                  # tRPC query/mutation hooks
├── use-local-storage.ts         # Local storage hook
├── use-debounce.ts              # Debounce hook
├── use-media-query.ts           # Media query hook
└── index.ts                     # Export all hooks
```

### 7. Route Groups

```
app/
├── (auth)/                      # Authentication route group
│   ├── layout.tsx               # Auth-specific layout
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── forgot-password/
│   │   └── page.tsx
│   └── reset-password/
│       └── page.tsx
├── (dashboard)/                 # Dashboard route group
│   ├── layout.tsx               # Dashboard layout with sidebar
│   ├── page.tsx                 # Dashboard home
│   ├── settings/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── analytics/
│       └── page.tsx
└── (marketing)/                 # Marketing pages route group
    ├── layout.tsx               # Marketing layout
    ├── about/
    │   └── page.tsx
    ├── pricing/
    │   └── page.tsx
    └── contact/
        └── page.tsx
```

## Production Enhancements

### 1. Error Boundaries

```
app/
├── error.tsx                    # Global error boundary
├── not-found.tsx                # 404 page
├── (auth)/
│   └── error.tsx                # Auth-specific error boundary
├── (dashboard)/
│   └── error.tsx                # Dashboard-specific error boundary
└── global-error.tsx             # Root error boundary
```

### 2. Loading States

```
app/
├── loading.tsx                  # Global loading component
├── (auth)/
│   └── loading.tsx              # Auth-specific loading
├── (dashboard)/
│   └── loading.tsx              # Dashboard-specific loading
└── components/
    └── ui/
        ├── skeleton.tsx         # Skeleton loading component
        └── spinner.tsx          # Loading spinner
```

### 3. Metadata & SEO

```
app/
├── metadata.ts                  # Global metadata configuration
├── opengraph-image.tsx          # Dynamic OG image generation
├── twitter-image.tsx            # Twitter card image
├── icon.tsx                     # App icon
├── apple-icon.tsx               # Apple touch icon
├── manifest.ts                  # PWA manifest
└── robots.ts                    # Robots.txt generation
```

### 4. Security Headers

```
lib/
└── security/
    ├── headers.ts               # Security headers configuration
    ├── csp.ts                   # Content Security Policy
    └── cors.ts                  # CORS configuration
```

### 5. Performance Optimization

```
lib/
└── performance/
    ├── image-optimization.ts    # Image optimization utilities
    ├── cache.ts                 # Caching strategies
    ├── compression.ts           # Response compression
    └── monitoring.ts            # Performance monitoring
```

### 6. Testing Setup

```
tests/
├── __mocks__/                   # Mock files
│   ├── next-auth.ts
│   └── trpc.ts
├── components/                  # Component tests
│   ├── ui/
│   └── forms/
├── pages/                       # Page tests
├── api/                         # API route tests
├── utils/                       # Utility function tests
├── setup.ts                     # Test setup
├── jest.config.js               # Jest configuration
├── playwright.config.ts         # Playwright configuration
└── test-utils.tsx               # Testing utilities
```

### 7. CI/CD & DevOps

```
.github/
└── workflows/
    ├── ci.yml                   # Continuous Integration
    ├── cd.yml                   # Continuous Deployment
    ├── security.yml             # Security scanning
    └── performance.yml          # Performance testing

├── Dockerfile                   # Docker configuration
├── docker-compose.yml           # Docker Compose setup
├── .dockerignore                # Docker ignore file
└── vercel.json                  # Vercel deployment config
```

## tRPC Integration

### 1. tRPC Server Setup

```
server/
└── trpc/
    ├── context.ts               # tRPC context creation
    ├── trpc.ts                  # tRPC initialization
    ├── middleware/
    │   ├── auth.ts              # Authentication middleware
    │   ├── rate-limit.ts        # Rate limiting middleware
    │   └── logging.ts           # Logging middleware
    ├── procedures/
    │   ├── public.ts            # Public procedures
    │   ├── protected.ts         # Protected procedures
    │   └── admin.ts             # Admin-only procedures
    └── routers/
        ├── _app.ts              # Main app router
        ├── auth.ts              # Authentication router
        ├── user.ts              # User management router
        ├── post.ts              # Post management router
        └── admin.ts             # Admin operations router
```

### 2. tRPC Client Setup

```
lib/
└── trpc/
    ├── client.ts                # tRPC client configuration
    ├── server.ts                # Server-side tRPC client
    ├── react.tsx                # React Query integration
    └── providers/
        ├── trpc-provider.tsx    # tRPC provider component
        └── query-provider.tsx   # React Query provider
```

### 3. Database Integration

```
lib/
└── db/
    ├── index.ts                 # Database connection
    ├── schema.ts                # Database schema (Drizzle/Prisma)
    ├── migrations/              # Database migrations
    └── seed.ts                  # Database seeding
```

## Enhanced Components Structure

### 1. UI Components

```
components/
├── ui/                          # shadcn/ui components
│   ├── button.tsx
│   ├── input.tsx
│   ├── form.tsx
│   ├── dialog.tsx
│   ├── toast.tsx
│   └── ...
├── forms/                       # Form components
│   ├── login-form.tsx
│   ├── register-form.tsx
│   ├── contact-form.tsx
│   └── form-field.tsx
├── layout/                      # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── sidebar.tsx
│   ├── navigation.tsx
│   └── breadcrumb.tsx
├── features/                    # Feature-specific components
│   ├── auth/
│   │   ├── auth-button.tsx
│   │   ├── user-menu.tsx
│   │   └── protected-route.tsx
│   ├── dashboard/
│   │   ├── stats-card.tsx
│   │   ├── chart.tsx
│   │   └── data-table.tsx
│   └── profile/
│       ├── profile-form.tsx
│       └── avatar-upload.tsx
└── providers/                   # Context providers
    ├── theme-provider.tsx
    ├── auth-provider.tsx
    ├── trpc-provider.tsx
    └── toast-provider.tsx
```

## Configuration Files

### 1. Additional Config Files

```
├── .editorconfig                # Editor configuration
├── .gitignore                   # Git ignore rules
├── .env.example                 # Environment template
├── biome.json                   # Biome configuration (existing)
├── components.json              # shadcn/ui configuration (existing)
├── next.config.ts               # Next.js configuration (existing)
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.mjs           # PostCSS configuration (existing)
├── tsconfig.json                # TypeScript configuration (existing)
└── package.json                 # Dependencies (existing)
```

## Documentation

### 1. Documentation Structure

```
docs/
├── README.md                    # Project overview
├── SETUP.md                     # Setup instructions
├── DEPLOYMENT.md                # Deployment guide
├── CONTRIBUTING.md              # Contribution guidelines
├── API.md                       # API documentation
├── TRPC.md                      # tRPC usage guide
└── TROUBLESHOOTING.md           # Common issues and solutions
```

## Key Benefits of This Structure

1. **Type Safety**: Full TypeScript integration with tRPC for end-to-end type safety
2. **Scalability**: Clear separation of concerns and modular architecture
3. **Performance**: Optimized loading states, caching, and image optimization
4. **Security**: Comprehensive security headers, authentication, and validation
5. **Developer Experience**: Hot reloading, type checking, and comprehensive testing
6. **Production Ready**: CI/CD pipelines, monitoring, and deployment configurations
7. **Maintainability**: Clear folder structure and documentation

## Implementation Priority

1. **Phase 1**: Essential additions (environment, middleware, types, validations)
2. **Phase 2**: tRPC integration (server setup, client configuration)
3. **Phase 3**: Route groups and enhanced components
4. **Phase 4**: Production enhancements (error boundaries, loading states)
5. **Phase 5**: Testing and CI/CD setup

This structure provides a solid foundation for a production-ready Next.js application with modern tooling and best practices.
