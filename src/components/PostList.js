import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default PostList;
