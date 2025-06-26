import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Anshul's Quant Career Hub</h1>
      <ul className="space-y-4 text-lg">
        <li><Link href="/about" className="text-blue-600 underline">About Me</Link></li>
        <li><Link href="/linkedin-posts" className="text-blue-600 underline">Macro & Quant LinkedIn Posts</Link></li>
        <li><Link href="/github-projects" className="text-blue-600 underline">GitHub Projects</Link></li>
        <li><Link href="/btc-strategy" className="text-blue-600 underline">BTC Quantiacs Strategy</Link></li>
      </ul>
    </main>
  )
}
