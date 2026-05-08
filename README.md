# 🧾 EromaMart Frontend - Production Implementation

**A scalable, production-grade e-commerce frontend built on strict architectural principles.**

---

## 📋 Table of Contents

1. [Architecture Overview](#-architecture-overview)
2. [Project Structure](#-project-structure)
3. [Getting Started](#-getting-started)
4. [Core Concepts](#-core-concepts)
5. [Development Guidelines](#-development-guidelines)
6. [API Integration](#-api-integration)
7. [Folder Structure](#-folder-structure)

---

## 🏗️ Architecture Overview

### Two-Pillar Architecture

```
┌─────────────────────────────────────────┐
│         EROMAMART FRONTEND              │
├─────────────────────────────────────────┤
│                                         │
│  HOME PAGE (Module-Based)               │
│  ├── Dynamic layout from API            │
│  ├── Backend controls order & content   │
│  ├── Frontend renders modules           │
│  └── No hardcoded layout                │
│                                         │
│  PRODUCT PAGE (Component-Based)         │
│  ├── Fixed structure (always same)      │
│  ├── Stable UI for conversion           │
│  ├── Props-driven data injection        │
│  └── No dynamic layout changes          │
│                                         │
│  LISTING PAGES (Component Grid)         │
│  ├── Simple grid rendering              │
│  ├── ProductCard mapping                │
│  ├── Backend returns data only          │
│  └── Frontend controls layout           │
│                                         │
│  CART PAGE (Business Logic UI)          │
│  ├── Fixed component structure          │
│  ├── Cart state management              │
│  └── Order calculations                 │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
src/
├── types/
│   └── index.ts              # All TypeScript type definitions
│
├── services/
│   └── api.service.ts        # Centralized API client
│
├── hooks/
│   └── index.ts              # Reusable React hooks
│
├── components/
│   └── shared/
│       └── index.tsx         # Reusable UI components
│                             # (ProductCard, Button, Badge, etc.)
│
├── modules/
│   └── home/
│       └── ModuleRenderer.tsx # Home page module system
│
├── pages/
│   ├── Home/
│   │   └── HomePage.tsx      # ✔ MODULE-BASED
│   ├── Product/
│   │   └── ProductPage.tsx   # ✔ COMPONENT-BASED (fixed)
│   ├── Category/
│   │   └── CategoryPage.tsx  # ✔ COMPONENT-BASED (grid)
│   └── Cart/
│       └── CartPage.tsx      # ✔ COMPONENT-BASED
│
├── utils/                    # Utility functions
├── App.tsx                   # Route configuration
└── index.tsx                # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- React 18+
- TypeScript 4.5+

### Installation

```bash
# Clone repository
git clone <repo-url>

# Install dependencies
npm install

# Create .env file
touch .env

# Add API endpoint
echo "REACT_APP_API_URL=http://localhost:3001/api" > .env

# Start development server
npm start
```

### Development Server

```bash
npm start      # Start dev server (port 3000)
npm run build  # Production build
npm test       # Run tests
npm run lint   # Lint code
```

---

## 🧠 Core Concepts

### 1. Module-Based Architecture (HOME PAGE ONLY)

**What it is:**
- Backend API returns an array of modules
- Each module has a type, position, and data
- Frontend renders modules dynamically

**When to use:**
- Home page (dynamic, marketing-driven)
- Admin-controlled layout

**Example:**
```typescript
// API Response
{
  modules: [
    { type: 'hero', position: 1, data: {...} },
    { type: 'categories', position: 2, data: {...} },
    { type: 'featured_products', position: 3, data: {...} }
  ]
}

// Frontend rendering
modules.map(module => <ModuleRenderer module={module} />)
```

### 2. Component-Based Architecture (ALL OTHER PAGES)

**What it is:**
- Fixed component structure
- Data injected via props
- Layout never changes

**When to use:**
- Product pages (conversion-focused)
- Cart pages
- Checkout flows
- Any stable UI

**Example:**
```typescript
<ProductPage>
  ├── ImageGallery
  ├── ProductInfo
  ├── PriceSection
  ├── AddToCart
  ├── Reviews
  └── SimilarProducts
```

### 3. Grid-Based Rendering (LISTING PAGES)

**What it is:**
- Simple array mapping pattern
- Reusable ProductCard component
- Backend returns data only (no UI structure)

**Pattern:**
```typescript
products.map(product => <ProductCard product={product} />)
```

---

## 👨‍💻 Development Guidelines

### ❌ DO NOT

```typescript
// ❌ DO NOT: Hardcode home layout
function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

// ✔ DO: Render modules dynamically
function HomePage() {
  const modules = fetchFromAPI();
  return modules.map(m => <ModuleRenderer module={m} />);
}
```

```typescript
// ❌ DO NOT: Use module system in Product page
function ProductPage() {
  if (productType === 'variant1') {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
}

// ✔ DO: Fixed structure always
function ProductPage() {
  return (
    <>
      <ImageGallery />
      <ProductInfo />
      <PriceSection />
      <AddToCart />
    </>
  );
}
```

### ✔ DO

```typescript
// ✔ DO: Create reusable, dumb components
const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} />
    <h3>{product.name}</h3>
    <PriceTag price={product.price} />
    <button onClick={() => onAddToCart(product.id)}>
      Add to Cart
    </button>
  </div>
);

// ✔ DO: Use hooks for state management
function useProducts(filters) {
  const { status, data, error } = useAsync(() =>
    apiService.getProducts(filters)
  );
  return { status, data, error };
}

// ✔ DO: Keep components props-driven
<Button variant="primary" size="lg" loading={false} />
<Badge label="New" variant="new" />
<PriceTag price={299} originalPrice={499} />
```

---

## 🔗 API Integration

### Home API

```typescript
// Endpoint: GET /api/home

// Response:
{
  modules: [
    {
      type: 'hero',
      position: 1,
      data: {
        title: 'Big Discounts',
        subtitle: 'Save more daily',
        image: 'url',
        ctaText: 'Shop Now',
        ctaLink: '/category/1'
      }
    }
  ]
}
```

### Product Detail API

```typescript
// Endpoint: GET /api/products/:id

// Response:
{
  id: 'prod_123',
  name: 'Fresh Mango',
  price: 299,
  originalPrice: 499,
  image: 'url',
  images: ['url1', 'url2'],
  rating: 4.5,
  reviewCount: 124,
  inStock: true,
  description: 'Premium quality mango...',
  specifications: {
    'Weight': '1kg',
    'Origin': 'Rajasthan',
    'Ripeness': 'Ready to eat'
  },
  reviews: [...]
}
```

### Product List API

```typescript
// Endpoint: GET /api/products?category=fruits&page=1&limit=20

// Response:
{
  items: [{...product}, ...],
  total: 150,
  page: 1,
  limit: 20,
  hasMore: true
}
```

### Category API

```typescript
// Endpoint: GET /api/categories

// Response:
[
  { id: '1', name: 'Fruits', icon: '🍎' },
  { id: '2', name: 'Vegetables', icon: '🥕' }
]
```

---

## 🧪 Testing Guidelines

### Component Testing

```typescript
// Test that ProductCard renders with correct props
test('ProductCard renders product data', () => {
  const product = {
    id: '1',
    name: 'Test Product',
    price: 100,
    image: 'test.jpg'
  };

  render(<ProductCard product={product} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('₹100')).toBeInTheDocument();
});
```

### API Service Testing

```typescript
// Test API calls
test('apiService.getProductDetail fetches product', async () => {
  const result = await apiService.getProductDetail('1');
  expect(result.success).toBe(true);
  expect(result.data.id).toBe('1');
});
```

---

## 📝 Coding Standards

### TypeScript Strict Mode

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true
  }
}
```

### Component Naming

```typescript
// GOOD
export const ProductCard = () => {};
export const AddToCartButton = () => {};

// BAD
export const Card = () => {};  // Too generic
export const Button1 = () => {}; // Non-descriptive
```

### Props Structure

```typescript
// GOOD: Explicit, typed props
interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  loading?: boolean;
}

// BAD: any type, unclear
function ProductCard(props: any) {}
```

---

## 🚨 Common Mistakes to Avoid

1. **Mixing module and component architecture**
   - ❌ Using modules in Product page
   - ✔ Use modules ONLY for Home page

2. **Hardcoding layouts**
   - ❌ Hardcoding sections in JSX
   - ✔ Render sections from API data

3. **Stateful components in shared folder**
   - ❌ Business logic in ProductCard
   - ✔ Keep components dumb, state in pages

4. **API calls in components**
   - ❌ fetch() inside render
   - ✔ Use hooks or service layer

5. **Not handling edge cases**
   - ❌ Assuming data always exists
   - ✔ Handle loading, error, empty states

---

## 📊 Performance Optimization

```typescript
// Lazy loading images
<img src={product.image} loading="lazy" />

// Memoizing expensive components
export const ProductCard = React.memo(({ product }) => (
  // Component code
));

// Code splitting for pages
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const ProductPage = lazy(() => import('./pages/Product/ProductPage'));

// Using Suspense
<Suspense fallback={<Loader />}>
  <HomePage />
</Suspense>
```

---

## 🔐 Security Best Practices

1. **Input validation**
   ```typescript
   if (!productId || typeof productId !== 'string') {
     throw new Error('Invalid product ID');
   }
   ```

2. **XSS prevention**
   ```typescript
   // React escapes by default
   <div>{userInput}</div>
   ```

3. **CORS handling**
   ```typescript
   // API service handles CORS headers
   headers: {
     'Content-Type': 'application/json'
   }
   ```

---

## 📈 Scalability Notes

### When to add:

- **Redux/Context**: Multiple complex state trees
- **React Query**: Complex server state management
- **Next.js**: Need SSR or static generation
- **Storybook**: Large component library
- **e2e tests**: Complex user flows

### Current scalability:
- ✔ Up to 100+ product pages
- ✔ Up to 50+ modules types
- ✔ Supports A/B testing (via API)
- ✔ Easy to add new page types

---

## 🎯 Next Steps

1. **Integrate with real API** - Update `api.service.ts` endpoints
2. **Add styling** - Create CSS modules or Tailwind config
3. **Implement routing** - Set up React Router configuration
4. **Add state management** - Install Redux if needed
5. **Set up CI/CD** - GitHub Actions or similar
6. **Performance monitoring** - Sentry or New Relic

---

## 📚 References

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [REST API Best Practices](https://restfulapi.net)
- [Web Performance](https://web.dev/performance)

---

## 💬 Support

For questions about architecture or implementation:
- Check this README
- Review code comments
- Look at type definitions for context

---

**Built with production standards from day 1** 🚀