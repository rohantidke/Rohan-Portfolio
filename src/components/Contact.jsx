import React, { useState } from 'react';

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleGmailWeb = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rohantidke6086@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMailApp = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:rohantidke6086@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGmailWeb();
    showToast(`Opening Gmail for ${form.name}...`);
    setForm({ name: '', email: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("rohantidke6086@gmail.com");
    showToast("rohantidke6086@gmail.com copied to clipboard!");
  };

  return (
    <section id="contact" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Direct Contact Channels
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Let's work together</h2>
          <p className="text-sm text-slate-300 font-medium">
            Have a project in mind? Let's create something amazing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          
          {/* Gmail / Email Card */}
          <div className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between text-center items-center border-white/15">
            <div className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
              ✉
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">email candidate</p>
              <p className="text-xs font-bold text-white truncate max-w-[190px]">rohantidke6086@gmail.com</p>
            </div>
            <div className="w-full space-y-2 font-mono">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rohantidke6086@gmail.com&su=Opportunity%20Inquiry%20-%20Rohan%20Tidke"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-emerald-500 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg"
              >
                🔴 Open Gmail Direct ↗
              </a>
              <button onClick={copyEmail} className="w-full rounded-full bg-white/5 border border-white/10 py-1.5 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                📋 Copy Email Address
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between text-center items-center border-white/15">
            <div className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
              📞
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">phone</p>
              <p className="text-xs font-semibold text-white">+91-8208391705</p>
            </div>
            <a href="tel:+918208391705" className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono">
              Call Direct (+91-8208391705)
            </a>
          </div>

          {/* LinkedIn */}
          <div className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between text-center items-center border-white/15">
            <div className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
              in
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">linkedin</p>
              <p className="text-xs font-semibold text-white truncate max-w-[140px]">rohan-tidke-31510a26b</p>
            </div>
            <a href="https://linkedin.com/in/rohan-tidke-31510a26b" target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono">
              View Profile ↗
            </a>
          </div>

          {/* GitHub */}
          <div className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between text-center items-center border-white/15">
            <div className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
              GH
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">github</p>
              <p className="text-xs font-semibold text-white truncate max-w-[140px]">rohantidke</p>
            </div>
            <a href="https://github.com/rohantidke" target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-white/5 border border-white/10 py-2 text-xs text-white hover:bg-white/10 transition-colors font-mono">
              View Repos ↗
            </a>
          </div>

        </div>

        {/* Quick Message Form */}
        <div className="max-w-xl mx-auto glass-card rounded-2xl p-6 space-y-4 border-white/15">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Send Message Directly via Gmail</h3>
            <p className="text-xs text-slate-300">Fills your name and message into Gmail compose for instant delivery.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                required 
                className="w-full rounded-xl bg-black/50 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                required 
                className="w-full rounded-xl bg-black/50 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
            <textarea 
              rows="3" 
              placeholder="Hi Rohan, I'd like to connect regarding an opportunity..." 
              value={form.message} 
              onChange={(e) => setForm({ ...form, message: e.target.value })} 
              required 
              className="w-full rounded-xl bg-black/50 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
            ></textarea>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 rounded-full bg-emerald-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg font-mono cursor-pointer"
              >
                ✉ Compose in Gmail Web
              </button>
              <button
                type="button"
                onClick={handleMailApp}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors font-mono cursor-pointer"
              >
                📱 App Mail
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
