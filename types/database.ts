/**
 * Database Types
 *
 * This module defines TypeScript types for database schema and operations.
 * Provides type safety for database interactions and migrations.
 *
 * Usage patterns:
 * - Database schema definitions
 * - Query result typing
 * - Migration type safety
 * - Database connection management
 *
 * Example usage:
 * - const user: DatabaseUser = await db.user.findUnique();
 * - const result: QueryResult = await db.query(sql);
 * - const migration: Migration = await runMigration();
 */

export interface DatabaseUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified?: Date;
  lastLoginAt?: Date;
}

export interface DatabaseSession {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  userAgent?: string;
  ipAddress?: string;
}

export interface DatabasePost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  tags: string[];
  metadata?: Record<string, any>;
}

export interface DatabaseComment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface DatabaseLike {
  id: string;
  userId: string;
  postId?: string;
  commentId?: string;
  createdAt: Date;
}

export interface DatabaseFollow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface DatabaseMigration {
  id: string;
  name: string;
  executedAt: Date;
  checksum: string;
}

export interface DatabaseConnection {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  pool?: {
    min: number;
    max: number;
  };
}

export interface QueryResult<T = any> {
  rows: T[];
  rowCount: number;
  fields: Field[];
}

export interface Field {
  name: string;
  dataTypeID: number;
  dataTypeSize: number;
  dataTypeModifier: number;
  format: string;
}

export interface Transaction {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>>;
}

export interface DatabaseClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>>;
  transaction<T>(callback: (tx: Transaction) => Promise<T>): Promise<T>;
  migrate(): Promise<void>;
  seed(): Promise<void>;
}

export interface DatabaseConfig {
  connection: DatabaseConnection;
  migrations: {
    directory: string;
    table: string;
  };
  seeds: {
    directory: string;
  };
  logging: boolean;
}

export interface DatabaseIndex {
  name: string;
  table: string;
  columns: string[];
  unique: boolean;
  partial?: string;
}

export interface DatabaseConstraint {
  name: string;
  type: "primary" | "foreign" | "unique" | "check";
  table: string;
  columns: string[];
  references?: {
    table: string;
    columns: string[];
  };
  onDelete?: "cascade" | "restrict" | "set null";
  onUpdate?: "cascade" | "restrict" | "set null";
}
