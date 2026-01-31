import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SiReact, SiJavascript, SiNodedotjs, SiGit,
  SiPython, SiDocker, SiCss3, SiMongodb
} from 'react-icons/si';

const errorsData = [
  {
    id: 1,
    tech: 'React',
    error: 'Hydration failed because the initial UI does not match what was rendered on the server.',
    cause: 'Mismatch between HTML generated on server vs client (e.g., using `window` or `localStorage` during initial render).',
    fix: 'Wrap client-only code in `useEffect` or check `if (typeof window !== "undefined")`.',
    tag: 'Next.js',
    icon: <SiReact />,
    color: 'text-blue-400'
  },
  {
    id: 2,
    tech: 'JavaScript',
    error: "Cannot read properties of undefined (reading 'map')",
    cause: 'Trying to iterate over a variable that is `undefined` or `null` instead of an array.',
    fix: 'Use optional chaining `data?.map(...)` or provide a fallback `(data || []).map(...)`.',
    tag: 'Runtime',
    icon: <SiJavascript />,
    color: 'text-yellow-400'
  },
  {
    id: 3,
    tech: 'Node.js',
    error: 'Error: distinct address already in use :::3000',
    cause: 'Another process is already running on the same port.',
    fix: 'Kill the process using `npx kill-port 3000` or change the port number in your code.',
    tag: 'Server',
    icon: <SiNodedotjs />,
    color: 'text-green-500'
  },
  {
    id: 4,
    tech: 'Git',
    error: 'fatal: refusing to merge unrelated histories',
    cause: 'Trying to pull from a remote repo that has a different commit history than local.',
    fix: 'Use `git pull origin main --allow-unrelated-histories` to force the merge.',
    tag: 'Version Control',
    icon: <SiGit />,
    color: 'text-orange-500'
  },
  {
    id: 5,
    tech: 'Python',
    error: 'IndentationError: unexpected indent',
    cause: 'Mixing tabs and spaces or inconsistent indentation levels.',
    fix: 'Configure your editor to use spaces only (usually 4) or run an auto-formatter like Black.',
    tag: 'Syntax',
    icon: <SiPython />,
    color: 'text-blue-500'
  },
  {
    id: 6,
    tech: 'Docker',
    error: 'exec user process caused: exec format error',
    cause: 'Running an image built for a different architecture (e.g., Mac M1 ARM64 vs Linux AMD64).',
    fix: 'Build with `docker buildx build --platform linux/amd64` for compatibility.',
    tag: 'DevOps',
    icon: <SiDocker />,
    color: 'text-blue-400'
  },
  {
    id: 7,
    tech: 'CSS',
    error: 'z-index not working',
    cause: 'Element position is static (default behavior) which ignores z-index.',
    fix: 'Set `position: relative`, `absolute`, or `fixed` on the element.',
    tag: 'Layout',
    icon: <SiCss3 />,
    color: 'text-purple-400'
  },
  {
    id: 8,
    tech: 'MongoDB',
    error: 'MongoNetworkError: connection timed out',
    cause: 'IP address not whitelisted in MongoDB Atlas or incorrect connection string.',
    fix: 'Add your current IP (0.0.0.0/0 for all) in Network Access settings.',
    tag: 'Database',
    icon: <SiMongodb />,
    color: 'text-green-400'
  }
];

const Errors = () => {
  const [search, setSearch] = useState('');

  const filteredErrors = errorsData.filter(item =>
    item.error.toLowerCase().includes(search.toLowerCase()) ||
    item.tech.toLowerCase().includes(search.toLowerCase()) ||
    item.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ossium-darker text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 px-6 pb-20 max-w-6xl mx-auto w-full">

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Bugs & <span className="text-red-400">Fixes</span>
          </h1>
          <p className="text-ossium-muted text-lg max-w-2xl mx-auto">
            Don't let errors stop your flow. Find the solution in seconds.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-2xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-ossium-accent/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Paste your error message here..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-ossium-muted/50 focus:outline-none focus:ring-1 focus:ring-ossium-accent/30 transition-shadow shadow-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="w-5 h-5 text-ossium-muted absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredErrors.map(item => (
            <div key={item.id} className="bg-[#121212] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-200 group flex flex-col">
              {/* Header: Tech & Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-xl ${item.color}`}>{item.icon}</span>
                  <span className="font-bold text-sm text-gray-300">{item.tech}</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-ossium-muted border border-white/5">
                  {item.tag}
                </span>
              </div>

              {/* Error Message */}
              <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-4 font-mono text-xs text-red-300 break-words leading-relaxed group-hover:bg-red-500/10 transition-colors">
                <span className="select-none opacity-50 mr-2">$</span>
                {item.error}
              </div>

              {/* Cause & Fix */}
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider mb-1">Possibly Caused By</p>
                  <p className="text-sm text-gray-400 leading-snug">{item.cause}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] uppercase text-ossium-accent font-bold tracking-wider mb-1 flex items-center gap-1">
                    <span>⚡</span> Quick Fix
                  </p>
                  <div className="bg-[#0a0a0a] rounded border border-white/5 p-2 text-sm text-gray-200 font-mono">
                    {item.fix}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredErrors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-ossium-muted">No fixes found for "{search}".</p>
            <button className="mt-4 text-sm text-ossium-accent hover:underline">Submit a new error?</button>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default Errors;
