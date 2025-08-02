# Football Stats Backend

This is the Spring Boot backend for the Football Stats application.

## Technology Stack

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring WebFlux** (Reactive Web)
- **Spring Data R2DBC** (Reactive Database Access)
- **Spring Security** (Authentication & Authorization)
- **H2 Database** (In-memory database for development)
- **Maven** (Build Tool)
- **JUnit 5** (Testing Framework)

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

### Running the Application

```bash
cd backend
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

### API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/auth/login` - Login endpoint (dummy implementation)

### Testing

Run all tests:
```bash
mvn test
```

### Database Console

When running in development mode, you can access the H2 database console at:
`http://localhost:8080/h2-console`

- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (empty)