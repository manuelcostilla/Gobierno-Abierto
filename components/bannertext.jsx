'use client'

import { motion } from 'framer-motion'

export function BannerText ({ titulo }) {
  return (
    <div className="relative h-[250px] lg:h-[350px] flex items-center justify-center overflow-hidden bg-blue-header">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/banner/IMG.Baradero.jpg')] bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ filter: 'brightness(0.4) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-header via-transparent to-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-2xl">
              {titulo.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1.5 bg-green-nav mt-8 rounded-full shadow-[0_0_15px_rgba(72,187,120,0.5)]"
          />
        </div>
      </div>
      
      {/* Decorative pulse element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-400/10 blur-[100px] rounded-full animate-pulse delay-1000" />
    </div>
  )
}
