/**
 * Database connection instance management
 * Provides singleton access to database connection pool
 */

import sql from 'mssql';
import { config } from '@/config';

let pool: sql.ConnectionPool | null = null;

/**
 * @summary
 * Gets or creates the database connection pool instance
 *
 * @function getDatabaseInstance
 * @module database
 *
 * @returns {Promise<sql.ConnectionPool>} Database connection pool
 *
 * @throws {Error} When connection fails
 *
 * @example
 * const pool = await getDatabaseInstance();
 * const request = new sql.Request(pool);
 */
export const getDatabaseInstance = async (): Promise<sql.ConnectionPool> => {
  if (!pool) {
    pool = await sql.connect({
      server: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      options: config.database.options,
    });
  }
  return pool;
};

/**
 * @summary
 * Closes the database connection pool
 *
 * @function closeDatabaseInstance
 * @module database
 *
 * @returns {Promise<void>}
 *
 * @example
 * await closeDatabaseInstance();
 */
export const closeDatabaseInstance = async (): Promise<void> => {
  if (pool) {
    await pool.close();
    pool = null;
  }
};
