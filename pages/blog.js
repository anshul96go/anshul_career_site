import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 font-sans">
      <nav className="p-6 bg-white shadow-md flex justify-center gap-6 text-blue-700 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/linkedin-posts">LinkedIn</Link>
        <Link href="/github-projects">Projects</Link>
        <Link href="/btc-strategy">BTC Strategy</Link>
      </nav>
      <main className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Quant Blog</h1>
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="mb-6">
            <Link href={`/posts/${slug}`}>
              <h2 className="text-2xl font-semibold text-blue-700 hover:underline">{frontmatter.title}</h2>
            </Link>
            <p className="text-gray-600">{frontmatter.date}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
