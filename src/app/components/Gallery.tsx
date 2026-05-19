"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.log("Supabase error:", error.message);
      } else {
        setGalleryImages(data);
      }

      setLoading(false);
    };

    fetchGallery();
  }, []);

  return (
    <div
      id="galereya"
      className="relative py-24 bg-gradient-to-b from-[#1F2A1F] to-[#0B0F0A] overflow-hidden"
    >
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-block mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-full">
            <ImageIcon className="w-4 h-4 text-[#4CAF50]" />
            <span className="text-[#4CAF50] text-sm tracking-wider">
              VIZUAL ARXIV
            </span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          <span className="text-[#4CAF50]">GALEREYA</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="relative bg-[#1F2A1F]/40 border border-[#4CAF50]/20 rounded-xl overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0A]/90 to-transparent" />

                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#4CAF50]/90 rounded-full">
                      <span className="text-xs font-bold text-black">
                        {image.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
