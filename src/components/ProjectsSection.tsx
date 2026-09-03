import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Gamepad2, Car, Sparkles, Layers, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'features' | 'architecture' | 'code'>>({
    'tikki-topple': 'features',
    'carvault': 'features',
  });
  const [inspectModalProject, setInspectModalProject] = useState<Project | null>(null);

  const setTab = (projectId: string, tab: 'features' | 'architecture' | 'code') => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="build" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">01</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            The Build
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-12">
          End-to-end engineered software spanning game engines with procedural audio synthesis to data-dense automotive specification platforms.
        </p>

        {/* Projects Grid / Stack */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const currentTab = activeTabs[project.id] || 'features';
            const isGame = project.id === 'tikki-topple';

            return (
              <div
                key={project.id}
                className="group rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] transition-all overflow-hidden"
              >
                {/* Top Card Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6 border-b-2 border-slate-900 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-slate-900 ${
                        isGame
                          ? 'bg-violet-300 text-violet-950 shadow-[2px_2px_0px_0px_#000]'
                          : 'bg-cyan-300 text-cyan-950 shadow-[2px_2px_0px_0px_#000]'
                      }`}
                    >
                      {isGame ? <Gamepad2 className="w-5 h-5 stroke-[2.5]" /> : <Car className="w-5 h-5 stroke-[2.5]" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-space font-bold text-base sm:text-lg text-slate-950">
                          {project.title}
                        </span>
                        <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500 font-semibold uppercase">
                          • {project.period}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-slate-500">
                        {project.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs font-bold border border-slate-900 shadow-xs transition-colors"
                      id={`project-github-link-${project.id}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <button
                      onClick={() => setInspectModalProject(project)}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs font-bold border border-slate-900 transition-colors"
                      title="Inspect full technical details"
                    >
                      Spec Sheet
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  {/* Headline & Description */}
                  <h3 className="font-space text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {project.headline}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Interactive Tab Switcher */}
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
                    <button
                      onClick={() => setTab(project.id, 'features')}
                      className={`px-3 py-1 rounded-lg font-mono text-xs font-bold whitespace-nowrap transition-all ${
                        currentTab === 'features'
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      Key Features & Scope
                    </button>
                    <button
                      onClick={() => setTab(project.id, 'architecture')}
                      className={`px-3 py-1 rounded-lg font-mono text-xs font-bold whitespace-nowrap transition-all ${
                        currentTab === 'architecture'
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      Architecture & AI Logic
                    </button>
                    <button
                      onClick={() => setTab(project.id, 'code')}
                      className={`px-3 py-1 rounded-lg font-mono text-xs font-bold whitespace-nowrap transition-all ${
                        currentTab === 'code'
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      Code Snippet
                    </button>
                  </div>

                  {/* Tab Contents */}
                  {currentTab === 'features' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2.5">
                        {project.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Card */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center">
                        <div className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                          Engineering Metrics
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {project.metrics?.map((m, mIdx) => (
                            <div key={mIdx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                              <div className="font-mono text-[11px] text-slate-500">{m.label}</div>
                              <div className="font-space font-bold text-sm sm:text-base text-slate-950 mt-0.5">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab === 'architecture' && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
                      {isGame ? (
                        <>
                          <p>
                            <strong>State Machine:</strong> The game enforces a strict 20-round lifecycle where players draw secret secret Tikki identity cards. Placement shifts and elimination cards are validated algorithmically before triggering animation frames.
                          </p>
                          <p>
                            <strong>Three AI Tiers:</strong> Easy randomly samples valid actions; Medium prioritizes advancing known matching colors; Hard simulates 2 steps ahead to execute tactical blockades on the opponent's pieces.
                          </p>
                          <p>
                            <strong>Zero External Audio Overhead:</strong> Sound waves are computed dynamically using trigonometric arrays, converted to 16-bit PCM buffers, and fed into Pygame's sound array mixer.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <strong>Schema-Driven Architecture:</strong> Specifications are maintained in a structured JSON catalog that separates dynamic specs (engine, displacement, aspiration, transmission) from visual assets.
                          </p>
                          <p>
                            <strong>Sub-millisecond Filtering:</strong> Search input events execute debounced queries across compound keys with zero UI jitter, ensuring instant responsiveness even on low-powered mobile devices.
                          </p>
                        </>
                      )}
                    </div>
                  )}

                  {currentTab === 'code' && project.codeSnippet && (
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                        <span className="text-emerald-400 font-bold">
                          {project.codeSnippet.filename}
                        </span>
                        <span className="text-slate-500 text-[10px] uppercase">
                          {project.codeSnippet.language}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] mb-3">
                        {project.codeSnippet.explanation}
                      </p>
                      <pre className="overflow-x-auto text-[11px] leading-relaxed text-emerald-300">
                        <code>{project.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Tags Row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:border-emerald-400 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inspect Spec Sheet Modal */}
      <AnimatePresence>
        {inspectModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-2xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#000] p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono text-[11px] font-bold">
                    FULL SPEC SHEET
                  </span>
                  <h3 className="font-space text-xl font-bold text-slate-950">
                    {inspectModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setInspectModalProject(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <p>{inspectModalProject.description}</p>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-900 uppercase">
                    Key Implementations
                  </h4>
                  {inspectModalProject.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <a
                    href={inspectModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 text-white font-mono text-xs font-bold hover:bg-slate-800"
                  >
                    <Github className="w-4 h-4" />
                    Open Repository
                  </a>
                  <button
                    onClick={() => setInspectModalProject(null)}
                    className="px-4 py-2 rounded-xl border border-slate-300 font-mono text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
