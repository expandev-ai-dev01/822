# Sistema Gerar Hello World - Backend

## Description
Backend API for Hello World code generation system. This REST API provides endpoints for generating Hello World code snippets in multiple programming languages.

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: SQL Server
- **Validation**: Zod

## Project Structure
```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- SQL Server
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sistema-gerar-hello-world-backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## API Endpoints

The API follows RESTful conventions with versioning:

- Base URL: `http://localhost:3000/api/v1`
- Health Check: `GET /health`

### External Endpoints (Public)
- `/api/v1/external/*` - Public API endpoints

### Internal Endpoints (Authenticated)
- `/api/v1/internal/*` - Authenticated API endpoints

## Environment Variables

See `.env.example` for all available configuration options.

## Development Guidelines

- Follow TypeScript strict mode
- Use ESLint for code quality
- Write tests for all business logic
- Follow REST API best practices
- Document all API endpoints

## License

ISC