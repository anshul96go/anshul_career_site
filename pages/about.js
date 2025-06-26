import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100 p-8 font-sans text-gray-800">
      <nav className="mb-6 text-center space-x-4">
        <Link href="/" className="text-purple-700 font-bold hover:underline">Home</Link>
        <Link href="/blog" className="text-purple-700 font-bold hover:underline">Blog</Link>
        <Link href="/linkedin-posts" className="text-purple-700 font-bold hover:underline">LinkedIn</Link>
        <Link href="/github-projects" className="text-purple-700 font-bold hover:underline">Projects</Link>
        <Link href="/btc-strategy" className="text-purple-700 font-bold hover:underline">BTC Strategy</Link>
      </nav>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md text-center">
        <Image src="/anshul-profile.jpg" alt="Anshul's profile" width={150} height={150} className="rounded-full mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-blue-700 mb-2">About Me</h1>
        <p className="mb-2">Hi! I’m Anshul Goel — MS in Financial Engineering, quant researcher, and system builder. I thrive on refining ideas over time and turning intuition into robust strategies.</p>
        <p className="mb-4">Worked with Goldman Sachs, PGIM, and Quantiacs, building volatility models to live trading strategies. I enjoy when structured thinking meets messy real-world data.</p>
        <div className="space-y-1">
          <p><a href="mailto:anshul96go@gmail.com" className="text-blue-600 underline">anshul96go@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/anshulgoel96" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
          <p><a href="https://github.com/anshul96go" target="_blank" className="text-blue-600 underline">GitHub: anshul96go</a></p>
          <p><a href="/resume/Resume_Anshul_Goel.pdf" download className="text-blue-600 underline">Download My Resume</a></p>
        </div>
      </div>
    </div>
  );
}
