const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get orders',
  });
});

router.post('/', (req, res, next) => {
  const order = {
    orderId: req.body.orderId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: 'get orders',
    order: order
  });
});

module.exports = router;
