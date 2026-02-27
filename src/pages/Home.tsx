import { Link } from 'react-router-dom';
import { Package, ArrowRight, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Enchanted Systems</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Studio Policy</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
          Precision tools for<br />
          <span className="text-blue-500">the modern era.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
          Enchanted Systems is a boutique software studio dedicated to building high-fidelity productivity tools that work exactly as expected.
        </p>
      </section>

      {/* Product Catalog */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 uppercase tracking-widest mb-12">
          <Package className="w-4 h-4" /> Current Projects
        </div>
        
        <div className="grid gap-6">
          {/* NoteCompass AI Card */}
          <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">NoteCompass AI</h3>
                <span className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Productivity / AI</span>
              </div>
              <Link 
                to="/notecompass"
                className="bg-white text-slate-950 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-slate-200 transition-colors"
              >
                View App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              A high-fidelity audio note-taker that bridges the gap between thoughts and action. Built for professionals who need structured intelligence from every meeting.
            </p>
          </div>
          
          {/* Placeholder for future app - easily clone this div for the next one */}
          <div className="bg-slate-900/30 border border-dashed border-slate-800 rounded-2xl p-8 text-center py-16">
            <p className="text-slate-500">New tools currently in development.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Enchanted Systems AI Ltd.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="mailto:enchantedsys@gmail.com" className="hover:text-white transition-colors">Support</a>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}