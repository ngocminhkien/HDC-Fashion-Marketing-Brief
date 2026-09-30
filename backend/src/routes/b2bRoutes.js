import { Router } from 'express';

const router = Router();

/**
 * @route   POST /api/v1/b2b/estimate
 * @desc    Calculate instant B2B corporate uniform budget & discount tiers
 */
router.post('/estimate', (req, res, next) => {
  const { quantity = 100, fabric = 'sen' } = req.body;

  const qty = parseInt(quantity, 10);
  if (isNaN(qty) || qty <= 0) {
    const error = new Error('Quantity must be a positive integer');
    error.statusCode = 400;
    error.code = 'INVALID_QUANTITY';
    return next(error);
  }

  let basePrice = 649000;
  if (fabric === 'chuoi') basePrice = 599000;
  if (fabric === 'bamboo') basePrice = 489000;

  let discountPercent = 15;
  if (qty >= 100 && qty < 300) discountPercent = 25;
  else if (qty >= 300 && qty < 500) discountPercent = 30;
  else if (qty >= 500) discountPercent = 35;

  const unitPrice = Math.round(basePrice * (1 - discountPercent / 100));
  const totalBudget = unitPrice * qty;

  res.status(200).json({
    success: true,
    data: {
      quantity: qty,
      fabric,
      basePrice,
      discountPercent,
      unitPrice,
      totalBudget,
      currency: 'VND',
      deliveryEstimate: qty > 500 ? '14-21 ngày' : '7-10 ngày'
    }
  });
});

/**
 * @route   POST /api/v1/b2b/quote-request
 * @desc    Submit a B2B uniform quotation request
 */
router.post('/quote-request', (req, res, next) => {
  const { companyName, contactName, phone, email, quantity, notes } = req.body;

  if (!companyName || !contactName || !phone) {
    const error = new Error('Company name, contact name, and phone number are required');
    error.statusCode = 400;
    error.code = 'MISSING_REQUIRED_FIELDS';
    return next(error);
  }

  const quoteId = `HDC-B2B-${Date.now().toString().slice(-6)}`;

  res.status(201).json({
    success: true,
    message: 'Quotation request submitted successfully. Our enterprise consultant will contact within 2 hours.',
    data: {
      quoteId,
      companyName,
      contactName,
      phone,
      email,
      quantity: parseInt(quantity || '50', 10),
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  });
});

export default router;
