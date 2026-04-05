"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function FloatingTitle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotateY: 180,
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    } else {
      controls.set({ rotateY: 0 })
    }
  }, [isInView, controls])

  return (
    <section
      ref={ref}
      className="w-full bg-black flex items-center justify-center [perspective:1000px] p-10"
    >
      <motion.div
        animate={controls}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
          <h1
            className="text-6xl md:text-7xl font-extrabold text-white"
            style={{
              textShadow: `
                1px 1px 0 #ccc,
                2px 2px 0 #bbb,
                3px 3px 0 #aaa,
                4px 4px 0 #999,
                5px 5px 0 #888,
                6px 6px 12px rgba(0,0,0,0.9)
              `,
            }}
          >
            Our Gallery
          </h1>
        </div>

        {/* BACK */}
        <div className="flex items-center justify-center [backface-visibility:hidden] rotate-y-180">
          <h1
            className="text-6xl md:text-7xl font-extrabold text-white"
            style={{
              textShadow: `
                1px 1px 0 #ccc,
                2px 2px 0 #bbb,
                3px 3px 0 #aaa,
                4px 4px 0 #999,
                5px 5px 0 #888,
                6px 6px 12px rgba(0,0,0,0.9)
              `,
            }}
          >
            Our Gallery
          </h1>
        </div>
      </motion.div>
    </section>
  )
}