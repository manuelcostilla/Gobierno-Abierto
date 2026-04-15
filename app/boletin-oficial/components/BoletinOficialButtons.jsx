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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-xl border border-neutral-100 p-8 rounded-[2rem] shadow-xl">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-blue-50 text-blue-GobAb rounded-2xl shadow-inner">
            <Filter size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-blue-title tracking-tight uppercase">Archivo Histórico</h2>
            <p className="text-neutral-500 text-sm font-medium">Filtra por año para encontrar documentos específicos</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl">
          <Button
            variant={selectedYear === "todos" ? "default" : "outline"}
            onClick={mostrarTodosBoletines}
            className={`rounded-full px-8 h-12 transition-all duration-300 font-bold tracking-wide shadow-sm
              ${selectedYear === "todos"
                ? "bg-green-600 hover:bg-green-700 text-white shadow-green-200"
                : "hover:border-green-600 hover:text-green-600 bg-white"
              }`}
          >
            <Grid size={16} className="mr-2" />
            TODOS
          </Button>
          {añosUnicos.map((año) => (
            <Button
              key={año}
              variant={selectedYear === año ? "default" : "outline"}
              onClick={() => cambiarBox(año)}
              className={`rounded-full px-6 h-12 transition-all duration-300 font-bold shadow-sm
                ${selectedYear === año
                  ? "bg-blue-GobAb hover:bg-blue-700 text-white shadow-blue-200"
                  : "hover:border-blue-GobAb hover:text-blue-GobAb bg-white"
                }`}
            >
              <Calendar size={14} className="mr-2" />
              {año}
            </Button>
          ))}
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
