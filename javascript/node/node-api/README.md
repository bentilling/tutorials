# Node API

## Packages

### nodemon
Enables automatic server reloading

To enable set
```
  "scripts": {
    "start": "nodemon server.js"
  },
```
in your package.json

## Express

For variable paths in the router use `:` e.g.
``` javascipt
router.get('/:productId', (req, res, next) => {
  ...
});
```

## Notes

### Response Status

200 - Success (for GET)
201 - Successful resource created (for POST)

## Tutorial Steps

1. Create a server.js file that uses `http.createServer` that listens on the environent port
2. Create an app.js file that creates an express application. With `use()` return a json response (and 200 status)
3. Pass the app to `createServer`

Running `node server.js` and navigating to localhost:3000 should display your json.

1. Route /products to api/routes/products.js and set up skeleton 
    - GET and POST for products 
    - GET, PATCH and DELETE for products/productID
2. Route /orders to api/routes/orders.js and set up skeleton 
    - GET and POST for orders 
    - GET, PATCH and DELETE for products/orderID
