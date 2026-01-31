import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SiPostman, SiEslint, SiPrettier, SiDocker, SiFigma,
  SiVim, SiMongodb, SiKubernetes,
  SiGit
} from 'react-icons/si';
import { FiSearch, FiDownload, FiActivity, FiCommand, FiCode, FiTerminal, FiGlobe, FiMoon, FiZap } from 'react-icons/fi';

const toolsData = [
  {
    id: 1,
    name: 'Postman',
    icon: <SiPostman />,
    category: 'API Testing',
    desc: 'Platform for building and using APIs. Simplifies each step of the lifecycle.',
    install: 'Download desktop app',
    workflow: 'Create Collection -> Add Request -> Send -> Inspect',
    link: 'https://www.postman.com/'
  },
  {
    id: 2,
    name: 'ESLint',
    icon: <SiEslint />,
    category: 'Linter',
    desc: 'Statically analyzes your code to quickly find problems.',
    install: 'npm install eslint --save-dev',
    workflow: 'npx eslint --init -> Configure Rules -> Run Lint',
    link: 'https://eslint.org/'
  },
  {
    id: 3,
    name: 'Prettier',
    icon: <SiPrettier />,
    category: 'Formatter',
    desc: 'An opinionated code formatter that supports many languages.',
    install: 'npm i -D prettier',
    workflow: 'Create .prettierrc -> Format on Save (VS Code)',
    link: 'https://prettier.io/'
  },
  {
    id: 4,
    name: 'Docker Desktop',
    icon: <SiDocker />,
    category: 'DevOps',
    desc: 'The fastest way to containerize applications.',
    install: 'Download from docker.com',
    workflow: 'Write Dockerfile -> docker build -> docker run',
    link: 'https://www.docker.com/products/docker-desktop/'
  },
  {
    id: 5,
    name: 'GitLens',
    icon: <SiGit />,
    category: 'VS Code Extension',
    desc: 'Supercharge Git inside VS Code. Visualize code authorship.',
    install: 'Install from Marketplace',
    workflow: 'Open file -> Hover line -> See commit history',
    link: 'https://www.gitkraken.com/gitlens'
  },
  {
    id: 8,
    name: 'Figma',
    icon: <SiFigma />,
    category: 'Design',
    desc: 'The collaborative interface design tool.',
    install: 'Web or Desktop App',
    workflow: 'Design UI -> Dev Mode -> Copy CSS',
    link: 'https://www.figma.com/'
  },
  {
    id: 9,
    name: 'VS Code',
    icon: <FiCode />,
    category: 'Editor',
    desc: 'Code editing. Redefined. The world\'s best editor.',
    install: 'code.visualstudio.com',
    workflow: 'Cmd+P (Files) -> Cmd+Shift+P (Command Palette)',
    link: 'https://code.visualstudio.com/'
  },
  {
    id: 10,
    name: 'Vim',
    icon: <SiVim />,
    category: 'Editor',
    desc: 'Highly configurable text editor built to make creating text efficient.',
    install: 'sudo apt install vim',
    workflow: ':w (save) -> :q (quit) -> i (insert)',
    link: 'https://www.vim.org/'
  },
  {
    id: 11,
    name: 'Chrome DevTools',
    icon: <FiGlobe />,
    category: 'Debug',
    desc: 'Set of web developer tools built directly into the browser.',
    install: 'Pre-installed',
    workflow: 'F12 -> Elements -> Console -> Network',
    link: 'https://developer.chrome.com/docs/devtools/'
  },
  {
    id: 12,
    name: 'Insomnia',
    icon: <FiMoon />,
    category: 'API Client',
    desc: 'The open-source, cross-platform API client for GraphQL/REST.',
    install: 'Download from insomnia.rest',
    workflow: 'New Request -> Select Method -> Send',
    link: 'https://insomnia.rest/'
  },
  {
    id: 13,
    name: 'MongoDB Compass',
    icon: <SiMongodb />,
    category: 'GUI',
    desc: 'The GUI for MongoDB. Visually explore your data.',
    install: 'Download from mongodb.com',
    workflow: 'Connect -> Select DB -> Aggregate',
    link: 'https://www.mongodb.com/products/tools/compass'
  },
  {
    id: 14,
    name: 'K8s Lens',
    icon: <SiKubernetes />,
    category: 'DevOps GUI',
    desc: 'The Kubernetes IDE. Monitor clusters in real-time.',
    install: 'Download from k8slens.dev',
    workflow: 'Add Cluster -> View Pods -> View Logs',
    link: 'https://k8slens.dev/'
  },
  {
    id: 15,
    name: 'Oh My Zsh',
    icon: <FiTerminal />,
    category: 'Terminal',
    desc: 'A framework for managing your Zsh configuration.',
    install: 'sh -c "$(curl -fsSL...)"',
    workflow: 'plugins=(git docker) -> source .zshrc',
    link: 'https://ohmyz.sh/'
  },
  {
    id: 16,
    name: 'Vite',
    icon: <FiZap />,
    category: 'Build Tool',
    desc: 'Next Generation Frontend Tooling. Instant Server Start.',
    install: 'npm create vite@latest',
    workflow: 'npm run dev -> HMR updates -> npm run build',
    link: 'https://vitejs.dev/'
  }
];

const Tools = () => {
  const [search, setSearch] = useState('');

  const filteredTools = toolsData.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 px-6 pb-20 w-full max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Developer <span className="text-ossium-muted text-3xl font-normal">&</span> Tools
          </h1>
          <p className="text-ossium-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Essential software, extensions, and utilities for the modern stack.
          </p>

          <div className="mt-10 max-w-lg mx-auto relative group">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full bg-[#121212] border border-white/5 rounded-full py-4 px-12 text-white placeholder-ossium-muted focus:outline-none focus:border-ossium-accent/50 focus:bg-[#1a1a1a] transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-ossium-muted group-focus-within:text-ossium-accent transition-colors" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-ossium-accent/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/5 text-3xl text-ossium-accent group-hover:bg-ossium-accent/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                    <span className="text-xs text-ossium-muted font-medium uppercase tracking-wide bg-[#161616] px-1.5 py-0.5 rounded border border-white/5 mt-1 inline-block">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1 flex flex-col">
                <p className="text-sm text-gray-400 leading-relaxed min-h-[40px]">
                  {item.desc}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="bg-[#161616] p-3 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <FiDownload className="text-ossium-muted" size={12} />
                      <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider">Install</p>
                    </div>
                    <code className="text-xs font-mono text-ossium-accent/90 block truncate">
                      {item.install}
                    </code>
                  </div>

                  <div className="bg-[#161616] p-3 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <FiActivity className="text-ossium-muted" size={12} />
                      <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider">Workflow</p>
                    </div>
                    <code className="text-xs font-mono text-gray-400 block break-words">
                      {item.workflow}
                    </code>
                  </div>
                </div>
              </div>

            </a>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-ossium-muted">
            <p className="text-xl">No tools found.</p>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default Tools;
