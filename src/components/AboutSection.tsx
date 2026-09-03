import React from 'react';
import { Terminal, Shield, Rocket, Users, Sparkles } from 'lucide-react';
import { PROFILE } from '../data';
import { ProfileImage } from './ProfileImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">05</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Profile Card + Big Year / Cohort Stamp */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_0px_#000]">
            {/* Embedded Portrait Photo */}
            <div className="mb-6 pb-6 border-b border-slate-200 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-900 shadow-[3px_3px_0px_0px_#000] flex-shrink-0 bg-slate-100">
                <ProfileImage className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-space font-bold text-base text-slate-950 leading-tight">
                  {PROFILE.name}
                </h3>
                <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                  Aspiring Cloud & Backend Engineer
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Second-Year CSE
                </div>
              </div>
            </div>

            <div className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
              Active Cohort
            </div>
            <div className="font-space text-5xl sm:text-6xl font-bold text-slate-950 tracking-tight flex items-baseline gap-2">
              <span>2026</span>
              <span className="text-emerald-500 text-3xl font-bold">*</span>
            </div>
            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-mono text-xs font-bold border border-slate-900 shadow-xs">
              Google Student Ambassador
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 text-xs font-mono text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Degree</span>
                <span className="font-bold text-slate-900">B.Tech CSE (Year 2)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">University</span>
                <span className="font-bold text-slate-900">LPU Punjab</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Target Role</span>
                <span className="font-bold text-emerald-700">Cloud / Backend</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Philosophy</span>
                <span className="font-bold text-slate-900">Ship complete code</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Engineering Values */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-slate-50 text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                I&apos;m a Computer Science Engineering student at <strong>Lovely Professional University</strong>, currently in my second year and dedicated to mastering <strong>cloud and backend systems</strong> — the reliable servers, databases, and network topology that make applications scale under real-world pressure.
              </p>
              <p>
                I&apos;ve established core foundations through <strong>Infosys Springboard&apos;s Cloud Computing</strong> certification, covering virtualized instances, IaaS/PaaS models, and distributed architecture.
              </p>
              <p>
                Earlier projects — whether engineering an algorithmic Python strategy game with minimax-style AI and pure procedural audio synthesis, or building a high-speed automotive specification platform — taught me the irreplaceable discipline of <strong>shipping working software from end to end</strong> rather than stopping at theory.
              </p>
              <p>
                Beyond academics, I was selected into the <strong>Google Student Ambassador (GSA) 2026</strong> cohort to advocate developer tools on campus, and placed in the top 10 among 50+ collegiate teams in competitive hackathons.
              </p>
            </div>

            {/* Core Values / Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#000]">
                <Rocket className="w-5 h-5 text-emerald-600 mb-2" />
                <div className="font-space font-bold text-sm text-slate-900">
                  Ship Over Speculate
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Turning architecture ideas into runnable, tested code with zero dead weight.
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#000]">
                <Shield className="w-5 h-5 text-blue-600 mb-2" />
                <div className="font-space font-bold text-sm text-slate-900">
                  Resilience by Design
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Focusing on latency guarantees, schema integrity, and error recovery.
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#000]">
                <Users className="w-5 h-5 text-amber-600 mb-2" />
                <div className="font-space font-bold text-sm text-slate-900">
                  Community Advocacy
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Leading developer workshops as a 2026 Google Student Ambassador.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
