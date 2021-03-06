const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'PostAdd') {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments: [],
    };
  }
  if (type === 'CommentAdd') {
    const { postId, commentId, content, status } = data;
    posts[postId].comments.push({ commentId, content, status });
    console.log('add comment');
  }
  if (type === 'CommentUpdated') {
    console.log('update comment');
    const { postId, commentId, content, status } = data;
    const comment = posts[postId].comments.find((c) => {
      return c.commentId === commentId;
    });
    comment.content = content;
    comment.status = status;
  }

  console.log(posts);
  res.send(posts);
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
