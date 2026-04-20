"use client"

import Link from "next/link"
import { secretarias } from "./data/data"
import { BannerText } from "@/components/bannertext"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function testPage () {
  return (
    <>
      <BannerText titulo="Áreas de Gobierno" />
      <div className="mx-auto container pt-20 pb-20 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {secretarias.map((sec) => {
            return (
              <motion.div
                key={sec.id}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`/areas-de-gobierno/${sec.id}`}>
                  <article className="h-full bg-white backdrop-blur-sm border border-neutral-100 rounded-3xl p-10 flex flex-col items-center gap-6 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group">
                    <div className="p-8 bg-neutral-50 text-blue-GobAb rounded-3xl group-hover:bg-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 border border-transparent group-hover:border-blue-100">
                      {sec.icon}
                    </div>
                    <h2 className="text-xl font-black text-center leading-tight text-neutral-800 uppercase tracking-tight group-hover:text-blue-GobAb transition-colors">
                      {sec.titulo}
                    </h2>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-blue-GobAb font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <span>Ver detalles</span>
                      <ArrowRight size={16} />
                    </div>
                  </article>
                </Link>
              </motion.div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default testPage
