const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('Connected to DataBase');
    })
    .catch((error) => {
        console.log(error);
    });

// Start the server
app.listen(3001, () => {
    console.log('Server is Running on Port 3001');
});
