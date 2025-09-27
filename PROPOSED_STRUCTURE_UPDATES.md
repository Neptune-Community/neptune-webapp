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
├── use-theme.ts                 # Theme toggle hook (shadcn dark mode)
└── index.ts                     # Export all hooks
```

### 7. Zustand State Management

```
stores/
├── index.ts                     # Main store combining all slices
├── slices/                      # Individual state slices
│   ├── auth-slice.ts            # Authentication state
│   ├── user-slice.ts            # User profile state
│   ├── ui-slice.ts              # UI state (modals, notifications)
│   ├── settings-slice.ts        # App settings state
│   └── theme-slice.ts           # Theme state (if not using next-themes)
├── middleware/                  # Zustand middleware
│   ├── persist.ts               # Persistence middleware
│   ├── devtools.ts              # Redux DevTools middleware
│   └── logger.ts                # Logging middleware
└── types/                       # Store type definitions
    ├── auth.types.ts            # Authentication types
    ├── user.types.ts            # User types
    └── store.types.ts           # Combined store types
```

### 8. Route Groups

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

### 6. Logging System (Winston)

```
lib/
└── logging/
    ├── index.ts                 # Main logger configuration
    ├── config/
    │   ├── winston.config.ts    # Winston configuration
    │   ├── formats.ts           # Custom log formats
    │   └── transports.ts        # Log transports (console, file, remote)
    ├── middleware/
    │   ├── request-logger.ts    # HTTP request logging middleware
    │   ├── error-logger.ts      # Error logging middleware
    │   └── performance-logger.ts # Performance logging middleware
    ├── utils/
    │   ├── logger-factory.ts    # Logger factory for different contexts
    │   ├── log-levels.ts        # Log level definitions
    │   └── sanitizer.ts         # Data sanitization for logs
    └── types/
        ├── logger.types.ts      # Logger type definitions
        └── log-entry.types.ts   # Log entry type definitions
```

### 7. Testing Setup

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

### 8. CI/CD & DevOps

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

## Winston Logging System Integration

### 1. Logging Architecture

A comprehensive logging system using Winston for both client and server-side logging with structured logging, multiple transports, and proper error handling.

### 2. Winston Configuration

#### Main Logger (`lib/logging/index.ts`)

```typescript
import winston from "winston";
import { createLoggerConfig } from "./config/winston.config";
import { createTransports } from "./config/transports";
import { createFormats } from "./config/formats";

// Create logger instance
export const logger = winston.createLogger(createLoggerConfig());

// Add transports based on environment
if (process.env.NODE_ENV === "development") {
  logger.add(createTransports.console());
} else {
  logger.add(createTransports.file());
  logger.add(createTransports.remote());
}

// Create child loggers for different contexts
export const createChildLogger = (context: string) => {
  return logger.child({ context });
};

// Export logger factory
export { createLogger } from "./utils/logger-factory";
```

#### Winston Configuration (`lib/logging/config/winston.config.ts`)

```typescript
import winston from "winston";
import { LogLevels } from "../utils/log-levels";

export const createLoggerConfig = (): winston.LoggerOptions => ({
  level: process.env.LOG_LEVEL || LogLevels.INFO,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  defaultMeta: {
    service: process.env.SERVICE_NAME || "neptune-webapp",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development",
  },
  exitOnError: false,
});
```

#### Log Formats (`lib/logging/config/formats.ts`)

```typescript
import winston from "winston";

export const createFormats = {
  // Development format with colors
  development: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, context, ...meta }) => {
      const contextStr = context ? `[${context}]` : "";
      const metaStr = Object.keys(meta).length
        ? JSON.stringify(meta, null, 2)
        : "";
      return `${timestamp} ${level} ${contextStr} ${message} ${metaStr}`;
    })
  ),

  // Production format (JSON)
  production: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),

  // Error format for error logs
  error: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
};
```

#### Log Transports (`lib/logging/config/transports.ts`)

```typescript
import winston from "winston";
import { createFormats } from "./formats";

