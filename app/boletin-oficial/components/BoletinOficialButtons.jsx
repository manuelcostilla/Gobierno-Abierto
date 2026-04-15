"use client"

import { useState } from "react"
import { pdfBox } from "../data/pdfBoletinOficial"
import { BoletinOficial } from "./BoletinOficial"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, Calendar } from "lucide-react"

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
      ? [...pdfBox].sort((a, b) => a.id - b.id)
      : pdfBox.filter((box) => box.año === selectedYear)

  return (
    <div className="space-y-12">
      <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3 text-blue-GobAb font-bold border-r border-blue-100 pr-6 mr-2">
            <Filter size={20} />
            <span className="uppercase tracking-wider text-sm">Filtrar por año</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {añosUnicos.map((año) => (
              <Button
                key={año}
                variant={selectedYear === año ? "default" : "outline"}
                onClick={() => cambiarBox(año)}
                className={`rounded-full px-6 transition-all ${
                  selectedYear === año
                  ? "bg-blue-GobAb hover:bg-blue-title shadow-md shadow-blue-500/20"
                  : "border-neutral-200 hover:border-blue-GobAb hover:text-blue-GobAb"
                }`}
              >
                <Calendar size={14} className="mr-2" />
                {año}
              </Button>
            ))}
            <Button
              variant={selectedYear === "todos" ? "default" : "outline"}
              onClick={mostrarTodosBoletines}
              className={`rounded-full px-6 transition-all ${
                selectedYear === "todos"
                ? "bg-green-600 hover:bg-green-700 shadow-md shadow-green-500/20"
                : "border-neutral-200 hover:border-green-600 hover:text-green-600"
              }`}
            >
              Todos
            </Button>
          </div>
        </div>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <BoletinOficial data={boletinesAMostrar} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default BoletinOficialButtons
