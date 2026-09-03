import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, Copy, ArrowDown, Cpu, Sparkles, ShieldCheck, Terminal, Award } from 'lucide-react';
import { PROFILE } from '../data';
import { ProfileImage } from './ProfileImage';

interface HeroProps {
  onCopyPhone: () => void;
  onCopyEmail: () => void;
  onExploreArchitecture: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCopyPhone,
  onCopyEmail,
  onExploreArchitecture,
}) => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-white bg-circuit-grid"
    >
      {/* Decorative High-Key Neon Glow Spots in Background */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-950 font-mono text-xs font-semibold shadow-[0_0_12px_rgba(0,229,106,0.2)] mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>AVAILABLE FOR 2026 CLOUD & BACKEND INTERNSHIPS</span>
        </motion.div>

        {/* Main Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-xs sm:text-sm text-slate-500 font-semibold tracking-wider uppercase block mb-3">
                Computer Science Engineering · Aspiring Cloud & Backend Architect
              </span>

              <h1 className="font-space text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[0.98] uppercase">
                ENGINEERING <br />
                THE <span>BACKBONE</span> <br />
                OF <span>CLOUD</span> SYSTEMS.
              </h1>
            </motion.div>

            {/* Subtitle / Bio summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              <strong className="text-slate-950 font-semibold">{PROFILE.name}</strong> — building the servers, resilient pipelines, and scalable distributed logic that run underneath the applications users rely on. Second-year CSE at <span className="text-slate-900 font-medium underline decoration-emerald-400 decoration-2">{PROFILE.university}</span>.
            </motion.p>

            {/* Action Pills & Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary Email CTA */}
              <a
                id="hero-email-btn"
                href={`mailto:${PROFILE.email}?subject=Collaboration%20or%20Internship%20Opportunity&body=Hi%20Shalender,`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs sm:text-sm font-bold border-2 border-slate-950 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                <span>Send Email</span>
              </a>

              {/* GitHub Link */}
              <a
                id="hero-github-link"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-mono text-xs sm:text-sm font-semibold border-2 border-slate-900 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Github className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                id="hero-linkedin-link"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-mono text-xs sm:text-sm font-semibold border-2 border-slate-900 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              {/* Copy Phone Button */}
              <button
                id="hero-copy-phone-btn"
                type="button"
                onClick={onCopyPhone}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-amber-50 text-slate-900 font-mono text-xs sm:text-sm font-semibold border-2 border-slate-900 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>{PROFILE.phone}</span>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </motion.div>
          </div>

          {/* Quick Metrics & Recognition Cards on Hero Right */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Primary Profile Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_#000] overflow-hidden"
            >
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <ProfileImage className="w-full h-full" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-xs text-white font-mono text-[10px] font-bold tracking-wider border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>ONLINE & SHIPPING</span>
                </div>
              </div>
              <div className="p-4 bg-white border-t-2 border-slate-900 flex items-center justify-between">
                <div>
                  <div className="font-space font-bold text-base text-slate-950 leading-tight">
                    {PROFILE.name}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 tracking-tight mt-0.5">
                    B.Tech CSE (Year 2) • LPU
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-950 font-mono text-[10px] font-bold border border-emerald-300">
                  GSA &apos;26
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_#000]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Key Highlights
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 text-[10px] font-mono font-bold border border-cyan-300">
                  VERIFIED
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-xl bg-slate-50 hover:bg-emerald-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 border border-emerald-400 text-emerald-800 flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs">
                    GSA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Google Student Ambassador '26
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Campus tech leader representing Google Developer tools
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-xl bg-slate-50 hover:bg-amber-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400 text-amber-800 flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs">
                    #10
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Hackathon Top 10 Finalist
                    </div>
                    <div className="text-[11px] text-slate-500">
                      50+ university teams in rapid product engineering
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-xl bg-slate-50 hover:bg-blue-50/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-400/20 border border-blue-400 text-blue-800 flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Infosys Certified: Cloud Computing
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Virtualization, IaaS/PaaS, distributed architecture
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Architecture Playground Trigger Button */}
              <button
                id="hero-trigger-architecture-btn"
                onClick={onExploreArchitecture}
                className="mt-4 w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 border border-slate-900 shadow-xs transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulate Cloud Pipeline</span>
                <span className="text-emerald-400 text-xs">→</span>
              </button>
            </motion.div>

            {/* Micro Quick Fact */}
            <div className="p-3 px-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                <span>Primary Focus:</span>
              </span>
              <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-300">
                Backend / Cloud Infra
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-300 relative overflow-hidden rounded-full">
              <span className="absolute top-0 left-0 w-full h-full bg-emerald-500 animate-[bounce_1.5s_infinite]" />
            </span>
            <span className="tracking-widest uppercase font-semibold text-slate-500">
              EXPLORE CODING & CLOUD PORTFOLIO
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span>LPU Phagwara, Punjab</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">2026 GSA Cohort</span>
          </div>
        </div>
      </div>
    </section>
  );
};
