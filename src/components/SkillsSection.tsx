import React, { useState } from 'react';
import { Search, Sparkles, Terminal, Check, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages' },
    { id: 'cloud-backend', label: 'Cloud & Infrastructure' },
    { id: 'databases-tools', label: 'Databases & Tools' },
    { id: 'engineering-practices', label: 'Working Style' },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter(cat => 
    selectedCategory === 'all' || cat.id === selectedCategory
  ).map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.highlight && s.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="stack" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">02</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            The Stack
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mb-8">
          Languages, backend infrastructure tools, relational data engines, and engineering execution practices.
        </p>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-xs border-2 border-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200/70 border-2 border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs font-mono rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-slate-950 focus:bg-white text-slate-900 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                    {category.name}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-space font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-white border border-slate-300 text-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] font-mono text-slate-500 mt-1 pl-3">
                          ↳ {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in active code</span>
                <span className="text-emerald-600 font-semibold">Ready for deployment</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-slate-50 border border-dashed border-slate-300 font-mono text-xs text-slate-500">
            No technical skills matching &quot;{searchQuery}&quot;. Try searching for &apos;Java&apos;, &apos;Python&apos;, or &apos;Cloud&apos;.
          </div>
        )}
      </div>
    </section>
  );
};
