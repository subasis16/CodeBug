import React from 'react';

const CommunityLinks = () => {
  const links = [
    {
      id: 1,
      title: 'DevDocs.io',
      description: 'Combines multiple API documentations in a fast, organized, and searchable interface.',
      url: 'https://devdocs.io/',
      category: 'Documentation',
      author: 'Thibaut Courouble'
    },
    {
      id: 2,
      title: 'Roadmap.sh',
      description: 'Community driven roadmaps, articles and resources for developers.',
      url: 'https://roadmap.sh/',
      category: 'Learning',
      author: 'Kamran Ahmed'
    },
    {
      id: 3,
      title: 'Carbon',
      description: 'Create and share beautiful images of your source code.',
      url: 'https://carbon.now.sh/',
      category: 'Tools',
      author: 'Dawn Labs'
    },
    {
      id: 4,
      title: 'Excalidraw',
      description: 'Virtual whiteboard for sketching hand-drawn like diagrams.',
      url: 'https://excalidraw.com/',
      category: 'Design',
      author: 'Vjeux & Team'
    }
  ];

  return (
    <section className="py-20 bg-ossium-darker border-t border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ossium-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community <span className="text-ossium-accent">Resources</span>
            </h2>
            <p className="text-ossium-muted text-lg max-w-xl">
              A curated collection of tools, guides, and websites shared by developers, for developers.
              Found something useful? Contact Me!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 bg-[#0f111a] border border-white/5 rounded-xl hover:border-ossium-accent/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-ossium-accent bg-ossium-accent/10 rounded border border-ossium-accent/20">
                  {link.category}
                </span>
                <svg className="w-4 h-4 text-ossium-muted group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ossium-accent transition-colors">
                {link.title}
              </h3>

              <p className="text-sm text-ossium-muted mb-6 flex-1 line-clamp-3">
                {link.description}
              </p>

              <div className="pt-4 border-t border-white/5">
                <span className="text-xs text-ossium-muted">Created by {link.author}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section >
  );
};

export default CommunityLinks;
