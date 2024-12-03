'use client'

import { motion } from 'framer-motion';
// import { cn } from "@/lib/utils"
import { cn } from "../../../lib/utils"
export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: any[]
  className?: string
}) => {
  return (
    <div className={cn("h-full w-full", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full stroke-white/20"
        style={{
          strokeWidth: "0.5",
          strokeDasharray: "1 3",
          fill: "none",
        }}
      >
        <motion.path
          d="M 0 100 L 100 0"
          style={{
            pathLength: pathLengths[0],
          }}
        />
        <motion.path
          d="M 20 100 L 100 20"
          style={{
            pathLength: pathLengths[1],
          }}
        />
        <motion.path
          d="M 40 100 L 100 40"
          style={{
            pathLength: pathLengths[2],
          }}
        />
        <motion.path
          d="M 60 100 L 100 60"
          style={{
            pathLength: pathLengths[3],
          }}
        />
        <motion.path
          d="M 80 100 L 100 80"
          style={{
            pathLength: pathLengths[4],
          }}
        />
      </svg>
    </div>
  )
}

