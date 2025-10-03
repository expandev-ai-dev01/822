import { config } from '../config';

export const setupTestEnvironment = () => {
  process.env.NODE_ENV = 'test';
  process.env.DB_HOST = 'localhost';
  process.env.DB_PORT = '1433';
  process.env.DB_USER = 'sa';
  process.env.DB_PASSWORD = 'test_password';
  process.env.DB_NAME = 'test_helloworlddb';
};

export const teardownTestEnvironment = () => {
  // Cleanup logic here
};
