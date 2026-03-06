import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiList, FiRepeat, FiBox, FiDatabase, FiPlus, FiTerminal, FiAlertTriangle, FiFile, FiSearch, FiClock, FiCommand, FiArrowRight } from 'react-icons/fi';

const concepts = [
  { id: 'basic-syntax', title: 'Basic Syntax', icon: <FiCode />, desc: 'Structure, variables, and data types.' },
  { id: 'conditional-statements', title: 'Conditionals', icon: <FiList />, desc: 'If, else, switch, and logic flow.' },
  { id: 'loops', title: 'Loops', icon: <FiRepeat />, desc: 'For, while, do-while iteration.' },
  { id: 'functions', title: 'Functions', icon: <FiBox />, desc: 'Scope, parameters, and returns.' },
  { id: 'data-structures', title: 'Data Structures', icon: <FiDatabase />, desc: 'Arrays, Objects, Maps, Sets.' },
  { id: 'operators', title: 'Operators', icon: <FiPlus />, desc: 'Arithmetic, logical, comparison.' },
  { id: 'input-output', title: 'Input/Output', icon: <FiTerminal />, desc: 'Console, streams, and prompts.' },
  { id: 'error-handling', title: 'Error Handling', icon: <FiAlertTriangle />, desc: 'Try, catch, throw, custom errors.' },
  { id: 'file-handling', title: 'File Handling', icon: <FiFile />, desc: 'Read, write, append operations.' },
  { id: 'common-algorithms', title: 'Algorithms', icon: <FiSearch />, desc: 'Sorting, searching, traversal.' },
  { id: 'time-complexity', title: 'Time Complexity', icon: <FiClock />, desc: 'Big O notation, efficiency.' },
  { id: 'useful-shortcuts', title: 'Shortcuts', icon: <FiCommand />, desc: 'Editor and IDE productivity.' },
];

const CoreConceptsOverview = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-ossium-darker">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Core <span className="text-ossium-accent">Fundamentals</span>
            </h2>
            <p className="text-ossium-muted text-base sm:text-lg max-w-xl">
              Master the universal building blocks of programming, from syntax to algorithms.
            </p>
          </div>
          <Link
            to="/fundamentals"
            className="flex items-center gap-2 text-ossium-accent font-medium hover:text-white transition-colors"
          >
            View all fundamentals <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {concepts.slice(0, 6).map((item) => (
            <Link
              key={item.id}
              to={`/fundamentals#${item.id}`}
              className="group relative p-6 sm:p-8 bg-[#0f0f0f] rounded-xl border border-white/5 hover:border-ossium-accent/30 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="text-ossium-accent mb-4 sm:mb-6 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-ossium-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ossium-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm font-medium text-white group-hover:text-ossium-accent transition-colors">
                  Explore
                  <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreConceptsOverview;
