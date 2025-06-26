import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-white via-blue-50 to-purple-50 text-gray-800 font-sans">
      <nav className="p-6 bg-white shadow-md flex justify-center gap-6 text-blue-800 font-semibold text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/linkedin-posts">LinkedIn</Link>
        <Link href="/github-projects">Projects</Link>
        <Link href="/btc-strategy">BTC Strategy</Link>
      </nav>
      <main className="text-center py-16 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image src="/anshul-profile.jpg" alt="Anshul Goel" width={160} height={160} className="rounded-full mb-6 shadow-md" />
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Anshul's Quant Career Hub</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            I'm Anshul — a quant researcher who blends math, markets, and momentum into real-world trading systems.
            Dive into my work, experiments, and learnings across strategies and signals.
          </p>
        </div>
        <div className="mt-12 text-blue-600 underline space-y-2 text-lg text-left max-w-lg mx-auto">
          <p><Link href="/about">🔎 About Me</Link></p>
          <p><Link href="/blog">🧠 Quant Blog</Link></p>
          <p><Link href="/linkedin-posts">📢 Macro & Quant LinkedIn Posts</Link></p>
          <p><Link href="/github-projects">💻 GitHub Projects</Link></p>
          <p><Link href="/btc-strategy">📊 BTC Quantiacs Strategy</Link></p>
        </div>
      </main>
    </div>
  );
}
