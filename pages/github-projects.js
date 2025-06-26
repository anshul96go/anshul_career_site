export default function GitHubProjects() {
  const projects = [
    {
      title: 'Systematic Backtesting Toolkit',
      description: 'Python framework for factor backtesting with vectorized pipeline (NumPy, pandas, Qlib).',
      repo: 'https://github.com/anshul96go/sys-backtest',
    },
    {
      title: 'Volatility Signal Explorer',
      description: 'Jupyter notebook for volatility breakout signal on public/private repo.',
      repo: 'https://github.com/anshul96go/vol-sig-explorer',
    },
    {
      title: 'Private: FX Momentum Strategy',
      description: 'Detailed in repo subfolder — momentum signal + feature engineering.',
      repo: null,
    },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">GitHub Projects</h1>
      {projects.map((proj, i) => (
        <div key={i} className="mb-6 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">{proj.title}</h2>
          <p className="mb-2">{proj.description}</p>
          {proj.repo ? (
            <a href={proj.repo} className="text-blue-600 underline" target="_blank">View Repository</a>
          ) : (
            <p className="italic text-gray-500">Private repo — available on request</p>
          )}
        </div>
      ))}
    </div>
  );
}
