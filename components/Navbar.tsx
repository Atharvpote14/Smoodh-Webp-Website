'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-xl border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Custom SVG Icon - Milk Drop/Swirl */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-float"
            >
              <path
                d="M20 5C15 5 12 8 12 12C12 16 8 20 8 24C8 28 12 32 20 32C28 32 32 28 32 24C32 20 28 16 28 12C28 8 25 5 20 5Z"
                fill="url(#gradient)"
              />
              <path
                d="M16 14C16 14 18 12 20 12C22 12 24 14 24 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="17" cy="18" r="1" fill="white" />
              <circle cx="23" cy="18" r="1" fill="white" />
              <path
                d="M18 22C18 22 19 23 20 23C21 23 22 22 22 22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="12" y1="5" x2="28" y2="32">
                  <stop stopColor="#ec4899" />
                  <stop offset="1" stopColor="#db2777" />
                </linearGradient>
              </defs>
            </svg>
            
            <h1 className="text-2xl md:text-3xl font-black gradient-text">
              Smoodh
            </h1>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full btn-glow transition-all duration-300"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
