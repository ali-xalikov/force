'use client';
import { motion } from 'framer-motion';
import { Crosshair, Eye, Zap, Shield, Star } from 'lucide-react';

export function Team() {
    const leader = {
        name: 'Sharipov Sherzod Shuxratovich',
        role: 'Guruh Rahbari',
        image: '/images/Sherzod.jpg',
        icon: Star,
        specialty: 'Strategik boshqaruv va taktik qo\'mondonlik',
    };

    const teamMembers = [
      {
        name: "Yunusov Asilbek Adizbek o'g'li",
        role: "Ommaiy tadbirlar guruhi",
        image: "/images/Asilbek.jpg",
        icon: Shield,
        specialty: "Xavfsizlikni ta'minlash",
      },
      {
        name: "Mavlonov Mehriddin Mansur o'g'li",
        role: "Ichki tadbirlar guruhi",
        image: "/images/Mehriddin.png",
        icon: Eye,
        specialty: "Ichki nazorat va tartib",
      },
      {
        name: "Aleksandrov Bobur Tojiboy o'g'li",
        role: "Nazorat bo'limi",
        image: "/images/Bobur.jpg",
        icon: Crosshair,
        specialty: "Sifat nazorati va audit",
      },
      {
        name: "Shermirzayev Abbosbek Isroiljon o'g'li",
        role: "Hujumchi operator",
        image: "/images/Abbosbek.jpg",
        icon: Zap,
        specialty: "Tezkor operativ harakatlar",
      },
      {
        name: "Xamrayeva Dilyora Isroil qizi",
        role: "Kordinator",
        image: "/images/Dilyora.png",
        icon: Zap,
        specialty: "Tezkor operativ harakatlar",
      },
    ];

    return (
      <div
        id="jamoa"
        className="relative py-24 bg-gradient-to-b from-[#0B0F0A] to-[#141d14] overflow-hidden"
      >
        {/* Background Camo Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#830218]/10 border border-[#830218]/30 rounded-full">
                <div className="w-2 h-2 bg-[#830218] rounded-full animate-pulse"></div>
                <span className="text-[#830218] text-sm tracking-[0.2em] font-bold">
                  UWED FORCE UNIT
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase italic">
              ELITA <span className="text-[#830218]">SHAXSIY TARKIB</span>
            </h2>
          </motion.div>

          {/* --- LEADER SECTION --- */}
          <div className="flex justify-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="group relative w-full max-w-md"
            >
              <div className="relative bg-[#1a2e1a]/40 backdrop-blur-xl border-2 border-[#830218]/30 rounded-2xl overflow-hidden p-1 shadow-2xl shadow-[#830218]/10">
                <div className="relative h-[450px] overflow-hidden rounded-xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0A] via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[#830218] rounded-xl flex items-center justify-center shadow-lg shadow-[#830218]/40">
                    <leader.icon
                      className="w-8 h-8 text-black"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <span className="bg-[#830218] text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">
                      {leader.role}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-[#830218]/80 text-sm mt-2 font-medium">
                      {leader.specialty}
                    </p>
                  </div>
                </div>
              </div>
              {/* Glow effect for leader */}
              <div className="absolute -inset-4 bg-[#830218]/5 blur-3xl -z-10 group-hover:bg-[#830218]/10 transition-colors duration-500"></div>
            </motion.div>
          </div>

          {/* --- TEAM GRID --- */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#830218]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

                  <div className="relative bg-[#141d14] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-[#830218]/40 transition-all duration-500 shadow-xl hover:shadow-green-500/20">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0A] via-[#0B0F0A]/30 to-transparent"></div>

                      {/* Icon */}
                      <div className="absolute bottom-5 left-5 bg-[#830218] p-3 rounded-2xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <member.icon className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-[#830218] text-[11px] font-bold uppercase tracking-[0.25em]">
                        {member.role}
                      </span>

                      <h4 className="text-white font-extrabold text-xl mt-2 group-hover:text-[#830218] transition-colors duration-300">
                        {member.name}
                      </h4>

                      <p className="text-white/50 text-sm mt-3 leading-relaxed">
                        {member.specialty}
                      </p>

                      {/* Skill */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 mb-2">
                          <span>Jang Ko‘nikmasi</span>
                          <span>100%</span>
                        </div>

                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-[#830218] to-[#be0423]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}