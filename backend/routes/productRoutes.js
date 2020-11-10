import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productsModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.json(products);
}));


// @desc Fetch a single product by id
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    console.log(product);
    if ( product ) {
    res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
}));

export default router;