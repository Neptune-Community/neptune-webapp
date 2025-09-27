/**
 * API Response Types
 *
 * This module defines TypeScript types for API responses and requests.
 * Provides consistent typing for all API endpoints.
 *
 * Usage patterns:
 * - API response handling
 * - Error response formatting
 * - Pagination and filtering
 * - Request/response validation
 *
 * Example usage:
 * - const response: ApiResponse<User> = await fetchUser();
 * - const error: ApiError = await handleApiError();
 * - const paginated: PaginatedResponse<Post> = await getPosts();
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  field?: string;
  stack?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
  total: number;
}

export interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortOptions {
  field: string;
  direction: "asc" | "desc";
}

export interface FilterOptions {
  field: string;
  operator:
    | "eq"
    | "ne"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "in"
    | "nin"
    | "like"
    | "ilike";
  value: any;
}

export interface QueryOptions {
  page?: number;
  limit?: number;
  sort?: SortOptions[];
  filters?: FilterOptions[];
  search?: string;
  include?: string[];
}

export interface ApiRequest<T = any> {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  headers?: Record<string, string>;
  body?: T;
  query?: Record<string, any>;
}

export interface ApiEndpoint {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  description: string;
  parameters?: ApiParameter[];
  responses: ApiResponseSchema[];
}

export interface ApiParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example?: any;
}

export interface ApiResponseSchema {
  status: number;
  description: string;
  schema: any;
  example?: any;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
  value?: any;
}

export interface BulkOperation<T> {
  items: T[];
  operation: "create" | "update" | "delete";
  results: BulkResult<T>[];
}

export interface BulkResult<T> {
  item: T;
  success: boolean;
  error?: ApiError;
}

export interface FileUploadResponse {
  id: string;
  filename: string;
  url: string;
  size: number;
  mimeType: string;
  uploadedAt: Date;
}

export interface ApiRateLimit {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}
