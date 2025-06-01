// index.js
const express = require('express');
const dotenv = require('dotenv');
const { drizzle } = require('drizzle-orm/node-postgres');
//Load env var
dotenv.config(

);//{path: './web-backend/.env'} );


const db = drizzle(process.env.DATABASE_URL);
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const PORT = process.env.PORT || 3000;




// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
