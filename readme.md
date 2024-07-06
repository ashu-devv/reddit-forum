# Reddit Forum

Reddit Forum is a web application built with GraphQL, Drizzle ORM, and Express.js, designed to mimic the functionality of a forum where users can create posts and interact with each other.

## Features

- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens).
- **Authorization:** Role-based access control with admin and user roles.
- **CRUD Operations:** Users can create, read, update, and delete posts.
- **Database:** MySQL database integrated with Drizzle ORM for efficient data management.
- **Scalability:** Implemented with microservices architecture for scalability.
- **Containerization:** Docker containers for microservices and Kubernetes for orchestration.

## Tech Stack

- **Backend:** Node.js, Express.js, GraphQL, Drizzle ORM, MySQL.
- **Deployment:** Docker, Kubernetes.
- **Authentication:** JSON Web Tokens (JWT).
- **Version Control:** Git, GitHub.
- **Other Tools:** dotenv for environment variables, bcryptjs for password hashing, cors for Cross-Origin Resource Sharing.

## Installation

### Step-by-Step Setup

1. **Clone the repository:**

   - Clone the repository from GitHub:
     ```bash
     git clone https://github.com/git-ashutosh571/reddit-forum.git
     cd reddit-forum
     ```

2. **Install dependencies:**

   - Install project dependencies using npm:
     ```bash
     npm install
     ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory and define the following variables:
     ```plaintext
     PORT=<port number of your choice>
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=<password>
     DB_NAME=reddit_forum
     JWT_SECRET=<your_jwt_secret>
     ```

     Replace `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` with your MySQL database credentials and `JWT_SECRET` with your preferred JWT secret key.

4. **Start the server:**

   - Start the server using npm:
     ```bash
     npm start
     ```

   The server will start running on `http://localhost:<PORT>`.

## API Endpoints

### Authentication

- **POST /api/auth/register:**
  Register a new user.

- **POST /api/auth/login:**
  User login and JWT token generation.

### Posts

- **GET /api/posts:**
  Retrieve all posts.

- **POST /api/posts:**
  Create a new post.

- **GET /api/posts/:id:**
  Retrieve a specific post by ID.

- **PUT /api/posts/:id:**
  Update a post.

- **DELETE /api/posts/:id:**
  Delete a post.

## Database Schema

### Users Table

| Field      | Type         | Description           |
|------------|--------------|-----------------------|
| id         | INT          | User ID (primary key) |
| username   | VARCHAR(50)  | User's username       |
| email      | VARCHAR(100) | User's email address  |
| password   | VARCHAR(255) | Hashed password       |
| role       | ENUM         | User role (admin/user)|

### Posts Table

| Field      | Type         | Description               |
|------------|--------------|---------------------------|
| id         | INT          | Post ID (primary key)     |
| title      | VARCHAR(255) | Post title                |
| content    | TEXT         | Post content              |
| author_id  | INT          | ID of the post author     |
| created_at | TIMESTAMP    | Timestamp of post creation|
| updated_at | TIMESTAMP    | Timestamp of last update  |

Thank you so much.If you have any questions or suggestions, feel free to reach out.