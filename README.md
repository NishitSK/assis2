# Inventory Management System - Backend

This is the backend API for the Inventory Management System project.  
It provides CRUD operations to manage inventory items through a RESTful API.  
Built with Node.js, Express.js, and MongoDB.

---

## Features

- Modular MVC architecture with controllers, models, and routes  
- Environment configuration via `.env` file  
- Seed script to populate initial data  
- Basic error handling  
- Supports create, read, update, delete operations on inventory items  

---

## Project Structure

```
.
├── controllers/       # Request handlers for API endpoints
├── models/            # MongoDB schemas and models
├── routes/            # API route definitions
├── seed.js            # Script to seed database with initial data
├── server.js          # Entry point to start the Express server
├── .env               # Environment variables (not committed to git)
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Auto-generated dependency lock file
```

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)  
- MongoDB (local or cloud instance)  

### Installation

1. Clone the repo

```bash
git clone https://github.com/YourUsername/YourRepoName.git
cd YourRepoName
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```

Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

### Seed the database (optional)

Run the seed script to insert initial sample data:

```bash
node seed.js
```

### Run the server

Start the backend server:

```bash
npm start
```

By default, the server runs on `http://localhost:5000`.

---

## API Endpoints

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | `/api/items`      | Get all inventory items        |
| GET    | `/api/items/:id`  | Get a single item by ID        |
| POST   | `/api/items`      | Create a new inventory item    |
| PUT    | `/api/items/:id`  | Update an existing item by ID  |
| DELETE | `/api/items/:id`  | Delete an item by ID           |

---

## Example Request

### Create new item

```http
POST /api/items
Content-Type: application/json

{
  "name": "Chocolate Bar",
  "quantity": 50,
  "price": 2.99
}
```

### Response

```json
{
  "_id": "607d1a1e1c4ae12f48f8e1a9",
  "name": "Chocolate Bar",
  "quantity": 50,
  "price": 2.99,
  "createdAt": "2024-05-21T10:15:30.000Z",
  "updatedAt": "2024-05-21T10:15:30.000Z"
}
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.
