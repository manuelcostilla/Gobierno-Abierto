"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { dataAtajos } from "./dataAtajos"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

import mapa_estado_municipal from "../public/atajos/organigrama.svg"
import boletin_oficial from "../public/atajos/BoletinOficial.svg"
import compra_licitaciones from "../public/atajos/ComprasLicitac.svg"
import gestion_compromisos from "../public/atajos/GestionComprom.svg"
import presupuesto_publico from "../public/atajos/PresupPublico.svg"
import bookUser from "../public/atajos/bookUser.svg"

const images = {
  mapa_estado_municipal,
  boletin_oficial,
  compra_licitaciones,
  gestion_compromisos,
  presupuesto_publico,
  bookUser,
}

export const Atajos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-neutral-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dataAtajos.map((atajo) => (
            <motion.div key={atajo.id} variants={itemVariants}>
              <Link href={atajo.link} className="block group h-full">
                <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 glass overflow-hidden flex flex-col">
                  <div className="p-8 flex justify-center bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors">
                    <div className="relative w-24 h-24 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={images[atajo.img]}
                        alt={atajo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl font-bold text-center text-blue-GobAb group-hover:text-blue-title transition-colors">
                      {atajo.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-center mt-4 line-clamp-4 leading-relaxed">
                      {atajo.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-center pb-8 mt-auto">
                    <span className="text-blue-GobAb font-bold text-sm uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                      Ver más →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Atajos
