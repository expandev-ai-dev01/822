// Global test setup and configuration

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.DB_HOST = 'localhost';
process.env.DB_PORT = '1433';
process.env.DB_USER = 'sa';
process.env.DB_PASSWORD = 'test_password';
process.env.DB_NAME = 'helloworlddb_test';

// Global test timeout
jest.setTimeout(30000);

// Mock console methods to reduce test output noise
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
