export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">About Me</h1>
      <p className="mb-4">Hi! I’m Anshul Goel — MS in Financial Engineering, quant researcher, and system builder. I thrive on refining ideas over time and turning intuition into robust strategies.</p>
      <p className="mb-4">I’ve worked with Goldman Sachs, PGIM, and Quantiacs, building everything from volatility surface models to live crypto trading strategies. I enjoy working where structured thinking meets messy real-world data.</p>
      <ul className="list-disc list-inside">
        <li><a href="mailto:anshul96go@gmail.com" className="text-blue-600 underline">Email: anshul96go@gmail.com</a></li>
        <li><a href="https://linkedin.com/in/anshulgoel96" target="_blank" className="text-blue-600 underline">LinkedIn</a></li>
        <li><a href="https://github.com/anshul96go" target="_blank" className="text-blue-600 underline">GitHub: anshul96go</a></li>
        <li><a href="/resume/Resume_Anshul_Goel.pdf" download className="text-blue-600 underline">Download My Resume</a></li>
      </ul>
    </div>
  );
}
