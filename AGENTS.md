# AGENTS.md

## Project Overview

This is a production-ready Next.js 15 boilerplate with shadcn/ui, tRPC, Zustand, and Winston logging. The project follows App Router conventions with comprehensive type safety, authentication, and modern development practices.

## Setup Commands

- Install dependencies: `pnpm install`
- Start development server: `pnpm dev`
- Build for production: `pnpm build`
- Start production server: `pnpm start`
- Run linting: `pnpm lint`
- Format code: `pnpm format`
- Run tests: `pnpm test`

## Code Style

- TypeScript strict mode enabled
- Double quotes for strings, semicolons required
- Use functional patterns where possible
- Prefer composition over inheritance
- Use proper TypeScript types (avoid `any`)
- Follow Next.js App Router conventions
- Use shadcn/ui components for UI elements
- Use shadcn/ui typography components for consistent text styling

## Project Structure

### Core Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - React components (ui/, forms/, layout/, features/, providers/)
- `lib/` - Utility functions, configurations, and integrations
- `hooks/` - Custom React hooks
- `stores/` - Zustand state management
- `types/` - TypeScript type definitions
- `server/` - tRPC server setup and procedures
- `middleware.ts` - Next.js middleware for auth and security

### File Naming Conventions

- Use kebab-case for directories: `user-profile/`, `api-routes/`
- Use camelCase for files: `userProfile.ts`, `apiRoutes.ts`
- Use PascalCase for React components: `UserProfile.tsx`
- Use lowercase for pages: `page.tsx`, `layout.tsx`, `loading.tsx`
- Use lowercase for Next.js special files: `error.tsx`, `not-found.tsx`, `global-error.tsx`
- Use parentheses for route groups: `(auth)`, `(dashboard)`, `(marketing)`

## Development Guidelines

### Adding New Features

1. **Components**: Place in `components/features/[feature-name]/`
2. **Pages**: Create in `app/[route]/page.tsx` or use route groups `app/(group)/[route]/page.tsx`
3. **API Routes**: Add to `app/api/[route]/route.ts`
4. **Types**: Define in `types/[domain].ts`
5. **Validations**: Add to `lib/validations/[domain].ts`
6. **Hooks**: Create in `hooks/use-[name].ts`
7. **Error Boundaries**: Create `error.tsx` files for route-specific error handling
8. **Loading States**: Create `loading.tsx` files for route-specific loading states
9. **Templates**: Create `template.tsx` files for route-specific animations/effects
10. **Typography**: Use shadcn/ui typography components for consistent text styling

### State Management (Zustand)

- Create slices in `stores/slices/[name]-slice.ts`
- Combine slices in `stores/index.ts`
- Use TypeScript interfaces for state types
- Implement middleware for persistence and devtools
- Export selector hooks for performance optimization

```typescript
// Example: stores/slices/user-slice.ts
export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const createUserSlice: StateCreator<UserState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
});
```

### tRPC Integration

**Server Setup:**

- Define procedures in `server/trpc/routers/[domain].ts`
- Use middleware for authentication and logging
- Implement proper error handling
- Use Zod schemas for input validation
- Export client hooks for React components

**Client Setup:**

- Use `lib/trpc/react.tsx` for React Query integration
- Import tRPC client in components: `import { trpc } from "@/lib/trpc/react"`
- Use hooks: `trpc.user.getProfile.useQuery()` for queries
- Use mutations: `trpc.user.updateProfile.useMutation()` for mutations

**File Structure:**

```
server/trpc/
├── context.ts               # tRPC context creation
├── trpc.ts                  # tRPC initialization
├── middleware/              # Authentication, rate limiting, logging
└── routers/                 # Domain-specific routers

lib/trpc/
├── client.ts                # tRPC client configuration
├── server.ts                # Server-side tRPC client
└── react.tsx                # React Query integration
```

**Usage Patterns:**

```typescript
// Server: server/trpc/routers/user.ts
export const userRouter = t.router({
  getProfile: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return await ctx.db.user.findUnique({ where: { id: input.id } });
    }),
});

// Client: components/UserProfile.tsx
const { data, isLoading, error } = trpc.user.getProfile.useQuery({
  id: userId,
});
const updateMutation = trpc.user.updateProfile.useMutation();
const utils = trpc.useUtils();
```

### Typography (shadcn/ui)

**Typography Components:**

