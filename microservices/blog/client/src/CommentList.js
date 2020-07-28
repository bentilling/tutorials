import React from 'react';

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    return <li key={comment.commentId}>{comment.content}</li>;
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
