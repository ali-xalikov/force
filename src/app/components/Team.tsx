"use client";
import { motion } from "framer-motion";
import { Crosshair, Eye, Zap, Shield, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar_url?: string;
  specialty?: string;
}

export function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const SUPABASE_URL = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
  const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

  useEffect(() => {
    async function loadTeam() {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/members?select=*&order=created_at.desc`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error("Ma'lumot yuklanmadi");
        const data: TeamMember[] = await res.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Team yuklashda xatolik:", error);
        // Test uchun eski ma'lumotlar
        setTeamMembers([
          {
            id: "1",
            name: "Sharipov Sherzod Shuxratovich",
            role: "Guruh Rahbari",
            avatar_url: "/images/Sherzod.jpg",
            specialty: "Strategik boshqaruv va taktik qo'mondonlik",
          },
          {
            id: "2",
            name: "Yunusov Asilbek Adizbek o'g'li",
            role: "Ommaiy tadbirlar guruhi",
            avatar_url: "/images/Asilbek.jpg",
            specialty: "Xavfsizlikni ta'minlash",
          },
          // qolganlari kerak bo'lsa qo'shishingiz mumkin
        ]);
      } finally {
        setLoading(false);
      }
    }

    loadTeam();
  }, [SUPABASE_ANON_KEY]);

  // Role ga qarab icon tanlash
  const getIcon = (role: string) => {
    if (role.toLowerCase().includes("rahbar")) return Star;
    if (role.toLowerCase().includes("nazorat")) return Crosshair;
    if (role.toLowerCase().includes("ichki")) return Shield;
    if (role.toLowerCase().includes("omma")) return Eye;
    return Zap;
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-[#830218]">Yuklanmoqda...</div>
    );
  }

  const leader =
    teamMembers.find(
      (m) =>
        m.role.toLowerCase().includes("rahbar") ||
        m.role.toLowerCase().includes("bosh")
    ) || teamMembers[0];

  const otherMembers = teamMembers.filter((m) => m.id !== leader?.id);

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
        {leader && (
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
                    src={leader.avatar_url || "/images/logo.jpg"}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0A] via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[#830218] rounded-xl flex items-center justify-center shadow-lg shadow-[#830218]/40">
                    <Star className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <span className="bg-[#830218] text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">
                      {leader.role}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-[#830218]/80 text-sm mt-2 font-medium">
                      {leader.specialty || "Strategik boshqaruv"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- TEAM GRID --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {otherMembers.map((member, index) => {
              const Icon = getIcon(member.role);
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#830218]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

                  <div className="relative bg-[#141d14] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-[#830218]/40 transition-all duration-500 shadow-xl hover:shadow-green-500/20">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.avatar_url || "/images/logo.jpg"}
                        alt={member.name}
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0A] via-[#0B0F0A]/30 to-transparent"></div>

                      <div className="absolute bottom-5 left-5 bg-[#830218] p-3 rounded-2xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[#830218] text-[11px] font-bold uppercase tracking-[0.25em]">
                        {member.role}
                      </span>
                      <h4 className="text-white font-extrabold text-xl mt-2 group-hover:text-[#830218] transition-colors duration-300">
                        {member.name}
                      </h4>
                      {member.specialty && (
                        <p className="text-white/50 text-sm mt-3 leading-relaxed">
                          {member.specialty}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
