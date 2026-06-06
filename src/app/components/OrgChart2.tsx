import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Trash2, Shield, Star, Users, Search } from "lucide-react";

interface Group {
  id: string;
  name: string; // Bo'lim nomi (masalan: RAHBARIYAT, ICHKI TADBIRLAR)
  title?: string;
}

interface TeamMember {
  id: string;
  name: string;
  email?: string;
  rank: string;
  group_id?: string;
  avatar_url?: string;
  status?: string;
}

const OrgChart = () => {
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  const SUPABASE_URL = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
  const SUPABASE_ANON_KEY =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnFzYmdyZGJvbnhobGthaWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjIyODQsImV4cCI6MjA5NDczODI4NH0.DNP0OmIN0p0uPlxnDUwx3wfuGyePjgtARkS214tr6Eo";

  // Ma'lumotlarni yuklash
  useEffect(() => {
    const loadData = async () => {
      try {
        // 1. Groups (Bo'limlar) yuklash
        const groupsRes = await fetch(
          `${SUPABASE_URL}/rest/v1/groups?select=*&order=name.asc`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );
        const groupsData = await groupsRes.json();
        setGroups(Array.isArray(groupsData) ? groupsData : []);

        // 2. Members (Xodimlar) yuklash
        const membersRes = await fetch(
          `${SUPABASE_URL}/rest/v1/members?select=*&order=created_at.desc`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );
        const membersData = await membersRes.json();
        setTeamData(Array.isArray(membersData) ? membersData : []);
      } catch (error) {
        console.error("Ma'lumot yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [SUPABASE_ANON_KEY]);

  const handleDelete = async (id: string) => {
    if (!confirm("Ushbu xodimni o'chirishni xohlaysizmi?")) return;

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/members?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      setTeamData((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error(error);
      alert("O'chirishda xatolik yuz berdi");
    }
  };

  // group_id bo'yicha bo'lim nomini topish
  const getGroupName = (group_id?: string) => {
    if (!group_id) return "Boshqa";
    const group = groups.find((g) => g.id === group_id);
    return group ? group.name : "Boshqa";
  };

  const departmentStyles: any = {
    RAHBARIYAT: { color: "from-yellow-600 to-orange-500", icon: Star },
    "OMMAVIY TADBIRLAR GURUHI": {
      color: "from-blue-600 to-cyan-500",
      icon: Users,
    },
    "ICHKI TADBIRLAR": { color: "from-purple-600 to-rose-500", icon: Shield },
    "NAZORAT BO'LIMI": { color: "from-emerald-600 to-teal-500", icon: Search },
    Boshqa: { color: "from-gray-600 to-slate-500", icon: Users },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080a08] flex items-center justify-center text-white">
        <div className="text-[#830218] text-2xl">Yuklanmoqda...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080a08] text-white py-10 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter"
          >
            UWED <span className="text-[#830218]">FORCE</span>
          </motion.h1>
          <p className="text-gray-500 mt-3 text-sm tracking-widest uppercase">
            Shaxsiy tarkib
          </p>
        </header>

        {/* Rahbar (agar kerak bo'lsa qo'shishingiz mumkin) */}

        {/* Bo'limlar - Groups dan dinamik */}
        <div className="space-y-12">
          {groups.length > 0 ? (
            groups.map((group) => {
              const members = teamData.filter((m) => m.group_id === group.id);
              const Style =
                departmentStyles[group.name] || departmentStyles["Boshqa"];

              return (
                <div key={group.id} className="scroll-mt-20">
                  <div
                    className={`bg-gradient-to-r ${Style.color} px-5 py-4 rounded-2xl flex items-center gap-4 mb-6`}
                  >
                    <Style.icon size={26} className="text-white" />
                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                      {group.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                      {members.map((member) => (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="bg-[#141d14] border border-gray-800 hover:border-[#830218]/60 rounded-2xl p-5 flex gap-4 group transition-all duration-300"
                        >
                          <div className="w-16 h-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-900 border border-gray-700">
                            <img
                              src={member.avatar_url || "/images/logo.jpg"}
                              className="w-full h-full object-cover"
                              alt={member.name}
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-base leading-tight line-clamp-2 mb-1">
                              {member.name}
                            </p>
                            <p className="text-[#830218] text-sm font-medium">
                              {member.rank}
                            </p>
                          </div>

                          <div className="flex flex-col justify-between items-end opacity-70 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-blue-400 hover:text-blue-300">
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(member.id)}
                              className="p-2 text-red-400 hover:text-red-300"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {members.length === 0 && (
                    <p className="text-gray-500 text-center py-8">
                      Bu bo'limda hozircha xodimlar yo'q
                    </p>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 py-20">
              Bo'limlar topilmadi
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
