'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const HeadernavBar = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
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
          className="p-2 text-blue-GobAb hover:bg-blue-50 rounded-xl transition-colors"
        >
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center justify-end gap-1 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <li key={item.name} className="relative">
              <Link href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-5 py-3 rounded-full text-[13px] font-bold tracking-tight transition-all duration-300
                    ${isActive ? 'text-blue-GobAb bg-blue-50/50' : 'text-neutral-600 hover:text-blue-GobAb hover:bg-neutral-50'}
                  `}
                >
                  {item.name}
                </motion.div>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-neutral-200 overflow-hidden z-50 shadow-xl"
          >
            <ul className="p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className="block p-4 font-bold text-neutral-800 text-[15px] hover:bg-blue-50/50 rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
