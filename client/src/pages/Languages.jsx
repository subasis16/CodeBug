import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SiJavascript, SiReact, SiPython, SiGo,
  SiRust, SiCplusplus, SiTypescript, SiPhp,
  SiRuby, SiSwift, SiKotlin, SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiSearch, FiAlertTriangle, FiCode, FiLayers, FiLayout, FiZap } from 'react-icons/fi';

const languagesData = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <SiJavascript />,
    type: 'Language',
    purpose: 'Web Development, Server-side',
    syntax: 'const x = 10;',
    structure: '/src, /public, package.json',
    mistakes: 'Implicit type coercion',
    color: 'text-yellow-400',
    expert_tip: "Use WeakMap for private class data to avoid memory leaks."
  },
  {
    id: 2,
    name: 'React',
    icon: <SiReact />,
    type: 'Framework',
    purpose: 'Building User Interfaces',
    syntax: 'const App = () => <div />;',
    structure: '/components, /hooks',
    mistakes: 'Mutating state directly',
    color: 'text-cyan-400',
    expert_tip: "Use useLayoutEffect for DOM measurements to prevent flicker."
  },
  {
    id: 3,
    name: 'Python',
    icon: <SiPython />,
    type: 'Language',
    purpose: 'Data Science, Backend',
    syntax: 'def func(): return "Hi"',
    structure: 'requirements.txt, /venv',
    mistakes: 'Indentation errors',
    color: 'text-blue-500',
    expert_tip: "Use __slots__ to save memory in classes with many instances."
  },
  {
    id: 4,
    name: 'Go',
    icon: <SiGo />,
    type: 'Language',
    purpose: 'Cloud, Microservices',
    syntax: 'func main() { ... }',
    structure: 'go.mod, /cmd, /pkg',
    mistakes: 'Unused variables strictness',
    color: 'text-cyan-300',
    expert_tip: "Use buffered channels to limit concurrency without blocking."
  },
  {
    id: 5,
    name: 'Vue.js',
    icon: <FiLayout />,
    type: 'Framework',
    purpose: 'Progressive Web Apps',
    syntax: '<template>{{msg}}</template>',
    structure: '/components, App.vue',
    mistakes: 'Reactivity pitfalls',
    color: 'text-green-500',
    expert_tip: "Use shallowRef for large objects to skip deep reactivity cost."
  },
  {
    id: 6,
    name: 'Rust',
    icon: <SiRust />,
    type: 'Language',
    purpose: 'Systems, WebAssembly',
    syntax: 'fn main() { ... }',
    structure: 'Cargo.toml, /src',
    mistakes: 'Borrow checker struggles',
    color: 'text-orange-500',
    expert_tip: "Use Interior Mutability (RefCell) for mocking in tests."
  },
  {
    id: 7,
    name: 'Java',
    icon: <FaJava />,
    type: 'Language',
    purpose: 'Enterprise, Android',
    syntax: 'System.out.println("Hi");',
    structure: '/src/main/java, pom.xml',
    mistakes: 'NullPointerException',
    color: 'text-orange-600',
    expert_tip: "Use CompletableFuture for non-blocking asynchronous chains."
  },
  {
    id: 8,
    name: 'C++',
    icon: <SiCplusplus />,
    type: 'Language',
    purpose: 'Game Dev, Systems',
    syntax: 'std::cout << "Hi";',
    structure: 'CMakeLists.txt, /src',
    mistakes: 'Memory leaks, Pointers',
    color: 'text-blue-700',
    expert_tip: "Use RAII (Resource Acquisition Is Initialization) for resource safety."
  },
  {
    id: 9,
    name: 'TypeScript',
    icon: <SiTypescript />,
    type: 'Language',
    purpose: 'Large Scale Web Apps',
    syntax: 'const x: number = 10;',
    structure: 'tsconfig.json, /src',
    mistakes: 'Any type overuse',
    color: 'text-blue-600',
    expert_tip: "Use discriminating unions for type-safe state reduction."
  },
  {
    id: 10,
    name: 'PHP',
    icon: <SiPhp />,
    type: 'Language',
    purpose: 'Server-side Web',
    syntax: 'echo "Hello";',
    structure: 'composer.json, /vendor',
    mistakes: 'Inconsistent naming',
    color: 'text-indigo-400',
    expert_tip: "Use Generator functions to process large datasets memory-efficiently."
  },
  {
    id: 11,
    name: 'Ruby',
    icon: <SiRuby />,
    type: 'Language',
    purpose: 'Web (Rails), Scripting',
    syntax: 'puts "Hello"',
    structure: 'Gemfile, Rakefile',
    mistakes: 'Overuse of magic',
    color: 'text-red-500',
    expert_tip: "Use memoization ( ||= ) to cache expensive method results."
  },
  {
    id: 12,
    name: 'Swift',
    icon: <SiSwift />,
    type: 'Language',
    purpose: 'Apple Ecosystem',
    syntax: 'print("Hello")',
    structure: 'Package.swift, /Sources',
    mistakes: 'Strong reference cycles',
    color: 'text-orange-500',
    expert_tip: "Use copy-on-write optimization for custom value types."
  },
  {
    id: 13,
    name: 'Kotlin',
    icon: <SiKotlin />,
    type: 'Language',
    purpose: 'Android, Multiplatform',
    syntax: 'println("Hello")',
    structure: 'build.gradle.kts, /src',
    mistakes: 'Null safety assumptions',
    color: 'text-purple-500',
    expert_tip: "Use inline functions for high-order functions to reduce overhead."
  },
  {
    id: 14,
    name: 'SQL',
    icon: <SiPostgresql />,
    type: 'Language',
    purpose: 'Database Management',
    syntax: 'SELECT * FROM users;',
    structure: 'schema.sql, migrations',
    mistakes: 'Injection vulnerability',
    color: 'text-blue-300',
    expert_tip: "Use EXPLAIN ANALYZE to optimize query execution plans."
  }
];

