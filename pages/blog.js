import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
    };
  });
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <nav className="mb-6 text-center space-x-4">
        <Link href="/" className="text-purple-700 font-bold hover:underline">Home</Link>
        <Link href="/about" className="text-purple-700 font-bold hover:underline">About</Link>
        <Link href="/linkedin-posts" className="text-purple-700 font-bold hover:underline">LinkedIn</Link>
        <Link href="/github-projects" className="text-purple-700 font-bold hover:underline">Projects</Link>
        <Link href="/btc-strategy" className="text-purple-700 font-bold hover:underline">BTC Strategy</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Quant Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
          </Link>
          <p className="text-gray-500 text-sm">{post.date}</p>
        </div>
      ))}
    </div>
  );
}
