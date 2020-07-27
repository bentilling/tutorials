const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(express.json());
app.use(cors())

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
