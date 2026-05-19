import { Shield, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0B0F0A] border-t border-[#4CAF50]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-md flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#0B0F0A]" strokeWidth={2.5} />
              </div>
              <span
                className="text-lg font-bold tracking-wider text-white"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                UWED FORCE
              </span>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
            >
              Aniqlik, intizom va kuchga bag'ishlangan elita taktik bo'linma. 
              2020 yildan beri butun dunyo bo'ylab faoliyat yuritamiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-bold tracking-wider mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              TEZKOR HAVOLALAR
            </h3>
            <ul className="space-y-2">
              {['Bosh sahifa', 'Biz haqimizda', 'Jamoa', 'Missiyalar', 'Galereya', 'Aloqa'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-[#4CAF50] transition-colors text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-white font-bold tracking-wider mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              BOG'LANISH
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[#1F2A1F]/40 border border-[#4CAF50]/20 rounded-lg flex items-center justify-center hover:bg-[#4CAF50] hover:border-[#4CAF50] transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-[#0B0F0A] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4CAF50]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-white/50 text-sm"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
            >
              © 2026 UWED FORCE. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/50 hover:text-[#4CAF50] transition-colors text-sm"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
              >
                Maxfiylik siyosati
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-[#4CAF50] transition-colors text-sm"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
              >
                Foydalanish shartlari
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}