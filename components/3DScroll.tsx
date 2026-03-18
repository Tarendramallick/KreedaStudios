"use client"

import { useScroll } from "framer-motion"
import { useRef } from "react"
import CarouselCard from "./CarouselCard"

const videos = [
  "sam1.mp4",
  "thunder.mp4",
  "sam1.mp4",
  "sam1.mp4",
  "sam1.mp4",
  "sam1.mp4",
  "sam1.mp4",
]

export default function CurvedCarousel() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={ref}
      className="relative h-[400vh] bg-black"
      style={{ perspective: "2000px" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[400px] flex items-center justify-center">

          {videos.map((video, i) => (
            <CarouselCard
              key={i}
              video={video}
              index={i}
              total={videos.length}
              scrollYProgress={scrollYProgress}
            />
          ))}

        </div>
      </div>
    </section>
  )
}