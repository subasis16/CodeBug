import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { toolsData } from '../data/tools';

const FeaturedTools = () => {
  // Grab top 4 tools
  const featured = toolsData.slice(0, 4);

  return (
    <section className="py-20 bg-ossium-darker border-t border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ossium-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-ossium-accent">Tools</span>
            </h2>
            <p className="text-ossium-muted text-lg max-w-xl">
              Essential software, extensions, and utilities to turbocharge your developer workflow.
            </p>
          </div>
          <Link
            to="/tools"
            className="flex items-center gap-2 text-ossium-accent font-medium hover:text-white transition-colors"
          >
            Explore all tools <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-ossium-accent/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-ossium-accent bg-ossium-accent/10 rounded border border-ossium-accent/20">
                  {item.category}
                </span>
                <div className="text-2xl text-ossium-muted group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ossium-accent transition-colors">
                {item.name}
              </h3>

              <p className="text-sm text-ossium-muted mb-6 flex-1 line-clamp-3">
                {item.desc}
              </p>

              <div className="space-y-3 mt-auto">
                <div className="bg-[#161616] p-3 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <FiDownload className="text-ossium-muted" size={12} />
                    <p className="text-[10px] uppercase text-ossium-muted font-bold tracking-wider">Install</p>
                  </div>
                  <code className="text-xs font-mono text-ossium-accent/90 block truncate">
                    {item.install}
                  </code>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
