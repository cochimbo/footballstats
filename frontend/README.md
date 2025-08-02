# Football Stats Frontend

This is the React frontend for the Football Stats application.

## Technology Stack

- **React 18** with TypeScript
- **Vite** (Build Tool & Dev Server)
- **Axios** (HTTP Client)
- **Jest** & **React Testing Library** (Testing)

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Running the Application

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Testing

Run all tests:
```bash
npm test
```

## Features

- **Login Screen**: Dummy login functionality that connects to the backend
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application

## API Integration

The frontend is configured to proxy API requests to the backend running on `http://localhost:8080`.

### Demo Credentials

- Username: `admin`
- Password: `password`