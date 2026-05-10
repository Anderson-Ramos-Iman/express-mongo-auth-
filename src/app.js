import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check route
export default app;
