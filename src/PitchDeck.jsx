import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-[#f1f5f9] p-4 md:p-12">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-apex-gold transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm uppercase tracking-wider">Back to COREPACT AI</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-slate-800 bg-slate-950">
        
        {/* Hero Branding Section with Video */}
        <header className="relative bg-black overflow-hidden min-h-[600px] flex flex-col justify-center items-center">
          {/* Video Branding Embed */}
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 z-[1] opacity-70 pointer-events-none">
            <iframe 
              src="https://streamable.com/e/066c5t?autoplay=1&muted=1&nocontrols=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              allowFullScreen
              className="w-full h-full"
              style={{maskImage: 'radial-gradient(circle, black 40%, transparent 80%)'}}
            ></iframe>
          </div>
          
          <div className="relative z-10 px-6 py-20 text-center">
            <h1 className="text-8xl font-extrabold tracking-tighter mb-4 text-white drop-shadow-2xl">DTD</h1>
            <p className="text-2xl font-medium tracking-[0.3em] text-cyan-400 uppercase mb-8">Dimensional Token Division</p>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-cyan-200 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              37 CFR 1.84 Technical Specification
            </div>
          </div>
        </header>

        {/* Executive Summary & Metrics */}
        <main className="p-8 md:p-16 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-4">
                  <span className="w-10 h-[2px] bg-cyan-500"></span>
                  The Core Innovation
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Dimensional Token Division represents a paradigm shift in distributed compute orchestration. By transitioning from rigid O(L²) sequential processing to a <strong className="text-white">Learned Dynamic Conflict Resolution</strong> model, DTD enables a multi-dimensional state space where tokens propagate with sub-linear complexity.
                </p>
              </section>

              <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
                    <tr>
                      <th className="p-5">Performance KPI</th>
                      <th className="p-5">Baseline</th>
                      <th className="p-5 text-cyan-400">DTD Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    <tr>
                      <td className="p-5 text-slate-300 font-medium">Latent Discovery Speed</td>
                      <td className="p-5 text-slate-500">255ms</td>
                      <td className="p-5 text-cyan-400 font-bold">166ms <span className="text-[10px] ml-1">(35% improvement)</span></td>
                    </tr>
                    <tr>
                      <td className="p-5 text-slate-300 font-medium">Compute Complexity</td>
                      <td className="p-5 text-slate-500">O(L²)</td>
                      <td className="p-5 text-cyan-400 font-bold">O(L²/S) <span className="text-[10px] ml-1">(4x efficiency)</span></td>
                    </tr>
                    <tr>
                      <td className="p-5 text-slate-300 font-medium">Resolution Engine</td>
                      <td className="p-5 text-slate-500">Static Heuristic</td>
                      <td className="p-5 text-cyan-400 font-bold italic text-white">Dynamic ML-Learned</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Featured Stats */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Efficiency Rating</h3>
                <div className="text-6xl font-black text-white mb-2">4.0<span className="text-cyan-500">X</span></div>
                <p className="text-slate-500 text-xs">Reduction in redundant compute cycles across high-density mesh nodes.</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Novelty Claims</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </div>
                    <span className="text-sm text-slate-400 font-medium">Non-Euclidean node mapping via hexagonal tiling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </div>
                    <span className="text-sm text-slate-400 font-medium">Asynchronous metadata propagation for zero-lag discovery.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Patent Drawings */}
          <section className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
              <h2 className="text-3xl font-bold text-white">Technical Implementation</h2>
              <div className="text-[10px] text-slate-600 font-mono flex gap-6">
                <span>[ DOC_TYPE: TECHNICAL_DRAWING ]</span>
                <span>[ STATUS: PATENT_PREPARATION ]</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fig 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-black text-slate-900 tracking-tighter uppercase">FIG. 1: Baseline Division</span>
                  <span className="text-[9px] text-slate-400">Sheet 01/03</span>
                </div>
                <svg viewBox="0 0 200 150" className="w-full h-auto">
                  <path d="M40 60 L80 30 L160 30 L120 60 Z" fill="none" stroke="#000" strokeWidth="1.2"/>
                  <path d="M20 100 L60 70 L140 70 L100 100 Z" fill="none" stroke="#000" strokeWidth="1.2"/>
                  <path d="M60 140 L100 110 L180 110 L140 140 Z" fill="none" stroke="#000" strokeWidth="1.2"/>
                  <path d="M40 60 L20 100 M80 30 L60 70 M160 30 L140 70 M120 60 L100 100" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2"/>
                </svg>
                <p className="text-[9px] text-slate-500 mt-4 leading-tight italic">Structural decomposition of primary compute tokens across the division mesh.</p>
              </div>

              {/* Fig 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-black text-slate-900 tracking-tighter uppercase">FIG. 2: Conflict Mapping</span>
                  <span className="text-[9px] text-slate-400">Sheet 02/03</span>
                </div>
                <svg viewBox="0 0 200 150" className="w-full h-auto">
                  <path d="M40 60 L80 30 L160 30 L120 60 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1"/>
                  <path d="M20 100 L60 70 L140 70 L100 100 Z" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2"/>
                  <circle cx="60" cy="70" r="4" fill="#ef4444" />
                  <circle cx="100" cy="100" r="4" fill="#ef4444" />
                  <path d="M60 70 L100 100" stroke="#ef4444" strokeWidth="1" strokeDasharray="3"/>
                </svg>
                <p className="text-[9px] text-slate-500 mt-4 leading-tight italic">Identification of interference zones in standard sequential discovery logic.</p>
              </div>

              {/* Fig 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
                  <span className="text-[10px] font-black text-cyan-600 tracking-tighter uppercase">FIG. 3: Optimized Path</span>
                  <span className="text-[9px] text-slate-400">Sheet 03/03</span>
                </div>
                <svg viewBox="0 0 200 150" className="w-full h-auto">
                  <path d="M40 60 L80 30 L160 30 L120 60 Z" fill="none" stroke="#000" strokeWidth="1" strokeOpacity="0.1"/>
                  <path d="M20 100 L60 70 L140 70 L100 100 Z" fill="none" stroke="#000" strokeWidth="1" strokeOpacity="0.1"/>
                  <path d="M30 110 C 60 80, 140 80, 170 120" stroke="#0891b2" strokeWidth="4" fill="none"/>
                  <circle cx="100" cy="85" r="8" fill="#0891b2" fillOpacity="0.2" stroke="#0891b2" strokeWidth="1"/>
                  <text x="105" y="80" fontFamily="monospace" fontSize="8" fill="#0891b2" fontWeight="bold">DTD_CORE</text>
                </svg>
                <p className="text-[9px] text-slate-500 mt-4 leading-tight italic font-medium">The Dimensional Token Division resolution—sub-linear pathfinding optimization.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="px-16 py-12 bg-black border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center font-black text-white text-xl">D</div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-widest">Dimensional Token Division</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-tighter">&copy; 2024 Research & Patent Implementation Office</div>
            </div>
          </div>
          
          <div className="flex gap-12">
            <div className="text-right">
              <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1 italic">Verified 300 DPI Rendering</div>
              <div className="text-[10px] text-slate-500 font-mono">HASH: 0xFD2A...8B90</div>
            </div>
            <div className="px-4 py-2 border border-white/10 rounded text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              Confidential
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PitchDeck;
