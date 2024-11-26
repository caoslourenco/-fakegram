import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoutes from './routes/authRoutes.js';
import photoRoutes from './routes/photoRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();


const app = express();

// Middlewares
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/photos', photoRoutes);

// Middleware de erros
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
