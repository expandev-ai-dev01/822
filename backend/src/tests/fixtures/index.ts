/**
 * Test data fixtures
 * Provides reusable test data for unit and integration tests
 */

import { Credential } from '@/types';

/**
 * @summary
 * Default test credential for authenticated operations
 */
export const testCredential: Credential = {
  idAccount: 1,
  idUser: 1,
};

/**
 * @summary
 * Alternative test credential for multi-account scenarios
 */
export const testCredentialAlt: Credential = {
  idAccount: 2,
  idUser: 2,
};

/**
 * @summary
 * Test pagination parameters
 */
export const testPagination = {
  page: 1,
  pageSize: 50,
};

/**
 * @summary
 * Test date values
 */
export const testDates = {
  past: new Date('2023-01-01'),
  present: new Date(),
  future: new Date('2025-12-31'),
};
