"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Trash2, Shield, Star, Users, Search } from "lucide-react";
import Behruz from "../../../images/Behruz.jpg";
import Jahona from "../../../images/Jahona.png";
import Ruxsora from "../../../images/Ruxsora.png";
import Isfandiyor from "../../../images/Isfandiyor.png";
import Shohjahon from "../../../images/Shohjahon.png";
import Talatjon from "../../../images/Tal'atjon.png";
import Sherzod1 from "../../../images/Sherzod.jpg";













interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: any;
  specialty?: string;
}

const OrgChart = () => {
  const [teamData, setTeamData] = useState<TeamMember[]>([
    {
      id: 0,
      name: "Sharipov Sherzod Shuxratovich",
      role: "Guruh Rahbari",
      department: "RAHBARIYAT",
      image: "../../../images/Sherzod.jpg",
      specialty: "Strategik boshqaruv",
    },
    {
      id: 1,
      name: "Mavlonov Mehriddin Mansur o'g'li",
      role: "Mutaxassis",
      department: "OMMAVIY TADBIRLAR GURUHI",
      image: "../../../images/Mehriddin.png",
    },
    {
      id: 2,
      name: "Shermirzayev Abbosbek Isroiljon o'g'li",
      role: "Mutaxassis",
      department: "OMMAVIY TADBIRLAR GURUHI",
      image: "../../../images/Abbosbek.jpg",
    },
    {
      id: 4,
      name: "Olimzoda Isfandiyor Jamshid o'g'li",
      role: "Mutaxassis",
      department: "OMMAVIY TADBIRLAR GURUHI",
      image: Isfandiyor,
    },
    {
      id: 5,
      name: "Yorkulov Shohjahon Shavkatovich",
      role: "Mutaxassis",
      department: "OMMAVIY TADBIRLAR GURUHI",
      image: Shohjahon,
    },
    {
      id: 6,
      name: "Turakulov Tal'atjon Tulkimovich",
      role: "Mutaxassis",
      department: "OMMAVIY TADBIRLAR GURUHI",
      image: Talatjon,
    },

    // ICHKI TADBIRLAR
    {
      id: 7,
      name: "Mavlonov Mehriddin Mansur o'g'li",
      role: "Bo'lim boshlig'i",
      department: "ICHKI TADBIRLAR",
      image: "../../../images/Mehriddin.png",
    },
    {
      id: 8,
      name: "Xamraeva Dilyora Isroil qizi",
      role: "Kardinator",
      department: "ICHKI TADBIRLAR",
      image: "../../../images/Dilyora.png",
    },
    {
      id: 11,
      name: "Muxammadaliyev Farrux Sultonali o'g'li",
      role: "Mutaxassis",
      department: "ICHKI TADBIRLAR",
      image: "../../../images/Farrux.png",
    },
    {
      id: 9,
      name: "Rahmonqulov Sherzod Bahromjon o'g'li",
      role: "Mutaxassis",
      department: "ICHKI TADBIRLAR",
      image: Sherzod1,
    },
    {
      id: 10,
      name: "Rahmonov Behruz To'ravoy o'g'li",
      role: "Mutaxassis",
      department: "ICHKI TADBIRLAR",
      image: Behruz,
    },
    {
      id: 14,
      name: "Umaraliyeva Jahona Alimardonovna",
      role: "Mutaxassis",
      department: "ICHKI TADBIRLAR",
      image: Jahona,
    },
    {
      id: 15,
      name: "Mirzabekova Ruxsora Ilxam qizi",
      role: "Mutaxassis",
      department: "ICHKI TADBIRLAR",
      image: Ruxsora,
    },
    {
      id: 17,
      name: "Aleksandrov Bobur Tojiboy o'g'li",
      role: "Nazoratchi",
      department: "NAZORAT BO'LIMI",
      image: "../../../images/Bobur.jpg",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Ushbu xodimni o'chirishni xohlaysizmi?")) {
      setTeamData(teamData.filter((m) => m.id !== id));
    }
  };

  const departmentStyles: any = {
    RAHBARIYAT: { color: "from-yellow-600 to-orange-500", icon: Star },
    "OMMAVIY TADBIRLAR GURUHI": {
      color: "from-blue-600 to-cyan-500",
      icon: Users,
    },
    "ICHKI TADBIRLAR": { color: "from-purple-600 to-rose-500", icon: Shield },
    "NAZORAT BO'LIMI": { color: "from-emerald-600 to-teal-500", icon: Search },
  };

  return (
    <div className="min-h-screen bg-[#080a08] text-white py-12 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase"
          >
            UWED <span className="text-[#830218]">FORCE</span> CONTROL
          </motion.h1>
          <p className="text-gray-500 mt-2 tracking-[0.3em] uppercase text-xs">
            Shaxsiy tarkibni boshqarish tizimi
          </p>
        </header>

        {/* Rahbar Kartasi */}
        <div className="flex justify-center mb-24">
          {teamData
            .filter((m) => m.department === "RAHBARIYAT")
            .map((leader) => (
              <motion.div
                key={leader.id}
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-sm p-[2px] bg-gradient-to-r from-yellow-500/50 to-orange-500/50 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.1)]"
              >
                <div className="bg-[#0b120b] rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-40 mb-4 overflow-hidden rounded-xl border-2 border-yellow-500/30">
                    <img
                      src={
                        typeof leader.image === "string"
                          ? leader.image
                          : leader.image.src
                      }
                      className="w-full h-full object-cover"
                      alt={leader.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    {leader.name}
                  </h3>
                  <span className="text-yellow-500 text-xs font-bold tracking-widest mt-1 uppercase">
                    {leader.role}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            "OMMAVIY TADBIRLAR GURUHI",
            "ICHKI TADBIRLAR",
            "NAZORAT BO'LIMI",
          ].map((dept) => {
            const Style = departmentStyles[dept];
            return (
              <div key={dept} className="flex flex-col space-y-4">
                <div
                  className={`bg-gradient-to-r ${Style.color} p-3 rounded-lg flex items-center gap-3`}
                >
                  <Style.icon size={20} className="text-white" />
                  <h2 className="text-sm font-black text-white uppercase tracking-tight">
                    {dept}
                  </h2>
                </div>

                <div className="space-y-3">
                  <AnimatePresence>
                    {teamData
                      .filter((m) => m.department === dept)
                      .map((member) => (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="bg-[#141d14] border border-gray-800 p-3 rounded-lg flex items-center justify-between group hover:border-[#830218]/50 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={
                                typeof member.image === "string"
                                  ? member.image
                                  : member.image.src
                              }
                              className="w-10 h-12 object-cover rounded bg-white scale-125"
                              alt=""
                            />
                            <div className="flex flex-col">
                              <span className="text-[11px] font-bold text-gray-200 leading-tight">
                                {member.name}
                              </span>
                              <span className="text-[9px] text-gray-500 uppercase">
                                {member.role}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 bg-blue-900/40 text-blue-400 rounded hover:bg-blue-600 hover:text-white transition-colors">
                              <Edit2 size={12} />
                            </button>
                            <button
                              onClick={() => handleDelete(member.id)}
                              className="p-1.5 bg-red-900/40 text-red-400 rounded hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#0b120b] border border-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="text-[#830218]" /> TO'LIQ RO'YXAT
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#141d14] text-gray-400 text-[10px] uppercase tracking-[0.2em]">
                  <th className="p-4">F.I.SH</th>
                  <th className="p-4">Bo'lim</th>
                  <th className="p-4">Lavozim</th>
                  <th className="p-4 text-right">Harakat</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {teamData.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-800 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={
                          typeof member.image === "string"
                            ? member.image
                            : member.image.src
                        }
                        className="w-8 h-10 object-cover rounded bg-white scale-125"
                        alt=""
                      />
                      <span className="font-medium">{member.name}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-400">
                        {member.department}
                      </span>
                    </td>
                    <td className="p-4 text-[#830218] font-bold text-xs italic">
                      {member.role}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="text-red-500 hover:text-red-400 p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrgChart;
