"use client"
import { useState } from "react"
import { BsFileEarmarkPdfFill, BsFillArrowUpCircleFill } from "react-icons/bs"
import Direcciondecompras from "./Direcciondecompras"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-xl border border-neutral-100 p-8 rounded-[2rem] shadow-xl mb-12">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-blue-50 text-blue-GobAb rounded-2xl shadow-inner">
            <Filter size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-blue-title tracking-tight uppercase">Licitaciones Privadas</h2>
            <p className="text-neutral-500 text-sm font-medium">Acceso a contrataciones por invitación</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl">
          <Button
            onClick={resetList}
            className={`rounded-full px-8 h-12 transition-all duration-300 font-bold tracking-wide shadow-sm
              ${selectedYear === null
                ? "bg-green-600 hover:bg-green-700 text-white shadow-green-200"
                : "hover:border-green-600 hover:text-green-600 bg-white border border-neutral-200"
              }`}
          >
            <Grid size={16} className="mr-2" />
            TODOS
          </Button>
          {["2025", "2024", "2023", "2022", "2021", "2020"].map((year) => (
            <Button
              key={year}
              onClick={() => handleShowObjects(year)}
              className={`rounded-full px-6 h-12 transition-all duration-300 font-bold shadow-sm
                ${selectedYear === year
                  ? "bg-blue-GobAb hover:bg-blue-700 text-white shadow-blue-200"
                  : "hover:border-blue-GobAb hover:text-blue-GobAb bg-white border border-neutral-200"
                }`}
            >
              <Calendar size={14} className="mr-2" />
              {year}
            </Button>
          ))}
        </div>
      </div>

      <Card className="bg-slate-50 p-4">
        <ScrollArea className="max-h-[550px] overflow-y-auto">
          {objects.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[600px] m-auto mb-5 border border-slate-300 rounded-lg"
            >
              <CardContent className="p-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center w-full text-left text-base font-semibold transition duration-300 hover:text-blue-600"
                >
                  {openIndex === index
                    ? (
                    <BsFillArrowUpCircleFill className="mr-2 text-blue-500" />
                      )
                    : (
                    <BsFileEarmarkPdfFill className="mr-2 text-blue-500" />
                      )}
                  {item.titulo} ({item.año})
                </button>
              </CardContent>

              {openIndex === index && (
                <CardContent className="transition-all duration-300 ease-in-out p-0 border-t border-slate-100 bg-white">
                  <ScrollArea className="max-h-[350px] w-full p-6">
                    <div className="space-y-3">
                      <p className="mb-4 font-black text-blue-GobAb uppercase text-xs tracking-wider">Detalles de la Licitación Privada</p>
                      <p className="font-bold text-gray-900">{item.tituloAcordeonAbierto}</p>

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

                    <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-slate-100">
                      <Button
                        onClick={() => handleDownload(item.pdfUrl)}
                        disabled={!item.pdfUrl}
                        className="bg-blue-GobAb hover:bg-blue-700 text-white rounded-full px-6 shadow-md transition-all hover:-translate-y-0.5"
                      >
                        {item.botonTexto}
                      </Button>
                      <Button
                        onClick={() => handleDownload(item.pdfUrlCierre)}
                        disabled={!item.pdfUrlCierre}
                        className="bg-neutral-700 hover:bg-neutral-800 text-white rounded-full px-6 shadow-md transition-all hover:-translate-y-0.5"
                      >
                        {item.botonTextoCierre}
                      </Button>
                      <Button
                        onClick={() => handleDownload(item.pdfUrlAdjudicacion)}
                        disabled={!item.pdfUrlAdjudicacion}
                        className="bg-neutral-900 hover:bg-black text-white rounded-full px-6 shadow-md transition-all hover:-translate-y-0.5"
                      >
                        {item.botonTextoAdjudicacion}
                      </Button>
                    </div>
                  </ScrollArea>
                </CardContent>
              )}
            </Card>
          ))}
        </ScrollArea>
        <CardFooter className="pt-5">
          <Direcciondecompras />
        </CardFooter>
      </Card>
    </>
  )
}
