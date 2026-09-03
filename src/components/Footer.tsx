import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { PROFILE } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-slate-900 bg-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-950 text-white font-mono text-sm font-bold flex items-center justify-center border-2 border-slate-900 shadow-xs">
                {PROFILE.initials}
              </span>
              <span className="font-space font-bold text-xl text-slate-950">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Computer Science Engineering undergraduate at Lovely Professional University. Focused on high-resilience cloud infrastructure, relational data pipelines, and backend systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Google Student Ambassador &apos;26 Cohort</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
              Sections
            </div>
            <ul className="space-y-2 font-mono text-xs text-slate-700">
              <li>
                <a href="#build" className="hover:text-emerald-600 transition-colors">01. The Build (Projects)</a>
              </li>
              <li>
                <a href="#stack" className="hover:text-emerald-600 transition-colors">02. The Stack (Skills)</a>
              </li>
              <li>
                <a href="#cloud-lab" className="hover:text-emerald-600 transition-colors">03. Cloud Backbone Lab</a>
              </li>
              <li>
                <a href="#path" className="hover:text-emerald-600 transition-colors">04. The Path (Education)</a>
              </li>
              <li>
                <a href="#recognition" className="hover:text-emerald-600 transition-colors">05. Recognition & Certs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-600 transition-colors">06. Contact & Connect</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
              Connect
            </div>
            <ul className="space-y-2 font-mono text-xs text-slate-700">
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-950 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github/{PROFILE.githubUser}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin/shalender-singh-rawat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PROFILE.email}</span>
                </a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-900 text-xs font-mono text-slate-700 hover:text-slate-950 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>{PROFILE.name} © {currentYear}</span>
            <span className="mx-2">•</span>
            <span>Punjab, India</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Clean White + Neon Accents Edition</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          </div>
        </div>
      </div>
    </footer>
  );
};
