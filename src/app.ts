import express from 'express';
import path from 'path';
import { useExpressServer } from 'routing-controllers';
import { configDotenv } from 'xerots';

if (process.env.NODE_ENV === 'test') {
  configDotenv({ path: '.env.test' });
} else {
  configDotenv();
}

// Create an express app.
const app = express();

// Parse the application/json request body.
app.use(express.json());
// Parse the x-www-form-urlencoded request body.
app.use(express.urlencoded({ extended: true }));

useExpressServer(app, {
  // routePrefix: '/api',
  controllers: [path.join(__dirname, '/controllers/**/*.controller.*')],
  defaultErrorHandler: false,
  middlewares: [], // Global Middlewares
});

export default app;
