# 🧵 Teezy - Clothes Printing E-commerce Application (MERN)

A full-stack dynamic e-commerce web application for a clothes printing business, built using the **MERN** stack. It allows customers to browse products, upload custom designs, add items to the cart, make payments, and track orders — while admins can manage products, orders, and categories.

---

## 🖥️ Client-Side Overview

### 📁 Folder Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.png
│
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── Loader.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Toast.jsx
│   │   └── ImageUploader.jsx
│
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── OrderContext.jsx
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useScrollToTop.js
│   │   ├── useCart.js
│   │   └── useOrders.js
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Categories.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Success.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── Admin/
│   │   │   ├── AddProduct.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ManageProducts.jsx
│   │   │   ├── ManageOrders.jsx
│   │   │   ├── ManageCategories.jsx
│   │   │   └── UploadDesigns.jsx
│   │   └── NotFound.jsx
│
│   ├── routes/
│   │   └── AppRoutes.jsx
│
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── productService.js
│   │   ├── cartService.js
│   │   ├── orderService.js
│   │   └── cloudinaryService.js
│
│   ├── stores/
│   │   ├── useAuthStore.jsx
│   │   ├── useCartStore.jsx
│   │   └── useOrderStore.jsx
│
│   ├── utils/
│   │   ├── formatPrice.js
│   │   ├── validateEmail.js
│   │   ├── token.js
│   │   └── uploadToCloudinary.js
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

### 🧩 Technologies Used on Client

| Technology         | Purpose / Use                                                                 |
|--------------------|-------------------------------------------------------------------------------|
| React.js + Vite    | Frontend framework and fast build tool                                        |
| Tailwind CSS       | Utility-first CSS framework for modern UI design                              |
| Axios              | HTTP client to communicate with backend APIs                                  |
| Zustand            | Lightweight global state management (alternative to Redux)                    |
| JWT (Client-side)  | Store token in localStorage or cookies for protected routes                   |
| Stripe (UI)        | Secure payment interface on Checkout page (Stripe Elements / Checkout)        |
| Cloudinary         | Upload and preview product/design images before submission                    |
| Postman            | API testing tool (used during development to test client-server communication)|
| React Router DOM   | Routing for navigation between pages                                           |
| Context API        | Lightweight state management for auth, cart, and orders                       |

---

## ⚙️ Server-Side Overview

### 📁 Folder Structure

```
server/
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   ├── orderController.js
│   └── productController.js
│
├── lib/
│   ├── cloudinary.js
│   ├── db.js
│   └── stripe.js
│
├── middleware/
│   ├── adminMiddleware.js
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── models/
│   ├── Order.js
│   ├── User.js
│   └── Product.js
│
├── routes/
│   ├── admin.js
│   ├── authRoutes.js
│   ├── express.js
│   ├── orders.js
│   └── products.js
│
├── utils/
│   └── generateToken.js
│
├── .env
└── server.js
```

### 🔧 Technologies Used on Server

| Technology         | Purpose / Use                                                                 |
|--------------------|-------------------------------------------------------------------------------|
| Node.js            | JavaScript runtime to run backend services                                    |
| Express.js         | Web framework to create REST APIs, handle routing & middleware                |
| MongoDB            | NoSQL database for storing users, orders, and product info                    |
| Mongoose           | ODM library to interact with MongoDB                                          |
| Cloudinary         | For image upload, hosting, and transformation                                 |
| Stripe             | Payment gateway integration and webhook handling                              |
| JWT (JSON Web Token)| Auth token creation and middleware protection for secure routes              |
| dotenv             | Loads environment variables from `.env` file securely                         |
| Postman            | API testing and debugging tool during development                             |
| CORS               | Middleware to handle cross-origin requests                                    |
| Bcrypt.js          | For hashing user passwords securely before saving to DB                       |
| Multer (optional)  | For handling file uploads to server (before passing to Cloudinary)            |

---

## 🚀 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/sanuamit/Teezy-Clothes_Printing_App-.git
cd Teezy-Clothes_Printing_App-
```

2. **Install Dependencies**

Client:
```bash
cd client
npm install
```

Server:
```bash
cd ../server
npm install
```

3. **Setup Environment Variables**

Create a `.env` file in `/server` and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_key
```

4. **Run the App**

Client:
```bash
cd client
npm run dev
```

Server:
```bash
cd server
npm run dev
```

---

## 📦 Features

- 👕 Browse & filter custom clothes/products
- ☁️ Upload personalized designs (via Cloudinary)
- 🛒 Add to cart and manage quantity
- 🧾 Place orders and make payments (via Stripe)
- 🔒 Authentication with JWT (Login/Register)
- 👨‍💼 Admin dashboard for managing orders, products, and categories
- 📦 Order tracking for users

---

## 🧑‍💻 Author

**Amit Kumar Pati**  
GitHub: [sanuamit](https://github.com/sanuamit)

---

Let me know if you'd like a `LICENSE`, screenshots, deployment instructions (Netlify/Render), or badges added!
