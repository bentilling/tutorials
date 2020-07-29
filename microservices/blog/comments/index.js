const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const commentsByPostId = {};

app.post('/posts/:id/comments', async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;
  const id = randomBytes(4).toString('hex');

  const comments = commentsByPostId[postId] || [];
  const comment = { postId, commentId: id, content, status: 'pending' };
  comments.push(comment);
  commentsByPostId[postId] = comments;

  await axios.post('http://localhost:4005/events', {
    type: 'CommentAdd',
    data: comment,
  });

  res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
  if (req.body.type === 'CommentModerated') {
    const { postId, commentId, status } = req.body.data;
    const comment = commentsByPostId[postId].find((c) => {
      return c.commentId === commentId;
    });
    comment.status = status;

    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: comment,
    });
  }
  res.send({});
});

app.listen(4001, () => console.log('listening on 4001'));
