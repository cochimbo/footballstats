# Football Stats - Docker Setup

This project includes Docker Compose configuration for easy development setup.

## Prerequisites

- Docker
- Docker Compose

## Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd footballstats
   ```

2. **Build and start services**
   ```bash
   docker compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - Health Check: http://localhost:8080/api/health

## Services

### Backend
- **Technology**: Spring Boot 3.2.0 with Java 17
- **Port**: 8080
- **Database**: H2 in-memory database
- **Profile**: `docker` (automatically set in container)

### Frontend
- **Technology**: React 18 + TypeScript + Vite
- **Port**: 3000
- **Development Server**: Hot reload enabled
- **API Proxy**: Automatically configured to connect to backend service

## Docker Commands

```bash
# Start services in detached mode
docker compose up -d

# Build and start services
docker compose up --build

# Stop services
docker compose down

# View logs
docker compose logs

# View logs for specific service
docker compose logs frontend
docker compose logs backend

# Rebuild specific service
docker compose build frontend
docker compose build backend
```

## Development

The Docker setup is optimized for development:

- **Frontend**: Source code is mounted as volumes for hot reloading
- **Backend**: Uses pre-built JAR for faster container startup
- **Networking**: Services can communicate using service names (backend, frontend)

## Environment Variables

The frontend container uses the following environment variable:
- `BACKEND_URL`: Points to the backend service (set to `http://backend:8080`)

## Demo Credentials

- Username: `admin`
- Password: `password`