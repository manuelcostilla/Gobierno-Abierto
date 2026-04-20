"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Download, Maximize2, ArrowRight, FileText } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { organigramaData } from "../data/organigramaData"

export function Organigrama () {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItem, setOpenItem] = useState(null)

  const filteredData = useMemo(() => {
    return organigramaData.filter(
      (item) =>
        item.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.responsable.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const handleAccordionChange = (value) => {
    setOpenItem(value === openItem ? null : value)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Buscador */}
      <div className="relative mb-12 max-w-xl mx-auto">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
          <Search size={20} />
        </div>
        <Input
          placeholder="Buscar por secretaría o responsable..."
          className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-neutral-200 focus:ring-blue-GobAb rounded-xl shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Botones de Acción */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <Link href="/areas-de-gobierno">
          <Button variant="outline" className="group rounded-full px-8 py-6 border-2 border-blue-GobAb text-blue-GobAb hover:bg-blue-GobAb hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-200 gap-3 w-full max-w-md">
            <span className="font-bold text-lg uppercase tracking-tight text-balance text-center">Ver Detalle de Áreas de Gobierno</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Button>
        </Link>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          <Button variant="ghost" className="rounded-full px-6 py-4 border border-neutral-200 hover:border-blue-GobAb hover:text-blue-GobAb transition-all gap-2 shadow-sm">
            <Download size={18} />
            <span className="font-semibold">Escala Salarial Municipal</span>
          </Button>
          <Button variant="ghost" className="rounded-full px-6 py-4 border border-neutral-200 hover:border-blue-GobAb hover:text-blue-GobAb transition-all gap-2 shadow-sm">
            <FileText size={18} />
            <span className="font-semibold">Decreto de Aumentos</span>
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={searchQuery}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            onValueChange={handleAccordionChange}
          >
            {filteredData.map((item, index) => {
              const Icon = item.icon
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-neutral-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-6 text-left w-full">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        openItem === item.id ? "bg-blue-GobAb text-white" : "bg-blue-50 text-blue-GobAb group-hover:bg-blue-100"
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold tracking-tight text-lg transition-colors ${
                          openItem === item.id ? "text-blue-GobAb" : "text-neutral-800"
                        }`}>
                          {item.sector}
                        </span>
                        <span className="text-neutral-500 font-medium">
                          {item.responsable} | <span className="text-neutral-400 italic font-normal text-sm">{item.cargo}</span>
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8">
                    <div className="pt-6 border-t border-neutral-100 flex flex-col items-center">
                      <div className="relative w-full group rounded-2xl overflow-hidden shadow-inner bg-neutral-50">
                        <Image
                          src={item.img}
                          alt={item.sector}
                          width={1200}
                          height={400}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />

                        {/* Overlay para ver en grande */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="secondary" className="gap-2 shadow-xl border-none">
                                <Maximize2 size={18} /> Ver imagen ampliada
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] h-[90vh] p-0 overflow-hidden bg-white/95 backdrop-blur-md">
                              <DialogHeader className="sr-only">
                                <DialogTitle>{item.sector}</DialogTitle>
                                <DialogDescription>
                                  Vista ampliada del organigrama de {item.sector}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="relative w-full h-full flex items-center justify-center p-4">
                                <Image
                                  src={item.img}
                                  alt={item.sector}
                                  width={2000}
                                  height={1200}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>

                      <div className="mt-8 flex gap-4">
                        <a href={item.pdf} download>
                          <Button className="bg-blue-GobAb hover:bg-blue-title gap-2 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1">
                            <Download size={18} /> Descargar PDF Completo
                          </Button>
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}

            {filteredData.length === 0 && (
              <div className="text-center py-20 text-neutral-500">
                <p className="text-xl font-medium">No se encontraron resultados para &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-blue-GobAb hover:underline"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </Accordion>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
