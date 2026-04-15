'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { FileDown, FileText, ChevronRight } from "lucide-react"

export const BoletinOficial = ({ data }) => {
  return (
    <ScrollArea className="w-full h-[600px] rounded-[2rem] border border-neutral-100 bg-white/50 backdrop-blur-lg p-4 lg:p-10 shadow-inner">
      <div className="space-y-4 max-w-4xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white border border-neutral-100 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 group-hover:border-blue-200">
              <div className="flex items-center gap-6 flex-1 mb-4 lg:mb-0">
                <div className="p-4 bg-neutral-50 text-neutral-400 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-GobAb transition-colors shadow-inner">
                  <FileText size={24} />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-[15px] font-black text-neutral-800 tracking-tight group-hover:text-blue-GobAb transition-colors uppercase leading-tight">
                    {item.texto}
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 text-neutral-400 text-xs font-bold uppercase tracking-widest">
                    <span>Baradero</span>
                    <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                    <span className="text-blue-GobAb/60">{item.año || 'Documento Oficial'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="bg-blue-GobAb hover:bg-blue-700 text-white font-black py-4 px-8 rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 active:scale-95 text-xs tracking-widest uppercase flex items-center gap-2"
                >
                  <Link href={item.pdfLink} target="_blank">
                    <FileDown size={16} />
                    {item.boton}
                  </Link>
                </Button>
                <div className="hidden lg:flex p-2 text-neutral-200 group-hover:text-blue-GobAb transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  )
}
