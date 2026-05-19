import { Shield } from "lucide-react";
import LogoImage from "../../../images/logo.jpg";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-md flex items-center justify-center shadow-lg shadow-[#4CAF50]/30">
          <img className="aylana" src={LogoImage} alt="" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF5252] rounded-full border-2 border-[#0B0F0A]"></div>
      </div>
      <div className="flex flex-col">
        <span
          className="text-xl font-bold tracking-wider text-white"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          UWED FORCE
        </span>
        <span
          className="text-[8px] tracking-[0.2em] text-[#4CAF50] uppercase"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Elita Harbiy Jamoa
        </span>
      </div>
    </div>
  );
}
