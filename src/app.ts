import express from 'express';

// Create an express app.
const app = express();

// Parse the application/json request body.
app.use(express.json());
// Parse the x-www-form-urlencoded request body.
app.use(express.urlencoded({ extended: true }));

export default app;
