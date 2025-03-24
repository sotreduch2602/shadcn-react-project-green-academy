# E-Commerce Platform with React & Shadcn UI

A modern e-commerce platform built with React, TypeScript, and Shadcn UI components. This project implements a full-featured online shopping experience with user authentication, product management, shopping cart, and order processing.

## Features

### 1. Authentication & Authorization

- User registration with email and password
- Secure login system
- Logout functionality
- Profile management (update personal information)
- Password change capability

### 2. Product Management

- Product listing with pagination
- Advanced filtering by:
  - Categories
  - Price range
  - Ratings
- Search functionality by product name
- Detailed product view with:
  - High-quality images
  - Product descriptions
  - Pricing information
  - Stock status
  - User reviews

### 3. Shopping Cart

- Add/remove products
- Update product quantities
- Real-time cart total calculation
- Persistent cart data

### 4. Order Processing

- Simulated checkout process
- Order creation from cart
- Digital invoice generation
- Order status tracking
- Order cancellation (for pending orders)

### 5. Order History

- Complete order history view
- Detailed order information
- Order filtering by:
  - Date range
  - Status
  - Order ID

### 6. Product Reviews

- User reviews and ratings
- Review listing with:
  - User information
  - Date posted
  - Rating scores

### 7. Admin Dashboard

- Secure admin login
- Product management (CRUD operations)
- Order management
- Status updates
- Detailed order view

### 8. User Interface

- Responsive design for all devices
- Loading states and animations
- Toast notifications
- Modal dialogs
- Clean and intuitive layout

## Technical Stack

### Frontend

- React 18
- TypeScript
- Shadcn UI Components
- React Router v6
- React Context API
- Axios for API calls

### State Management

- React Context for:
  - Authentication state
  - Shopping cart
  - User preferences

### Routing

- React Router for navigation
- Protected routes for authenticated users
- Admin routes with role-based access

### API Integration

- RESTful API communication
- Axios for HTTP requests
- Error handling and interceptors

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── layouts/           # Layout components
├── contexts/          # React Context providers
├── hooks/             # Custom React hooks
├── services/          # API services
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── assets/            # Static assets (images, icons)
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=your_api_url
VITE_APP_NAME=your_app_name
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
