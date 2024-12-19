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
      <Card className="w-full bg-slate-50 p-4">
        <CardHeader>
          <CardTitle className="flex flex-wrap justify-center gap-4">
            {["2024", "2023", "2022", "2021"].map((year) => (
              <Button
                key={year}
                onClick={() => handleShowObjects(year)}
                className={`text-sm md:text-base ${
                  selectedYear === year
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-black hover:bg-slate-100"
                }`}
              >
                {year}
              </Button>
            ))}
            <Button
              onClick={resetList}
              className={`text-sm md:text-base ${
                selectedYear === null
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              Mostrar todos
            </Button>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Contenido del acordeón */}
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
                <CardContent className="transition-all duration-300 ease-in-out p-4 text-sm bg-white">
                  <p className="mb-2 font-bold">{item.tituloAcordeonAbierto}</p>
                  <p className="m-2">
                    {item.decreto} {item.numdecreto}
                  </p>
                  <p className="m-2">
                    {item.tipo} {item.condicion}
                  </p>
                  <p className="m-2">
                    {item.expediente}
                  </p>
                  <p className="m-2">
                    {item.motivo}
                  </p>
                  <p className="m-2">
                    {item.presupuesto} {item.plata}
                  </p>
                  <p className="m-2">
                    {item.adjudicada} {item.firma}
                  </p>
                  <p className="m-2">
                    {item.valorPliego} {item.plataPliego}
                  </p>
                  <p className="m-2">
                    {item.fechaAperturaSobre} {item.fecha}
                  </p>
                  <p className="m-2">
                    {item.adquisicionPliego} {item.adquisicion}
                  </p>
                  <p className="m-2">{item.obtencion}</p>

                  <div className="flex justify-center gap-4 mt-4">
                    <Button
                      onClick={() => handleDownload(item.pdfUrl)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {item.botonTexto}
                    </Button>
                    <Button
                      onClick={() => handleDownload(item.pdfUrl2)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {item.botonTexto2}
                    </Button>
                    <Button
                      onClick={() => handleDownload(item.pdfUrlPreadjudicacion)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {item.botonTextoPreadjudicacion}
                    </Button>
                    <Button
                      onClick={() => handleDownload(item.pdfUrlCierre)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {item.botonTextoCierre}
                    </Button>
                    <Button
                      onClick={() => handleDownload(item.pdfUrlCierre)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {item.botonTextoCierre2}
                    </Button>
                  </div>
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
