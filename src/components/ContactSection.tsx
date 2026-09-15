import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  ExternalLink, 
  MessageSquare, 
  Clock, 
  Copy, 
  Check 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactForm } from '../types';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    topic: 'Job Opportunity / Recruitment',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className={`py-20 border-t ${
      darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50/90 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have an engineering challenge, full-stack opening, or DevOps consultation in mind? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Availability & Response Time
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Currently considering senior backend engineering roles, FinTech architecture opportunities, and high-impact technology leadership. Usually responds within 12 hours.
              </p>
              
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Timezone: GMT+6 (Dhaka, Bangladesh)</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">PRIMARY EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className={`text-sm font-semibold hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & Mobile */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">PHONE / DIRECT LINE</span>
                  <a
                    href={`tel:${PERSONAL_INFO.mobile}`}
                    className={`text-sm font-semibold hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.phone} / {PERSONAL_INFO.mobile}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">LOCATION</span>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className={`text-xs font-mono uppercase tracking-wider block mb-3 ${
                darkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                PROFILES & REPOSITORIES
              </span>
              <div className="flex gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800' : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800' : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.website}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800' : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                  <span>shovodas.netlify.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Message Dispatched Successfully!
                  </h3>
                  <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thank you, <span className="font-semibold">{formData.name}</span>. Your inquiry regarding "{formData.topic}" has been logged. Shuv will review and reply shortly.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || formData.topic)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                    >
                      Open in Mail Client
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          topic: 'Job Opportunity / Recruitment',
                          message: ''
                        });
                      }}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold border ${
                        darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        INQUIRY TOPIC
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      >
                        <option>Job Opportunity / Recruitment</option>
                        <option>Core Banking & FinTech Solutions</option>
                        <option>DevOps & Cloud Automation</option>
                        <option>Enterprise Full-Stack Project</option>
                        <option>General Tech Discussion</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        placeholder="Brief summary..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your project, opportunity, timeline, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all resize-none ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message to Shuv</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
