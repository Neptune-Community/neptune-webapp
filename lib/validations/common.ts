/**
 * Common Validation Schemas
 *
 * This module defines reusable Zod schemas for common validation patterns.
 * Provides consistent validation across the application.
 *
 * Usage patterns:
 * - Reusable validation schemas
 * - Common field validation
 * - Shared validation logic
 * - Consistent error messages
 *
 * Example usage:
 * - const id = uuidSchema.parse(input);
 * - const slug = slugSchema.parse(input);
 * - const date = dateSchema.parse(input);
 */

import { z } from "zod";

// UUID validation schema
export const uuidSchema = z.string().uuid("Invalid UUID format");

// Slug validation schema
export const slugSchema = z
  .string()
  .min(1, "Slug is required")
  .max(100, "Slug is too long")
  .regex(
    /^[a-z0-9-]+$/,
    "Slug can only contain lowercase letters, numbers, and hyphens",
  )
  .refine((slug) => !slug.startsWith("-") && !slug.endsWith("-"), {
    message: "Slug cannot start or end with a hyphen",
  });

// URL validation schema
export const urlSchema = z
  .string()
  .url("Invalid URL format")
  .max(2048, "URL is too long");

// Phone number validation schema
export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
  .optional();

// Date validation schema
export const dateSchema = z
  .string()
  .datetime("Invalid date format")
  .or(z.date())
  .transform((val) => (typeof val === "string" ? new Date(val) : val));

// Pagination schema
export const paginationSchema = z.object({
  page: z.number().min(1, "Page must be at least 1").default(1),
  limit: z
    .number()
    .min(1, "Limit must be at least 1")
    .max(100, "Limit cannot exceed 100")
    .default(20),
});

// Sort schema
export const sortSchema = z.object({
  field: z.string().min(1, "Sort field is required"),
  direction: z.enum(["asc", "desc"]).default("asc"),
});

// Filter schema
export const filterSchema = z.object({
  field: z.string().min(1, "Filter field is required"),
  operator: z.enum([
    "eq",
    "ne",
    "gt",
    "gte",
    "lt",
    "lte",
    "in",
    "nin",
    "like",
    "ilike",
  ]),
  value: z.any(),
});

// Search schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, "Search query is required")
    .max(100, "Search query is too long"),
  fields: z.array(z.string()).optional(),
});

// File upload schema
export const fileUploadSchema = z.object({
  file: z.instanceof(File, "File is required"),
  maxSize: z
    .number()
    .optional()
    .default(5 * 1024 * 1024), // 5MB default
  allowedTypes: z.array(z.string()).optional(),
});

// Image upload schema
export const imageUploadSchema = z.object({
  file: z
    .instanceof(File, "File is required")
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      "File size must be less than 10MB",
    )
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
          file.type,
        ),
      "File must be an image (JPEG, PNG, WebP, or GIF)",
    ),
});

// Color validation schema (hex color)
export const colorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid color format");

// Tag validation schema
export const tagSchema = z
  .string()
  .min(1, "Tag is required")
  .max(50, "Tag is too long")
  .regex(
    /^[a-zA-Z0-9\s-]+$/,
    "Tag can only contain letters, numbers, spaces, and hyphens",
  );

// Tags array schema
export const tagsSchema = z
  .array(tagSchema)
  .max(10, "Cannot have more than 10 tags");

// Rating schema (1-5 stars)
export const ratingSchema = z
  .number()
  .min(1, "Rating must be at least 1")
  .max(5, "Rating cannot exceed 5")
  .int("Rating must be a whole number");

// Percentage schema (0-100)
export const percentageSchema = z
  .number()
  .min(0, "Percentage cannot be negative")
  .max(100, "Percentage cannot exceed 100");

// Currency schema
export const currencySchema = z
  .number()
  .min(0, "Amount cannot be negative")
  .multipleOf(0.01, "Amount must have at most 2 decimal places");

// Timezone schema
export const timezoneSchema = z
  .string()
  .min(1, "Timezone is required")
  .refine((tz) => {
    try {
      Intl.DateTimeFormat(undefined, { timeZone: tz });
      return true;
    } catch {
      return false;
    }
  }, "Invalid timezone");

// Language code schema (ISO 639-1)
export const languageCodeSchema = z
  .string()
  .length(2, "Language code must be 2 characters")
  .regex(/^[a-z]{2}$/, "Invalid language code format");

// Country code schema (ISO 3166-1 alpha-2)
export const countryCodeSchema = z
  .string()
  .length(2, "Country code must be 2 characters")
  .regex(/^[A-Z]{2}$/, "Invalid country code format");

// IP address schema
export const ipAddressSchema = z
  .string()
  .regex(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    "Invalid IP address format",
  );

// MAC address schema
export const macAddressSchema = z
  .string()
  .regex(
    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    "Invalid MAC address format",
  );

// Base64 schema
export const base64Schema = z
  .string()
  .regex(/^[A-Za-z0-9+/]*={0,2}$/, "Invalid base64 format");

// JSON schema
export const jsonSchema = z.string().refine((str) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}, "Invalid JSON format");

// Type exports
export type UUID = z.infer<typeof uuidSchema>;
export type Slug = z.infer<typeof slugSchema>;
export type URL = z.infer<typeof urlSchema>;
export type Phone = z.infer<typeof phoneSchema>;
export type DateInput = z.infer<typeof dateSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
export type SortInput = z.infer<typeof sortSchema>;
export type FilterInput = z.infer<typeof filterSchema>;
export type SearchInput = z.infer<typeof searchSchema>;
export type FileUploadInput = z.infer<typeof fileUploadSchema>;
export type ImageUploadInput = z.infer<typeof imageUploadSchema>;
export type Color = z.infer<typeof colorSchema>;
export type Tag = z.infer<typeof tagSchema>;
export type Tags = z.infer<typeof tagsSchema>;
export type Rating = z.infer<typeof ratingSchema>;
export type Percentage = z.infer<typeof percentageSchema>;
export type Currency = z.infer<typeof currencySchema>;
export type Timezone = z.infer<typeof timezoneSchema>;
export type LanguageCode = z.infer<typeof languageCodeSchema>;
export type CountryCode = z.infer<typeof countryCodeSchema>;
export type IPAddress = z.infer<typeof ipAddressSchema>;
export type MACAddress = z.infer<typeof macAddressSchema>;
export type Base64 = z.infer<typeof base64Schema>;
export type JSONString = z.infer<typeof jsonSchema>;
