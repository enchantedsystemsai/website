import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NoteCompassPrivacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 shadow-md">
              <img src="/assets/EnchantedSystems_nobackground.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest">Enchanted Systems</span>
          </Link>
          <Link to="/notecompass" className="text-xs font-black uppercase tracking-widest text-blue-500">Back to App</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black mb-4 tracking-tighter">Privacy Policy</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-12">Last Updated: March 2026 • NoteCompass AI</p>

          <div className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl mb-16">
            <h3 className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">Executive Summary</h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              We collect audio, text, and image data only to provide and improve AI services. Your data is encrypted in transit and at rest. We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-blue-500">01</div>
                <h2 className="text-xl font-black">Data Collection</h2>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed mb-4">
                NoteCompass AI processes audio recordings, images (for OCR), and text notes created within the app. We also collect basic account information like your email address for synchronization.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-blue-500">02</div>
                <h2 className="text-xl font-black">AI & Processing</h2>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                To generate summaries and transcriptions, we use trusted AI providers (like OpenAI). Your content is sent to these providers via secure APIs solely for processing and is not used to train their models.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-blue-500">03</div>
                <h2 className="text-xl font-black">Storage & Security</h2>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                We use Supabase for cloud storage. All data is protected by row-level security and industry-standard encryption. You can delete your account and all associated data at any time via the app settings.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-black text-blue-500">04</div>
                <h2 className="text-xl font-black">Contact</h2>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                Questions regarding this policy? Email: <span className="text-blue-500 font-black">enchantedsys@gmail.com</span>
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-slate-900 py-12 text-center text-slate-600 text-[10px] font-black uppercase tracking-widest">
        Enchanted Systems AI Ltd • United Kingdom
      </footer>
    </div>
  );
}
