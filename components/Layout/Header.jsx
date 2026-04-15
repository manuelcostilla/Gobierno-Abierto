/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, Facebook, Instagram, Youtube } from "lucide-react"
import logo from "../../public/logo_gobiernoAbierto (1).svg"
import { motion } from "framer-motion"
import { HeadernavBar } from "./components/Header-navBar"

const XIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
)

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        <div className="flex w-full justify-center items-center sm:justify-end h-[45px] bg-blue-header/90 backdrop-blur-sm px-6 shadow-sm">
          <ul className="flex items-center gap-6 font-sans">
            <li className="list-none">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/" target="_blank" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={18} />
              </Link>
            </li>
            <li className="list-none">
              <Link href="https://www.instagram.com/municipiodebaradero/" target="_blank" className="text-white hover:text-pink-200 transition-colors">
                <Instagram size={18} />
              </Link>
            </li>
            <li className="list-none">
              <Link href="https://twitter.com/municipalidadba" target="_blank" className="text-white hover:text-neutral-300 transition-colors">
                <XIcon size={16} />
              </Link>
            </li>
            <li className="list-none">
              <Link href="https://www.youtube.com/@municipalidadbaradero9936" target="_blank" className="text-white hover:text-red-300 transition-colors">
                <Youtube size={20} />
              </Link>
            </li>
            <li className="list-none border-l border-white/20 pl-4">
              <Link href="https://baradero.gob.ar/" target="_blank" className="text-white hover:text-green-200 transition-colors">
                <Globe size={20} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:w-full md:flex-row justify-between items-center bg-white/90 backdrop-blur-lg border-b border-gray-200 px-6 py-2 lg:border-b-4 lg:border-b-green-nav shadow-md">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <Image
                alt="Logo Gobierno Abierto"
                src={logo}
                className="w-[180px] h-auto md:w-[220px] lg:w-[250px] transition-all duration-500 drop-shadow-[0_4px_12px_rgba(0,123,186,0.15)] group-hover:drop-shadow-[0_8px_24px_rgba(0,123,186,0.3)] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          </Link>
          <div className="w-full sm:w-auto mt-4 md:mt-0">
            <HeadernavBar />
          </div>
        </div>
      </header>
    </>
  )
}