The project uses shadcn/ui typography components for consistent text styling. All typography components are available in `components/ui/typography.tsx` and follow the patterns from [shadcn/ui typography documentation](https://ui.shadcn.com/docs/components/typography).

**Available Components:**

```typescript
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyList,
  TypographyOrderedList,
  TypographyListItem,
  TypographyTable,
  TypographyTableHeader,
  TypographyTableBody,
  TypographyTableRow,
  TypographyTableHead,
  TypographyTableCell,
  TypographyInlineCode,
  TypographyLink,
} from "@/components/ui/typography";
```

**Usage Patterns:**

**Headings:**

```typescript
// Main page titles
<TypographyH1>Welcome to Neptune</TypographyH1>

// Section headings
<TypographyH2>Getting Started</TypographyH2>

// Subsection headings
<TypographyH3>Features</TypographyH3>

// Minor headings
<TypographyH4>Quick Start</TypographyH4>
```

**Body Text:**

```typescript
// Regular paragraphs
<TypographyP>
  This is a regular paragraph with proper spacing and typography.
</TypographyP>

// Lead text (introductory)
<TypographyLead>
  A production-ready Next.js application with modern tools.
</TypographyLead>

// Large text
<TypographyLarge>Are you absolutely sure?</TypographyLarge>

// Small text
<TypographySmall>Email address</TypographySmall>

// Muted text
<TypographyMuted>Enter your email address.</TypographyMuted>
```

**Lists:**

```typescript
// Unordered lists
<TypographyList>
  <TypographyListItem>First item</TypographyListItem>
  <TypographyListItem>Second item</TypographyListItem>
</TypographyList>

// Ordered lists
<TypographyOrderedList>
  <TypographyListItem>Step one</TypographyListItem>
  <TypographyListItem>Step two</TypographyListItem>
</TypographyOrderedList>
```

**Code and Links:**

```typescript
// Inline code
<TypographyInlineCode>app/page.tsx</TypographyInlineCode>

// Styled links
<TypographyLink href="https://docs.neptune.cash/">Read Documentation</TypographyLink>
```

**Tables:**

```typescript
<TypographyTable>
  <TypographyTableHeader>
    <TypographyTableRow>
      <TypographyTableHead>Name</TypographyTableHead>
      <TypographyTableHead>Status</TypographyTableHead>
    </TypographyTableRow>
  </TypographyTableHeader>
  <TypographyTableBody>
    <TypographyTableRow>
      <TypographyTableCell>John Doe</TypographyTableCell>
      <TypographyTableCell>Active</TypographyTableCell>
    </TypographyTableRow>
  </TypographyTableBody>
</TypographyTable>
```

**Blockquotes:**

```typescript
<TypographyBlockquote>
  "This is an important quote that needs emphasis."
</TypographyBlockquote>
```

**When to Use Each Component:**

- **TypographyH1**: Main page titles, hero headings
- **TypographyH2**: Section headings, major content divisions
- **TypographyH3**: Subsection headings, card titles
- **TypographyH4**: Minor headings, form section titles
- **TypographyP**: Regular body text, descriptions
- **TypographyLead**: Introductory text, page descriptions
- **TypographyLarge**: Important text that needs emphasis
- **TypographySmall**: Labels, captions, fine print
- **TypographyMuted**: Secondary information, helper text
- **TypographyBlockquote**: Quoted content, testimonials
- **TypographyList/TypographyOrderedList**: Feature lists, steps, navigation
- **TypographyTable**: Data presentation, comparisons
- **TypographyInlineCode**: File names, code snippets, technical terms
- **TypographyLink**: External links, navigation

**Best Practices:**

1. **Hierarchy**: Use heading levels in order (H1 → H2 → H3 → H4)
2. **Consistency**: Always use typography components instead of raw HTML
3. **Accessibility**: Components include proper semantic HTML and ARIA attributes
4. **Spacing**: Components handle proper spacing with `[&:not(:first-child)]:mt-6`
5. **Theme Support**: All components work with light/dark themes
6. **Responsive**: Typography scales appropriately across devices

**Customization:**

```typescript
// Add custom classes while maintaining base styles
<TypographyH1 className="text-center text-blue-600">
  Custom Styled Heading
</TypographyH1>

// Override specific properties
<TypographyP className="text-lg font-bold">
  Custom paragraph styling
</TypographyP>
```

### Authentication & Security

- Use NextAuth.js for authentication
- Protect routes with middleware in `middleware.ts`
- Implement role-based access control
- Use JWT tokens for API authentication
- Sanitize all user inputs with Zod schemas

### Error Handling

**Error Boundaries:**

- Create error boundaries in `app/[route]/error.tsx` for route-specific errors
- Use global error boundary in `app/global-error.tsx` for unhandled errors
- Create component error boundaries in `components/error-boundary.tsx`
- Implement proper error logging with Winston
- Provide user-friendly error messages
- Use proper HTTP status codes

**File Structure:**

```
app/
├── global-error.tsx          # Global error boundary
├── not-found.tsx            # 404 error page
└── [route]/
    └── error.tsx            # Route-specific error boundary

components/
└── error-boundary.tsx       # Reusable error boundary component
```

**Usage Patterns:**

```typescript
// app/global-error.tsx
export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

// components/error-boundary.tsx
export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>;
}
```

### Logging (Winston)

**Server-Side Logging:**

- Use structured logging throughout the application
- Log all API requests and responses
- Include context in log messages
- Use appropriate log levels (error, warn, info, debug)
- Implement client-side logging for browser errors

**Client-Side Logging:**

- Send client errors to server via `/api/logs` endpoint
- Log user interactions and errors
- Include user context and session information

**File Structure:**

```
lib/logging/
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

**Usage Patterns:**

```typescript
// Server: lib/logging/utils/logger-factory.ts
export const apiLogger = createLogger("api");
apiLogger.info("API request", { method, url, userId });

// Client: components/ErrorBoundary.tsx
import { logError } from "@/lib/logging/client";
logError(error, { component: "UserProfile", userId });

// Middleware: lib/middleware/logging.ts
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger.info("Request", { method: req.method, url: req.url });
  next();
}
```

## Testing Instructions

### Testing Strategy

**Unit Tests (Jest + React Testing Library):**

- Test individual components, hooks, and utility functions
- Mock external dependencies and APIs
- Focus on component behavior and user interactions
- Maintain >80% code coverage

**Integration Tests:**

- Test component interactions and data flow
- Test API routes and middleware
- Test authentication and authorization flows

**End-to-End Tests (Playwright):**

- Test complete user journeys
- Test across multiple browsers and devices
- Test responsive design and accessibility
- Test performance and loading states

### Test Commands

```bash
# Unit Tests
pnpm test                 # Run all unit tests
pnpm test:watch          # Run tests in watch mode
pnpm test:coverage       # Generate coverage report
pnpm test:ci             # Run tests for CI (no watch)

