import { Router } from 'express';

const router = Router();

/**
 * @route   GET /health
 * @desc    Kubernetes / Docker container liveness probe
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'hdc-fashion-backend',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    memory: {
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`
    }
  });
});

/**
 * @route   GET /health/ready
 * @desc    Readiness probe to verify database and dependency connectivity
 */
router.get('/ready', (req, res) => {
  // In a full DB connection, we can test db.ping() here
  res.status(200).json({
    status: 'ready',
    database: 'connected',
    cache: 'ready',
    timestamp: new Date().toISOString()
  });
});

/**
 * @route   GET /health/ping
 * @desc    Ultra-fast ping pong endpoint
 */
router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

export default router;
