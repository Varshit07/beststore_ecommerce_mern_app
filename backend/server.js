import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req,res) => {
    res.send('API is running....');
});

// app.get('/api/products', (req, res) => {
//     res.json(products);
// });


// app.get('/api/products/:id', (req, res) => {
//     const requestedProduct = products.find(product => product._id === req.params.id);
//     res.json(requestedProduct);
// });

app.use('/api/products/', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue));