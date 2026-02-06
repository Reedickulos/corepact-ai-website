import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Cpu, Zap, FileText, ChevronRight, BarChart3, Layers, GitMerge } from 'lucide-react';

const ApexPage = () => {
  const performanceData = [
    { metric: 'Sequential Concat', latency: '50-100ms', cost: '1×', coherence: 'Low', deployment: 'Simple' },
    { metric: 'Orchestration', latency: '100-300ms', cost: '4×', coherence: 'Medium', deployment: 'Complex' },
    { metric: 'PDT (Adapters)', latency: '150-200ms', cost: '1.2×', coherence: 'Medium', deployment: 'Moderate' },
    { metric: 'APEX', latency: '166ms', cost: '1×', coherence: 'High', deployment: 'Simple', highlight: true }
  ];

  const architectureLayers = [
    { name: 'Input', desc: '4 concurrent token streams (Security, Metrics, Logs, External)' },
    { name: 'Stream Embeddings', desc: '4 independent embedding lookups (192-dim each)' },
    { name: 'Per-Stream Attention', desc: 'Parallel self-attention blocks (Layers 0-3)' },
    { name: 'Fusion Layer', desc: 'Cross-stream integration and conflict resolution' },
    { name: 'Transformer', desc: '7 standard transformer blocks (Layers 5-11)' },
    { name: 'Output', desc: 'Auto-regressive token generation' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Back Navigation */}
      <div className="container mx-auto px-8 mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-apex-gold transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm uppercase tracking-wider">Back to COREPACT AI</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-8 mb-20">
        <div className="flex justify-center mb-6">
          <div className="patent-badge text-base px-6 py-3">
            <Award className="w-5 h-5 mr-2" />
            Provisional Patent Filed - USPTO
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-center tracking-tighter mb-6">
          <span className="text-gradient-apex">APEX</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-center font-light text-gray-300 mb-4">
          Architectural Parallelism for Entangled X-stream Processing
        </h2>
        <p className="text-center text-apex-gold/80 text-lg mb-12">
          A Division of COREPACT AI Technologies LLC
        </p>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-4 apex-glow">
            <div style={{position:'relative', width:'100%', height:'0px', paddingBottom:'56.25%'}}>
              <iframe 
                allow="fullscreen;autoplay" 
                allowfullscreen 
                height="100%" 
                src="https://streamable.com/e/0t34ja?autoplay=1&muted=1&nocontrols=1" 
                width="100%" 
                style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden'}}
              ></iframe>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            APEX Architecture Overview - Technical Visualization
          </p>
        </div>

        {/* Key Innovation */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-apex-gold mb-6">The Core Innovation</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            <strong className="text-white">Don't concatenate streams. Don't use middleware. Divide the embedding space.</strong>
          </p>
          <div className="glass-card p-8 text-left font-mono text-sm text-gray-400">
            <p className="text-gray-500 mb-4"># Standard Transformer</p>
            <p className="mb-2">Token → Embedding (768-dim) → Attention (768×768) → Output</p>
            <p className="text-gray-500 mt-6 mb-4"># APEX Architecture</p>
            <p className="mb-1 text-blue-400">Stream A → Embedding (192-dim) → Attention (192×192) ┐</p>
            <p className="mb-1 text-green-400">Stream B → Embedding (192-dim) → Attention (192×192) ├─→ Fuse → Output</p>
            <p className="mb-1 text-yellow-400">Stream C → Embedding (192-dim) → Attention (192×192) │</p>
            <p className="mb-1 text-red-400">Stream D → Embedding (192-dim) → Attention (192×192) ┘</p>
            <p className="text-gray-500 mt-2">(All parallel)</p>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="container mx-auto px-8 mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          <BarChart3 className="inline-block w-8 h-8 mr-3 text-apex-gold" />
          Performance Comparison
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 uppercase text-xs tracking-wider">Approach</th>
                <th className="text-center py-4 px-4 text-gray-400 uppercase text-xs tracking-wider">Latency</th>
                <th className="text-center py-4 px-4 text-gray-400 uppercase text-xs tracking-wider">Cost</th>
                <th className="text-center py-4 px-4 text-gray-400 uppercase text-xs tracking-wider">Coherence</th>
                <th className="text-center py-4 px-4 text-gray-400 uppercase text-xs tracking-wider">Deployment</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`border-b border-white/5 ${row.highlight ? 'bg-apex-gold/10' : ''}`}
                >
                  <td className={`py-4 px-4 font-bold ${row.highlight ? 'text-apex-gold' : 'text-white'}`}>
                    {row.metric}
                    {row.highlight && <span className="ml-2 text-xs">★</span>}
                  </td>
                  <td className="text-center py-4 px-4 text-gray-300">{row.latency}</td>
                  <td className="text-center py-4 px-4 text-gray-300">{row.cost}</td>
                  <td className={`text-center py-4 px-4 font-semibold ${row.highlight ? 'text-apex-gold' : 'text-gray-300'}`}>
                    {row.coherence}
                  </td>
                  <td className="text-center py-4 px-4 text-gray-300">{row.deployment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Architecture Stack */}
      <section className="container mx-auto px-8 mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          <Layers className="inline-block w-8 h-8 mr-3 text-apex-gold" />
          Architecture Stack
        </h3>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {architectureLayers.map((layer, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 flex items-center gap-6 hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-apex-gold/20 flex items-center justify-center text-apex-gold font-bold">
                {idx}
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">{layer.name}</h4>
                <p className="text-gray-400 text-sm">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mathematical Foundation */}
      <section className="container mx-auto px-8 mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          <GitMerge className="inline-block w-8 h-8 mr-3 text-apex-gold" />
          Mathematical Foundation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h4 className="text-xl font-bold text-apex-gold mb-4">Per-Stream Attention Complexity</h4>
            <div className="font-mono text-sm text-gray-400 space-y-2">
              <p>Standard: O(seq_len² × 768²)</p>
              <p className="text-gray-600">= O(seq_len² × 589,824)</p>
              <p className="mt-4">APEX (4x): O(seq_len² × 192²) × 4</p>
              <p className="text-gray-600">= O(seq_len² × 147,456)</p>
              <p className="mt-4 text-apex-gold font-bold">4× faster per-stream attention</p>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h4 className="text-xl font-bold text-apex-gold mb-4">Parameter Count</h4>
            <div className="font-mono text-sm text-gray-400 space-y-2">
              <p>Standard: V × D = 50,257 × 768</p>
              <p className="text-gray-600">= 38.6M parameters</p>
              <p className="mt-4">APEX: 4 × (V × D/4) = 50,257 × 768</p>
              <p className="text-gray-600">= 38.6M parameters</p>
              <p className="mt-4 text-apex-gold font-bold">Zero overhead - just reorganized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="container mx-auto px-8 mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">Why APEX Works</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-6 text-center">
            <Zap className="w-10 h-10 text-apex-gold mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Native Parallelism</h4>
            <p className="text-sm text-gray-400">Streams process simultaneously with true wall-clock speedup</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Cpu className="w-10 h-10 text-apex-gold mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Learned Resolution</h4>
            <p className="text-sm text-gray-400">Fusion layer learns conflict resolution from training data</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Layers className="w-10 h-10 text-apex-gold mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Zero Overhead</h4>
            <p className="text-sm text-gray-400">No additional parameters or external middleware required</p>
          </div>
          <div className="glass-card p-6 text-center">
            <GitMerge className="w-10 h-10 text-apex-gold mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Domain Specialization</h4>
            <p className="text-sm text-gray-400">Each stream specializes in its domain language</p>
          </div>
        </div>
      </section>

      {/* Patent & IP Section */}
      <section className="container mx-auto px-8 mb-20">
        <div className="glass-card p-12 max-w-4xl mx-auto border-apex-gold/30">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-apex-gold mr-4" />
            <Award className="w-12 h-12 text-apex-gold" />
          </div>
          <h3 className="text-3xl font-bold text-center mb-6">Intellectual Property Protection</h3>
          <p className="text-center text-gray-300 mb-8">
            APEX is protected under provisional patent filing with the United States Patent and Trademark Office (USPTO).
            The core innovation—dividing embedding space for parallel multi-stream processing—is a novel architectural 
            breakthrough that establishes a new paradigm in transformer design.
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-apex-gold">Priority Date</div>
              <div className="text-gray-400">Established 2026</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-apex-gold">Status</div>
              <div className="text-gray-400">Provisional Filed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-apex-gold">Protection</div>
              <div className="text-gray-400">12-Month Window</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="container mx-auto px-8">
        <div className="glass-card p-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
          <p className="text-gray-400 mb-8">
            We are seeking strategic partners with compute infrastructure and real-world multi-stream 
            use cases to validate APEX at scale. Joint patent and publication opportunities available.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-apex-gold/20 hover:bg-apex-gold/30 border border-apex-gold/50 rounded-full text-apex-gold font-bold uppercase tracking-wider transition-all">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-bold uppercase tracking-wider transition-all">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApexPage;
