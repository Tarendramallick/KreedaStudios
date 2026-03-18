"use client"

import { motion, useTransform } from "framer-motion"

export default function CarouselCard({
  video,
  index,
  total,
  scrollYProgress,
}) {
  const basePosition = index - (total - 1) / 2

  const progress = useTransform(scrollYProgress, [0, 1], [-3, 3])
  const dynamicPos = useTransform(progress, (p) => basePosition + p)

  /* 🎯 distance from center */
  const distance = useTransform(dynamicPos, (d) => Math.abs(d))

  /* 🧠 movement */
  const x = useTransform(dynamicPos, (d) => d * 280)

  /* 🔥 center POP */
  const scale = useTransform(distance, [0, 1, 3], [2, 1.1, 0.6])
  const z = useTransform(distance, [0, 1, 3], [400, 0, -200])
  const opacity = useTransform(distance, [0, 2], [1, 0.3])

  /* ✅ flat at center */
  const rotateY = useTransform(distance, [0, 1.5], [0, -25])

  /* ✅ stacking fix */
  const zIndex = useTransform(distance, [0, 3], [100, 0])

  /* ✨ FIXED blur + brightness */
  const blurValue = useTransform(distance, [0, 3], [0, 6])
  const blur = useTransform(blurValue, (b) => `blur(${b}px)`)

  const brightnessValue = useTransform(distance, [0, 3], [1, 0.5])
  const brightness = useTransform(
    brightnessValue,
    (b) => `brightness(${b})`
  )

  const glowOpacity = useTransform(distance, [0, 1], [0.25, 0])

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
        rotateY,
        z,
        zIndex,
        filter: blur, // ✅ FIXED
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[360px] h-[240px] rounded-3xl overflow-hidden shadow-2xl will-change-transform"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{
          filter: brightness, // ✅ FIXED
        }}
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </motion.video>

      {/* glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-white/10 backdrop-blur-md"
      />
    </motion.div>
  )
}