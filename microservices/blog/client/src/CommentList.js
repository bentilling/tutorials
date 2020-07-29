import React from 'react';

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    let content = comment.content
    if (comment.status === 'pending') {
      content = 'Awaiting Moderation' 
    }
    if (comment.status === 'rejected') {
      content = 'Commented Rejected' 
    }
    return <li key={comment.commentId}>{content}</li>;
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
