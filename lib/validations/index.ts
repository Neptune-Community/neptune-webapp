/**
 * Validation Schemas Index
 *
 * This module exports all validation schemas for centralized access.
 * Provides a single import point for all validation logic.
 *
 * Usage patterns:
 * - Import all schemas: import * as Schemas from "@/lib/validations";
 * - Import specific schemas: import { loginSchema, userProfileSchema } from "@/lib/validations";
 * - Re-export for convenience
 *
 * Example usage:
 * - import { loginSchema, registerSchema } from "@/lib/validations";
 * - import { userProfileSchema, userSettingsSchema } from "@/lib/validations";
 * - import { uuidSchema, slugSchema } from "@/lib/validations";
 */

// Common schemas
export {
  type Base64,
  base64Schema,
  type Color,
  type CountryCode,
  type Currency,
  colorSchema,
  countryCodeSchema,
  currencySchema,
  type DateInput,
  dateSchema,
  type FileUploadInput,
  type FilterInput,
  fileUploadSchema,
  filterSchema,
  type ImageUploadInput,
  type IPAddress,
  imageUploadSchema,
  ipAddressSchema,
  type JSONString,
  jsonSchema,
  type LanguageCode,
  languageCodeSchema,
  type MACAddress,
  macAddressSchema,
  type PaginationInput,
  type Percentage,
  type Phone,
  paginationSchema,
  percentageSchema,
  phoneSchema,
  type Rating,
  ratingSchema,
  type SearchInput,
  type Slug,
  type SortInput,
  searchSchema,
  slugSchema,
  sortSchema,
  type Tag,
  type Tags,
  type Timezone,
  tagSchema,
  tagsSchema,
  timezoneSchema,
  type URL,
  type UUID,
  urlSchema,
  uuidSchema,
} from "./common";
// User schemas
export {
  type AccountSettingsInput,
  type AvatarUploadInput,
  accountSettingsSchema,
  avatarUploadSchema,
  type CoverImageUploadInput,
  coverImageUploadSchema,
  type NotificationSettingsInput,
  notificationSettingsSchema,
  type PrivacySettingsInput,
  privacySettingsSchema,
  type SecuritySettingsInput,
  type SocialLinksInput,
  securitySettingsSchema,
  socialLinksSchema,
  type UserActivityInput,
  type UserPreferencesInput,
  type UserProfileInput,
  type UserRelationshipInput,
  type UserSearchInput,
  type UserSettingsInput,
  userActivitySchema,
  userPreferencesSchema,
  userProfileSchema,
  userRelationshipSchema,
  userSearchSchema,
  userSettingsSchema,
} from "./user";

// Validation utilities
export function getValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  error.errors.forEach((err) => {
    const path = err.path.join(".");
    errors[path] = err.message;
  });

  return errors;
}

export function validateSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
} {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    errors: getValidationErrors(result.error),
  };
}

// Common validation patterns
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  phone: /^\+?[1-9]\d{1,14}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,
  slug: /^[a-z0-9-]+$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  color: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
  base64: /^[A-Za-z0-9+/]*={0,2}$/,
} as const;
