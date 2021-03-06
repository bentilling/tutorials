const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const posts = {};

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };
  await axios.post('http://localhost:4005/events', {
    type: 'PostAdd',
    data: posts[id],
  });

  res.status(201).json(posts[id]);
});

app.post('/events', (req, res) => {
  res.send(posts);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
