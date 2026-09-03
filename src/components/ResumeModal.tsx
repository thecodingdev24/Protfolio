import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, ExternalLink, Printer, FileText, CheckCircle2, Briefcase, GraduationCap, Award, Code, Terminal, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { PROFILE, TRAINING } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#000] flex flex-col z-10 overflow-hidden"
        >
          {/* Top Bar / Actions Header */}
          <div className="px-5 py-4 bg-slate-950 text-white flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400 text-slate-950 flex items-center justify-center font-mono font-bold">
                <FileText className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-space font-bold text-base sm:text-lg leading-tight flex items-center gap-2">
                  <span>Shalender Singh — Official Resume</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-400/30">
                    ATS-READY
                  </span>
                </h3>
                <p className="font-mono text-xs text-slate-400">
                  Standard 1-Page Format • Verified PDF (17 KB)
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Primary Direct Download Link */}
              <a
                id="resume-modal-direct-download"
                href="/Shalender_Singh_Resume.pdf"
                download="Shalender_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs font-bold border border-emerald-300 shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download PDF</span>
              </a>

              {/* Open in New Tab */}
              <a
                id="resume-modal-open-tab"
                href="/Shalender_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold border border-slate-700 transition-colors"
                title="Open PDF directly in browser"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open</span>
              </a>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold border border-slate-700 transition-colors"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              {/* Close Button */}
              <button
                id="resume-modal-close-btn"
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-emerald-50 px-5 py-2.5 border-b border-emerald-200 text-emerald-950 font-mono text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Click <strong>Download PDF</strong> to save <strong>Shalender_Singh_Resume.pdf</strong> directly to your device.
              </span>
            </div>
            <span className="hidden md:inline font-bold text-emerald-700">Updated Sep 2026</span>
          </div>

          {/* Resume Document Canvas (Exact replica of the uploaded PDF) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/70">
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl border border-slate-300 shadow-sm text-slate-900 font-sans leading-normal">
              
              {/* Header */}
              <div className="border-b-2 border-slate-900 pb-4 mb-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-space uppercase">
                    {PROFILE.name}
                  </h1>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-1.5 truncate">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-900">LinkedIn:</span>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline truncate"
                    >
                      shalender-singh-rawat
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 sm:justify-end truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
                    <span className="font-bold text-slate-900">Email:</span>
                    <a href={`mailto:${PROFILE.email}`} className="text-blue-600 hover:underline">
                      {PROFILE.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 truncate">
                    <Github className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
                    <span className="font-bold text-slate-900">Github:</span>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline truncate"
                    >
                      thecodingdev24
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
                    <span className="font-bold text-slate-900">Mobile:</span>
                    <span>{PROFILE.phone}</span>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div className="mb-5">
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                  SKILLS
                </h2>
                <ul className="text-xs text-slate-800 space-y-1 font-sans">
                  <li>
                    <span className="font-bold text-slate-950 font-mono">• Languages: </span>
                    Java, JavaScript, C, C++, Python
                  </li>
                  <li>
                    <span className="font-bold text-slate-950 font-mono">• Technologies: </span>
                    HTML, CSS
                  </li>
                  <li>
                    <span className="font-bold text-slate-950 font-mono">• Databases/Tools: </span>
                    MySQL, Git, GitHub, Figma
                  </li>
                  <li>
                    <span className="font-bold text-slate-950 font-mono">• Soft Skills: </span>
                    Problem solving, Team collaboration, Time management, Adaptability
                  </li>
                </ul>
              </div>

              {/* PROJECTS */}
              <div className="mb-5">
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  PROJECTS
                </h2>

                {/* Tikki Topple */}
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <div className="font-bold text-slate-950">
                      TIKKI TOPPLE GAME |{' '}
                      <a
                        href="https://github.com/thecodingdev24/tikki-topplegame"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="text-slate-500 font-mono text-[11px]">April 2026 - May 2026</div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    <li>Developed a turn-based strategy game in Python using Pygame, implementing core game logic, scoring, and turn management.</li>
                    <li>Implemented local multiplayer and AI opponents with Easy, Medium, and Hard difficulty levels.</li>
                    <li>Designed an animated game interface featuring interactive menus, gameplay board, score tracking, and winner screens.</li>
                    <li>Built a 20-turn scoring system with strategic gameplay mechanics for competitive play.</li>
                    <li>Integrated procedurally synthesized sound effects directly in Python, eliminating dependency on external audio files.</li>
                    <li>Applied object-oriented programming and modular game architecture to organize gameplay, UI, AI, and audio components.</li>
                    <li>
                      <span className="font-bold text-slate-900">Tech Stack: </span>
                      Python, Pygame.
                    </li>
                  </ul>
                </div>

                {/* CarVault */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <div className="font-bold text-slate-950">
                      Personal CARVAULT WEBSITE |{' '}
                      <a
                        href="https://github.com/thecodingdev24/carvault"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="text-slate-500 font-mono text-[11px]">Nov 2025 - Nov 2025</div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    <li>Developed a personal car showcase website.</li>
                    <li>Designed the website to showcase my favorite cars, including their specifications, features, performance, and other important details.</li>
                    <li>Used HTML to structure the webpages and organize car information in a clear and readable format.</li>
                    <li>Used CSS to create a visually appealing layout, styling, responsive sections, and an automotive-themed user interface.</li>
                    <li>Implemented JavaScript to add interactive elements and improve the overall user experience.</li>
                    <li>Added detailed information such as engine specifications, horsepower, top speed, acceleration, transmission, and other car features.</li>
                    <li>Organized multiple cars into individual sections/cards so users could easily explore and compare different models.</li>
                    <li>The project helped me improve my understanding of frontend web development, UI design, and JavaScript-based interactivity.</li>
                    <li>
                      <span className="font-bold text-slate-900">Tech Stack: </span>
                      HTML, CSS, JS.
                    </li>
                  </ul>
                </div>
              </div>

              {/* TRAINING */}
              <div className="mb-5">
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                  TRAINING
                </h2>
                {TRAINING.map((tr) => (
                  <div key={tr.id} className="mb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                      <div className="font-bold text-slate-950 uppercase">
                        {tr.role} | {tr.company}
                      </div>
                      <div className="text-slate-500 font-mono text-[11px]">{tr.period}</div>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                      {tr.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CERTIFICATES */}
              <div className="mb-5">
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                  CERTIFICATES
                </h2>
                <ul className="text-xs text-slate-800 space-y-1">
                  <li className="flex items-center justify-between">
                    <span>
                      • Introduction To Python |{' '}
                      <a
                        href="https://infyspringboard.onwingspan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Springboard
                      </a>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">Feb 2026</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>
                      • Introduction To Cloud Computing |{' '}
                      <a
                        href="https://infyspringboard.onwingspan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Infosys
                      </a>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">March 2026</span>
                  </li>
                </ul>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="mb-5">
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                  ACHIEVEMENTS
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
                  <li>Selected for GSA&apos;26 (Google Student Ambassador).</li>
                  <li>Ranked Top 10 among 50+ teams in a college hackathon.</li>
                </ul>
              </div>

              {/* EDUCATION */}
              <div>
                <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                  EDUCATION
                </h2>

                {/* LPU */}
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <div>Lovely Professional University</div>
                    <div className="text-slate-500 font-normal font-mono text-[11px]">Phagwara, Punjab</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 italic">
                    <div>• Bachelor of Technology - Computer Science and Engineering</div>
                    <div className="text-slate-500 not-italic font-mono text-[11px]">Aug 2025 - Present</div>
                  </div>
                </div>

                {/* Rose Mary */}
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <div>Rose Mary Convent School</div>
                    <div className="text-slate-500 font-normal font-mono text-[11px]">Bathinda, Punjab</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 italic">
                    <div>• Higher Secondary Education.</div>
                    <div className="text-slate-500 not-italic font-mono text-[11px]">May 2023 - Mar 2025</div>
                  </div>
                </div>

                {/* Army Public School */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <div>Army Public School</div>
                    <div className="text-slate-500 font-normal font-mono text-[11px]">Panchkula, Haryana</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 italic">
                    <div>• Secondary Education.</div>
                    <div className="text-slate-500 not-italic font-mono text-[11px]">Jun 2022 - Mar 2023</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Footer Call to Action Bar */}
          <div className="px-5 py-3.5 bg-white border-t-2 border-slate-900 flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-xs text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for 2026 Engineering & Cloud Internships</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}?subject=Interview%20/%20Opportunity%20for%20Shalender%20Singh`}
                className="text-xs font-mono font-semibold text-slate-700 hover:text-slate-950 underline"
              >
                Contact Shalender
              </a>
              <a
                href="/Shalender_Singh_Resume.pdf"
                download="Shalender_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs font-bold border border-slate-900 shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download PDF (17 KB)</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
