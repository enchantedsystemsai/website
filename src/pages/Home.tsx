import { Link } from 'react-router-dom';
import { Package, ArrowRight, Zap, Shield, Sparkles, Play, Apple } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-xl transition-all group-hover:scale-105">
              <img src="/assets/EnchantedSystems_nobackground.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Enchanted Systems
            </span>
          </Link>
          <Link to="/privacy" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
            Studio Policy
          </Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 pt-32 pb-40">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          Precision tools for<br />
          <span className="text-blue-500">the modern era.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
          Enchanted Systems AI Ltd is a boutique software studio dedicated to building high-fidelity productivity tools that work exactly as expected.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-40">
        <div className="flex items-center gap-2 text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-12">
          <Package className="w-4 h-4" /> Current Projects
        </div>
        
        <div className="group bg-slate-900/40 border border-slate-800/60 rounded-[2.5rem] p-10 hover:border-blue-500/40 transition-all backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-20 h-20 rounded-[1.8rem] bg-white p-3 shadow-2xl flex-shrink-0">
              <img src="/assets/NoteCompass_whitebackground.png" alt="NoteCompass" className="w-full h-full object-contain" />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-black">NoteCompass AI</h3>
                  <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">Coming Soon</span>
                </div>
                <Link to="/notecompass" className="text-xs font-black text-blue-500 hover:text-blue-400 flex items-center gap-1 uppercase tracking-widest">
                  Project Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium mb-10">
                A high-fidelity audio note-taker that bridges the gap between thoughts and action. Built for professionals who need structured intelligence from every meeting.
              </p>

              {/* Both Store Buttons now Active */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                  <Play className="w-4 h-4 fill-current" /> Google Play
                </button>
                <button className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                  <Apple className="w-4 h-4 fill-current" /> App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-200 text-sm font-black">© 2026 Enchanted Systems AI Ltd.</p>
            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Registered in England & Wales</p>
          </div>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="mailto:enchantedsys@gmail.com" className="hover:text-blue-500 transition-colors">Support</a>
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Studio Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
