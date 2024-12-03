"use client"
import { GlassButton } from "./components/ui/glass-button"
import { PictureCarousel } from "./components/picture-carousel"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-[calc(100vh-80px)] max-w-7xl mx-auto px-4">
      <motion.div
        className="space-y-8 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Unleash the many that you are with WIE, MUJ.
        </h1>
        <div className="flex gap-4 items-center">
          <GlassButton variant="pill" size="lg">
            GET STARTED
          </GlassButton>
          <GlassButton variant="circle" size="lg">
            <span className="sr-only">Circle Action</span>
          </GlassButton>
          <GlassButton variant="ring" size="lg">
            <span className="sr-only">Ring Action</span>
          </GlassButton>
        </div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <PictureCarousel />
      </motion.div>
    </div>
  )
}

