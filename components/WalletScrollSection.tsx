"use client"

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import { useRef } from "react"

export default function WalletScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  /* ---------------- CENTER ANIMATION ---------------- */

  const scale = useTransform(scrollYProgress, [0.35, 0.65], [1, 3.5])
  const borderRadius = useTransform(
    scrollYProgress,
    [0.35, 0.65],
    ["24px", "0px"]
  )

  /* ---------------- TEXT → VIDEO TRANSITION ---------------- */

  const textOpacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0])
  const videoOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1])

  const videoBlur = useTransform(scrollYProgress, [0.45, 0.65], [20, 0])
  const blurFilter = useMotionTemplate`blur(${videoBlur}px)`

  /* ---------------- SIDE CARDS EXIT ---------------- */

  const sideOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0])
  const sideY = useTransform(scrollYProgress, [0.2, 0.4], [0, 80])

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      
      {/* 🔥 GLOBAL VIDEO GLOW BACKGROUND */}
      <motion.video
        style={{ opacity: videoOpacity }}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover blur-[120px] scale-110 opacity-30 pointer-events-none"
      >
        <source src="/thunder.mp4" type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/50 pointer-events-none" />

      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 w-[90%] max-w-7xl">

          {/* LEFT COLUMN */}
          <motion.div
            style={{ opacity: sideOpacity, y: sideY }}
            className="space-y-6 flex flex-col items-end"
          >
            <Card video="/sam1.mp4" title="Cyber Runner" />
            <Card video="/games/game2.mp4" title="Dark Arena" />
          </motion.div>

          {/* 🔥 CENTER CINEMATIC CARD */}
          <motion.div
            style={{ scale, borderRadius }}
            className="relative z-20 bg-[#111] flex items-center justify-center shadow-2xl overflow-hidden"
          >
            
            {/* VIDEO REVEAL */}
            <motion.video
              style={{
                opacity: videoOpacity,
                filter: blurFilter,
              }}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/thunder.mp4" type="video/mp4" />
            </motion.video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* TEXT */}
            <motion.h1
              style={{ opacity: textOpacity }}
              className="relative z-20 text-center text-5xl md:text-6xl font-extrabold text-white leading-tight"
            >
              THE
              <br />
              EVERYTHING
              <br />
              WALLET
            </motion.h1>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            style={{ opacity: sideOpacity, y: sideY }}
            className="space-y-6 flex flex-col items-start"
          >
            <Card video="/games/game3.mp4" title="Neon Drift" />
            <Card video="/games/game4.mp4" title="Sky Legends" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ---------------- 🎮 GAME CARD ---------------- */

function Card({
  video,
  title,
}: {
  video: string
  title: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: 1 }}
      className="relative h-[200px] max-w-[320px] w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
    >
      {/* 🔥 VIDEO GLOW */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-[120%] h-[120%] object-cover blur-2xl opacity-40 scale-110"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* 🎮 MAIN VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

      {/* GLASS TEXT */}
      <div className="absolute bottom-0 left-0 w-full p-4 backdrop-blur-md bg-white/10 border-t border-white/10">
        <p className="text-sm font-semibold text-white tracking-wide">
          {title}
        </p>
      </div>
    </motion.div>
  )
}