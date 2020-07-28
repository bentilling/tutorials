const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/events', (req, res) => {
  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
