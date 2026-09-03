import React from 'react';
import { Award, ExternalLink, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATES } from '../data';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">04</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            Recognition
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-12">
          Competitions, campus ambassador honors, and industry-certified technical achievements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements Block */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-6 border-b-2 border-slate-900">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="font-space font-bold text-lg text-slate-950 uppercase">
                Honors & Competitions
              </h3>
            </div>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 font-mono text-[10px] font-bold border border-emerald-300">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-space font-bold text-base sm:text-lg text-slate-950">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{item.organization}</span>
                    <span className="text-emerald-600 font-bold">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-6 border-b-2 border-slate-900">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="font-space font-bold text-lg text-slate-950 uppercase">
                Technical Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-space font-bold text-base sm:text-lg text-slate-950">
                    {cert.title}
                  </h4>

                  {/* Skills Covered in Certificate */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Credential Active
                    </span>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 underline decoration-blue-300"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
