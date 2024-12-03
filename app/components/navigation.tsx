"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
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

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Gallery"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-purple-500 hover:text-purple-300 transition-colors relative"
              >
                {item}
                {pathname === (item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </Link>
            ))}

            {/* Dropdown for Events, Resources, etc. */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-purple-500 hover:text-purple-300 transition-colors flex items-center"
              >
                More
                <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                  >
                    Events
                  </Link>
                  <Link
                    href="/resources"
                    className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                  >
                    Resources
                  </Link>
                  <Link
                    href="/our-team"
                    className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                  >
                    Our team
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-500 focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-purple-500 mb-1"></span>
              <span className="block w-6 h-0.5 bg-purple-500 mb-1"></span>
              <span className="block w-6 h-0.5 bg-purple-500"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm py-4">
            <div className="flex flex-col items-center space-y-4">
              {["Home", "Gallery"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-purple-500 hover:text-purple-300 transition-colors"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-purple-500 hover:text-purple-300 transition-colors flex items-center"
                >
                  More
                  <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white/10 backdrop-blur-sm rounded-lg">
                    <Link
                      href="/events"
                      className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                    >
                      Events
                    </Link>
                    <Link
                      href="/resources"
                      className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                    >
                      Resources
                    </Link>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-purple-500 hover:text-purple-300"
                    >
                      Our team
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
