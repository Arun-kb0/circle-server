# Circle server api

Circle Server API is the backend for a real-time social platform, built with a microservices architecture to handle features like authentication, posts, chat, notifications, and live streaming efficiently and scalably.

## Repositories

This project’s client and server are maintained in separate repositories: 
- **Client**: circle-client  

## Tech Stack

### Frontend
- **Framework**: React  
- **Language**: TypeScript  
- **State Management**: Redux  
- **Styling**: Tailwind CSS  
- **Routing & Data Fetching**: React Router, Axios 

### Backend
- **Runtime & Framework**: Node.js, Express.js  
- **Language**: TypeScript  
- **ORM**: Mongoose  
- **Database**: MongoDB  
- **Architecture**: Microservices | each service in repository pattern

## Services

- **API Gateway**  
  Routes HTTP requests from the client to the appropriate gRPC services, handling authentication, load balancing, and protocol translation.

- **Auth Service**  
  Manages user registration, login, JWT issuance, token refresh, and password resets.

- **Chat Service**  
  Persists chat history in the database.

- **Feed Service**  
  Serves aggregated read operations for posts, comments, and likes.

- **Notification Service**  
  Publishes and delivers user notifications via RabbitMQ; maintains live WebSocket connections for instant push updates.

- **Payment Service**  
  Handles subscription payment processing, and invoicing through secure payment gateways.

- **Post Service**  
  Implements full CRUD (create, read, update, delete) for posts, comments, and likes.

- **User Service**  
  Manages user operations, interacting directly with the user collection.

- **RabbitMQ**  
  Central message broker that queues notifications, tasks, and events for asynchronous processing across services.

- **Redis Cache**  
  Caches online user sessions, active socket connections, and live-stream participant lists for high-throughput lookup.


## Installation

### Prerequisites

- **npm** or **yarn**

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Arun-kb0/circle-server.git
   cd circle-server
   ```

2. **Install Dependencies**
   Install all the required dependencies using `npm` or `yarn`:
   run inside service folders
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the server directory of the project by copying the provided `.env.example` template. This file will store your database connection and other configuration details.

4. **Start the Development Server**
   Launch the application in development mode:
   run inside root folder
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```
5. **Start the Production Server**
   Launch the application in production mode:
   run inside root folder
   ```bash
   docker-compose up --build
   ```

6. **Access the Application**
   Access the API server at `http://localhost:5001` to interact with the backend services.
   Access the notification service at `http://localhost:8086` 
   Open the client application at `http://localhost:5173` to explore the user interface and interact with the application.
