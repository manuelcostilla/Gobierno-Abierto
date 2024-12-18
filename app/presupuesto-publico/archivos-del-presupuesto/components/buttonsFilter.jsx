"use client"
import { useState } from "react"
import { archivosDelPresupuestoPdf } from "../data/dataArchivosDelPresupuesto"
import { Button } from "@/components/ui/button"
import { ArchivosDelPresupuestoScrollPdf } from "../components/archivoPresupuestoScrollPdf"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArchivosDelPresupuestoButtons () {
  const [selectedYear, setSelectedYear] = useState("todos")

  const cambiarBox = (año) => {
    setSelectedYear(año)
  }

  const mostrarTodosArchivos = () => {
    setSelectedYear("todos")
  }

  const añosUnicos = [
    ...new Set(archivosDelPresupuestoPdf.map((box) => box.año)),
  ].sort((a, b) => b - a)

  const archivos_A_Mostrar =
    selectedYear === "todos"
      ? [...archivosDelPresupuestoPdf].sort((a, b) => a.id - b.id)
      : archivosDelPresupuestoPdf.filter((box) => box.año === selectedYear)

  return (
    <>
      <div>
        <Card className="flex flex-wrap justify-center text-xs font-sans overflow-x-hidden w-full bg-slate-50">
          <CardHeader className="w-full flex bg-slate-50">
            <CardTitle className="flex justify-center flex-wrap">
              {añosUnicos.map((año) => (
                <Button
                  key={año}
                  onClick={() => cambiarBox(año)}
                  className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100  ${
                    selectedYear === año
                      ? "text-white border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                      : ""
                  }`}
                >
                  <p>{año}</p>
                </Button>
              ))}
              <Button
                onClick={mostrarTodosArchivos}
                className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 ${
                  selectedYear === "todos"
                    ? "text-white border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                    : ""
                }`}
              >
                <p>Mostrar todos los archivos</p>
              </Button>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardContent className="bg-slate-50">
            <ArchivosDelPresupuestoScrollPdf
              archivosDelPresupuestoPdf={archivos_A_Mostrar}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
