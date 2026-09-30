import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import productRoutes from './productRoutes.js';
import b2bRoutes from './b2bRoutes.js';
import orderRoutes from './orderRoutes.js';

const apiV1Router = Router();

// Mount individual domain sub-routes
apiV1Router.use('/health', healthRoutes);
apiV1Router.use('/products', productRoutes);
apiV1Router.use('/b2b', b2bRoutes);
apiV1Router.use('/orders', orderRoutes);

// API Root summary
apiV1Router.get('/', (req, res) => {
  res.status(200).json({
    name: 'HDC Fashion Platform API',
    version: '1.0.0',
    documentation: '/docs',
    endpoints: {
      health: '/api/v1/health',
      products: '/api/v1/products',
      b2b: '/api/v1/b2b',
      orders: '/api/v1/orders'
    }
  });
});

export default apiV1Router;
