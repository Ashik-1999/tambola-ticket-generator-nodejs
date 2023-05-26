# **Tambola Ticket Generator** 

Welcome to Tambola Ticket Generator! This project focuses on the backend implementation of Tambola Ticket Generator (also known as Housie or Bingo) tickets. It leverages the power of Mongoose, Node.js, JWT, Express Validator, and more to provide a seamless ticket creation and viewing experience.

## Features

- User Registration and Login:
   - Users can create an account and securely log in to the application.
   - Passwords are hashed and stored securely to ensure data privacy.
   - JSON Web Tokens (JWT) are used for authentication and session management.
- Ticket Generation and Viewing:
   - Authenticated users can create Tambola tickets based on their preferences.
   - The application generates tickets that satisfy all the necessary conditions for a valid Tambola ticket.
   - Users can view their created tickets and manage them conveniently.
- Pagination for Ticket Retrieval:
   - Users can request tickets using a specific ID and receive the corresponding tickets.
   - The application implements pagination to efficiently manage large ticket collections.
   - Tickets are presented in an organized and user-friendly manner.
- Input Validation:
   - Express Validator is utilized to validate user inputs and ensure data integrity.
   - The application enforces strict validation rules to prevent incorrect or malicious data
   - MongoDB injection is prevented by implementing proper data sanitization 

## Technologies Used

- **Node.js**: The server-side JavaScript runtime environment.
- **Express.js**: A fast and minimalist web framework for Node.js.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js.
- **JWT**: JSON Web Tokens for secure authentication and session management.
- **Express Validator**: Middleware for validating and sanitizing user input.

## Installation

### 1. Clone the repository:
  ``` https://github.com/Ashik-1999/tambola-ticket-generator-nodejs.git ```
### 2. Navigate to the project directory:
   cd tambola-ticket-generator
### 3. Install the dependencies:
   npm install
### 4. Configure the environment variables:
   Rename the .env.example file to .env.
   Open the .env file and provide the necessary values for your environment (database connection, secret key, etc.).
### 5. Start the application
   npm start
### 6. Access the application in your browser:
   ``` http://localhost:3000 ```
   
## License
This project is licensed under the MIT License.

## Acknowledgements
- ***[Express.js](https://expressjs.com/)***
- ***[Mongoose](https://mongoosejs.com/)***
- ***[JSON Web Tokens](https://jwt.io/)***
- ***[Express Validator](https://www.npmjs.com/package/express-validator)***

## Contact
For any inquiries or suggestions, please reach out to [muhammedashikth@gmail.com](muhammedashikth@gmail.com).


### I hope you enjoy using Tambola Ticket Generator!
   
   



