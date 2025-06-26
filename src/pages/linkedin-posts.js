import { useEffect, useState } from 'react';

export default function LinkedInPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/linkedin')
      .then(r => r.json())
      .then(setPosts);
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Macro & Quant Posts</h1>
      {posts.length === 0 ? <p>Loading…</p> : posts.map(p => (
        <div key={p.id} className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold">{p.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{new Date(p.date).toLocaleDateString()}</p>
          <div>{p.content}</div>
          <a href={p.url} target="_blank" rel="noopener" className="text-blue-600 underline">View on LinkedIn</a>
        </div>
      ))}
    </div>
  );
}
