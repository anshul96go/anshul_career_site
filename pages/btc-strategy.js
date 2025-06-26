export default function BTCStrategy() {
  return (
    <div className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">BTC Quantiacs Strategy</h1>
      <p>This strategy was built and deployed via Quantiacs, receiving a $1M live allocation. It uses momentum and volatility features on BTC data to create an adaptive signal.</p>
      <iframe src="https://www.quantiacs.com/quantinsti-strategy-view?strategyId=206" width="100%" height="600" title="BTC Strategy"></iframe>
      <h2 className="text-xl font-semibold mt-6">Highlights</h2>
      <ul className="list-disc list-inside">
        <li>Signal type: Daily momentum with volatility filter</li>
        <li>Risk controls: Drawdown stop-loss + position scaling</li>
        <li>Live trading since 2024</li>
      </ul>
      <a href="https://www.quantiacs.com/strategies/206" target="_blank" className="text-blue-600 underline">View live performance on Quantiacs</a>
    </div>
  );
}
