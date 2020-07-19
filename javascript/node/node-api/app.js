const express = require('express');
const morgan = require('morgan');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 400;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message
  });
})

module.exports = app;
