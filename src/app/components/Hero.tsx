"use client";

import { motion } from "motion/react";
import { ChevronRight, Target } from "lucide-react";
import orqa from "/images/orqa.jpg";

export function Hero() {
  return (
    <div
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "60vh" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('${orqa}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F0A]/75 via-[#0B0F0A]/70 to-[#0B0F0A]/95"></div>

        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1740578352274-ce4463372e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1vdWZsYWdlJTIwcGF0dGVybiUyMHRleHR1cmUlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzQ5NzY3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
          }}
        ></div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76, 175, 80, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Radar circles */}
        <div className="absolute top-3 right-3 w-32 h-32 border border-[#830218]/20 rounded-full opacity-40"></div>
        <div className="absolute bottom-3 left-3 w-48 h-48 border border-[#830218]/10 rounded-full opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#830218]/10 border border-[#830218]/30 rounded-full mb-6">
            <Target className="w-3.5 h-3.5 text-[#830218]" />
            <span
              className="text-[#830218] text-xs tracking-wider"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
            >
              HOLAT: FAOL
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <span className="text-white">UWED</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffffff28]">
            FORCE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 mb-8 tracking-wide"
          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
        >
          "Qalqon" jamoatchilik guruxi <span className="text-[#830218]">|</span>{" "}
          Aniqlik <span className="text-[#830218]">•</span> Intizom{" "}
          <span className="text-[#830218]">•</span> Kuch
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#missiyalar"
            className="group relative px-7 py-3 border-2 border-[#830218] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-[#830218] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span
              className="relative flex items-center gap-2 text-[#830218] font-bold tracking-wider text-sm"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              MISSIYALARNI KO'RISH
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}