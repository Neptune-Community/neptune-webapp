/**
 * Authentication Validation Schemas
 *
 * This module defines Zod schemas for validating authentication-related data.
 * Provides type-safe validation for forms and API endpoints.
 *
 * Usage patterns:
 * - Form validation with react-hook-form
 * - API request validation
 * - Input sanitization
 * - Error message generation
 *
 * Example usage:
 * - const result = loginSchema.safeParse(formData);
 * - const validatedData = registerSchema.parse(input);
 * - const errors = getValidationErrors(result.error);
 */

import { z } from "zod";

// Email validation schema
const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email format")
  .max(255, "Email is too long");

// Password validation schema
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(128, "Password is too long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  );

// Name validation schema
const nameSchema = z
  .string()
  .min(1, "Name is required")
  .max(100, "Name is too long")
  .regex(
    /^[a-zA-Z\s'-]+$/,
    "Name can only contain letters, spaces, hyphens, and apostrophes",
  );

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

// Register schema
export const registerSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    name: nameSchema,
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Password reset request schema
export const passwordResetRequestSchema = z.object({
  email: emailSchema,
});

// Password reset schema
export const passwordResetSchema = z
  .object({
    token: z.string().min(1, "Reset token is required"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Email verification schema
export const emailVerificationSchema = z.object({
  token: z.string().min(1, "Verification token is required"),
  email: emailSchema,
});

// Change password schema
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Update profile schema
export const updateProfileSchema = z.object({
  name: nameSchema.optional(),
  bio: z.string().max(500, "Bio is too long").optional(),
  location: z.string().max(100, "Location is too long").optional(),
  website: z.string().url("Invalid website URL").optional(),
  company: z.string().max(100, "Company name is too long").optional(),
  jobTitle: z.string().max(100, "Job title is too long").optional(),
});

// OAuth callback schema
export const oauthCallbackSchema = z.object({
  code: z.string().min(1, "Authorization code is required"),
  state: z.string().optional(),
  error: z.string().optional(),
});

// Session validation schema
export const sessionSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
    image: z.string().url().optional(),
    role: z.enum(["user", "admin", "moderator", "guest"]),
  }),
  expires: z.string(),
});

// JWT token schema
export const jwtSchema = z.object({
  sub: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["user", "admin", "moderator", "guest"]),
  iat: z.number(),
  exp: z.number(),
  jti: z.string(),
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type PasswordResetRequestInput = z.infer<
  typeof passwordResetRequestSchema
>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type EmailVerificationInput = z.infer<typeof emailVerificationSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type OAuthCallbackInput = z.infer<typeof oauthCallbackSchema>;
export type SessionData = z.infer<typeof sessionSchema>;
export type JWTData = z.infer<typeof jwtSchema>;
