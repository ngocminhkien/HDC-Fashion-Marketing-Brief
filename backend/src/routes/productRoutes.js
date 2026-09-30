import { Router } from 'express';

const router = Router();

// Initial database seed / fallback mock data (aligned with HDC products)
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Sơ Mi Sợi Sen Kháng Khuẩn 1001',
    category: 'sen',
    fabric: 'Sợi Sen Đồng Tháp',
    price: 649000,
    originalPrice: 799000,
    stock: 85,
    rating: 4.9,
    badge: '100% Sợi Sen',
    features: ['Kháng khuẩn 99.8%', 'Tự phẳng không là', 'Hạ nhiệt 2.8°C']
  },
  {
    id: 2,
    name: 'Sơ Mi May Đo Seamless 4D 2002',
    category: 'seamless',
    fabric: 'Gỗ Sồi Modal & Bio-fiber',
    price: 789000,
    originalPrice: 899000,
    stock: 52,
    rating: 4.8,
    badge: 'Seamless 4D',
    features: ['Không đường may', '0% cọ xát', 'Bền màu 100 lần giặt']
  },
  {
    id: 3,
    name: 'Sơ Mi Khắc Họa Trống Đồng 3003',
    category: 'van-hoa',
    fabric: 'Tơ Chuối Bến Tre & Bamboo',
    price: 899000,
    originalPrice: 999000,
    stock: 40,
    rating: 5.0,
    badge: 'Di Sản Đông Sơn',
    features: ['Họa tiết 2.000 năm', 'Hộp quà ngoại giao', 'Doanh nhân lãnh đạo']
  },
  {
    id: 5,
    name: 'Áo Polo Golf Doanh Nhân Trẻ 4004',
    category: 'polo',
    fabric: 'Sợi Tre Bamboo & Bạc Hà',
    price: 489000,
    originalPrice: 590000,
    stock: 120,
    rating: 4.9,
    badge: 'Golf Edition',
    features: ['Anti-UV UPF 50+', 'Co giãn 4D', 'Giảm 2-3°C tức thì']
  }
];

/**
 * @route   GET /api/v1/products
 * @desc    Get list of products with optional category and search filters
 */
router.get('/', (req, res) => {
  const { category, search, limit = 20, page = 1 } = req.query;

  let filtered = [...MOCK_PRODUCTS];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.fabric.toLowerCase().includes(q)
    );
  }

  const startIndex = (parseInt(page, 10) - 1) * parseInt(limit, 10);
  const paginated = filtered.slice(startIndex, startIndex + parseInt(limit, 10));

  res.status(200).json({
    success: true,
    data: paginated,
    meta: {
      total: filtered.length,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      totalPages: Math.ceil(filtered.length / parseInt(limit, 10))
    }
  });
});

/**
 * @route   GET /api/v1/products/:id
 * @desc    Get single product by ID
 */
router.get('/:id', (req, res, next) => {
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(req.params.id, 10));
  if (!product) {
    const error = new Error(`Product with ID ${req.params.id} not found`);
    error.statusCode = 404;
    error.code = 'PRODUCT_NOT_FOUND';
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

export default router;
