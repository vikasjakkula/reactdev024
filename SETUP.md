# Setup Instructions

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

### 1. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 2. Install Backend Dependencies
```bash
cd ../backend
npm install
```

## Running the Project

### Start Backend Server (Terminal 1)
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

### Start Frontend Dev Server (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

## Project Structure

### Frontend (`/frontend`)
- React 18 with Vite
- React Router DOM for routing
- Axios for HTTP requests
- Organized by topics:
  - `/src/examples/components` - Component examples
  - `/src/examples/state` - State management
  - `/src/examples/lifecycle` - Lifecycle & effects
  - `/src/examples/context` - Context API
  - `/src/examples/refs` - Refs & DOM
  - `/src/examples/routing` - Routing examples
  - `/src/examples/forms` - Form handling
  - `/src/examples/data-fetching` - API integration
  - `/src/examples/advanced` - Advanced patterns

### Backend (`/backend`)
- Express.js REST API
- CORS enabled for frontend
- Sample endpoints for users and posts
- Mock authentication

## Learning Path

1. **Components** - Start here to understand React basics
2. **State** - Learn state management with hooks
3. **Lifecycle** - Understand side effects and lifecycle
4. **Context** - Global state management
5. **Refs** - DOM manipulation
6. **Routing** - Navigation and routing
7. **Forms** - User input handling
8. **Data Fetching** - API integration
9. **Advanced** - Performance and optimization

## Notes

- All code is heavily commented for learning
- Each example is self-contained
- Code follows React best practices
- Suitable for both beginners and experienced developers

