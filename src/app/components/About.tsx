'use client';

import { motion } from 'motion/react';
import { Shield, Target, Eye, Zap } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Missiya',
      description: 'Har qanday vazifani mukammal bajarish va yuqori natijalarga erishish.',
    },
    {
      icon: Target,
      title: 'Vizyon',
      description: 'Dunyodagi eng kuchli va professional harbiy jamoalardan biri bo\'lish.',
    },
    {
      icon: Eye,
      title: 'Hushyorlik',
      description: 'Doimo tayyor turish va har qanday xavfga javob berish.',
    },
    {
      icon: Zap,
      title: 'Kuch',
      description: 'Har bir vazifada eng yuqori natija va ustunlikka erishish.',
    },
  ];

  return (
    <div
      id="biz-haqimizda"
      className="relative py-24 bg-[#0B0F0A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(76, 175, 80, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76, 175, 80, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            BIZ <span className="text-white">HAQIMIZDA</span>
          </h2>
          <p
            className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
          >
            UWED FORCE — yuqori tayyorgarlikka ega elita harbiy jamoa. Biz
            murakkab vazifalarni tez va aniq bajarishga ixtisoslashganmiz.
            Zamonaviy texnologiyalar va professional tajriba bilan
            jihozlanganmiz.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-[#1F2A1F]/40 backdrop-blur-md border border-[#830218]/20 rounded-xl p-6 h-full transition-all duration-300 hover:border-[#830218]/50 hover:shadow-lg hover:shadow-[#830218]/20 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#830218]/0 to-[#830218]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#830218] to-[#c10625] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#830218]/30">
                      <Icon
                        className="w-7 h-7 text-[#0B0F0A]"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold text-white mb-3 tracking-wide"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-white/70 leading-relaxed"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {value.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#830218]/30 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#830218]/30 rounded-bl-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Bajarilgan missiyalar" },
            { number: "99.8%", label: "Muvaffaqiyat darajasi" },
            { number: "150+", label: "Elita operatorlar" },
            { number: "24/7", label: "Tayyor holat" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-[#1F2A1F]/30 backdrop-blur-sm border border-[#830218]/20 rounded-lg hover:border-[#830218]/50 transition-all duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-black text-[#830218] mb-2"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm text-white/70 tracking-wider uppercase"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
