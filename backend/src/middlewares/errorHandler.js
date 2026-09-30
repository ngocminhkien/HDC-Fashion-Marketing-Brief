/**
 * Centralized Production Error Handling Middleware
 */
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);

  const response = {
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'INTERNAL_ERROR',
      status: statusCode
    }
  };

  // Only expose stack traces in development mode
  if (process.env.NODE_ENV === 'development') {
    response.error.stack = err.stack;
  }

  // Log critical 5xx server errors
  if (statusCode >= 500 && process.env.NODE_ENV !== 'test') {
    console.error(`[ERROR] ${req.method} ${req.originalUrl} - ${err.message}`, err.stack);
  }

  res.status(statusCode).json(response);
}

/**
 * 404 Route Not Found Handler
 */
export function notFoundHandler(req, res, next) {
  const error = new Error(`Endpoint not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  error.code = 'NOT_FOUND';
  next(error);
}
