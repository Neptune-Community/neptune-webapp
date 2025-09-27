module.exports = {
  ci: {
    collect: {
      // Mirror Vercel's build settings
      startServerCommand: "pnpm start",
      startServerReadyPattern: "ready on",
      startServerReadyTimeout: 30000,
      url: [
        "http://localhost:3000",
        "http://localhost:3000/about",
        "http://localhost:3000/roadmap",
        "http://localhost:3000/exchanges",
      ],
      numberOfRuns: 3, // Mirror Vercel's multiple runs
    },
    assert: {
      // Performance budgets (mirror Vercel's expectations)
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["warn", { minScore: 0.8 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 300 }],
      },
    },
    upload: {
      // Upload to GitHub PR comments (mirror Vercel's preview comments)
      target: "temporary-public-storage",
    },
  },
};
