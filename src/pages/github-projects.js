import { useState } from 'react';

export default function GitHubProjects() {
  const [projects] = useState([
    {
      title: 'Systematic Backtesting Toolkit',
      description: 'Python framework for factor backtesting with vectorized pipeline (NumPy, pandas, Qlib).',
      repo: 'https://github.com/anshul96go/sys-backtest',
      private: false,
    },
    {
      title: 'Volatility Signal Explorer',
      description: 'Jupyter notebook for volatility breakout signal on public/private repo.',
      repo: 'https://github.com/anshul96go/vol-sig-explorer',
      private: false,
    },
    {
      title: 'Private: FX Momentum Strategy',
      description: 'Detailed in repo subfolder — momentum signal + feature engineering.',
      repo: null,
      private: true,
    },
  ]);

  return (
    <div className="p-4 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">GitHub Projects</h1>
      {projects.map((proj,i) => (
        <div key={i} className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold text-xl">{proj.title}</h2>
          <p className="mb-2">{proj.description}</p>
          {proj.repo ? <a href={proj.repo} target="_blank" rel="noopener" className="text-blue-600 underline">View Repository</a>
                     : <p className="italic text-gray-600">Private repo — link or details available upon request.</p>}
        </div>
      ))}
    </div>
  );
}
