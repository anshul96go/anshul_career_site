export default function About() {
  return (
    <div className="p-4 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-700">About Me</h1>
      <p>Hi! I’m Anshul Goel — MS in Financial Engineering, quant researcher, builder.</p>
      <p>I thrive on refining ideas over time, turning intuition into robust systematic strategies. I’ve built factor models at PGIM, live crypto strategies on Quantiacs, and prototypes at Goldman Sachs.</p>

      <h2 className="mt-6 text-xl font-semibold">Connect with Me</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="mailto:anshul96go@gmail.com" className="text-blue-600 underline">anshul96go@gmail.com</a></li>
        <li><a href="https://linkedin.com/in/anshulgoel96" target="_blank" className="text-blue-600 underline" rel="noopener">LinkedIn</a></li>
        <li><a href="https://github.com/anshul96go" target="_blank" className="text-blue-600 underline" rel="noopener">GitHub (anshul96go)</a></li>
        <li><a href="/resume/Resume_Anshul_Goel.pdf" download className="text-blue-600 underline">Download Resume</a></li>
      </ul>
    </div>
  );
}
