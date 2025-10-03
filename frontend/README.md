# Sistema Gerar Hello World

A React application for generating Hello World code in multiple programming languages.

## Features

- Language Selection: Choose from various programming languages
- Code Generation: Automatically generate Hello World code
- Code Visualization: View generated code with syntax highlighting
- Code Download: Download generated code in appropriate file format

## Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.9
- **Styling**: TailwindCSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **State Management**: Zustand 5.0.8
- **Data Fetching**: TanStack Query 5.90.2
- **Forms**: React Hook Form 7.63.0 + Zod 4.1.11

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app/              # Application configuration and setup
├── pages/            # Page components for routing
├── domain/           # Business domain modules
├── core/             # Shared components and utilities
└── assets/           # Static assets and styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend connects to the backend API at:
- Development: `http://localhost:3000`
- API Base: `/api/v1`

## License

Private - All rights reserved