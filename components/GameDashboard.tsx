"use client"

import {
  Search,
  Bell,
  ShoppingCart,
  Home,
  Gamepad2,
  Gift,
  Download,
} from "lucide-react"

export default function GameDashboard() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">

      {/* MAIN CONTAINER */}
      <div className="
        w-full max-w-7xl
        rounded-[40px]
        p-6 flex gap-6
        bg-gradient-to-br from-[#5b1e1e] via-[#4a1717] to-[#2e0d0d]
        shadow-[0_60px_150px_rgba(0,0,0,0.5)]
        relative
        overflow-hidden
      ">

        {/* 🌫️ SOFT TOP LIGHT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-white/10 blur-3xl rounded-full pointer-events-none" />

        {/* LEFT SIDEBAR */}
        <div className="
          w-[70px]
          rounded-3xl
          flex flex-col items-center py-6 gap-6
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-inner
        ">
          <div className="text-white font-bold text-xl">N</div>

          <div className="flex flex-col gap-6 text-white/60">
            <Home size={20} />
            <Gamepad2 size={20} />
            <Gift size={20} />
            <Download size={20} />
          </div>

          <div className="mt-auto w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white text-xl bg-white/5">
            +
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-6">

          {/* TOP BAR */}
          <div className="flex justify-between items-center">
            <h2 className="text-white text-lg">
              Good evening, <span className="font-semibold">NIKITIN</span>
            </h2>

            <div className="flex items-center gap-4">

              {/* SEARCH */}
              <div className="
                flex items-center px-4 py-2 rounded-full
                bg-white/5 backdrop-blur-xl
                border border-white/10
                text-white/60
              ">
                <Search size={16} />
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none ml-2 text-sm placeholder:text-white/40"
                />
              </div>

              <ShoppingCart className="text-white/70" />
              <Bell className="text-white/70" />
              <div className="w-10 h-10 rounded-full bg-white/80" />
            </div>
          </div>

          {/* HERO */}
          <div className="
            relative rounded-3xl p-6 flex items-center justify-between overflow-hidden
            bg-gradient-to-r from-[#ff6a6a] via-[#d94a4a] to-[#8a2323]
            shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]
          ">

            {/* LIGHT BLOBS */}
            <div className="absolute -top-10 left-10 w-[200px] h-[200px] bg-white/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 right-10 w-[200px] h-[200px] bg-black/30 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-md">
              <div className="bg-white/20 px-3 py-1 rounded-full text-xs w-fit mb-3 backdrop-blur-md">
                Popular
              </div>

              <h1 className="text-4xl font-bold text-white mb-2">
                Valorant
              </h1>

              <p className="text-white/80 text-sm">
                Multiplayer FPS by Riot Games.
              </p>

              <div className="mt-4 text-white/80 text-sm">
                👍 +53 Reviews
              </div>
            </div>

            {/* IMAGE */}
            <div className="
              w-[260px] h-[200px]
              rounded-2xl
              bg-gradient-to-br from-white/20 to-transparent
              backdrop-blur-md
              border border-white/10
            " />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-[1fr_300px] gap-6">

            {/* LEFT */}
            <div className="flex flex-col gap-6">

              {/* NEW GAMES */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-white text-lg">New Games</h3>
                  <span className="text-white/40 text-sm">See More</span>
                </div>

                <div className="flex gap-4">

                  {/* CARD 1 */}
                  <div className="
                    w-[200px] h-[140px]
                    rounded-2xl p-4 flex flex-col justify-end
                    bg-black/30 backdrop-blur-xl
                    border border-white/10
                    shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]
                    text-white
                  ">
                    <h4 className="font-semibold">Uncharted 4</h4>
                    <p className="text-xs text-white/50">Adventure</p>
                  </div>

                  {/* CARD 2 */}
                  <div className="
                    w-[200px] h-[140px]
                    rounded-2xl p-4 flex flex-col justify-end
                    bg-gradient-to-br from-[#ff6a6a] to-[#7a1f1f]
                    shadow-lg text-white
                  ">
                    <h4 className="font-semibold">Dishonored</h4>
                  </div>

                </div>
              </div>

              {/* DOWNLOAD */}
              <div className="
                rounded-2xl p-4 flex justify-between items-center text-white
                bg-gradient-to-r from-[#ff6a6a] to-[#7a1f1f]
                shadow-[0_20px_50px_rgba(0,0,0,0.4)]
              ">
                <div>
                  <h4 className="font-semibold">FIFA 23</h4>
                  <p className="text-xs text-white/70">1h 23min</p>
                </div>

                <div className="flex gap-3">
                  <button className="bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
                    ▶
                  </button>
                  <button className="bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="
              rounded-3xl p-6 text-white
              bg-gradient-to-b from-[#6a1d1d] to-[#2a0b0b]
              shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]
            ">

              <h3 className="mb-6">Your Statistic</h3>

              {/* BLOB */}
              <div className="relative w-[180px] h-[180px] mx-auto mb-6">

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff6a6a] to-[#6a2a2a] blur-xl opacity-70" />

                <div className="
                  relative w-full h-full rounded-full
                  bg-[#4a1515]
                  flex items-center justify-center
                  border border-white/10
                  shadow-inner
                ">
                  <div className="text-center">
                    <p className="text-xs text-white/50">Total hours</p>
                    <h2 className="text-xl font-bold">12,340h</h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-sm text-white/60">
                <span>2,340h</span>
                <span>5,420h</span>
                <span>4,580h</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="
          w-[80px]
          rounded-3xl
          flex flex-col items-center py-6 gap-4
          bg-white/5 backdrop-blur-xl
          border border-white/10
        ">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-white/70" />
          ))}
        </div>
      </div>
    </div>
  )
}