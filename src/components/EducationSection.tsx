import React, { useState } from 'react';
import { MapPin, GraduationCap, ChevronDown, Sparkles, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';
import { EDUCATION, TRAINING } from '../data';

export const EducationSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('lpu');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="path" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">03</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            The Path
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-10">
          Academic foundation and progression through computer science, software engineering, and analytical sciences.
        </p>

        {/* Education Timeline */}
        <div className="space-y-4">
          {EDUCATION.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const isCurrent = index === 0;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border-2 border-slate-900 bg-white transition-all overflow-hidden ${
                  isCurrent
                    ? 'shadow-[6px_6px_0px_0px_#000]'
                    : 'shadow-[3px_3px_0px_0px_#000]'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-slate-900 font-mono text-xs font-bold flex-shrink-0 ${
                        isCurrent
                          ? 'bg-emerald-300 text-slate-950 shadow-[2px_2px_0px_0px_#000]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-space font-bold text-base sm:text-lg text-slate-950">
                          {item.degree}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-950 font-mono text-[10px] font-bold border border-emerald-300">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-xs text-slate-600 mt-0.5">
                        {item.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 pl-14 sm:pl-0">
                    <div className="flex flex-col sm:items-end">
                      <span className="font-mono text-xs font-bold text-emerald-700">
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <div className="p-1.5 rounded-lg border border-slate-200 text-slate-500">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-slate-900' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                    {item.highlight && (
                      <div className="p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-950 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Focus Track:</strong> {item.highlight}</span>
                      </div>
                    )}

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Training & Industry Experience (from Resume) */}
        {TRAINING.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              <h3 className="font-space font-bold text-xl text-slate-950 uppercase tracking-tight">
                Training & Internship Experience
              </h3>
            </div>

            <div className="space-y-4">
              {TRAINING.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0px_0px_#000]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                    <div>
                      <div className="font-space font-bold text-lg text-slate-950">
                        {item.role}
                      </div>
                      <div className="font-mono text-sm text-emerald-700 font-semibold mt-0.5">
                        {item.company}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 font-mono text-xs font-semibold text-slate-700 self-start sm:self-auto">
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-xs font-bold text-slate-500 mr-1">Tools:</span>
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono text-xs font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
