import React from "react";
import { Shield } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        {/* Logo konteyneri */}
        <div className="w-12 h-12 bg-gradient-to-br from-[#830218] to-[#163959] rounded-md flex items-center justify-center shadow-lg shadow-[#830218]/30 overflow-hidden">
          {/* DIQQAT: 
              1. src="/images/Logo.jpg" -> public so'zi shart emas.
              2. object-cover va w-full -> rasm konteynerga to'liq sig'ishi uchun.
              3. Fayl nomi 'Logo.jpg' bo'lsa, kodda ham aynan shunday bo'lishi shart (kichik-katta harf).
          */}
          <img
            className="aylana w-full h-full object-cover"
            src="/images/Logo.jpg"
            alt="UWED Force Logo"
            onError={(e) => {
              // Agar rasm yuklanmasa, zaxira sifatida Shield ikonkasini ko'rsatish
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement!.innerHTML =
                '<div class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>';
            }}
          />
        </div>
        {/* Status nuqtasi */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#830218] rounded-full border-2 border-[#0B0F0A]"></div>
      </div>

      <div className="flex flex-col">
        <span
          className="text-xl font-bold tracking-wider text-white"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          UWED <span className="text-[#830218]">FORCE</span>
        </span>
        <span
          className="text-[8px] tracking-[0.2em] text-[#c6586a] uppercase font-medium"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          "Qalqon" jamoatchilik guruhi
        </span>
      </div>
    </div>
  );
}