# End-to-End Tests
pnpm test:e2e            # Run Playwright tests
pnpm test:e2e:ui         # Run with Playwright UI
pnpm test:e2e:headed     # Run with browser visible
pnpm test:e2e:debug      # Run in debug mode

# All Tests
pnpm test:all            # Run unit + e2e tests
```

### Test File Structure

```
__tests__/
├── components/          # Component unit tests
│   ├── layout/
│   └── ui/
├── hooks/              # Hook unit tests
├── lib/                # Utility function tests
├── setup/              # Test configuration
└── utils/              # Test utilities

tests/
└── e2e/                # End-to-end tests
    ├── homepage.spec.ts
    └── theme-toggle.spec.ts
```

### Writing Tests

**Component Tests:**

```typescript
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
```

**Hook Tests:**

```typescript
import { renderHook } from "@testing-library/react";
import { useTheme } from "@/hooks/use-theme";

describe("useTheme Hook", () => {
  it("returns theme information", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBeDefined();
  });
});
```

**E2E Tests:**

```typescript
import { test, expect } from "@playwright/test";

test("should load homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/My App/);
});
```

### Test Best Practices

1. **Test Behavior, Not Implementation**

   - Focus on what the user sees and does
   - Avoid testing internal state or implementation details

2. **Use Descriptive Test Names**

   - Test names should clearly describe what is being tested
   - Use "should" or "it" to describe expected behavior

3. **Arrange, Act, Assert Pattern**

   - Arrange: Set up test data and conditions
   - Act: Perform the action being tested
   - Assert: Verify the expected outcome

4. **Mock External Dependencies**

   - Mock API calls, external services, and browser APIs
   - Use Jest mocks for functions and modules
   - Use MSW for API mocking in integration tests

5. **Test Accessibility**

   - Use `@testing-library/jest-dom` matchers
   - Test keyboard navigation and screen reader compatibility
   - Verify ARIA attributes and semantic HTML

6. **Maintain Test Coverage**
   - Aim for >80% code coverage
   - Focus on critical paths and edge cases
   - Don't sacrifice quality for coverage numbers

### Testing Patterns and Usage

#### Component Testing Patterns

**Basic Component Test:**

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("should render with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Component with Props Testing:**

```typescript
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/card";

