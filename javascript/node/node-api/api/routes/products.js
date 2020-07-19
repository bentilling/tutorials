const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'GET Products'
  }); 
});


router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: 'Product added',
    product: product
  }); 
});

router.get('/:productId', (req, res, next) => {
  res.status(200).json({
    message: `GET Product Id ${req.params.productId}`
  }); 
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: `PATCH Product Id ${req.params.productId}`
  }); 
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: `DELETE Product Id ${req.params.productId}`
  }); 
});

module.exports = router;
