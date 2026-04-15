'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const HeadernavBar = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const navRef = useRef(null)

  const navItems = [
    { name: 'INICIO', href: '/' },
    { name: 'MAPA DEL ESTADO MUNICIPAL', href: '/organigrama' },
    { name: 'BOLETÍN OFICIAL', href: '/boletin-oficial' },
    { name: 'COMPRAS Y LICITACIONES', href: '/precios-y-licitaciones' },
    { name: 'PRESUPUESTO PÚBLICO', href: '/presupuesto-publico' }
  ]

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav ref={navRef} className="relative w-full">
      {/* Mobile Toggle */}
      <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 text-blue-GobAb hover:bg-blue-50 rounded-xl transition-all duration-300 transform active:scale-90 shadow-sm"
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <LayoutGroup>
        <ul className="hidden lg:flex items-center justify-end gap-2 px-6">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            const isHovered = hoveredItem === item.name

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href}>
                  <div className={`relative z-10 px-6 py-3 text-[12px] font-black tracking-[0.05em] transition-colors duration-500 uppercase
                    ${isActive || isHovered ? 'text-blue-GobAb' : 'text-neutral-500'}
                  `}>
                    {item.name}
                  </div>
                </Link>

                {/* Animated Indicator (Active or Hover) */}
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute inset-0 rounded-full z-0
                      ${isActive ? 'bg-blue-50/80 shadow-[0_4px_12px_rgba(0,123,186,0.1)]' : 'bg-neutral-50'}
                    `}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Active Underline Polish */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-6 right-6 h-0.5 bg-blue-GobAb rounded-full z-20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.li>
            )
          })}
        </ul>
      </LayoutGroup>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden absolute top-full right-4 left-4 mt-2 bg-white/95 backdrop-blur-2xl border border-neutral-200 overflow-hidden z-50 rounded-3xl shadow-2xl p-4"
          >
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsNavOpen(false)}
                      className={`block p-4 font-black text-[14px] rounded-2xl transition-all duration-300 uppercase tracking-wider
                        ${isActive ? 'bg-blue-GobAb text-white shadow-lg shadow-blue-200' : 'text-neutral-700 hover:bg-neutral-50'}
                      `}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
