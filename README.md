/*
# E-commerce API (Node.js, TypeScript, PostgreSQL)

## Features
- Signup/Login with JWT authentication
- Product CRUD (create, read, update, delete)
- Order creation
- PostgreSQL + Sequelize ORM
- Swagger API documentation
- Middleware: Logging, Error Handling, Total Response Time
- Typed request/response objects

## Getting Started

### 1. Clone and Install
```
git clone <repo-url>
cd ecommerce-api
npm install
```

### 2. Create .env file
```
PORT=3000
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecommerce
DB_USER=postgres
DB_PASS=yourpassword
```

### 3. Run Migrations (Sequelize)
```
npx sequelize-cli db:migrate
```

### 4. Start Project
```
npm run dev
```

### 5. API Docs
Visit: `http://localhost:3000/api-docs`
*/