describe("Card Component", () => {
  it("should render with title and content", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
        <CardContent>Test Content</CardContent>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
```

**Component with Context/Providers:**

```typescript
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light">
      {ui}
    </ThemeProvider>
  );
};

describe("Header Component", () => {
  it("should render with theme provider", () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
```

#### Hook Testing Patterns

**Custom Hook Testing:**

```typescript
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "@/hooks/use-local-storage";

describe("useLocalStorage Hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return initial value", () => {
    const { result } = renderHook(() => useLocalStorage("test", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  it("should update value", () => {
    const { result } = renderHook(() => useLocalStorage("test", "initial"));

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(localStorage.getItem("test")).toBe('"updated"');
  });
});
```

**Hook with Dependencies:**

```typescript
import { renderHook } from "@testing-library/react";
import { useDebounce } from "@/hooks/use-debounce";

describe("useDebounce Hook", () => {
  it("should debounce value changes", async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 100),
      { initialProps: { value: "initial" } }
    );

    expect(result.current).toBe("initial");

    rerender({ value: "updated" });
    expect(result.current).toBe("initial"); // Still initial due to debounce

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(result.current).toBe("updated");
  });
});
```

#### API Testing Patterns

**tRPC Procedure Testing:**

```typescript
import { createTRPCMsw } from "msw-trpc";
import { appRouter } from "@/server/trpc/routers/_app";

const trpcMsw = createTRPCMsw(appRouter);

// Mock tRPC procedures
export const handlers = [
  trpcMsw.user.getProfile.query((req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        id: "1",
        name: "Test User",
        email: "test@example.com",
      })
    );
  }),

  trpcMsw.user.updateProfile.mutation((req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        success: true,
        user: req.body,
      })
    );
  }),
];
```

**API Route Testing:**

```typescript
import { createMocks } from "node-mocks-http";
import handler from "@/app/api/health/route";

describe("/api/health", () => {
  it("should return health status", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      status: "healthy",
      timestamp: expect.any(String),
    });
  });
});
```

#### Integration Testing Patterns

**Component with tRPC Integration:**

```typescript
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/lib/trpc/react";
import { UserProfile } from "@/components/user-profile";

// Mock tRPC client
const mockTrpcClient = {
  user: {
    getProfile: {
      useQuery: jest.fn(() => ({
        data: { id: "1", name: "Test User" },
        isLoading: false,
        error: null,
      })),
    },
  },
};

describe("UserProfile Component", () => {
  it("should display user profile data", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <UserProfile userId="1" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Test User")).toBeInTheDocument();
    });
  });
});
```

**Form Testing with Validation:**

```typescript
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "@/components/forms/login-form";

describe("LoginForm Component", () => {
  it("should validate required fields", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const submitButton = screen.getByRole("button", { name: /sign in/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("should submit form with valid data", async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/password/i), "password123");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
```

#### E2E Testing Patterns

**Page Navigation Testing:**

```typescript
import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate between pages", async ({ page }) => {
    await page.goto("/");

    // Click on navigation link
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1")).toContainText("About");
  });
});
```

**User Interaction Testing:**

```typescript
import { test, expect } from "@playwright/test";

test.describe("User Interactions", () => {
  test("should handle form submission", async ({ page }) => {
    await page.goto("/contact");

    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "john@example.com");
    await page.fill('textarea[name="message"]', "Test message");

    await page.click('button[type="submit"]');

    await expect(page.locator(".success-message")).toBeVisible();
  });
});
```

**Authentication Flow Testing:**

```typescript
import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("should login successfully", async ({ page }) => {
    await page.goto("/login");

    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL("/dashboard");
    await expect(page.locator(".user-menu")).toBeVisible();
  });
});
```

#### Error Boundary Testing

**Error Boundary Component Test:**

```typescript
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "@/components/error-boundary";

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return <div>No error</div>;
};

