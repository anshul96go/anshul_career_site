import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, content } };
}

export default function Post({ frontmatter, content }) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-100 to-blue-100 p-8 font-sans text-gray-800">
      <nav className="mb-6 text-center space-x-4">
        <Link href="/" className="text-purple-700 font-bold hover:underline">Home</Link>
        <Link href="/blog" className="text-purple-700 font-bold hover:underline">Blog</Link>
      </nav>
      <article className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">{frontmatter.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{frontmatter.date}</p>
        <Markdown className="prose">{content}</Markdown>
      </article>
    </div>
  );
}