const Languages = () => {
  const [search, setSearch] = useState('');

  const filteredLanguages = languagesData.filter(lang =>
    lang.name.toLowerCase().includes(search.toLowerCase()) ||
    lang.purpose.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 px-6 pb-20 w-full max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Languages <span className="text-ossium-muted text-3xl font-normal">&</span> Frameworks
          </h1>
          <p className="text-ossium-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Technical usage guides, syntax references, and structural patterns.
          </p>

          {/* Minimal Search */}
          <div className="mt-10 max-w-lg mx-auto relative group">
            <input
              type="text"
              placeholder="Search stack..."
              className="w-full bg-[#121212] border border-white/5 rounded-full py-4 px-12 text-white placeholder-ossium-muted focus:outline-none focus:border-ossium-accent/50 focus:bg-[#1a1a1a] transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-ossium-muted group-focus-within:text-ossium-accent transition-colors" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLanguages.map(item => (
            <div key={item.id} className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-ossium-accent/20 transition-all duration-300 group hover:-translate-y-1">

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-white/5 ${item.color} text-3xl transition-transform group-hover:scale-110 duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      {item.type === 'Language' ? <FiCode size={12} className="text-ossium-muted" /> : <FiLayers size={12} className="text-ossium-muted" />}
                      <span className="text-xs text-ossium-muted font-medium uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 bg-[#161616] p-3 rounded border border-white/5">
                    <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider mb-1">Purpose</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.purpose}</p>
                  </div>
                  <div className="col-span-2 bg-[#161616] p-3 rounded border border-white/5">
                    <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider mb-1">Structure</p>
                    <p className="text-xs font-mono text-ossium-accent/90 truncate">{item.structure}</p>
                  </div>
                </div>

                <div className="bg-[#161616] p-3 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                  <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider mb-2">Syntax</p>
                  <code className="text-xs font-mono text-gray-400 block break-words">
                    {item.syntax}
                  </code>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <FiAlertTriangle className="text-red-400 shrink-0 mt-0.5" size={14} />
                  <div>
                    <p className="text-[10px] uppercase text-red-400 font-bold tracking-wider mb-0.5">Watch Out</p>
                    <p className="text-xs text-ossium-muted">{item.mistakes}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 mt-3 border-t border-white/5 bg-yellow-500/5 p-2 rounded">
                  <FiZap className="text-yellow-400 shrink-0 mt-0.5" size={14} />
                  <div>
                    <p className="text-[10px] uppercase text-yellow-400 font-bold tracking-wider mb-0.5">Pro Tip</p>
                    <p className="text-xs text-ossium-muted">{item.expert_tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLanguages.length === 0 && (
          <div className="text-center py-20 text-ossium-muted">
            <p className="text-xl">No matching stack found.</p>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default Languages;
