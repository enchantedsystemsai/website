import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StudioPrivacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white rounded-lg p-1">
              <img src="/assets/EnchantedSystems_nobackground.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest">Enchanted Systems</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black mb-4 tracking-tighter">Studio Policy</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-16">Enchanted Systems AI Ltd • Studio Oversight</p>

          <div className="space-y-12 prose prose-invert">
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              This overarching policy governs the general data practices of Enchanted Systems AI Ltd as a boutique software studio.
            </p>
            
            <h3 className="text-xl font-black text-white">1. Information Usage</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              When you visit our website or communicate with us, we may collect basic analytics (via Vercel/Netlify) and your contact details. This is used solely for improving our web presence and providing direct support.
            </p>

            <h3 className="text-xl font-black text-white">2. Product Isolation</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Data created within our specific products (like NoteCompass AI) is isolated and governed by that product's specific privacy policy. We do not aggregate user data across different products for marketing purposes.
            </p>

            <h3 className="text-xl font-black text-white">3. Cookies</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Our website uses minimal cookies necessary for core functionality. We do not use invasive tracking or third-party advertising pixels.
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-slate-900 py-12 text-center text-slate-600 text-[10px] font-black uppercase tracking-widest">
        enchantedsys@gmail.com • London, UK
      </footer>
    </div>
  );
}
