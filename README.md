# Book Management App

This is a simple Node.js application for managing books. You can add, retrieve, update, and delete books using the provided API endpoints.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add a new book with details such as name, author, summary, etc.
- Retrieve a list of books with optional filtering by name, reading status, and finished status.
- Retrieve book details by book ID.
- Update book details by book ID.
- Delete a book by book ID.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/book-management-app.git

    Install the dependencies:

    bash

cd book-management-app
npm install

Start the application:

bash

    npm start

    The application will be accessible at http://localhost:3000.

Usage

    After starting the application, you can interact with it using the API endpoints described below.
    You can use tools like Postman or curl to make HTTP requests to the API.

API Endpoints

    Add a Book

        Endpoint: POST /books

        Payload: JSON object with book details

        Example:

        json

    {
      "name": "Sample Book",
      "author": "John Doe",
      "summary": "This is a sample book.",
      "publisher": "Sample Publisher",
      "pageCount": 200,
      "readPage": 100,
      "reading": true
    }

Get All Books

    Endpoint: GET /books
    Query Parameters:
        name (optional): Filter books by name.
        reading (optional): Filter books by reading status (0 for not reading, 1 for reading).
        finished (optional): Filter books by finished status (0 for not finished, 1 for finished).

Get Book by ID

    Endpoint: GET /books/{bookId}
    Example: GET /books/12345

Update Book by ID

    Endpoint: PUT /books/{bookId}

    Payload: JSON object with updated book details

    Example:

    json

        {
          "name": "Updated Book Title",
          "author": "Jane Smith",
          "summary": "This is an updated book summary.",
          "publisher": "Updated Publisher",
          "pageCount": 250,
          "readPage": 150,
          "reading": false
        }

    Delete Book by ID
        Endpoint: DELETE /books/{bookId}
        Example: DELETE /books/12345

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.
