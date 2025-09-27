/**
 * User Validation Schemas
 *
 * This module defines Zod schemas for validating user-related data.
 * Provides type-safe validation for user profiles, settings, and preferences.
 *
 * Usage patterns:
 * - User profile form validation
 * - Settings update validation
 * - User search and filtering
 * - Social links validation
 *
 * Example usage:
 * - const result = userProfileSchema.safeParse(profileData);
 * - const validatedSettings = userSettingsSchema.parse(settings);
 * - const searchQuery = userSearchSchema.parse(query);
 */

import { z } from "zod";

// Social links schema
export const socialLinksSchema = z.object({
  twitter: z.string().url("Invalid Twitter URL").optional().or(z.literal("")),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  github: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
});

// User preferences schema
export const userPreferencesSchema = z.object({
  theme: z.enum(["light", "dark", "system"]).default("system"),
  language: z
    .string()
    .min(2, "Language code is required")
    .max(5, "Invalid language code"),
  timezone: z.string().min(1, "Timezone is required"),
  emailNotifications: z.boolean().default(true),
  pushNotifications: z.boolean().default(true),
  marketingEmails: z.boolean().default(false),
});

// Privacy settings schema
export const privacySettingsSchema = z.object({
  profileVisibility: z.enum(["public", "private", "friends"]).default("public"),
  showEmail: z.boolean().default(false),
  showLastSeen: z.boolean().default(true),
  allowDirectMessages: z.boolean().default(true),
});

// User profile schema
export const userProfileSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  bio: z.string().max(500, "Bio is too long").optional(),
  location: z.string().max(100, "Location is too long").optional(),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  company: z.string().max(100, "Company name is too long").optional(),
  jobTitle: z.string().max(100, "Job title is too long").optional(),
  socialLinks: socialLinksSchema.optional(),
});

// User settings schema
export const userSettingsSchema = z.object({
  preferences: userPreferencesSchema,
  privacy: privacySettingsSchema,
});

// Notification settings schema
export const notificationSettingsSchema = z.object({
  email: z.object({
    newFollower: z.boolean().default(true),
    newPost: z.boolean().default(true),
    newComment: z.boolean().default(true),
    newLike: z.boolean().default(true),
    weeklyDigest: z.boolean().default(false),
  }),
  push: z.object({
    newFollower: z.boolean().default(true),
    newPost: z.boolean().default(true),
    newComment: z.boolean().default(true),
    newLike: z.boolean().default(true),
  }),
});

// Security settings schema
export const securitySettingsSchema = z.object({
  twoFactorEnabled: z.boolean().default(false),
  loginAlerts: z.boolean().default(true),
  sessionTimeout: z.number().min(5).max(1440).default(60), // 5 minutes to 24 hours
  allowedIPs: z
    .array(
      z
        .string()
        .regex(
          /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ),
    )
    .default([]),
});

// Account settings schema
export const accountSettingsSchema = z.object({
  deleteAccount: z.boolean().default(false),
  exportData: z.boolean().default(false),
  changeEmail: z.boolean().default(false),
  changePassword: z.boolean().default(false),
});

// User search schema
export const userSearchSchema = z.object({
  query: z
    .string()
    .min(1, "Search query is required")
    .max(100, "Search query is too long"),
  filters: z
    .object({
      role: z.enum(["user", "admin", "moderator", "guest"]).optional(),
      location: z.string().optional(),
      company: z.string().optional(),
    })
    .optional(),
  sort: z.enum(["name", "createdAt", "lastActive"]).default("name"),
  order: z.enum(["asc", "desc"]).default("asc"),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
});

// User relationship schema
export const userRelationshipSchema = z.object({
  action: z.enum(["follow", "unfollow", "block", "unblock"]),
  userId: z.string().uuid("Invalid user ID"),
});

// User activity schema
export const userActivitySchema = z.object({
  type: z.enum([
    "login",
    "logout",
    "profile_update",
    "post_created",
    "post_liked",
    "comment_added",
    "follow_user",
    "unfollow_user",
  ]),
  description: z
    .string()
    .min(1, "Description is required")
    .max(255, "Description is too long"),
  metadata: z.record(z.string(), z.any()).optional(),
});

// Avatar upload schema
export const avatarUploadSchema = z.object({
  file: z
    .instanceof(File, {
      message: "File is required",
    })
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB",
    )
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "File must be a JPEG, PNG, or WebP image",
    ),
});

// Cover image upload schema
export const coverImageUploadSchema = z.object({
  file: z
    .instanceof(File, {
      message: "File is required",
    })
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      "File size must be less than 10MB",
    )
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "File must be a JPEG, PNG, or WebP image",
    ),
});

// Type exports
export type SocialLinksInput = z.infer<typeof socialLinksSchema>;
export type UserPreferencesInput = z.infer<typeof userPreferencesSchema>;
export type PrivacySettingsInput = z.infer<typeof privacySettingsSchema>;
export type UserProfileInput = z.infer<typeof userProfileSchema>;
export type UserSettingsInput = z.infer<typeof userSettingsSchema>;
export type NotificationSettingsInput = z.infer<
  typeof notificationSettingsSchema
>;
export type SecuritySettingsInput = z.infer<typeof securitySettingsSchema>;
export type AccountSettingsInput = z.infer<typeof accountSettingsSchema>;
export type UserSearchInput = z.infer<typeof userSearchSchema>;
export type UserRelationshipInput = z.infer<typeof userRelationshipSchema>;
export type UserActivityInput = z.infer<typeof userActivitySchema>;
export type AvatarUploadInput = z.infer<typeof avatarUploadSchema>;
export type CoverImageUploadInput = z.infer<typeof coverImageUploadSchema>;
