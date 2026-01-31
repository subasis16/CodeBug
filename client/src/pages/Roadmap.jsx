import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-ossium-dark/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-ossium-accent/30 transition-all duration-300">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3">
            <div className="w-full h-48 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center p-4">
              <span className="text-xl font-bold text-center text-ossium-accent">
                {project.title} Architecture
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-ossium-muted mb-4">{project.description}</p>
              </div>
              <button
                className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${expanded ? 'rotate-180 bg-white/10' : 'hover:bg-white/5'}`}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-ossium-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6 border-t border-white/5 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

            {/* Tech Stack Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-8 h-8 flex items-center justify-center bg-black/40 rounded">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{tech.name}</div>
                      <div className="text-xs text-ossium-muted">{tech.type}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                APIs & Services
              </h4>
              <ul className="space-y-3">
                {project.apis.map((api, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ossium-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-ossium-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-white">{api.name}:</strong> {api.description}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Payment Gateway
              </h4>
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-white">{project.payment.provider}</span>
                </div>
                <p className="text-sm text-ossium-muted">{project.payment.details}</p>
              </div>
            </div>

            {/* File Structure Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                File Structure
              </h4>
              <div className="bg-[#0f111a] p-4 rounded-lg border border-white/10 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre className="whitespace-pre">{project.fileStructure}</pre>
              </div>

              <h4 className="text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-ossium-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How it works
              </h4>
              <p className="text-sm text-ossium-muted leading-relaxed">
                {project.howItWorks}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

const Roadmap = () => {
  const projects = [
    {
      title: "AI Chat Application",
      description: "A full-stack AI chat interface similar to ChatGPT, featuring real-time streaming, conversation history, and user authentication.",
      image: "/project-architecture.png",
      tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      techStack: [
        { name: "React", type: "Frontend", icon: "⚛️" },
        { name: "Node.js", type: "Backend", icon: "🟢" },
        { name: "MongoDB", type: "Database", icon: "🍃" },
        { name: "Tailwind", type: "Styling", icon: "🎨" },
      ],
      apis: [
        { name: "OpenAI API", description: "Used for generating AI responses (GPT-4/3.5) and embeddings." },
        { name: "Firebase Auth", description: "Handles user authentication and session management." },
        { name: "Socket.io", description: "Enables real-time bi-directional communication for streaming responses." }
      ],
      payment: {
        provider: "Stripe",
        details: "Implements subscription models using Stripe Checkout with webhook integration for plan updates."
      },
      fileStructure: `
/root
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Message.jsx
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   └── services/
│   │       └── api.js
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── chatController.js
│   ├── models/
│   │   └── Conversation.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── utils/
│   │   └── openai.js
│   └── server.js
└── .env
      `.trim(),
      howItWorks: "The client sends a message via WebSocket or HTTP POST. The Node.js server receives it, validates the user, and forwards the prompt to OpenAI's API. The streaming response is piped back to the client in chunks for a real-time feel. Conversations are stored in MongoDB linked to the user's ID."
    },
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online store with product catalog, cart functionality, secure checkout, and admin dashboard.",
      image: "https://placehold.co/800x400/1e293b/white?text=E-Commerce+Architecture",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
      techStack: [
        { name: "Next.js", type: "Full Stack", icon: "▲" },
        { name: "PostgreSQL", type: "Database", icon: "🐘" },
        { name: "Prisma", type: "ORM", icon: "P" },
        { name: "Stripe", type: "Payments", icon: "S" },
      ],
      apis: [
        { name: "Stripe API", description: "Processes credit card payments and manages order sessions." },
        { name: "SendGrid", description: "Sends transactional emails (order confirmation, shipping updates)." },
        { name: "Cloudinary", description: "Host and optimize product images." }
      ],
      payment: {
        provider: "Stripe Connect",
        details: "Handles marketplace payments and vendor payouts. Secure intent creation on server side."
      },
      fileStructure: `
/root
├── app/ (Next.js App Router)
│   ├── (shop)/
│   │   ├── product/[slug]/page.tsx
│   │   └── cart/page.tsx
│   ├── api/
│   │   └── webhook/route.ts
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── cart/
├── lib/
│   ├── prisma.ts
│   └── stripe.ts
├── prisma/
│   └── schema.prisma
└── public/
      `.trim(),
      howItWorks: "Uses Next.js App Router for server-side rendering of product pages for SEO. Cart state is managed locally (Zustand/Redux) and synced to local storage. Checkout redirects to Stripe. Webhooks listen for 'checkout.session.completed' to update order status in PostgreSQL via Prisma."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-ossium-darker pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Project <span className="text-ossium-accent">Blueprints</span>
            </h1>
            <p className="text-ossium-muted text-lg max-w-2xl">
              Deep dive into the architecture, tech stacks, and file structures of modern web applications.
              Understand how real-world projects are built from the ground up.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Roadmap;
