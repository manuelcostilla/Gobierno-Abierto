'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, MoveRight } from 'lucide-react'

export const HeadernavBar = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  
  const navRef = useRef(null)

  const navItems = [
    { name: 'INICIO', href: '/' },
    { 
      name: 'MAPA DEL ESTADO MUNICIPAL', 
      href: '/organigrama',
      subItems: [
        { name: 'Organigrama', href: '/organigrama' },
        { name: 'Nómina de Empleados', href: '#' },
        { name: 'DDJJ de Funcionarios', href: '#' },
        { name: 'Áreas de Gobierno', href: '/testpage' }
      ]
    },
    { 
      name: 'BOLETÍN OFICIAL', 
      href: '/boletin-oficial',
      subItems: [
        { name: 'HCD', href: '#' },
        { name: 'Ejecutivo Municipal', href: '#' },
        { name: 'SIBOM', href: '#' },
        { name: 'Rendición de Cuentas', href: '#' }
      ]
    },
    { 
      name: 'COMPRAS Y LICITACIONES', 
      href: '/precios-y-licitaciones',
      subItems: [
        { name: 'Concurso de Precios', href: '#' },
        { name: 'Licitaciones Públicas', href: '#' },
        { name: 'Licitaciones Privadas', href: '#' }
      ]
    },
    { 
      name: 'PRESUPUESTO PÚBLICO', 
      href: '/presupuesto-publico',
      subItems: [
        { name: 'Presupuesto', href: '#' },
        { name: 'Pauta Publicitaria', href: '#' }
      ]
    }
  ]

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveSubMenu(null)
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
          const isActive = pathname === item.href || (item.subItems?.some(sub => pathname === sub.href))
          
          return (
            <li 
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.subItems && setActiveSubMenu(item.name)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <Link href={item.href}>
                <div className={`px-5 py-3 rounded-full text-[13px] font-bold tracking-tight transition-all duration-300 flex items-center gap-2
                  ${isActive ? 'text-blue-GobAb bg-blue-50/50' : 'text-neutral-600 hover:text-blue-GobAb hover:bg-neutral-50'}
                `}>
                  {item.name}
                  {item.subItems && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubMenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </div>
              </Link>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {item.subItems && activeSubMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-100 rounded-2xl shadow-2xl p-3 z-[60] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-GobAb" />
                    <ul className="space-y-1">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href}>
                            <div className="px-4 py-3 rounded-xl text-neutral-700 hover:text-blue-GobAb hover:bg-blue-50 transition-all flex items-center justify-between group/sub">
                              <span className="font-semibold text-[13px]">{sub.name}</span>
                              <MoveRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
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
                <li key={item.name} className="border-b border-neutral-50 last:border-0 pb-2">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/50">
                    <Link 
                      href={item.href} 
                      onClick={() => setIsNavOpen(false)}
                      className="font-bold text-neutral-800 text-[15px]"
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <button 
                        onClick={() => setActiveSubMenu(activeSubMenu === item.name ? null : item.name)}
                        className="p-1 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <ChevronDown className={`transition-transform ${activeSubMenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.subItems && activeSubMenu === item.name && (
                    <motion.ul 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 ml-4 space-y-1"
                    >
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link 
                            href={sub.href}
                            onClick={() => setIsNavOpen(false)}
                            className="block p-3 text-[14px] text-neutral-600 font-semibold hover:text-blue-GobAb"
                          >
                            • {sub.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
