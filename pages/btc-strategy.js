import Link from 'next/link';

export default function BTCStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100 p-8 font-sans text-gray-800">
      <nav className="mb-6 text-center space-x-4">
        <Link href="/" className="text-purple-700 font-bold hover:underline">Home</Link>
        <Link href="/about" className="text-purple-700 font-bold hover:underline">About</Link>
        <Link href="/linkedin-posts" className="text-purple-700 font-bold hover:underline">LinkedIn Posts</Link>
        <Link href="/github-projects" className="text-purple-700 font-bold hover:underline">Projects</Link>
      </nav>

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">BTC Quantiacs Strategy</h1>
        <p className="mb-4">This strategy was deployed on Quantiacs and received a $1M live allocation. It uses momentum and volatility features to dynamically adjust BTC positions. Built with curiosity, grit, and late-night coding.</p>

        <iframe
          src="https://quantiacs.com/statistic/1635491"
          width="100%"
          height="500"
          className="border mb-4"
          title="BTC Strategy Performance"
        ></iframe>

        <h2 className="text-xl font-semibold text-purple-600 mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Momentum & volatility filters</li>
          <li>Drawdown-aware risk management</li>
          <li>Backtested since 2016</li>
          <li>Live since 2024 via Quantiacs allocation</li>
        </ul>

        <a href="https://quantiacs.com/statistic/1635491" target="_blank" className="text-blue-600 underline font-medium">
          → View Strategy on Quantiacs
        </a>
      </div>
    </div>
  );
}
