const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/events', async (req, res) => {
  console.log(req.body);
  await axios.post('http://localhost:4000/events', req.body);
  await axios.post('http://localhost:4001/events', req.body);
  await axios.post('http://localhost:4002/events', req.body);
  await axios.post('http://localhost:4003/events', req.body);
  res.send();
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
