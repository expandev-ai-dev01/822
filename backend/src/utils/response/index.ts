/**
 * Response formatting utilities
 * Provides standardized response structures for API endpoints
 */

export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export interface ListResponse<T> {
  success: true;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

/**
 * @summary
 * Creates a standardized success response
 *
 * @function createSuccessResponse
 * @module response
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * const response = createSuccessResponse({ id: 1, name: 'Test' });
 */
export const createSuccessResponse = <T>(data: T, metadata?: any): SuccessResponse<T> => {
  return {
    success: true,
    data: data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
};

/**
 * @summary
 * Creates a standardized error response
 *
 * @function createErrorResponse
 * @module response
 *
 * @param {string} code - Error code
 * @param {string} message - Error message
 * @param {any} [details] - Optional error details
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * const response = createErrorResponse('VALIDATION_ERROR', 'Invalid input');
 */
export const createErrorResponse = (
  code: string,
  message: string,
  details?: any
): ErrorResponse => {
  return {
    success: false,
    error: {
      code: code,
      message: message,
      details: details,
    },
    timestamp: new Date().toISOString(),
  };
};

/**
 * @summary
 * Creates a standardized list response with pagination
 *
 * @function createListResponse
 * @module response
 *
 * @param {T[]} data - Array of data items
 * @param {number} page - Current page number
 * @param {number} pageSize - Items per page
 * @param {number} total - Total number of items
 *
 * @returns {ListResponse<T>} Formatted list response
 *
 * @example
 * const response = createListResponse(items, 1, 50, 150);
 */
export const createListResponse = <T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): ListResponse<T> => {
  return {
    success: true,
    data: data,
    metadata: {
      page: page,
      pageSize: pageSize,
      total: total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
    },
  };
};
