'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Bosh sahifa', 'Biz haqimizda', 'Jamoa', 'Missiyalar', 'Galereya', 'Aloqa'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F0A]/95 backdrop-blur-lg shadow-lg shadow-[#4CAF50]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-white/90 hover:text-[#4CAF50] transition-all duration-300 tracking-wider group"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4CAF50] to-transparent group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-[#4CAF50]/20 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-[#4CAF50] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#4CAF50]/20 bg-[#0B0F0A]/95 backdrop-blur-lg rounded-lg">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-white/90 hover:text-[#4CAF50] hover:bg-[#4CAF50]/10 transition-all duration-300 tracking-wider"
                style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}