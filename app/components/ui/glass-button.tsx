// import { cn } from "@/lib/utils"
"use client"
import { ButtonHTMLAttributes } from "react"
import { cn } from "../../../lib/utils"
interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "pill" | "circle" | "ring"
  size?: "default" | "lg"
  className?: string
}

export function GlassButton({
  variant = "pill",
  size = "default",
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        "relative transition-all duration-300 hover:scale-105 active:scale-95",
        // Base styles
        "bg-gradient-to-r from-purple-400/80 to-purple-500/80 backdrop-blur-md",
        // Border and shadow effects
        "before:absolute before:inset-[1px] before:rounded-[inherit] before:bg-gradient-to-r before:from-purple-500/20 before:to-purple-400/20 before:backdrop-blur-xl",
        "after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-r after:from-purple-500/80 after:to-transparent after:blur-xl after:-z-10",
        // Variant styles
        variant === "pill" && "rounded-full px-8 py-3",
        variant === "circle" && "rounded-full aspect-square p-4",
        variant === "ring" && "rounded-full aspect-square p-4 bg-gradient-to-r from-cyan-400 to-purple-400",
        // Size styles
        size === "default" && "text-sm",
        size === "lg" && "text-base",
        // Additional classes
        className
      )}
      {...props}
    >
      <span className="relative z-10 font-medium text-white">
        {children}
      </span>
    </button>
  )
}

