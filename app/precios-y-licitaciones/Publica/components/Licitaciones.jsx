"use client"
import { useState } from "react"
import { Filter, Grid, Calendar, ChevronUp, FileText } from "lucide-react"
import Direcciondecompras from "./Direcciondecompras"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export const AcordeonDeLicitaciones = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [objects, setObjects] = useState(data)
  const [selectedYear, setSelectedYear] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, "_blank")
  }

  const handleShowObjects = (year) => {
    setObjects(data.filter((obj) => obj.año === year))
    setSelectedYear(year)
  }

  const resetList = () => {
    setObjects(data)
    setSelectedYear(null)
  }

  return (
    <>
      {/* Filtros por año */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-xl border border-neutral-100 p-5 rounded-3xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-GobAb rounded-2xl shadow-inner">
              <Filter size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black text-blue-title tracking-tight uppercase">Licitaciones Públicas</h2>
              <p className="text-neutral-500 text-xs font-medium">Historial por ejercicio anual</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <Button
              variant={selectedYear === null ? "default" : "outline"}
              onClick={resetList}
              className={`rounded-full px-6 h-10 transition-all duration-300 font-bold text-xs tracking-wide shadow-sm
                ${selectedYear === null
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-green-200"
                  : "hover:border-green-600 hover:text-green-600 bg-white"
                }`}
            >
              <Grid size={14} className="mr-2" />
              TODOS
            </Button>
            {["2026", "2025", "2024", "2023", "2022", "2021"].map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => handleShowObjects(year)}
                className={`rounded-full px-5 h-10 transition-all duration-300 font-bold text-xs shadow-sm
                  ${selectedYear === year
                    ? "bg-blue-GobAb hover:bg-blue-700 text-white shadow-blue-200"
                    : "hover:border-blue-GobAb hover:text-blue-GobAb bg-white"
                  }`}
              >
                <Calendar size={12} className="mr-2" />
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <ScrollArea className="max-w-5xl mx-auto h-[600px] rounded-[2rem] border border-neutral-100 bg-white/50 backdrop-blur-lg p-4 lg:p-10 shadow-inner">
          <div className="space-y-4 max-w-4xl mx-auto">
            {objects.map((item, index) => (
              
              <div key={index} className="group">
                <Card
                  className={`
                    p-4 rounded-2xl transition-all duration-300 shadow-inner
                    ${openIndex === index 
                      ? "bg-blue-50 border border-blue-200 shadow-md" 
                      : "bg-neutral-50"
                    }
                    group-hover:bg-blue-50
                    group-hover:shadow-lg
                    hover:-translate-y-1
                  `}
                >
                  {/* HEADER */}
                  <CardContent className="p-4">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex items-center w-full text-left text-base font-semibold transition duration-300"
                    >
                      {openIndex === index ? (
                        <ChevronUp className="mr-2 text-blue-500 group-hover:text-blue-GobAb" size={18} />
                      ) : (
                        <FileText className="mr-2 text-blue-500 group-hover:text-blue-GobAb" size={18} />
                      )}

                      <span className="transition-colors group-hover:text-blue-GobAb">
                        {item.titulo} ({item.año})
                      </span>
                    </button>
                  </CardContent>

                  {/* CONTENIDO */}
                  {openIndex === index && (
                    <CardContent className="transition-all duration-300 ease-in-out p-0 border-t border-slate-100 bg-white">
                      <div className="max-h-[350px] w-full p-6 overflow-y-auto overflow-x-hidden">
                        
                        <div className="space-y-3">
                          <p className="mb-4 font-black text-blue-GobAb uppercase text-xs tracking-wider">
                            Detalles de la Licitación
                          </p>

                          <p className="font-bold text-gray-900">
                            {item.tituloAcordeonAbierto}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600">
                            <div className="space-y-1">
                              <p className="text-xs font-bold text-neutral-400 uppercase">Documentación</p>
                              <p>{item.decreto} {item.numdecreto}</p>
                              <p>{item.Expediente}</p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-bold text-neutral-400 uppercase">Tipo y Condición</p>
                              <p>{item.tipo} {item.condicion}</p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-50">
                            <p className="text-xs font-bold text-neutral-400 uppercase mb-1">Motivo / Objeto</p>
                            <p className="italic text-neutral-700 leading-relaxed">{item.motivo}</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-50 text-neutral-600">
                            <div className="space-y-1">
                              <p className="text-xs font-bold text-neutral-400 uppercase">Presupuesto</p>
                              <p>{item.presupuesto} {item.plata}</p>

                              <p className="text-xs font-bold text-neutral-400 uppercase mt-2">Valor Pliego</p>
                              <p>{item.valorPliego} {item.plataPliego}</p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-xs font-bold text-neutral-400 uppercase">Apertura</p>
                              <p>{item.fechaAperturaSobre} {item.fecha}</p>

                              <p className="text-xs font-bold text-neutral-400 uppercase mt-2">Adquisición</p>
                              <p>{item.adquisicionPliego} {item.adquisicion}</p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-50">
                            <p className="text-xs font-bold text-neutral-400 uppercase mb-1">Adjudicación</p>
                            <p>{item.adjudicada} {item.firma}</p>
                            <p className="mt-1">{item.obtencion}</p>
                          </div>
                        </div>

                        {/* BOTONES */}
                        <div className="flex flex-wrap justify-center gap-4 mt-6 pt-5 border-t border-slate-100">
                          
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleDownload(item.pdfUrl)}
                            disabled={!item.pdfUrl}
                            className="bg-blue-GobAb hover:bg-blue-700 text-white rounded-full px-6 h-10 shadow-md transition-all hover:-translate-y-0.5"
                          >
                            {item.botonTexto}
                          </Button>

                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handleDownload(item.pdfUrlCierre)}
                            disabled={!item.pdfUrlCierre}
                            className="bg-neutral-800 hover:bg-neutral-900 text-white rounded-full px-6 h-10 shadow-md transition-all hover:-translate-y-0.5"
                          >
                            {item.botonTextoCierre}
                          </Button>

                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>

            ))}
          </div>
        </ScrollArea>
      <CardFooter className="pt-5">
        <Direcciondecompras />
      </CardFooter>
    </>
  )
}
