# Sistema Gerar Hello World

## Description
Sistema para gerar hello world - A web application for generating Hello World code in multiple programming languages.

## Features
- Language Selection: Choose from various programming languages
- Code Generation: Automatically generate Hello World code
- Code Preview: View generated code with syntax highlighting
- Download Code: Download code in appropriate file format

## Tech Stack
- React 18.3.0
- TypeScript 5.5.0
- Vite 5.3.0
- TailwindCSS 3.4.0
- React Router DOM 6.23.0
- TanStack Query 5.35.0
- Axios 1.7.0
- Zustand 4.5.0
- Zod 3.23.0
- React Hook Form 7.51.0

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update environment variables in `.env` file:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── app/                    # Application configuration
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   ├── providers.tsx      # Global providers
│   └── router.tsx         # Routing configuration
├── pages/                 # Page components
│   ├── layouts/          # Layout components
│   ├── Home/             # Home page
│   └── NotFound/         # 404 page
├── domain/               # Business domains
├── core/                 # Shared resources
│   ├── components/       # Reusable components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Library configurations
│   ├── utils/           # Utility functions
│   ├── types/           # Type definitions
│   └── constants/       # Constants
└── assets/              # Static assets
    └── styles/          # Global styles
```

## API Integration

The frontend connects to the backend API at:
- Public endpoints: `/api/v1/external/...`
- Authenticated endpoints: `/api/v1/internal/...`

API client configuration is located in `src/core/lib/api.ts`

## Contributing

1. Follow the established folder structure
2. Use TypeScript for all new files
3. Follow naming conventions (PascalCase for components, camelCase for functions)
4. Add JSDoc comments for all public functions and components
5. Write tests for new features

## License

Private project - All rights reserved