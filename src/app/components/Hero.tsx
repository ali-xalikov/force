'use client';

import { motion } from 'motion/react';
import { ChevronRight, Target } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1763656444006-e12f1d7cb29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHRhY3RpY2FsJTIwc3BlY2lhbCUyMGZvcmNlcyUyMHNvbGRpZXJzfGVufDF8fHx8MTc3NDk3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F0A]/90 via-[#0B0F0A]/85 to-[#0B0F0A]"></div>
        
        {/* Camouflage Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1740578352274-ce4463372e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1vdWZsYWdlJTIwcGF0dGVybiUyMHRleHR1cmUlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzQ5NzY3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
          }}
        ></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76, 175, 80, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>

        {/* Radar circles */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#4CAF50]/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-[#4CAF50]/10 rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full mb-8">
            <Target className="w-4 h-4 text-[#4CAF50]" />
            <span
              className="text-[#4CAF50] text-sm tracking-wider"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
            >
              HOLAT: FAOL
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <span className="text-white">UWED</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#2E7D32]">
            FORCE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 tracking-wide"
          style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
        >
          Elita Maxsus Harbiy Jamoa{' '}
          <span className="text-[#4CAF50]">|</span> Aniqlik{' '}
          <span className="text-[#4CAF50]">•</span> Intizom{' '}
          <span className="text-[#4CAF50]">•</span> Kuch
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button */}
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4CAF50]/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span
              className="relative flex items-center gap-2 text-white font-bold tracking-wider"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              JAMOAGA QO'SHILISH
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="#missiyalar"
            className="group relative px-8 py-4 border-2 border-[#4CAF50] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-[#4CAF50] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span
              className="relative flex items-center gap-2 text-[#4CAF50] font-bold tracking-wider"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              MISSIYALARNI KO'RISH
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#4CAF50]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#4CAF50] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}