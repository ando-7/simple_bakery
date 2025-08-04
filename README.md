# Bakery Website

This is a full-stack web application for a bakery business. It consists of:

- **Frontend**: Built with React (JavaScript)
- **Backend**: Powered by Spring Boot (Java)

## 🌐 Features

- **Company Information**: Learn more about the bakery, its history, and values.
- **Products Display**: A catalog of baked goods available for browsing.
- **Open Positions**: A section listing current job openings at the bakery.
- **Contact Form**: Users can send inquiries or messages to the company.

## 🛠️ Technologies Used

### Frontend
- React
- React Router
- Axios (for API communication)
- Material UI 

### Backend
- Spring Boot Web – REST API support
- Spring Data JDBC – For interacting with the PostgreSQL database
- PostgreSQL – Relational database (runtime dependency)
- Spring Boot Validation – For input validation
- Maven – Build and dependency management
- Java 17

## 📦 Getting Started

### Prerequisites
- Node.js & npm
- Java 17+ (or your version)
- Maven
- PostgreSQL

### Running the Project

#### Backend
1. Navigate to the backend folder:
   ```bash
   cd server
2. Configure application.properties file to make sure the project uses your own cridentials for DB connection
3. Run the application

#### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd client
2. Install dependencies:
   yarn install
3. Start the development server:
   yarn start
