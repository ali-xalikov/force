import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image_url: string;
  created_at: string;
}

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const SUPABASE_URL = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
  const SUPABASE_ANON_KEY =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnFzYmdyZGJvbnhobGthaWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjIyODQsImV4cCI6MjA5NDczODI4NH0.DNP0OmIN0p0uPlxnDUwx3wfuGyePjgtARkS214tr6Eo";

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/Gallery?select=*&order=created_at.desc`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch");
        const data: GalleryItem[] = await res.json();
        setItems(data);
      } catch (error) {
        console.error(error);
        setItems([
          {
            id: 1,
            title: "Test Rasm",
            category: "event",
            image_url:
              "https://api.uwed.uz/uploads/slider/UcB4rNEowwqdx3JMKHdwt6tuAtWazzpBt8r0FXsv.jpg",
            created_at: "2026-06-06",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  const filteredItems =
    filter === "all"
      ? items
      : items.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        );

  const categories = [
    "all",
    "event",
    "ceremony",
    "sport",
    "education",
    "other",
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="pt-8 pb-10 text-center border-b border-gray-900">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
          UWED <span className="text-[#e63939]">GALLERY</span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Universitet hayotidan eng yaxshi lahzalar
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
              filter === cat
                ? "bg-[#e63939] text-white"
                : "bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800"
            }`}
          >
            {cat === "all" ? "BARCHASI" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Card Info */}
              <div className="mt-4 bg-[#0f0f0f] p-5 rounded-2xl border border-gray-900">
                <div className="uppercase text-[#e63939] text-xs font-bold tracking-widest mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {new Date(item.created_at).toISOString().split("T")[0]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center text-gray-500 text-xl mt-20">
          Bu kategoriyada hozircha rasmlar yo‘q
        </div>
      )}
    </div>
  );
}
