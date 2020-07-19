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

### morgan

Acts as a middleware so that you can do logging
``` javascipt
  app.use(morgan('dev'));
```

### cors

```
app.use(cors());
```

## Error Handling
If request makes it past the routers then we should deal with invalid api routes and general errors

``` javascript
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 400;
  next(error);
})
```
and remember to pick this up with

```
app.use((error, req, res, next)) => {
  ...
})
```

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
400 - Bad Request
404 - Not found

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
3. Set up nodemon and morgan
4. Add 400 for invalid calls and 500 as general fallback
5. Parse body input
6. Handle CORS
