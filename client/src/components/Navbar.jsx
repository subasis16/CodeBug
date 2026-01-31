import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center justify-between px-6 md:px-12">
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <div className="w-8 h-8 bg-ossium-accent rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(202,255,51,0.4)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 13H8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 17H8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 9H8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">CodeBug</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ossium-muted">

        <Link to="/cheatsheets" className="hover:text-ossium-accent transition-colors">Cheat Sheets</Link>
        <Link to="/languages" className="hover:text-ossium-accent transition-colors">Languages</Link>
        <Link to="/roadmap" className="hover:text-ossium-accent transition-colors">Roadmaps</Link>
        <Link to="/errors" className="hover:text-ossium-accent transition-colors">Bugs & Fixes</Link>
        <Link to="/tools" className="hover:text-ossium-accent transition-colors">Tools</Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          className="p-2 ml-2 text-ossium-muted hover:text-white transition-colors border border-white/5 rounded-lg hover:bg-white/5 group hidden md:flex items-center gap-2"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[10px] font-mono border border-white/10 rounded px-1 group-hover:border-white/30">⌘K</span>
        </button>
        <Link to="/dashboard" className="bg-ossium-text text-ossium-darker px-4 py-2 rounded-md text-sm font-bold hover:bg-white/90 hover:scale-105 transition-all">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
