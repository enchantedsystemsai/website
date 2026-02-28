import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function NoteCompassPrivacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
{/* Navigation */}
<nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
  <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
    <Link 
      to="/" 
      className="flex items-center gap-3 group"
    >
      {/* Logo in a white circle */}
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md transition-colors group-hover:bg-blue-100">
        <img 
          src="/assets/EnchantedSystems_nobackground.png" 
          alt="Enchanted Systems Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      <span className="text-lg font-bold tracking-tight">
        Enchanted Systems AI Ltd
      </span>
    </Link>
    <div className="flex items-center gap-6 text-sm">
            <Link
              to="/notecompass"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              NoteCompass
            </Link>
            <Link
              to="/notecompass/terms"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/notecompass"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to NoteCompass
        </Link>

        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-400 text-lg mb-12">
            NoteCompass AI by Enchanted Systems
          </p>

          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed">
              This is the dedicated Privacy Policy for NoteCompass AI by Enchanted Systems.
              It details data collection and usage specific to the NoteCompass AI application.
            </p>
          </div>
        </div>
      </div>

<footer className="border-t border-slate-800/50 mt-24">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        {/* White Circle Logo Container */}
        <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center p-1">
        <img 
          src="/assets/logo-notecompass.png" 
          alt="NoteCompass AI Logo" 
          className="w-full h-full object-contain" 
        />
        </div>
        <span className="text-slate-600 mx-2">•</span>
        <span className="text-slate-400 text-sm">by Enchanted Systems AI Ltd</span>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/notecompass/privacy"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          to="/notecompass/terms"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
