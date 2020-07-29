const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  if (type === 'CommentAdd') {
    const { postId, commentId, content } = data;
    const newStatus = data.content.includes('bad') ? 'rejected' : 'approved';
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        postId,
        commentId,
        content,
        status: newStatus,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log('Listening on port 4003');
});
