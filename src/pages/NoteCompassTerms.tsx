import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NoteCompassTerms() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <nav className="border-b border-slate-800/60 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
              <img src="/assets/EnchantedSystems_nobackground.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-black uppercase tracking-widest">Enchanted Systems</span>
          </Link>
          <Link to="/notecompass" className="text-xs font-black uppercase tracking-widest text-blue-500">Back to App</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-black mb-12 tracking-tighter">Terms of Service</h1>

          <div className="space-y-12">
            {[
              { id: "01", title: "Service Use", text: "By using NoteCompass AI, you agree to these terms. Our service is provided 'as is' without warranties of any kind regarding uptime or data persistence." },
              { id: "02", title: "AI Disclaimer", text: "AI-generated outputs (summaries, transcriptions, OCR) may contain errors. You agree not to rely solely on these outputs for professional, medical, or legal decisions." },
              { id: "03", title: "User Accounts", text: "You are responsible for maintaining the security of your account and password. Enchanted Systems is not liable for unauthorized access resulting from user negligence." },
              { id: "04", title: "Governing Law", text: "These terms are governed by the laws of England and Wales. Any disputes will be settled in the relevant courts of the United Kingdom." }
            ].map((item) => (
              <section key={item.id} className="border-l border-slate-800 pl-8">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2 block">{item.id} / {item.title}</span>
                <p className="text-slate-400 font-medium leading-relaxed">{item.text}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
      
      <footer className="border-t border-slate-900 py-12 text-center text-slate-600 text-[10px] font-black uppercase tracking-widest">
        © 2026 Enchanted Systems AI Ltd
      </footer>
    </div>
  );
}
