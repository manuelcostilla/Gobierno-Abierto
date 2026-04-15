'use client'

import { useState } from "react"
import { pdfBox } from "../data/pdfBoletinOficial"
import { BoletinOficial } from "./BoletinOficial"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, Calendar, Grid } from "lucide-react"

function BoletinOficialButtons () {
  const [selectedYear, setSelectedYear] = useState("todos")

  const cambiarBox = (año) => {
    setSelectedYear(año)
  }

  const mostrarTodosBoletines = () => {
    setSelectedYear("todos")
  }

  const añosUnicos = [...new Set(pdfBox.map((box) => box.año))].sort(
    (a, b) => b - a
  )

  const boletinesAMostrar =
    selectedYear === "todos"
      ? [...pdfBox].sort((a, b) => b.id - a.id)
      : pdfBox.filter((box) => box.año === selectedYear)

  return (
    <div className="space-y-12">
      {/* Header Interactivo y Filtros */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-xl border border-neutral-100 p-5 rounded-3xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-GobAb rounded-2xl shadow-inner">
              <Filter size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black text-blue-title tracking-tight uppercase">Archivo Histórico</h2>
              <p className="text-neutral-500 text-xs font-medium">Filtra documentos oficiales por año</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <Button
              variant={selectedYear === "todos" ? "default" : "outline"}
              onClick={mostrarTodosBoletines}
              className={`rounded-full px-6 h-10 transition-all duration-300 font-bold text-xs tracking-wide shadow-sm
                ${selectedYear === "todos"
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-green-200"
                  : "hover:border-green-600 hover:text-green-600 bg-white"
                }`}
            >
              <Grid size={14} className="mr-2" />
              TODOS
            </Button>
            {añosUnicos.map((año) => (
              <Button
                key={año}
                variant={selectedYear === año ? "default" : "outline"}
                onClick={() => cambiarBox(año)}
                className={`rounded-full px-5 h-10 transition-all duration-300 font-bold text-xs shadow-sm
                  ${selectedYear === año
                    ? "bg-blue-GobAb hover:bg-blue-700 text-white shadow-blue-200"
                    : "hover:border-blue-GobAb hover:text-blue-GobAb bg-white"
                  }`}
              >
                <Calendar size={12} className="mr-2" />
                {año}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.4, ease: "circOut" }}
        >
          <BoletinOficial data={boletinesAMostrar} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default BoletinOficialButtons
