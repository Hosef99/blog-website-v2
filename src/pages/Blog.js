import React from 'react';
import PostList from '../components/PostList';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      author: 'John Doe',
      content: 'This is the content of the first post.',
    },
    // Add more posts
  ];

  return (
    <div className="container">
      <h2>Blog</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default Blog;