export const createTransports = {
  // Console transport for development
  console: () =>
    new winston.transports.Console({
      format: createFormats.development,
      level: "debug",
    }),

  // File transport for all logs
  file: () =>
    new winston.transports.File({
      filename: "logs/combined.log",
      format: createFormats.production,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),

  // Error file transport
  errorFile: () =>
    new winston.transports.File({
      filename: "logs/error.log",
      format: createFormats.error,
      level: "error",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),

  // Remote transport (e.g., LogRocket, DataDog, etc.)
  remote: () =>
    new winston.transports.Http({
      host: process.env.LOG_HOST,
      port: process.env.LOG_PORT,
      path: "/logs",
      format: createFormats.production,
    }),
};
```

### 3. Logging Middleware

#### Request Logger (`lib/logging/middleware/request-logger.ts`)

```typescript
import { NextRequest, NextResponse } from "next/server";
import { logger } from "../index";
import { sanitizeRequest } from "../utils/sanitizer";

export const requestLogger = (req: NextRequest) => {
  const start = Date.now();

  const logData = {
    method: req.method,
    url: req.url,
    userAgent: req.headers.get("user-agent"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
    timestamp: new Date().toISOString(),
  };

  // Sanitize sensitive data
  const sanitizedData = sanitizeRequest(logData);

  logger.info("HTTP Request", {
    ...sanitizedData,
    type: "http_request",
  });

  return {
    start,
    logData: sanitizedData,
  };
};

export const responseLogger = (
  logData: any,
  start: number,
  response: NextResponse
) => {
  const duration = Date.now() - start;

  logger.info("HTTP Response", {
    ...logData,
    status: response.status,
    duration,
    type: "http_response",
  });
};
```

#### Error Logger (`lib/logging/middleware/error-logger.ts`)

```typescript
import { logger } from "../index";
import { LogEntry } from "../types/log-entry.types";

export const logError = (error: Error, context?: Record<string, any>) => {
  const logEntry: LogEntry = {
    level: "error",
    message: error.message,
    stack: error.stack,
    context: context || {},
    timestamp: new Date().toISOString(),
    type: "error",
  };

  logger.error(logEntry);
};

export const logApiError = (
  error: Error,
  req: any,
  context?: Record<string, any>
) => {
  logError(error, {
    ...context,
    url: req.url,
    method: req.method,
    userAgent: req.headers?.["user-agent"],
    type: "api_error",
  });
};
```

### 4. Logger Factory

#### Logger Factory (`lib/logging/utils/logger-factory.ts`)

```typescript
import { logger } from "../index";
import { LogContext } from "../types/logger.types";

export const createLogger = (context: LogContext) => {
  return {
    info: (message: string, meta?: any) =>
      logger.info(message, { ...meta, context }),

    warn: (message: string, meta?: any) =>
      logger.warn(message, { ...meta, context }),

    error: (message: string, error?: Error, meta?: any) =>
      logger.error(message, {
        ...meta,
        context,
        error: error?.message,
        stack: error?.stack,
      }),

    debug: (message: string, meta?: any) =>
      logger.debug(message, { ...meta, context }),
  };
};

// Pre-configured loggers for common contexts
export const apiLogger = createLogger("api");
export const authLogger = createLogger("auth");
export const dbLogger = createLogger("database");
export const trpcLogger = createLogger("trpc");
export const clientLogger = createLogger("client");
```

### 5. Client-Side Logging

#### Client Logger (`lib/logging/client-logger.ts`)

```typescript
"use client";

import { createLogger } from "./utils/logger-factory";

// Client-side logger that sends logs to server
export const clientLogger = {
  info: (message: string, meta?: any) => {
    if (typeof window !== "undefined") {
      // Send to server endpoint
      fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: "info",
          message,
          meta: { ...meta, client: true },
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        // Fallback to console if server logging fails
        console.info(message, meta);
      });
    }
  },

  error: (message: string, error?: Error, meta?: any) => {
    if (typeof window !== "undefined") {
      fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: "error",
          message,
          error: error?.message,
          stack: error?.stack,
          meta: { ...meta, client: true },
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        console.error(message, error, meta);
      });
    }
  },
};
```

### 6. API Route for Client Logs

#### Logs API Route (`app/api/logs/route.ts`)

```typescript
import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logging";