describe("ErrorBoundary", () => {
  it("should catch and display errors", () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render children when no error", () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
  });
});
```

#### Performance Testing Patterns

**Component Performance Testing:**

```typescript
import { render } from "@testing-library/react";
import { performance } from "perf_hooks";
import { HeavyComponent } from "@/components/heavy-component";

describe("HeavyComponent Performance", () => {
  it("should render within acceptable time", () => {
    const start = performance.now();
    render(<HeavyComponent data={largeDataSet} />);
    const end = performance.now();

    expect(end - start).toBeLessThan(100); // Should render in less than 100ms
  });
});
```

#### Test Utilities and Helpers

**Custom Test Utilities:**

```typescript
// __tests__/utils/test-helpers.ts
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  const queryClient = createTestQueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {ui}
      </ThemeProvider>
    </QueryClientProvider>,
    options
  );
};
```

**Mock Data Factories:**

```typescript
// __tests__/utils/factories.ts
export const createMockUser = (overrides = {}) => ({
  id: "1",
  email: "test@example.com",
  name: "Test User",
  role: "user",
  createdAt: new Date().toISOString(),
  ...overrides,
});

export const createMockPost = (overrides = {}) => ({
  id: "1",
  title: "Test Post",
  content: "This is a test post",
  published: true,
  authorId: "1",
  createdAt: new Date().toISOString(),
  ...overrides,
});
```

#### Testing Best Practices for AI Agents

1. **Always Test User Behavior**

   - Focus on what users can see and do
   - Test accessibility and keyboard navigation
   - Verify error states and loading states

2. **Use Descriptive Test Names**

   - Test names should explain the scenario
   - Include expected outcome in the name
   - Use consistent naming patterns

3. **Mock External Dependencies**

   - Mock API calls and external services
   - Use MSW for API mocking in integration tests
   - Mock browser APIs when needed

4. **Test Error Scenarios**

   - Test network failures
   - Test validation errors
   - Test error boundaries

5. **Maintain Test Data**

   - Use factories for consistent test data
   - Clean up test data between tests
   - Use realistic test data

6. **Performance Considerations**
   - Test component rendering performance
   - Test bundle size impact
   - Use performance testing for critical paths

## Production Patterns

### Error Boundaries

**Global Error Boundary (`app/global-error.tsx`):**

- Catches all unhandled errors in the application
- Must include `<html>` and `<body>` tags
- Provides user-friendly error messages and recovery options

**Route Error Boundaries (`app/error.tsx`):**

- Catches errors within specific route segments
- Can be placed at any route segment level
- Provides route-specific error handling

**Route Group Error Boundaries (`app/(auth)/error.tsx`):**

- Catches errors within specific route groups
- Provides group-specific error handling and recovery

### Loading States

**Global Loading (`app/loading.tsx`):**

- Provides consistent loading experience across the application
- Uses skeleton components for better UX

**Route Group Loading (`app/(auth)/loading.tsx`):**

- Provides group-specific loading states
- Can be customized for different sections

### Route Groups

**Authentication Group (`app/(auth)/`):**

- Organizes authentication-related routes
- Provides auth-specific layout and styling
- Routes: `/login`, `/register`, `/forgot-password`

**Dashboard Group (`app/(dashboard)/`):**

- Organizes dashboard-related routes
- Provides dashboard layout with sidebar navigation
- Routes: `/dashboard`, `/dashboard/analytics`, `/dashboard/settings`

### Code Splitting

**Dynamic Imports (`components/lazy-components.tsx`):**

- Implements code splitting for heavy components
- Reduces initial bundle size
- Provides loading states for lazy-loaded components

**Usage Patterns:**

```typescript
// Lazy load with loading state
export const LazyChart = dynamic(() => import("@/components/chart"), {
  loading: () => <Skeleton className="h-64 w-full" />,
  ssr: false,
});

