# Full-Stack Job Portal Website

A comprehensive full-stack application for job seekers and recruiters. This platform allows users to search for jobs, apply, and manage job postings.

## Features

- User authentication (Sign Up, Log In)
- Job postings with details
- Search and filter jobs
- Apply for jobs directly from the portal
- Admin panel for managing jobs and users
- Responsive design with Bootstrap

## Technologies Used

### Frontend
- Angular
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)

## Installation and Setup with Makefile

To simplify installation and setup, use the following `Makefile`. Copy the commands and save them in a file named `Makefile`. Then, run the setup steps.

### Makefile

```make
# Install dependencies for the backend and frontend
install:
	@echo "Installing backend dependencies..."
	cd Backend && npm install
	@echo "Installing frontend dependencies..."
	cd Frontend && npm install

# Set up the environment variables (customize .env file before running)
setup:
	@echo "Setting up environment variables..."
	@echo "PORT=5000\nMONGO_URI=your_mongodb_connection_string\nJWT_SECRET=your_jwt_secret" > Backend/.env

# Run the backend and frontend servers concurrently
run:
	@echo "Starting backend server..."
	cd Backend && npm start &
	@echo "Starting frontend server..."
	cd Frontend && ng serve

# Access instructions
access:
	@echo "Access the application:"
	@echo "- Frontend: http://localhost:4200"
	@echo "- Backend: http://localhost:3000"
