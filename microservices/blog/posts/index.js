const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;
  posts[id] = {id: id, title: title}
  res.status(201).json(posts[id])
})

app.listen(4000);
