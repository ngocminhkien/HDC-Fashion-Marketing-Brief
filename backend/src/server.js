import app from './app.js';
import { config } from './config/env.js';

const server = app.listen(config.port, () => {
  console.log(`
  🌿 ========================================================
  🚀 HDC Fashion API Server running in [${config.env.toUpperCase()}] mode
  📡 Listening on: http://localhost:${config.port}
  🩺 Health check: http://localhost:${config.port}/health
  📖 API Endpoint: http://localhost:${config.port}${config.apiPrefix}
  ========================================================
  `);
});

// Graceful Shutdown handler
function handleGracefulShutdown(signal) {
  console.log(`\n[${signal}] Received. Closing HTTP server gracefully...`);
  server.close(() => {
    console.log('[SHUTDOWN] HTTP server closed. Process terminating safely.');
    process.exit(0);
  });

  // Force close after 10s if connections refuse to hang up
  setTimeout(() => {
    console.error('[SHUTDOWN ERROR] Forced exit after timeout.');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => handleGracefulShutdown('SIGTERM'));
process.on('SIGINT', () => handleGracefulShutdown('SIGINT'));

process.on('unhandledRejection', (err) => {
  console.error('[CRITICAL] Unhandled Promise Rejection:', err);
  // In production, log to APM / Sentry and exit gracefully
});

process.on('uncaughtException', (err) => {
  console.error('[CRITICAL] Uncaught Exception:', err);
  process.exit(1);
});

export default server;
