/**
 * User Types
 *
 * This module defines TypeScript types for user-related data structures.
 * Extends authentication types with additional user profile information.
 *
 * Usage patterns:
 * - User profile management
 * - User preferences and settings
 * - User activity tracking
 * - User relationship management
 *
 * Example usage:
 * - const profile: UserProfile = await getUserProfile(userId);
 * - const preferences: UserPreferences = await getUserPreferences();
 * - const activity: UserActivity[] = await getUserActivity();
 */

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  jobTitle?: string;
  avatar?: string;
  coverImage?: string;
  socialLinks: SocialLinks;
  preferences: UserPreferences;
  stats: UserStats;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  timezone: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
  privacy: PrivacySettings;
}

export interface PrivacySettings {
  profileVisibility: "public" | "private" | "friends";
  showEmail: boolean;
  showLastSeen: boolean;
  allowDirectMessages: boolean;
}

export interface UserStats {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  likesReceived: number;
  commentsCount: number;
  lastActiveAt: Date;
}

export interface UserActivity {
  id: string;
  userId: string;
  type: ActivityType;
  description: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export type ActivityType =
  | "login"
  | "logout"
  | "profile_update"
  | "post_created"
  | "post_liked"
  | "comment_added"
  | "follow_user"
  | "unfollow_user";

export interface UserSettings {
  notifications: NotificationSettings;
  security: SecuritySettings;
  account: AccountSettings;
}

export interface NotificationSettings {
  email: {
    newFollower: boolean;
    newPost: boolean;
    newComment: boolean;
    newLike: boolean;
    weeklyDigest: boolean;
  };
  push: {
    newFollower: boolean;
    newPost: boolean;
    newComment: boolean;
    newLike: boolean;
  };
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  sessionTimeout: number; // minutes
  allowedIPs: string[];
}

export interface AccountSettings {
  deleteAccount: boolean;
  exportData: boolean;
  changeEmail: boolean;
  changePassword: boolean;
}

export interface UserSearchResult {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  isFollowing?: boolean;
  mutualFollowers?: number;
}

export interface UserRelationship {
  id: string;
  followerId: string;
  followingId: string;
  status: "pending" | "accepted" | "blocked";
  createdAt: Date;
}
