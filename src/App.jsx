import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Shield, Beaker, Code, Globe, Cpu, Zap, ArrowUpRight, Menu, X, Award, FileText } from 'lucide-react';
import ApexPage from './ApexPage';
import PitchDeck from './PitchDeck';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const entities = {
    'apex': {
      title: 'APEX',
      subtitle: 'Architectural Parallelism for Entangled X-stream Processing',
      tagline: 'The Future of Multi-Stream AI Architecture',
      description: 'Revolutionary transformer architecture that divides embedding space across concurrent streams, achieving 4× attention speedup with zero parameter overhead. Patent-pending innovation in real-time multi-stream coherence.',
      color: 'from-apex-gold/20 to-transparent',
      accent: 'text-apex-gold',
      icon: Cpu,
      featured: true,
      patent: true
    },
    'core-lab': {
      title: 'CORE-LAB',
      subtitle: 'AI Decision Infrastructure',
      tagline: 'Verifiable Multi-Agent Deliberation',
      description: 'The system of record for AI-assisted decisions. Multi-model video conference deliberation with immutable blockchain-style ledger for compliance and audit-ready conversations.',
      color: 'from-yellow-700/20 to-transparent',
      accent: 'text-amber-400',
      icon: Beaker,
      featured: false
    },
    'caro': {
      title: 'CARO',
      subtitle: 'COREPACT Augmented Reasoning Overlay',
      tagline: 'Human-in-the-Loop Collaborative Dialogue',
      description: 'Strategic governance and oversight platform where humans participate in every round of multi-model reasoning. Solving intractable problems through guided collaboration, not autonomous synthesis.',
      color: 'from-orange-600/20 to-transparent',
      accent: 'text-orange-400',
      icon: Shield,
      featured: false
    },
    'corepact': {
      title: 'COREPACT',
      subtitle: 'Precision Integration & Logistics',
      tagline: 'Mastering the Mechanics of Integration',
      description: 'Streamlining the backbone of global operations through advanced logistical frameworks and precision distribution systems, ensuring seamless deployment of critical infrastructure.',
      color: 'from-amber-600/20 to-transparent',
      accent: 'text-amber-500',
      icon: Globe,
      featured: false
    },
    'dev-core': {
      title: 'DEV-CORE',
      subtitle: 'Development, Management & Security',
      tagline: 'Secure Digital Infrastructure',
      description: 'Comprehensive website development, management, and security services. Building and protecting the digital presence of COREPACT AI Technologies and its divisions.',
      color: 'from-blue-600/20 to-transparent',
      accent: 'text-blue-400',
      icon: Code,
      featured: false
    },
    'roc': {
      title: 'ROC',
      subtitle: 'Return on Consensus',
      tagline: 'Constitutional AI Framework',
      description: 'Constitutional AI deployment using the 7 Immutable Truths framework. Zero thermodynamic manipulation, pure linguistic reasoning, and verifiable truth discovery through collective scrutiny.',
      color: 'from-purple-600/20 to-transparent',
      accent: 'text-purple-400',
      icon: Zap,
      featured: false
    }
  };

  const navItems = [
    { id: 'apex', label: 'APEX' },
    { id: 'core-lab', label: 'CORE-LAB' },
    { id: 'caro', label: 'CARO' },
    { id: 'corepact', label: 'COREPACT' },
    { id: 'dev-core', label: 'DEV-CORE' },
    { id: 'roc', label: 'ROC' }
  ];

  const HomePage = () => (
    <>
      {/* APEX Centerpiece Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-apex-gold/5 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-apex-gold/10 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          {/* Patent Badge */}
          <div className="flex justify-center mb-8">
            <div className="patent-badge">
              <Award className="w-4 h-4 mr-2" />
              Provisional Patent Pending
            </div>
          </div>
          
          {/* APEX Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6">
              <span className="text-gradient-apex">APEX</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-light tracking-wide text-gray-300 mb-4">
              Architectural Parallelism for Entangled X-stream Processing
            </h2>
            <p className="text-lg md:text-xl text-apex-gold/80 font-light italic mb-8">
              A Division of COREPACT AI Technologies LLC
            </p>
          </div>
          
          {/* APEX Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="glass-card p-8 text-center hover:bg-apex-gold/5 transition-all duration-500 group">
              <div className="text-4xl font-bold text-apex-gold mb-2">4×</div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Attention Speedup</p>
              <p className="text-xs text-gray-500 mt-2">Per-stream parallel processing</p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-apex-gold/5 transition-all duration-500 group">
              <div className="text-4xl font-bold text-apex-gold mb-2">0</div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Parameter Overhead</p>
              <p className="text-xs text-gray-500 mt-2">Zero additional parameters</p>
            </div>
            <div className="glass-card p-8 text-center hover:bg-apex-gold/5 transition-all duration-500 group">
              <div className="text-4xl font-bold text-apex-gold mb-2">166ms</div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Total Latency</p>
              <p className="text-xs text-gray-500 mt-2">End-to-end processing</p>
            </div>
          </div>
          
          {/* APEX CTA */}
          <div className="flex justify-center gap-6 mb-20">
            <Link 
              to="/apex" 
              className="group px-8 py-4 bg-apex-gold/20 hover:bg-apex-gold/30 border border-apex-gold/50 rounded-full text-apex-gold font-bold uppercase tracking-wider transition-all flex items-center"
            >
              Explore APEX
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a 
              href="#divisions" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-bold uppercase tracking-wider transition-all"
            >
              View All Divisions
            </a>
          </div>
        </div>
      </section>

      {/* All Divisions Section */}
      <section id="divisions" className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Our <span className="font-bold text-apex-gold">Divisions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Six specialized entities working in concert to orchestrate the future of intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(entities).map(([key, data]) => (
              <div 
                key={key}
                className={`glass-card p-8 transition-all duration-500 hover:border-apex-gold/40 group cursor-pointer ${
                  key === 'apex' ? 'md:col-span-2 lg:col-span-1 ring-2 ring-apex-gold/20' : ''
                }`}
                onClick={() => key === 'apex' ? window.location.href = '/apex' : setActiveSection(key)}
              >
                <div className="flex items-center justify-between mb-6">
                  <data.icon className={`w-8 h-8 ${data.accent}`} />
                  {data.patent && (
                    <span className="text-xs text-apex-gold border border-apex-gold/30 px-2 py-1 rounded">
                      PATENT PENDING
                    </span>
                  )}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${data.accent}`}>{data.title}</h3>
                <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">{data.subtitle}</p>
                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">{data.tagline}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{data.description}</p>
                <p className="text-xs text-gray-600 italic">
                  (A Division of COREPACT AI Technologies LLC)
                </p>
                {key === 'apex' && (
                  <div className="mt-4 flex items-center text-apex-gold text-xs font-bold uppercase tracking-widest">
                    Learn More <ArrowUpRight className="ml-2 w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-apex-gold/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-apex-gold/20' : 'bg-transparent py-8'
      }`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold tracking-tighter">
              COREPACT<span className="text-apex-gold">AI</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.id === 'apex' ? '/apex' : '/#'}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all hover:text-apex-gold relative py-2 ${
                  item.id === 'apex' ? 'text-apex-gold font-bold' : 'text-gray-400'
                }`}
              >
                {item.label}
                {item.id === 'apex' && <span className="absolute -top-1 -right-2 w-2 h-2 bg-apex-gold rounded-full" />}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden text-apex-gold" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl uppercase tracking-[0.4em] hover:text-apex-gold font-light">
            Home
          </Link>
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.id === 'apex' ? '/apex' : '/#'}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl uppercase tracking-[0.4em] hover:text-apex-gold font-light ${
                item.id === 'apex' ? 'text-apex-gold' : ''
              }`}
            >
              {item.label}
              {item.id === 'apex' && <span className="ml-2 text-sm">★</span>}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apex" element={<ApexPage />} />
          <Route path="/pitchdeck" element={<PitchDeck />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 py-16 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold tracking-tighter text-white">
                COREPACT<span className="text-apex-gold">AI</span>
              </span>
              <p className="text-xs mt-2 tracking-[0.2em] uppercase">
                Technologies LLC
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 uppercase tracking-[0.2em] text-[10px]">
              <span className="text-gray-600">© 2026 COREPACT AI Technologies LLC</span>
              <span className="text-apex-gold/60">Patent Pending</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
