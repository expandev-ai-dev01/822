/**
 * Global type definitions
 * This file contains shared types used across the application
 */

/**
 * @interface PaginationParams
 * @description Standard pagination parameters
 *
 * @property {number} [page] - Page number (default: 1)
 * @property {number} [pageSize] - Items per page (default: 50)
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/**
 * @interface SortParams
 * @description Standard sorting parameters
 *
 * @property {string} [sortBy] - Field to sort by
 * @property {'asc' | 'desc'} [sortOrder] - Sort direction
 */
export interface SortParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * @interface FilterParams
 * @description Base filter parameters
 *
 * @property {string} [search] - Search term
 * @property {boolean} [deleted] - Include deleted records
 */
export interface FilterParams {
  search?: string;
  deleted?: boolean;
}

/**
 * @interface BaseEntity
 * @description Base properties for all entities
 *
 * @property {number} id - Entity identifier
 * @property {number} idAccount - Account identifier
 * @property {Date} dateCreated - Creation timestamp
 * @property {Date} dateModified - Last modification timestamp
 * @property {boolean} deleted - Soft delete flag
 */
export interface BaseEntity {
  id: number;
  idAccount: number;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

/**
 * @interface Credential
 * @description User credential information
 *
 * @property {number} idAccount - Account identifier
 * @property {number} idUser - User identifier
 */
export interface Credential {
  idAccount: number;
  idUser: number;
}
