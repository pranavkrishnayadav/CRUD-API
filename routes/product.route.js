const express = require('express');
const router = express.Router();
const { getproducts, getproduct, createproduct, updateProduct, deleteproduct } = require('../controllers/product.controller.js');
router.get('/', getproducts);
router.get('/:id', getproduct);
router.post('/', createproduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteproduct);

module.exports = router;
