"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import test from "../public/banner/IMG.Baradero.jpg"

export default function Banner () {
  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-blue-GobAb font-black font-sans leading-tight tracking-tight text-balance">
            GOBIERNO <span className="text-blue-title">ABIERTO</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1.5 bg-green-nav rounded-full mt-4 lg:mt-6"
          ></motion.div>

          <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl mt-6 lg:mt-8 text-neutral-700 tracking-tight">
            Municipio de Baradero
          </h2>

          <p className="font-sans font-medium mt-6 lg:mt-8 text-neutral-600 text-lg leading-relaxed max-w-2xl">
            Sitio web que proporciona fácil y transparente acceso a información
            pública, como presupuestos, decisiones y datos relevantes. Fomenta
            la participación ciudadana y la rendición de cuentas.
          </p>

          <div className="mt-10">
            <Link href="https://baradero.opendata.junar.com/dashboards/21829/datos-abiertos-baradero-destacadas/" target="_blank">
              <button className="bg-blue-GobAb hover:bg-blue-title text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                Datos Abiertos
              </button>
            </Link>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 w-full relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-GobAb to-green-nav rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={test}
              alt="Banner Baradero"
              priority
              className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
