import { Link } from 'react-router-dom';
import { Sparkles, FileText, CheckSquare, Mic, Cloud, ArrowRight } from 'lucide-react';

export default function NoteCompass() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">NoteCompass AI</Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link to="/notecompass/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/notecompass/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </nav>

      {/* Hero Section - Simplified */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          Audio to <span className="text-blue-500">Action.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto">
          Record, transcribe, and organize. NoteCompass AI turns your spoken thoughts into structured, searchable notes and intelligent checklists.
        </p>
        <button className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all">
          Join Waitlist
        </button>
      </section>

      {/* Features - Clean Grid */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { icon: FileText, title: "AI Summaries", desc: "Extract key insights instantly." },
            { icon: CheckSquare, title: "Smart Tasks", desc: "Auto-generate actionable lists." },
            { icon: Mic, title: "High-Fidelity", desc: "Crystal clear noise-free audio." },
            { icon: Cloud, title: "Cloud Sync", desc: "Securely accessible everywhere." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 text-center text-slate-600 text-sm">
        © 2026 Enchanted Systems AI Ltd.
      </footer>
    </div>
  );
}
