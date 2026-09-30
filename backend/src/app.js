import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/env.js';
import apiV1Router from './routes/index.js';
import healthRoutes from './routes/healthRoutes.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

// 1. Security & Protection Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allows flexible static assets & frontend previews
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// 2. Cross-Origin Resource Sharing
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    
    // In dev / test, allow all or matching list
    if (config.isTest || !config.isProduction) return callback(null, true);

    if (config.corsOrigin.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// 3. Body Parsing Middleware
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// 4. Request Logging (disabled during automated unit tests)
if (!config.isTest) {
  app.use(morgan(config.isProduction ? 'combined' : 'dev'));
}

// 5. Root Liveness Probe (Direct /health for AWS ALB / K8s / Render / Railway)
app.use('/health', healthRoutes);

// 6. Mount Versioned API Routes (/api/v1)
app.use(config.apiPrefix, apiV1Router);

// Root Welcome Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: '🌿 HDC Fashion E-Commerce & B2B API Server',
    status: 'online',
    version: '1.0.0',
    docs: `${config.apiPrefix}/`,
    health: '/health'
  });
});

// 7. Route 404 & Centralized Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
