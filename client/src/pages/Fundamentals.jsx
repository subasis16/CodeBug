import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { fundamentalsData } from '../data/fundamentals';

const Fundamentals = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState(fundamentalsData[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    fundamentalsData.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-ossium-darker text-ossium-text font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 px-6 pb-20 w-full max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Programming <span className="text-ossium-accent">Fundamentals</span>
          </h1>
          <p className="text-ossium-muted text-lg leading-relaxed">
            The core building blocks of programming. Master these concepts to write better, more efficient code in any language.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {fundamentalsData.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === section.id
                  ? 'bg-ossium-accent text-ossium-darker font-bold shadow-[0_0_10px_rgba(202,255,51,0.3)]'
                  : 'bg-[#121212] border border-white/5 text-ossium-muted hover:text-white hover:border-white/10 hover:bg-white/5'
                }`}
            >
              {section.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {fundamentalsData.map(section => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <span className="text-ossium-accent">#</span>
                  {section.title}
                </h2>
                <p className="text-ossium-muted text-lg mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-8">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="bg-[#121212] border border-white/5 rounded-xl p-6 md:p-8 hover:border-white/10 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-sm text-ossium-muted mb-6">{item.desc}</p>

                      <div className="bg-[#0a0a0a] rounded-lg border border-white/5 overflow-hidden">
                        <div className="flex px-4 py-3 border-b border-white/5 flex-row items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-gray-300">
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
};

export default Fundamentals;
