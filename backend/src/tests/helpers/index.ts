/**
 * Test helper functions
 * Provides utility functions for testing
 */

import { Request, Response } from 'express';

/**
 * @summary
 * Creates a mock Express request object
 *
 * @function createMockRequest
 * @module testHelpers
 *
 * @param {Partial<Request>} [overrides] - Request properties to override
 *
 * @returns {Partial<Request>} Mock request object
 *
 * @example
 * const req = createMockRequest({ params: { id: '1' } });
 */
export const createMockRequest = (overrides?: Partial<Request>): Partial<Request> => {
  return {
    params: {},
    query: {},
    body: {},
    headers: {},
    ...overrides,
  };
};

/**
 * @summary
 * Creates a mock Express response object
 *
 * @function createMockResponse
 * @module testHelpers
 *
 * @returns {Partial<Response>} Mock response object
 *
 * @example
 * const res = createMockResponse();
 */
export const createMockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

/**
 * @summary
 * Waits for a specified number of milliseconds
 *
 * @function wait
 * @module testHelpers
 *
 * @param {number} ms - Milliseconds to wait
 *
 * @returns {Promise<void>}
 *
 * @example
 * await wait(1000); // Wait 1 second
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
