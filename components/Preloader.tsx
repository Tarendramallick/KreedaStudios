"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stage, setStage] = useState<
    "loading-in" | "loading-out" | "curtain" | "done"
  >("loading-in");

  // ⏳ Stage timing
  useEffect(() => {
    if (stage === "loading-in") {
      const t = setTimeout(() => setStage("loading-out"), 1500);
      return () => clearTimeout(t);
    }

    if (stage === "loading-out") {
      const t = setTimeout(() => setStage("curtain"), 700);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <>
      {children}

      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* 🎥 LOADING SCREEN */}
            {(stage === "loading-in" || stage === "loading-out") && (
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white">
                
                {/* GIF */}
                <motion.div
                  initial={{ y: -120, opacity: 0, scale: 0.9 }}
                  animate={
                    stage === "loading-in"
                      ? { y: 0, opacity: 1, scale: 1 }
                      : { y: -120, opacity: 0, scale: 0.9 } // reverse OUT
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative w-[40vw] h-[40vh]"
                >
                  <Image
                    src="/preloader.gif"
                    alt="preloader"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* TEXT */}
                <motion.h1
                  initial={{ y: 120, opacity: 0, scale: 0.9 }}
                  animate={
                    stage === "loading-in"
                      ? { y: 0, opacity: 1, scale: 1 }
                      : { y: 120, opacity: 0, scale: 0.9 } // reverse OUT
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className="mt-6 text-2xl font-bold"
                >
                  Your Brand Name
                </motion.h1>
              </div>
            )}

            {/* 🎬 CURTAIN (ONLY AFTER FULL EXIT) */}
            {stage === "curtain" && (
              <>
                {/* TOP */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/2 bg-black z-20"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: 1.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />

                {/* BOTTOM */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-20"
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 1.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  onAnimationComplete={() => setStage("done")}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}