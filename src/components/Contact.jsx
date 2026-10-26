import React, { useState } from 'react';

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    if (!form.name.trim()) {
      setErrorMsg('Please enter your name.');
      return false;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    if (!form.subject.trim()) {
      setErrorMsg('Please enter a subject.');
      return false;
    }
    if (!form.message.trim()) {
      setErrorMsg('Please enter your message.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleGmailWeb = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const emailSubject = encodeURIComponent(`[Portfolio] ${form.subject} (from ${form.name})`);
    const emailBody = encodeURIComponent(`Sender Name: ${form.name}\nSender Email: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent via Rohan Tidke's Developer Portfolio`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rohantidke6086@gmail.com&su=${emailSubject}&body=${emailBody}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSuccessMsg('Opening Gmail composer with your formatted message. Send it whenever you are ready!');
    showToast?.('Gmail composer opened successfully.');
  };

  const handleMailto = () => {
    if (!validate()) return;

    const emailSubject = encodeURIComponent(`[Portfolio] ${form.subject} (from ${form.name})`);
    const emailBody = encodeURIComponent(`Sender Name: ${form.name}\nSender Email: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:rohantidke6086@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setSuccessMsg('Opening default mail client with your prefilled message.');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rohantidke6086@gmail.com");
    showToast?.("rohantidke6086@gmail.com copied to clipboard!");
  };

  return (
    <section id="contact" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-[#090d14]">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400"></span>
            Direct Communications & Hiring
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Have an opportunity or interesting project? Let's connect.
          </h2>
          <p className="text-sm text-slate-400">
            I am available for Java Backend Developer and Software Engineering roles. Feel free to reach out directly via email, LinkedIn, or the message composer below.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          
          {/* Card 1: Email */}
          <div className="rounded-2xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-5 space-y-3 flex flex-col justify-between text-center items-center shadow-lg hover:border-sky-500/30 transition-all">
            <div className="h-11 w-11 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-lg">
              ✉
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email Address</p>
              <p className="text-xs font-bold text-white font-mono truncate max-w-[190px] mt-0.5">rohantidke6086@gmail.com</p>
            </div>
            <div className="w-full space-y-1.5 font-mono">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rohantidke6086@gmail.com&su=Software%20Engineering%20Opportunity%20-%20Rohan%20Tidke"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-sky-500 py-2 text-xs font-bold text-slate-950 hover:bg-sky-400 transition-all shadow-md"
              >
                Compose in Gmail ↗
              </a>
              <button 
                onClick={copyEmail} 
                className="w-full rounded-full bg-white/5 border border-white/10 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                📋 Copy Email
              </button>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="rounded-2xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-5 space-y-3 flex flex-col justify-between text-center items-center shadow-lg hover:border-sky-500/30 transition-all">
            <div className="h-11 w-11 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm font-mono">
              in
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn</p>
              <p className="text-xs font-bold text-white font-mono truncate max-w-[160px] mt-0.5">rohan-tidke-31510a26b</p>
            </div>
            <a 
              href="https://linkedin.com/in/rohan-tidke-31510a26b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono font-semibold"
            >
              View Profile ↗
            </a>
          </div>

          {/* Card 3: GitHub */}
          <div className="rounded-2xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-5 space-y-3 flex flex-col justify-between text-center items-center shadow-lg hover:border-sky-500/30 transition-all">
            <div className="h-11 w-11 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs font-mono">
              GH
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub</p>
              <p className="text-xs font-bold text-white font-mono truncate max-w-[160px] mt-0.5">@rohantidke</p>
            </div>
            <a 
              href="https://github.com/rohantidke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono font-semibold"
            >
              Explore Repos ↗
            </a>
          </div>

          {/* Card 4: Phone / Direct Line */}
          <div className="rounded-2xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-5 space-y-3 flex flex-col justify-between text-center items-center shadow-lg hover:border-sky-500/30 transition-all">
            <div className="h-11 w-11 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-lg">
              📞
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
              <p className="text-xs font-bold text-white font-mono mt-0.5">+91-8208391705</p>
            </div>
            <a 
              href="tel:+918208391705" 
              className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono font-semibold"
            >
              Call +91-8208391705
            </a>
          </div>

        </div>

        {/* Interactive Contact Form */}
        <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>✉</span> Send a Message
            </h3>
            <p className="text-xs text-slate-400">
              Fill out the form to instantly prepare and deliver your inquiry directly to Rohan's inbox.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono">
              ⚠️ {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
              ✓ {successMsg}
            </div>
          )}

          <form onSubmit={handleGmailWeb} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Your Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Alex Morgan" 
                  value={form.name} 
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrorMsg(''); }} 
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Your Email *</label>
                <input 
                  type="email" 
                  placeholder="e.g. alex@company.com" 
                  value={form.email} 
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrorMsg(''); }} 
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Subject *</label>
              <input 
                type="text" 
                placeholder="e.g. Java Backend Developer Opportunity / Interview Invitation" 
                value={form.subject} 
                onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrorMsg(''); }} 
                className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Message *</label>
              <textarea 
                rows="4" 
                placeholder="Hi Rohan, we reviewed your portfolio and would like to discuss a Software Engineering role on our backend team..." 
                value={form.message} 
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrorMsg(''); }} 
                className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-mono leading-relaxed"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                type="submit"
                className="flex-1 rounded-full bg-sky-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-sky-400 transition-all shadow-lg font-mono cursor-pointer"
              >
                ✉ Compose in Gmail Web
              </button>

              <button
                type="button"
                onClick={handleMailto}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors font-mono cursor-pointer"
              >
                📱 Open Default Mail App
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
