# 🛒 E-commerce Backend API - WIP

This is a simple Node.js backend for an e-commerce platform for 2025 Spring Capstone.

---

## 📦 Tech Stack

- Node.js
- PostgreSQL
- Drizzle ORM
- dotenv

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- PostgreSQL
- [Optional] Docker (for database or containerization)

---

### 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

2. \*\*Install dependencies

```bash
npm install
```

3. \*\*Create an .env file

- Copy the following into a new .env file:

```bash
PORT=3000

# PostgreSQL Example
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=ecommerce_db

# Or for MongoDB
# MONGODB_URI=mongodb://localhost:27017/ecommerce
```

4. Start server

```bash
npm run dev
```

## 📁 Project Structure

```bash
ecommerce-backend/
├── controllers/        # Route logic
├── routes/             # API endpoints
├── models/             # DB models (optional)
├── db/                 # Database config (optional)
├── .env                # Environment variables
├── index.js            # Entry point
├── package.json
└── README.md
```

## 📫 API Endpoints

- Basic routes:

  POST /api/register – Register a new user

  POST /api/login – Log in a user

- More routes (products, cart, orders) can be added as needed.

## 🧪 Testing (Optional)

- To run tests:

```bash
  npm test
```

## 🙌 Contributing

    1. Fork this repository

    2. Create a feature branch: git checkout -b feature/your-feature-name

    3. Commit your changes: git commit -m 'Add your feature'

    4. Push to the branch: git push origin feature/your-feature-name

    5. Open a Pull Request

## 📄 License

- This project is open-source. License to be added (MIT, Apache 2.0, etc.).
