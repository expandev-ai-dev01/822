/**
 * @constants api
 * @summary API-related constants
 * @domain core
 * @category constants
 */

export const API_ENDPOINTS = {
  HEALTH: '/health',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const REQUEST_TIMEOUT = 30000;