// Lazy load with custom loading component
export const LazyDataTable = dynamic(() => import("@/components/data-table"), {
  loading: () => <CustomLoadingSpinner />,
});
```

### Metadata & SEO

**OpenGraph Images (`app/opengraph-image.tsx`):**

- Generates dynamic social media images
- Uses Next.js ImageResponse API
- Provides consistent branding across platforms

**Robots.txt (`app/robots.ts`):**

- Controls search engine crawling
- Disallows sensitive routes
- Points to sitemap

**Sitemap (`app/sitemap.ts`):**

- Generates XML sitemap for search engines
- Includes all public routes
- Sets priority and change frequency

**Web App Manifest (`app/manifest.ts`):**

- Enables PWA functionality
- Defines app metadata and icons
- Configures display and theme settings

### Templates

**Route Templates (`app/(dashboard)/template.tsx`):**

- Re-rendered on navigation (unlike layouts)
- Useful for animations and state resets
- Can track analytics and user interactions

## API Development

### Route Structure

- Use RESTful conventions for API routes
- Implement proper HTTP methods (GET, POST, PUT, DELETE)
- Use tRPC for type-safe API calls
- Implement rate limiting and validation
- Add comprehensive error handling

### Webhook Handling

- Verify webhook signatures
- Implement idempotency for webhook processing
- Log all webhook events
- Handle webhook failures gracefully
- Use proper HTTP status codes

## Database Integration

- Use Drizzle ORM for database operations
- Implement proper migrations
- Use transactions for complex operations
- Implement proper indexing
- Use connection pooling for production

## Performance Optimization

- Implement proper caching strategies
- Use React.memo for expensive components
- Implement code splitting with dynamic imports
- Optimize images with Next.js Image component
- Use proper loading states and skeletons

## Security Best Practices

- Implement Content Security Policy (CSP)
- Use HTTPS in production
- Sanitize all user inputs
- Implement proper CORS policies
- Use secure session management
- Implement rate limiting
- Log security events

## Environment Configuration

- Use environment variables for configuration
- Provide `.env.example` for setup
- Use different configs for development/production
- Never commit sensitive data to version control
- Validate environment variables on startup

## Deployment

- Use Vercel for deployment
- Configure proper environment variables
- Set up monitoring and alerting
- Implement proper CI/CD pipelines
- Use Docker for containerized deployment

## Code Quality

- Use Biome for linting and formatting
- Implement pre-commit hooks
- Use TypeScript strict mode
- Write comprehensive JSDoc comments
- Follow SOLID principles
- Implement proper error boundaries

## Common Patterns

### Form Handling

```typescript
// Use react-hook-form with Zod validation
const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
});

const onSubmit = async (data: FormData) => {
  try {
    await mutation.mutateAsync(data);
    toast.success("Form submitted successfully");
  } catch (error) {
    toast.error("Failed to submit form");
  }
};
```

### Data Fetching

```typescript
// Use tRPC for type-safe data fetching
const { data, isLoading, error } = trpc.user.getProfile.useQuery({
  id: userId,
});

// Use Zustand for client state
const { user, setUser } = useUserStore();

// Use tRPC utils for complex operations
const utils = trpc.useUtils();
const updateMutation = trpc.user.updateProfile.useMutation({
  onSuccess: () => utils.user.getProfile.invalidate(),
});
```

### Error Boundaries

```typescript
// Create error boundaries for different route groups
export default function Error({ error, reset }: ErrorProps) {
  // Log error to Winston
  logError(error, {
    component: "ErrorBoundary",
    route: window.location.pathname,
  });

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

// Component-level error boundary
export function ComponentErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallback={({ error, resetError }) => (
        <div>
          <p>Component error: {error.message}</p>
          <button onClick={resetError}>Retry</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
```

## Troubleshooting

### Common Issues

1. **TypeScript errors**: Check type definitions in `types/` directory
2. **Authentication issues**: Verify NextAuth.js configuration
3. **tRPC errors**: Check procedure definitions and context in `server/trpc/`
4. **Zustand state issues**: Verify slice implementations in `stores/slices/`
5. **Error boundary issues**: Check error.tsx files and component error boundaries
6. **Logging issues**: Verify Winston configuration in `lib/logging/`
7. **Build errors**: Check environment variables and dependencies

### Debug Commands

- Check TypeScript: `pnpm tsc --noEmit`
- Lint code: `pnpm lint`
- Format code: `pnpm format`
- Check dependencies: `pnpm audit`

## Contributing

- Follow the established code style
- Write tests for new features
- Update documentation as needed
- Use conventional commit messages
- Create pull requests for all changes
- Ensure all tests pass before merging

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [tRPC Documentation](https://trpc.io/docs)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)
- [Winston Logging](https://github.com/winstonjs/winston)
- [NextAuth.js Documentation](https://next-auth.js.org/)
