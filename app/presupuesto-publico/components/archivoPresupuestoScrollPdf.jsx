'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { FileDown, FileText, ChevronRight } from "lucide-react"

export function ArchivosDelPresupuestoScrollPdf ({ archivosDelPresupuestoPdf }) {
  return (
    <ScrollArea className="max-w-5xl mx-auto h-[600px] rounded-[2rem] border border-neutral-100 bg-white/50 backdrop-blur-lg p-4 lg:p-10 shadow-inner">
      <div className="space-y-4 max-w-4xl mx-auto">
        {archivosDelPresupuestoPdf.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between p-5 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 group-hover:border-blue-200">
              <div className="flex items-center gap-5 flex-1 mb-4 lg:mb-0">
                <div className="p-3 bg-neutral-50 text-neutral-400 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-GobAb transition-colors shadow-inner">
                  <FileText size={20} />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-sm font-black text-neutral-800 tracking-tight group-hover:text-blue-GobAb transition-colors uppercase leading-tight">
                    {item.nombre}
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
                    <span>Presupuesto</span>
                    <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                    <span className="text-blue-GobAb/60">{item.año || 'Documento Financiero'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-GobAb hover:bg-blue-700 text-white font-bold h-10 px-6 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 text-[10px] tracking-widest uppercase flex items-center gap-2"
                >
                  <Link href={item.link} target="_blank">
                    <FileDown size={14} />
                    Descargar
                  </Link>
                </Button>
                <div className="hidden lg:flex p-2 text-neutral-200 group-hover:text-blue-GobAb transition-colors">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  )
}
