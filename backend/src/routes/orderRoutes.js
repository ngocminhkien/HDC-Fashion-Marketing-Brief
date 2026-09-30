import { Router } from 'express';

const router = Router();

// In-memory mock orders store
const MOCK_ORDERS = [
  {
    orderId: 'HDC-8842',
    customer: { name: 'Nguyễn Văn A', phone: '0901234567' },
    status: 'shipping',
    statusStep: 3,
    statusText: 'Đang vận chuyển hỏa tốc',
    carrier: 'Giao Hàng Nhanh (GHN)',
    trackingCode: 'GHN-HDC-9921',
    totalAmount: 1298000,
    items: [
      { productId: 1, name: 'Sơ Mi Sợi Sen Kháng Khuẩn 1001', qty: 2, price: 649000, size: 'L' }
    ],
    createdAt: '2026-09-28T08:30:00.000Z'
  }
];

/**
 * @route   GET /api/v1/orders/track/:orderId
 * @desc    Track status of an existing order
 */
router.get('/track/:orderId', (req, res, next) => {
  const { orderId } = req.params;
  const order = MOCK_ORDERS.find(o => o.orderId.toUpperCase() === orderId.toUpperCase());

  if (!order) {
    const error = new Error(`Order ${orderId} not found. Please verify your tracking code.`);
    error.statusCode = 404;
    error.code = 'ORDER_NOT_FOUND';
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: order
  });
});

/**
 * @route   POST /api/v1/orders
 * @desc    Place a new retail / e-commerce order
 */
router.post('/', (req, res, next) => {
  const { customer, items, paymentMethod = 'cod', vatInvoice = false, companyTaxInfo } = req.body;

  if (!customer || !customer.name || !customer.phone || !customer.address) {
    const error = new Error('Customer full name, phone number, and delivery address are required');
    error.statusCode = 400;
    error.code = 'INVALID_CUSTOMER_INFO';
    return next(error);
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    const error = new Error('Order must contain at least one item');
    error.statusCode = 400;
    error.code = 'EMPTY_ORDER_ITEMS';
    return next(error);
  }

  const orderId = `HDC-${Math.floor(1000 + Math.random() * 9000)}`;
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const newOrder = {
    orderId,
    customer,
    items,
    totalAmount,
    paymentMethod,
    paymentStatus: paymentMethod === 'cod' ? 'pending_on_delivery' : 'awaiting_payment_gateway',
    vatInvoice: Boolean(vatInvoice),
    companyTaxInfo: vatInvoice ? companyTaxInfo : null,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  MOCK_ORDERS.push(newOrder);

  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    data: newOrder
  });
});

export default router;
