import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SiTailwindcss, SiNodedotjs, SiGoogle, SiGithub, SiStripe
} from 'react-icons/si';
import { FiCommand, FiCheckCircle, FiSettings } from 'react-icons/fi';

const GuideCard = ({ guide }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-ossium-accent/30 transition-all duration-300">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <div className="text-3xl text-white">
              {guide.icon}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white max-w-[80%]">{guide.title}</h3>
              <button
                className={`p-2 rounded-full border border-white/10 transition-transform duration-300 text-white ${expanded ? 'rotate-180 bg-white/10' : 'hover:bg-white/5'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <p className="text-ossium-muted text-sm mb-4 leading-relaxed">{guide.description}</p>

            <div className="flex flex-wrap gap-2">
              {guide.tags.map((tag, index) => (
                <span key={index} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] uppercase font-bold tracking-wider text-ossium-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-8 pt-2 border-t border-white/5 bg-black/20">
          <div className="space-y-8 mt-4">

            {/* Steps */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <FiCheckCircle className="text-ossium-accent" /> Setup Steps
              </h4>
              <div className="space-y-4">
                {guide.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 last:border-0 pb-1">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-ossium-accent ring-4 ring-[#121212]" />
                    <h5 className="text-white font-semibold text-sm mb-1">{step.title}</h5>
                    <p className="text-ossium-muted text-sm mb-3">{step.desc}</p>
                    {step.code && (
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-300 relative group">
                        <pre className="whitespace-pre-wrap break-all">{step.code}</pre>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(step.code);
                          }}
                          className="absolute top-2 right-2 p-1.5 bg-white/10 rounded hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <span className="text-[10px] text-white">Copy</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Configuration / Notes */}
            {guide.config && (
              <div>
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <FiSettings className="text-ossium-accent" /> Configuration
                </h4>
                <div className="bg-[#0f111a] p-4 rounded-lg border border-white/10 font-mono text-xs text-blue-300 overflow-x-auto">
                  <pre className="whitespace-pre">{guide.config}</pre>
                </div>
              </div>
            )}

            {/* Resources / Links */}
            {guide.resources && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.resources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-4 bg-white/5 border border-white/5 rounded-lg hover:border-ossium-accent/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="font-bold text-white text-sm mb-1 group-hover:text-ossium-accent transition-colors">{res.title}</div>
                    <div className="text-xs text-ossium-muted">{res.desc}</div>
                  </a>
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

const Setup = () => {
  const guides = [
    {
      id: 'tailwind',
      title: "Tailwind CSS Integration",
      description: "Utility-first CSS framework for rapid UI development. Learn how to install and configure it in Vite/React projects.",
      icon: <SiTailwindcss className="text-cyan-400" />,
      tags: ["CSS", "Frontend", "Vite"],
      steps: [
        {
          title: "Install Dependencies",
          desc: "Install tailwindcss and its peer dependencies via npm.",
          code: "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"
        },
        {
          title: "Configure Template Paths",
          desc: "Add the paths to all of your template files in your tailwind.config.js file.",
          code: `/** @type {import('tailwindcss').Config} */\nexport default {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}`
        },
        {
          title: "Add Tailwind Directives",
          desc: "Add the @tailwind directives for each of Tailwind's layers to your main CSS file.",
          code: "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
        }
      ],
      resources: [
        { title: "Official Installation Guide", url: "https://tailwindcss.com/docs/guides/vite", desc: "The definitive guide for Vite projects." },
        { title: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet", desc: "Quick class lookup property reference." }
      ]
    },
    {
      id: 'node-server',
      title: "Node.js Express Server",
      description: "Setup a robust backend API using Node.js and Express with ES Module support.",
      icon: <SiNodedotjs className="text-green-500" />,
      tags: ["Backend", "API", "JavaScript"],
      steps: [
        {
          title: "Initialize Project",
          desc: "Create a package.json file and set type to module.",
          code: "npm init -y\nnpm pkg set type=\"module\""
        },
        {
          title: "Install Express & CORS",
          desc: "Install the core framework and middleware.",
          code: "npm install express cors dotenv"
        },
        {
          title: "Create Server Entry",
          desc: "Basic index.js setup with routes and error handling.",
          code: `import express from 'express';\nimport cors from 'cors';\nimport dotenv from 'dotenv';\n\ndotenv.config();\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\n\napp.get('/', (req, res) => res.send('API Running'));\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`
        }
      ]
    },
    {
      id: 'google-auth',
      title: "Google Authentication",
      description: "Implement 'Sign in with Google' using Supabase Auth or standard OAuth 2.0 flow.",
      icon: <SiGoogle className="text-white" />,
      tags: ["Auth", "Security", "OAuth"],
      steps: [
        {
          title: "Google Cloud Console",
          desc: "Create a new project in Google Cloud Console -> APIs & Services -> Credentials. Configure OAuth Consent Screen.",
          code: "Authorized Redirect URIs:\nhttps://<your-project>.supabase.co/auth/v1/callback"
        },
        {
          title: "Get Credentials",
          desc: "Create new OAuth 2.0 Client ID (Web Application). Copy Client ID and Client Secret.",
          code: "Client ID: xxxxx.apps.googleusercontent.com\nClient Secret: GOCSPX-xxxxx"
        },
        {
          title: "Supabase Configuration",
          desc: "Go to Supabase Dashboard -> Authentication -> Providers. Enable Google and paste keys.",
          code: "Enable Google: ON\nPaste Client ID and Secret.\nSave."
        },
        {
          title: "Frontend Implementation",
          desc: "Call the signInWithOAuth method.",
          code: `const { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'google',\n});`
        }
      ]
    },
    {
      id: 'github-auth',
      title: "GitHub Authentication",
      description: "Enable developer login via GitHub OAuth Apps.",
      icon: <SiGithub className="text-white" />,
      tags: ["Auth", "DevTools"],
      steps: [
        {
          title: "Register OAuth App",
          desc: "GitHub Settings -> Developer Settings -> OAuth Apps -> New OAuth App.",
          code: "Homepage URL: http://localhost:5173\nCallback URL: https://<project>.supabase.co/auth/v1/callback"
        },
        {
          title: "Generate Keys",
          desc: "Generate a new Client Secret. Copy it along with the Client ID.",
          code: "Client ID: Iv1.xxxx\nClient Secret: xxxx"
        },
        {
          title: "Connect Provider",
          desc: "Add credentials to your Auth provider settings (Supabase, Firebase, or NextAuth).",
          code: "// Supabase Login\nsupabase.auth.signInWithOAuth({\n  provider: 'github'\n})"
        }
      ]
    },
    {
      id: 'payments',
      title: "Stripe Payment Gateway",
      description: "Accept payments globally using Stripe Checkout.",
      icon: <SiStripe className="text-[#635BFF]" />,
      tags: ["Payments", "SaaS", "E-commerce"],
      steps: [
        {
          title: "Create Stripe Account",
          desc: "Register at dashboard.stripe.com. Get Publishable Key and Secret Key.",
          code: "pk_test_...\nsk_test_..."
        },
        {
          title: "Backend Checkout Session",
          desc: "Create a POST endpoint to generate a session URL.",
          code: `const session = await stripe.checkout.sessions.create({\n  line_items: [{ price: 'price_id', quantity: 1 }],\n  mode: 'payment',\n  success_url: \`\${YOUR_DOMAIN}/success\`,\n  cancel_url: \`\${YOUR_DOMAIN}/cancel\`,\n});\nres.json({ url: session.url });`
        },
        {
          title: "Frontend Redirect",
          desc: "Redirect the user to the Stripe hosted checkout page.",
          code: `const handleCheckout = async () => {\n  const res = await fetch('/api/create-checkout-session', { method: 'POST' });\n  const { url } = await res.json();\n  window.location.href = url;\n}`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ossium-darker flex flex-col font-sans">
      <Navbar />
      <div className="pt-24 pb-20 px-6 md:px-12 flex-1 max-w-7xl mx-auto w-full">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-ossium-accent/10 rounded-xl border border-ossium-accent/20 text-ossium-accent">
              <FiCommand size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Setup <span className="text-ossium-accent">Guides</span>
            </h1>
          </div>
          <p className="text-ossium-muted text-lg max-w-2xl leading-relaxed">
            Essential configuration guides for modern development stacks.
            From authentication and payments to server environments and styling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Setup;
