import { Link } from 'react-router-dom';
import { Sparkles, FileText, CheckSquare, Mic, ArrowRight, ScanFace, Play, Apple } from 'lucide-react';

export default function NoteCompass() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-xl transition-all">
              <img src="/assets/EnchantedSystems_nobackground.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight hidden sm:block">Enchanted Systems</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/notecompass/privacy" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/notecompass/terms" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-24 pb-32">
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Live on All Platforms
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                NoteCompass <span className="text-blue-500">AI</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                Transforming Audio into Actionable Insights. Record, transcribe, and organize your thoughts with high-fidelity intelligence.
              </p>
              
              {/* Both Store Buttons now Active */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95">
                  <Play className="w-5 h-5 fill-current" /> Google Play
                </button>
                <button className="px-8 py-4 bg-white text-slate-950 hover:bg-blue-50 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95">
                  <Apple className="w-5 h-5 fill-current" /> App Store
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* Phone Mockup */}
              <div className="w-[280px] h-[580px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative shadow-blue-500/10">
                 <div className="h-full w-full bg-slate-950 p-6 flex flex-col gap-4 pt-12">
                   <div className="h-40 w-full bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse" />
                        <Mic className="w-10 h-10 text-blue-500 relative" />
                      </div>
                   </div>
                   <div className="space-y-3 pt-4">
                      <div className="h-3 w-full bg-slate-900 rounded-full" />
                      <div className="h-3 w-full bg-slate-900 rounded-full" />
                      <div className="h-3 w-2/3 bg-slate-900 rounded-full" />
                      <div className="h-3 w-full bg-slate-900 rounded-full mt-6" />
                      <div className="h-3 w-1/2 bg-blue-500/20 rounded-full" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-slate-900">
        <div className="flex items-center gap-3 mb-16 justify-center">
            <div className="h-[1px] w-12 bg-slate-800" />
            <h2 className="text-4xl font-black tracking-tight">Features</h2>
            <div className="h-[1px] w-12 bg-slate-800" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: FileText, title: "AI Summaries", desc: "Get instant, intelligent summaries of your recordings. Our AI extracts key points and insights, saving you hours of review time." },
            { icon: CheckSquare, title: "Checklist Mode", desc: "Automatically generate actionable checklists from your notes. Stay organized and never miss a follow-up task." },
            { icon: Mic, title: "Hi-Fi Capture", desc: "Record crystal-clear audio with advanced noise reduction. Perfect for meetings, interviews, and deep thought sessions." },
            { icon: ScanFace, title: "OCR Engine", desc: "Instantly digitize handwritten notes or whiteboards. Our scanning engine extracts text from images with extreme precision." }
          ].map((f, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/60 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all">
              <f.icon className="w-6 h-6 text-blue-400 mb-6" />
              <h3 className="text-2xl font-black mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500">A Product of Enchanted Systems</span>
          </div>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/notecompass/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
            <Link to="/notecompass/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
