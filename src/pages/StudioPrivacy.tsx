import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function StudioPrivacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* Logo Container */}
            <div className="h-8">
              <img 
                src="/assets/EnchantedSystems_nobackground.png" 
                alt="Enchanted Systems Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-400 text-lg mb-12">
            Enchanted Systems AI Ltd.
          </p>

          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed">
              This is the overarching Privacy Policy for Enchanted Systems as a software studio.
              It covers general data practices across all our products and services, not specific applications.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center mb-4">
            {/* Footer Logo Container */}
            <div className="h-10">
              <img 
                src="/assets/EnchantedSystems_nobackground.png" 
                alt="Enchanted Systems Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 Enchanted Systems AI Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
