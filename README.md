# Employee CRUD Application

A simple CRUD application where users can see a list of Employees and add a new Employee to the system.

[Click here to View](https://semployees-crud-tawny.vercel.app)

## Features

- **Employees Listing Page**: View a list of employees, open employee details, and delete employees.
- **Add Employee Page**: Add a new employee to the system.
- **Employee Details Page**: View detailed information about an employee.

## Technologies Used

- **Front-End**: React.js
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB Atlas (not able connect cosmocloud due to some error that's why I used MongoDB Atlas)

## Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running or use Mongodb Atlas.

## Setup and Running the Application Locally

### Clone the Repository


```bash
git clone https://github.com/UmraoBisht/Employees-CRUD.git
cd Employees-CRUD
```


## Setting Up the Back-End
## Navigate to the employee-api directory:

```bash
cd backend
```

## Install the dependencies:
```bash
npm install
```

## Start the MongoDB server locally or use Mongodb Atlas if it's not already running:
Create a .env file in the backend directory and add your MongoDB URI connection string:
```bash
MONGODB_URI=<YOUR_MONGODB_URI>
```
## Run the back-end server:
```bash
node server.js
```
The server will be running on http://localhost:4000.


## Setting Up the Front-End
Navigate to the frontend directory:
```bash
cd frontend
```

## Install the dependencies:
```bash
npm install
```


## Start the front-end development server:
```bash
npm run dev
```
The application will be running on http://localhost:5173.