export async function POST(request: NextRequest) {
  try {
    const logData = await request.json();

    // Add client context
    const clientLogData = {
      ...logData,
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      type: "client_log",
    };

    // Log to server-side logger
    logger.info("Client Log", clientLogData);

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Failed to process client log", error as Error);
    return NextResponse.json(
      { error: "Failed to process log" },
      { status: 500 }
    );
  }
}
```

### 7. Type Definitions

#### Logger Types (`lib/logging/types/logger.types.ts`)

```typescript
export type LogLevel = "error" | "warn" | "info" | "debug";

export type LogContext =
  | "api"
  | "auth"
  | "database"
  | "trpc"
  | "client"
  | "middleware"
  | "component";

export interface LogMeta {
  context?: LogContext;
  userId?: string;
  requestId?: string;
  sessionId?: string;
  [key: string]: any;
}
```

#### Log Entry Types (`lib/logging/types/log-entry.types.ts`)

```typescript
import { LogLevel, LogMeta } from "./logger.types";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: LogMeta;
  stack?: string;
  error?: string;
  type?: string;
  [key: string]: any;
}
```

### 8. Integration with tRPC and Zustand

#### tRPC Logging Middleware

```typescript
import { trpcLogger } from "@/lib/logging/utils/logger-factory";

export const loggingMiddleware = async (opts: any) => {
  const start = Date.now();

  trpcLogger.info("tRPC Request", {
    procedure: opts.path,
    input: opts.input,
  });

  try {
    const result = await opts.next();
    const duration = Date.now() - start;

    trpcLogger.info("tRPC Response", {
      procedure: opts.path,
      duration,
      success: true,
    });

    return result;
  } catch (error) {
    const duration = Date.now() - start;

    trpcLogger.error("tRPC Error", error as Error, {
      procedure: opts.path,
      duration,
      success: false,
    });

    throw error;
  }
};
```

#### Zustand Logging Middleware

```typescript
import { logger } from "@/lib/logging";

export const zustandLogger =
  (config: any) => (set: any, get: any, api: any) => {
    return config(
      (...args: any[]) => {
        logger.debug("Zustand State Change", {
          action: args[0]?.type || "unknown",
          state: get(),
        });
        set(...args);
      },
      get,
      api
    );
  };
```

## Zustand State Management Integration

### 1. Store Architecture

Following the [Zustand documentation](https://zustand.docs.pmnd.rs/getting-started/introduction), we implement a modular store structure using the slices pattern for better organization and maintainability.

### 2. Store Implementation Examples

#### Auth Slice (`stores/slices/auth-slice.ts`)

```typescript
import { StateCreator } from "zustand";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  clearAuth: () => void;
}

export const createAuthSlice: StateCreator<AuthState> = (set, get) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: async (credentials) => {
    // Implementation for login logic
    set({ isAuthenticated: true });
  },

  logout: () => {
    set({ isAuthenticated: false, user: null, token: null });
  },

  setUser: (user) => set({ user }),

  clearAuth: () => set({ isAuthenticated: false, user: null, token: null }),
});
```

#### UI Slice (`stores/slices/ui-slice.ts`)

```typescript
import { StateCreator } from "zustand";

export interface UIState {
  sidebarOpen: boolean;
  modals: Record<string, boolean>;
  notifications: Notification[];
  toggleSidebar: () => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
}

