import { Link } from 'react-router-dom';
import {
  Sparkles,
  FileText,
  CheckSquare,
  Mic,
  Cloud,
  ArrowRight,
  Smartphone,
} from 'lucide-react';

export default function NoteCompass() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold">Enchanted Systems</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/notecompass/privacy"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Privacy
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                Coming Soon
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                NoteCompass AI
              </h1>
              <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
                Transforming Audio into Actionable Insights
              </p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Record, transcribe, and organize your thoughts with the power of AI.
                NoteCompass turns your audio recordings into searchable notes,
                intelligent summaries, and actionable checklists.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-500/25 group">
                Coming Soon to Play Store
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-[3rem] p-8 shadow-2xl">
                <div className="aspect-[9/19] bg-slate-950 rounded-[2.5rem] border-8 border-slate-800 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-full flex flex-col items-center justify-center p-8">
                    <Smartphone className="w-24 h-24 text-blue-400 mb-6" />
                    <div className="space-y-4 w-full">
                      <div className="h-3 bg-blue-400/20 rounded-full w-3/4 mx-auto" />
                      <div className="h-3 bg-blue-400/20 rounded-full w-full" />
                      <div className="h-3 bg-blue-400/20 rounded-full w-2/3 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4 text-center">Powerful Features</h2>
        <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
          Everything you need to capture, organize, and act on your ideas
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI-Powered Summaries</h3>
            <p className="text-slate-400 leading-relaxed">
              Get instant, intelligent summaries of your recordings. Our AI extracts key
              points and insights, saving you hours of review time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
              <CheckSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Checklist Focus Mode</h3>
            <p className="text-slate-400 leading-relaxed">
              Automatically generate actionable checklists from your notes. Stay organized
              and never miss a follow-up task.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
              <Mic className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">High-Fidelity Audio Capture</h3>
            <p className="text-slate-400 leading-relaxed">
              Record crystal-clear audio with advanced noise reduction. Perfect for
              meetings, lectures, interviews, and personal notes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Cloud className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Secure Cloud Sync</h3>
            <p className="text-slate-400 leading-relaxed">
              Access your notes anywhere with encrypted cloud synchronization. Your data
              is always secure and available across all your devices.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the First to Experience NoteCompass
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our waitlist to get early access and exclusive launch updates
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg group">
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-800/50 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">NoteCompass AI</span>
              <span className="text-slate-600 mx-2">•</span>
              <span className="text-slate-400 text-sm">by Enchanted Systems</span>
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
