import { useEffect, useState } from 'react';

export default function LinkedInPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/linkedin') // Set up this Netlify function separately
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Macro & Quant LinkedIn Posts</h1>
      {posts.length === 0 ? <p>Loading...</p> : posts.map(post => (
        <div key={post.id} className="mb-6 p-4 bg-white rounded shadow">
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
          <p className="my-2">{post.content}</p>
          <a href={post.url} target="_blank" rel="noopener" className="text-blue-600 underline">View on LinkedIn</a>
        </div>
      ))}
    </div>
  );
}
