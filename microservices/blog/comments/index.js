const express = require('express');
const morgan = require('morgan');
const { randomBytes } = require('crypto');

const app = express();
app.use(morgan('dev'));
app.use(express.json());


const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  res.send(commentsByPostId[id] || []);
})

app.post('/posts/:id/comments', (req, res) => {
  const { content } = req.body;
  const id = randomBytes(4).toString('hex');

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({id, content});
commentsByPostId[req.params.id] = comments; 
  res.status(201).send(comments);

})

app.listen(4001, () => console.log('listening on 4001') );