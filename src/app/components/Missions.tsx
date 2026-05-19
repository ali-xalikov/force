'use client';

import { motion } from 'motion/react';
import { CheckCircle, Clock, Lock, MapPin, Calendar } from 'lucide-react';

export function Missions() {
  const missions = [
    {
      id: 'OP-2301',
      name: 'Operatsiya: Qalqon',
      status: 'completed',
      location: 'Sharqiy mintaqa',
      date: 'Mart 2026',
      description: 'Maxfiy infiltratsiya va muhim ob\'ektlarni himoya qilish operatsiyasi.',
      statusColor: '#4CAF50',
      icon: CheckCircle,
    },
    {
      id: 'OP-2302',
      name: 'Operatsiya: Tungi zarba',
      status: 'active',
      location: 'Markaziy hudud',
      date: 'Mart 2026',
      description: 'Taktik yordam va razvedka ma\'lumotlarini yig\'ish bo\'yicha faol operatsiya.',
      statusColor: '#FFC107',
      icon: Clock,
    },
    {
      id: 'OP-2303',
      name: 'Operatsiya: Qor bo\'roni',
      status: 'completed',
      location: 'Shimoliy sektor',
      date: 'Fevral 2026',
      description: 'Og\'ir sharoitlarda dushman ta\'minot yo\'llarini buzish.',
      statusColor: '#4CAF50',
      icon: CheckCircle,
    },
    {
      id: 'OP-2304',
      name: 'Operatsiya: Maxfiy zona',
      status: 'classified',
      location: '██████████',
      date: 'MAXFIY',
      description: 'Missiya tafsilotlari eng yuqori darajadagi maxfiylik sinfiga kiradi.',
      statusColor: '#FF5252',
      icon: Lock,
    },
    {
      id: 'OP-2305',
      name: 'Operatsiya: Momaqaldiroq',
      status: 'active',
      location: 'Janubi-Sharqiy Osiyo',
      date: 'Mart 2026',
      description: 'Terrorizmga qarshi tez javob berish operatsiyasi.',
      statusColor: '#FFC107',
      icon: Clock,
    },
    {
      id: 'OP-2306',
      name: 'Operatsiya: Temir qalqon',
      status: 'completed',
      location: 'Markaziy Afrika',
      date: 'Yanvar 2026',
      description: 'Muhim infratuzilmalarni himoya qilish va mudofaa operatsiyalari.',
      statusColor: '#4CAF50',
      icon: CheckCircle,
    },
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'BAJARILGAN';
      case 'active':
        return 'FAOL';
      case 'classified':
        return 'MAXFIY';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <div id="missiyalar" className="relative py-24 bg-[#0B0F0A] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(76, 175, 80, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76, 175, 80, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Radar circles */}
      <div className="absolute top-10 right-10 w-96 h-96 border border-[#4CAF50]/10 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 border border-[#4CAF50]/10 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
              <span
                className="text-[#4CAF50] text-sm tracking-wider"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                OPERATSIYALAR MARKAZI
              </span>
            </div>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TAKTIK <span className="text-[#4CAF50]">MISSIYALAR</span>
          </h2>
          <p
            className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
          >
            Joriy va o'tgan operatsiyalarimizning real vaqt ko'rinishi. 
            Har bir missiya aniqlik, intizom va muvaffaqiyatga erishish majburiyati bilan bajariladi.
          </p>
        </motion.div>

        {/* Dashboard Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { label: 'Jami missiyalar', value: '500+', color: '#4CAF50' },
            { label: 'Faol operatsiyalar', value: '2', color: '#FFC107' },
            { label: 'Muvaffaqiyat darajasi', value: '99.8%', color: '#4CAF50' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1F2A1F]/40 backdrop-blur-md border border-[#4CAF50]/20 rounded-xl p-6 hover:border-[#4CAF50]/50 transition-all duration-300"
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ fontFamily: 'Orbitron, sans-serif', color: stat.color }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/70 tracking-wider uppercase text-sm"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-[#1F2A1F]/40 backdrop-blur-md border border-[#4CAF50]/20 rounded-xl p-6 h-full transition-all duration-300 hover:border-[#4CAF50]/50 hover:shadow-lg hover:shadow-[#4CAF50]/20 overflow-hidden">
                  {/* Status indicator bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: mission.statusColor }}
                  ></div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="text-[#4CAF50]/70 text-xs font-bold tracking-wider mb-1"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        {mission.id}
                      </div>
                      <h3
                        className="text-xl font-black text-white tracking-wide"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                      >
                        {mission.name}
                      </h3>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${mission.statusColor}20` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: mission.statusColor }}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: `${mission.statusColor}20` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: mission.statusColor }}
                    ></div>
                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{ fontFamily: 'Rajdhani, sans-serif', color: mission.statusColor }}
                    >
                      {getStatusLabel(mission.status)}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-white/70 text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                  >
                    {mission.description}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 pt-4 border-t border-[#4CAF50]/20">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin className="w-4 h-4 text-[#4CAF50]" />
                      <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                        {mission.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar className="w-4 h-4 text-[#4CAF50]" />
                      <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                        {mission.date}
                      </span>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#4CAF50]/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
