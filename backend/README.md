# Sistema Gerar Hello World - Backend

## Description
Backend API for Hello World code generation system. This REST API provides endpoints for generating, viewing, and downloading Hello World code in multiple programming languages.

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Microsoft SQL Server
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
│   ├── crud/               # CRUD operations middleware
│   ├── error/              # Error handling
│   └── notFound/           # 404 handler
├── services/               # Business logic
├── utils/                  # Utility functions
│   ├── database/           # Database utilities
│   └── zodValidation/      # Validation schemas
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Microsoft SQL Server

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
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## API Endpoints

The API is versioned and follows RESTful conventions:

- Base URL: `http://localhost:3000/api/v1`
- Health Check: `http://localhost:3000/health`

### External Endpoints (Public)
- `/api/v1/external/*` - Public endpoints

### Internal Endpoints (Authenticated)
- `/api/v1/internal/*` - Authenticated endpoints

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `PORT` - Server port (default: 3000)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

## Development Guidelines

### Code Style
- Follow TypeScript strict mode
- Use 2 spaces for indentation
- Maximum line length: 120 characters
- Use single quotes for strings
- Always use semicolons

### Naming Conventions
- Files: camelCase (e.g., `userService.ts`)
- Classes: PascalCase (e.g., `CrudController`)
- Functions: camelCase (e.g., `getUserById`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`)

## License
ISC