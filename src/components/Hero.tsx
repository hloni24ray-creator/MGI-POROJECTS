import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../assets/images/mgi_hero_bg_1789549416175.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/90 to-black/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
              Welcome to MGI Projects
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              One Company.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Multiple Solutions.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl font-light">
              Delivering reliable, professional, and affordable solutions across construction, cleaning, maintenance, and facilities management in South Africa. Built on family values and service excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-sm transition-all group shadow-lg shadow-blue-900/20"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-sm transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
