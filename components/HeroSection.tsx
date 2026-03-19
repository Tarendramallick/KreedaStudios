"use client";

import { motion } from "framer-motion";
import { PushWord } from "./PushWord";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      
      <div className="w-full px-6 lg:px-16 grid lg:grid lg:grid-cols-[30%_70%] gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-20"
        >
          <h1 className="text-5xl lg:text-7xl font-bold ">
            <PushWord text="KREEDA" fontSize={80} color="white" letterSpacing={0} />
            <PushWord text="STUDIO" fontSize={80} color="white" letterSpacing={0}  />
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Kreeda Studios is crafting next-generation 3D games, powered by creative innovation and a player-first approach that shapes every experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-white hover:bg-white/70 text-black transition rounded-xl text-sm font-semibold"
          >
            DOWNLOAD KREEDA 
          </motion.button>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          
          {/* 🔥 BACKGROUND BLUR VIDEO (REAL GLOW) */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="
                w-[120%] h-[120%]
                object-cover
                blur-[100px]
                opacity-40
                scale-110
                will-change-transform
              "
            >
              <source src="/unreal.mp4" type="video/mp4" />
            </video>
          </div>

          {/* 🎥 MAIN VIDEO */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/unreal.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}