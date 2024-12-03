"use client"
import { Navigation } from "./components/navigation"
import { GoogleGeminiEffect } from "./components/ui/google-gemini-effect"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import './globals.css'
import { motion } from 'framer-motion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
      <div
  className="min-h-screen w-full relative"
  style={{ backgroundImage: 'url("/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
          <Navigation />
          <div className="absolute inset-0 w-full h-full">
            <GoogleGeminiEffect pathLengths={[0.2, 0.15, 0.1, 0.05, 0]} />
          </div>
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pt-20 min-h-screen"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
      </body>
    </html>
  )
}

