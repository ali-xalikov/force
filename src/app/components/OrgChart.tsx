import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Star, Shield, Trophy } from "lucide-react";

interface Group {
  id: string;
  name: string;
}

interface TeamMember {
  id: string;
  name: string;
  rank: string;
  group_id?: string;
  avatar_url?: string;
}

const OrgChart = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const SUPABASE_URL = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
  const SUPABASE_ANON_KEY =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnFzYmdyZGJvbnhobGthaWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjIyODQsImV4cCI6MjA5NDczODI4NH0.DNP0OmIN0p0uPlxnDUwx3wfuGyePjgtARkS214tr6Eo";

  useEffect(() => {
    const loadData = async () => {
      try {
        const [groupsRes, membersRes] = await Promise.all([
          fetch(`${SUPABASE_URL}/rest/v1/groups?select=*&order=name.asc`, {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }),
          fetch(
            `${SUPABASE_URL}/rest/v1/members?select=*&order=created_at.desc`,
            {
              headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              },
            }
          ),
        ]);

        const groupsData = await groupsRes.json();
        const membersData = await membersRes.json();

        setGroups(Array.isArray(groupsData) ? groupsData : []);
        setTeamData(Array.isArray(membersData) ? membersData : []);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getGroupStyle = (name: string) => {
    switch (name) {
      case "RAHBARIYAT":
        return { color: "from-yellow-600 to-amber-600", icon: Star };
      case "Murojaatlar bilan ishlash va monitoring bo'limi":
      case "MUROJAATLAR BILAN ISHLASH VA MONITORING BO'LIMI":
        return { color: "from-slate-600 to-gray-700", icon: Users };
      case "SPORT MUSOBAQALARI VA OMMAVIY TADBIRLAR BO'LIMI":
        return { color: "from-blue-600 to-cyan-600", icon: Trophy };
      case "TASHQI TADBIRLAR VA PRATAKOL BO'LIMI":
        return { color: "from-purple-600 to-violet-600", icon: Shield };
      default:
        return { color: "from-zinc-600 to-stone-700", icon: Users };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080a08] flex items-center justify-center text-[#830218] text-2xl">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080a08] text-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black text-center mb-12 tracking-tight">
          UWED<span className="text-[#830218]">FORCE</span>
        </h1>

        <div className="space-y-10">
          {groups.map((group) => {
            const members = teamData.filter((m) => m.group_id === group.id);
            const { color, icon: Icon } = getGroupStyle(group.name);

            return (
              <div key={group.id} className="space-y-4">
                {/* Bo'lim sarlavhasi */}
                <div
                  className={`bg-gradient-to-r ${color} px-6 py-3 rounded-2xl flex items-center gap-3`}
                >
                  <Icon size={24} />
                  <h2 className="text-lg font-bold uppercase tracking-wider flex-1">
                    {group.name}
                  </h2>
                  <span className="text-sm bg-black/30 px-3 py-1 rounded-full">
                    {members.length} nafar
                  </span>
                </div>

                {/* Members - Flex + ustma-ust */}
                <div className="flex flex-wrap gap-4 justify-start">
                  {members.length > 0 ? (
                    members.map((member, idx) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="bg-[#141d14] border border-gray-800 hover:border-[#830218] rounded-2xl p-4 w-full sm:w-[280px] md:w-[260px] transition-all duration-300"
                      >
                        <div className="flex gap-4">
                          <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-gray-700">
                            <img
                              src={member.avatar_url || "/images/logo.jpg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold leading-tight text-[15px] mb-1 line-clamp-2">
                              {member.name}
                            </p>
                            <p className="text-[#830218] text-sm font-medium">
                              {member.rank}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 pl-4">
                      Bu bo'limda a'zolar yo'q
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