export const createUISlice: StateCreator<UIState> = (set, get) => ({
  sidebarOpen: false,
  modals: {},
  notifications: [],

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  openModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),

  closeModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
    })),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: Date.now().toString() },
      ],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
});
```

#### Main Store (`stores/index.ts`)

```typescript
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice, AuthState } from "./slices/auth-slice";
import { createUISlice, UIState } from "./slices/ui-slice";
import { createUserSlice, UserState } from "./slices/user-slice";
import { createSettingsSlice, SettingsState } from "./slices/settings-slice";

export type StoreState = AuthState & UIState & UserState & SettingsState;

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createUISlice(...a),
        ...createUserSlice(...a),
        ...createSettingsSlice(...a),
      }),
      {
        name: "app-storage",
        partialize: (state) => ({
          // Only persist specific parts of the state
          user: state.user,
          settings: state.settings,
        }),
      }
    ),
    {
      name: "app-store",
    }
  )
);

// Selector hooks for better performance
export const useAuth = () =>
  useStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    login: state.login,
    logout: state.logout,
  }));

export const useUI = () =>
  useStore((state) => ({
    sidebarOpen: state.sidebarOpen,
    modals: state.modals,
    notifications: state.notifications,
    toggleSidebar: state.toggleSidebar,
    openModal: state.openModal,
    closeModal: state.closeModal,
  }));
```

### 3. Middleware Configuration

#### Persistence Middleware (`stores/middleware/persist.ts`)

```typescript
import { persist, createJSONStorage } from "zustand/middleware";
import { StateStorage } from "zustand/middleware";

const createNoopStorage = (): StateStorage => {
  return {
    getItem: (_name: string) => null,
    setItem: (_name: string, _value: string) => {},
    removeItem: (_name: string) => {},
  };
};

export const createPersistConfig = (
  name: string,
  partialize?: (state: any) => any
) => ({
  name,
  storage:
    typeof window !== "undefined"
      ? createJSONStorage(() => localStorage)
      : createNoopStorage(),
  partialize,
});
```

#### DevTools Middleware (`stores/middleware/devtools.ts`)

```typescript
import { devtools } from "zustand/middleware";

export const createDevtoolsConfig = (name: string) => ({
  name,
  enabled: process.env.NODE_ENV === "development",
});
```

### 4. Type Definitions

#### Store Types (`stores/types/store.types.ts`)

```typescript
import { StoreApi, UseBoundStore } from "zustand";

export type StoreSlice<T> = (
  set: StoreApi<T>["setState"],
  get: StoreApi<T>["getState"]
) => T;

export type StoreSelector<T, U> = (state: T) => U;

export interface StoreState {
  // Combined state interface
}
```

### 5. Usage in Components

#### Component Example

```typescript
import { useStore, useAuth, useUI } from "@/stores";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const { sidebarOpen, toggleSidebar } = useUI();

  return (
    <header>
      <button onClick={toggleSidebar}>
        {sidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      {isAuthenticated ? (
        <div>
          Welcome, {user?.name}!<button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}
```

### 6. Integration with tRPC

#### tRPC + Zustand Hook (`hooks/use-trpc-store.ts`)

```typescript
import { useStore } from "@/stores";
import { trpc } from "@/lib/trpc";

export function useTrpcWithStore() {
  const { setUser, setAuth } = useStore();

  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: (data) => {
      setUser(data.user);
      setAuth({ isAuthenticated: true, token: data.token });
    },
    onError: (error) => {
      // Handle error
    },
  });

  return { loginMutation };
}
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
2. **Phase 2**: Winston logging system (server/client logging, middleware)
3. **Phase 3**: Zustand state management (store setup, slices, middleware)
4. **Phase 4**: tRPC integration (server setup, client configuration)
5. **Phase 5**: Route groups and enhanced components
6. **Phase 6**: Production enhancements (error boundaries, loading states)
7. **Phase 7**: Testing and CI/CD setup

This structure provides a solid foundation for a production-ready Next.js application with modern tooling and best practices.
