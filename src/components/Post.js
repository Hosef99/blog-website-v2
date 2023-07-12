import React from 'react';

function Post({ title, author, content }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">By {author}</h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Post;
