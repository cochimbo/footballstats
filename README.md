# Football Stats

A full-stack application to create an application to keep track of all football statistics and be up to date.

## Architecture

This project consists of:
- **Backend**: Spring Boot (Java 17) with reactive WebFlux
- **Frontend**: React 18 with TypeScript and Vite

## Project Structure

```
footballstats/
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/java/       # Java source code
│   │   └── test/java/       # Unit tests
│   ├── pom.xml              # Maven configuration
│   └── README.md
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   └── __tests__/       # Component tests
│   ├── package.json         # npm configuration
│   └── README.md
└── README.md               # This file
```

## Quick Start

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Node.js 16 or higher
- npm or yarn

### Running the Backend

```bash
cd backend
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:3000`

## Features

- **Reactive Backend**: Built with Spring WebFlux for high-performance reactive programming
- **Modern Frontend**: React 18 with TypeScript for type safety
- **Authentication**: Dummy login system ready for expansion
- **Database**: H2 in-memory database for development
- **Testing**: Unit tests for both backend and frontend
- **Security**: Spring Security configuration with CORS support

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/auth/login` - Login endpoint

## Demo Credentials

- Username: `admin`
- Password: `password`

## Development

### Backend Testing

```bash
cd backend
mvn test
```

### Frontend Testing

```bash
cd frontend
npm test
```

### Building for Production

Backend:
```bash
cd backend
mvn clean package
```

Frontend:
```bash
cd frontend
npm run build
```
