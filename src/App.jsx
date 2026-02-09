import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section - Text Only per Request */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-sm md:text-base font-bold tracking-[0.2em] text-white group-hover:text-cyan-400 transition-colors uppercase">
            CorePact AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 bg-white/5 px-8 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          <Link
            to="/"
            className={`text-xs font-medium tracking-[0.2em] transition-all hover:text-cyan-400 ${isActive('/') ? 'text-cyan-400 glow-text' : 'text-gray-400'
              }`}
          >
            COREPACT AI
          </Link>
          <div className="w-px h-3 bg-white/10" />
          <Link
            to="/dtd"
            className={`text-xs font-medium tracking-[0.2em] transition-all hover:text-cyan-400 ${isActive('/dtd') ? 'text-cyan-400 glow-text' : 'text-gray-400'
              }`}
          >
            DTD
          </Link>
          <div className="w-px h-3 bg-white/10" />
          <Link
            to="/contact"
            className={`text-xs font-medium tracking-[0.2em] transition-all hover:text-cyan-400 ${isActive('/contact') ? 'text-cyan-400 glow-text' : 'text-gray-400'
              }`}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

const COREPACTPage = () => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-transition logic - Extended to 20s
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        navigate('/dtd');
      }, 1500); // Wait for fade out
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`min-h-screen bg-black text-white overflow-hidden transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <Navbar />

      {/* Full Screen Video Background */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
        {/* Scaled iframe to remove black bars */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <iframe
            src="https://streamable.com/e/9vy8os?autoplay=1&muted=1&nocontrols=1&loop=1"
            className="w-[150vw] h-[150vh] min-w-[150%] min-h-[150%] object-cover scale-150"
            style={{
              border: 'none',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-md">
            <span className="text-[10px] md:text-xs text-cyan-400 tracking-[0.3em] font-semibold uppercase">
              System Online
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-800 tracking-tighter drop-shadow-2xl mb-8">
            ALIGNED<br />BY DESIGN
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-cyan-100/70 font-light tracking-[0.2em] uppercase leading-relaxed">
            The Future of Autonomous Consensus
          </p>
        </div>
      </section>
    </div>
  );
};

const DTDPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden animate-fade-in">
      <Navbar />

      {/* Video Background */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        {/* Scaled iframe to remove black bars */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <iframe
            src="https://streamable.com/e/urwxy7?autoplay=1&muted=1&nocontrols=1&loop=1"
            className="w-[150vw] h-[150vh] min-w-[150%] min-h-[150%] object-cover scale-150"
            style={{
              border: 'none',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center animate-fade-in-up">
          {/* Logo removed per request "let speak for itself" */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2 tracking-tighter">
            DTD
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-8" />
          <h2 className="text-xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600 font-light tracking-[0.25em] uppercase">
            Dimension Token Division
          </h2>

          <div className="mt-16">
            <a href="#dtd-metrics" className="inline-flex flex-col items-center group">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest mb-3 group-hover:text-cyan-400 transition-colors">Initialize</span>
              <div className="p-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all">
                <ArrowDown className="w-5 h-5 text-white group-hover:text-cyan-400 animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="dtd-metrics" className="relative z-20 bg-black min-h-screen flex items-center border-t border-white/5">
        <div className="container mx-auto px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24">
              {[
                { val: "166ms", label: "Latency", sub: "Global Consensus" },
                { val: "4.0x", label: "Efficiency", sub: "Token Optimization" },
                { val: "O(L²/S)", label: "Complexity", sub: "Algorithmic Reduction" }
              ].map((item, i) => (
                <div key={i} className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.val}</div>
                    <div className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <ArrowRight className="w-4 h-4 rotate-180 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-[0.3em]">Back to COREPACT</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/L6cz1rNq/grok_image_e1bf531b_92bf_46c4_9095_ba13e58b3acd_(1).jpg')] bg-cover bg-center opacity-10 blur-3xl pointer-events-none" />
        <div className="max-w-xl w-full text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">CONTACT</h1>
          <div className="p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md">
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Interested in integrating DTD protocols? <br />
              Reach out to our team.
            </p>
            <a href="mailto:contact@corepact.ai" className="inline-block px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(8,145,178,0.4)]">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<COREPACTPage />} />
      <Route path="/dtd" element={<DTDPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
