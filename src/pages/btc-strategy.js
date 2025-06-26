export default function BTCStrategy() {
  return (
    <div className="p-4 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">BTC Quantiacs Strategy</h1>
      <p>This strategy was built and deployed via Quantiacs, receiving a $1M live allocation. It uses signal-based momentum and volatility features on BTC data.</p>
      <iframe src="https://www.quantiacs.com/quantinsti-strategy-view?strategyId=206" width="100%" height="600" title="BTC Strategy Performance"></iframe>
      <h2 className="mt-6 text-xl font-semibold">Strategy Details</h2>
      <ul className="list-disc list-inside">
        <li>Signal type: Daily momentum with volatility filter</li>
        <li>Backtesting period: 2016–2025</li>
        <li>Live trading since 2024</li>
        <li>Risk control: Volatility scaling and drawdown-based stop-loss</li>
      </ul>
      <a href="https://www.quantiacs.com/strategies/206" target="_blank" rel="noopener" className="text-blue-600 underline">View live performance on Quantiacs</a>
    </div>
  );
}
