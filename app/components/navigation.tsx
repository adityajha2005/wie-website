"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="WIE Logo"
              width={50}
              height={50}
              className="w-auto h-8"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Events", "Resources", "Our team", "Gallery"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white hover:text-white/80 transition-colors relative"
              >
                {item}
                {pathname === (item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

