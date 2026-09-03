import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Send, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data';

interface ContactSectionProps {
  onCopyPhone: () => void;
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyPhone,
  onCopyEmail,
}) => {
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Internship Opportunity');
  const [message, setMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${topic} from ${senderEmail || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Shalender,\n\nI reached out via your portfolio regarding: ${topic}.\n\nMessage:\n${message || 'I would like to discuss an opportunity with you.'}\n\nMy Email: ${senderEmail}\n\nBest regards.`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm font-bold text-emerald-600">06</span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Outreach Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-space text-2xl sm:text-3xl font-bold text-slate-950 uppercase leading-tight">
                Let&apos;s build something scalable.
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Currently open to internships, co-ops, and high-impact project collaborations in cloud infrastructure, backend distributed logic, and developer tooling.
              </p>
            </div>

            {/* Contact Action Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#000] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-400 text-emerald-950 flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4 text-emerald-800 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Email Direct</div>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-xs sm:text-sm font-mono font-bold text-slate-900 hover:text-emerald-700 underline decoration-slate-300"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200"
                  title="Copy email address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#000] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-400 text-amber-950 flex items-center justify-center font-bold">
                    <Phone className="w-4 h-4 text-amber-800 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Direct Phone</div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-900">
                      {PROFILE.phone}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onCopyPhone}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200"
                  title="Copy phone number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Social Channels Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-slate-900 bg-white shadow-[2px_2px_0px_0px_#000] hover:bg-slate-50 flex items-center gap-2 text-xs font-mono font-bold text-slate-900"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-slate-900 bg-white shadow-[2px_2px_0px_0px_#000] hover:bg-slate-50 flex items-center gap-2 text-xs font-mono font-bold text-slate-900"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ready-To-Mail Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-slate-900 bg-white shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Interactive Outreach Composer
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 font-mono text-[10px] font-bold border border-emerald-300">
                  INSTANT MAILTO
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Subject Topic
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Internship Opportunity', 'Backend/Cloud Project', 'General Chat'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTopic(t)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-mono text-center transition-all ${
                          topic === t
                            ? 'bg-slate-950 text-white font-bold shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sender Email */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-slate-950 focus:bg-white transition-colors"
                  />
                </div>

                {/* Note / Message */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                    Message Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Hi Shalender, we'd love to chat about a cloud / backend engineering role..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-slate-950 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-slate-400">
                    Dispatches formatted email to <strong>thecodingdev9@gmail.com</strong>
                  </span>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs sm:text-sm font-bold border-2 border-slate-950 shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    <span>Launch Email Client</span>
                    <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
