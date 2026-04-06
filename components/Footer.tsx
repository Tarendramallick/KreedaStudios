"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      
      {/* 🔥 TOP CTA */}
      <div className="text-center py-20 px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Enter the World of Kreeda
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Experience next-generation gaming with immersive worlds, powerful storytelling,
          and cutting-edge technology.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-black rounded-xl font-semibold"
        >
          DOWNLOAD NOW
        </motion.button>
      </div>

      {/* ⚡ MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-4 gap-12 border-t border-white/10">
        
        {/* 🧠 BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">KREEDA</h2>
          <p className="mt-4 text-gray-400 text-sm">
            Crafting next-gen gaming experiences with cinematic visuals and player-first design.
          </p>
        </div>

        {/* 🔗 COMPANY */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["About", "Careers", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🎮 GAMES */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">Games</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Upcoming Titles", "Top Games", "Download", "Community"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🌐 SOCIAL */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300">Connect</h3>
          
          <div className="flex flex-wrap gap-3">
            {["Twitter", "Instagram", "YouTube", "Discord"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-md transition"
              >
                {platform}
              </motion.a>
            ))}
          </div>

          <p className="mt-6 text-gray-500 text-xs">
            Join our gaming community.
          </p>
        </div>
      </div>

      {/* ⚡ BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Kreeda Studio. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white/5 to-transparent" />
      </div>
    </footer>
  );
}