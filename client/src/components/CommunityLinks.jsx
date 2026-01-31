import React, { useState } from 'react';

const CommunityLinks = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: 'DevDocs.io',
      description: 'Combines multiple API documentations in a fast, organized, and searchable interface.',
      url: 'https://devdocs.io/',
      category: 'Documentation',
      author: 'Community'
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
      author: 'Carbon Team'
    },
    {
      id: 4,
      title: 'Excalidraw',
      description: 'Virtual whiteboard for sketching hand-drawn like diagrams.',
      url: 'https://excalidraw.com/',
      category: 'Design',
      author: 'Excalidraw'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', description: '', url: '', category: 'Tools' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const linkToAdd = {
      id: Date.now(),
      ...newLink,
      author: 'Guest User'
    };
    setLinks([...links, linkToAdd]);
    setIsModalOpen(false);
    setNewLink({ title: '', description: '', url: '', category: 'Tools' });
  };

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
              Found something useful? Add it to the list!
            </p>
          </div>
          <div className="relative group">
            <button
              disabled
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-ossium-muted font-semibold cursor-not-allowed opacity-60"
            >
              <svg className="w-5 h-5 text-ossium-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Resource
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-xs text-white rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Coming soon
            </div>
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

              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                <span className="text-xs text-ossium-muted">Added by {link.author}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Add Resource Modal */}
      {
        isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-ossium-muted hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-xl font-bold text-white mb-1">Add a Resource</h3>
              <p className="text-sm text-ossium-muted mb-6">Share a useful tool or website with the community.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-ossium-muted mb-1.5 uppercase">Resource Name</label>
                  <input
                    required
                    type="text"
                    value={newLink.title}
                    onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:border-ossium-accent/50 transition-colors"
                    placeholder="e.g. Stack Overflow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ossium-muted mb-1.5 uppercase">URL</label>
                  <input
                    required
                    type="url"
                    value={newLink.url}
                    onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:border-ossium-accent/50 transition-colors"
                    placeholder="https://..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ossium-muted mb-1.5 uppercase">Category</label>
                    <select
                      value={newLink.category}
                      onChange={(e) => setNewLink({ ...newLink, category: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-ossium-accent/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Tools">Tools</option>
                      <option value="Learning">Learning</option>
                      <option value="Design">Design</option>
                      <option value="Documentation">Docs</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ossium-muted mb-1.5 uppercase">Description</label>
                  <textarea
                    required
                    rows="3"
                    value={newLink.description}
                    onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus:border-ossium-accent/50 transition-colors resize-none"
                    placeholder="Briefly describe what this resource is for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 bg-ossium-accent text-ossium-darker font-bold rounded-lg hover:brightness-110 transition-all active:scale-95"
                >
                  Add to List
                </button>
              </form>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default CommunityLinks;
