"use client"

import { Button } from "@/components/ui/button"

import { Graficogastostotales2021 } from "./components/grafico_gastos_2021"
import { GraficosIngresos2021 } from "./components/grafico_ingresos_2021"
import { GraficosIngresosProcedencia2021 } from "./components/grafico_ingresos_procedencia_2021"
import { GastosPorArea2021 } from "./components/gastos_por_area_2021"

import { ChartColumn, ChartPie } from "lucide-react"
import { useState } from "react"

function Presupuestopublico2021 () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <div className="flex justify-center items-center p-5">
          <Button className="mr-5 ml-5">2021</Button>
          <Button
            className="mr-5 ml-5"
            onClick={() => {
              setActivechart(true)
            }}
          >
            <ChartColumn />
          </Button>
          <Button
            className="mr-5 ml-5"
            onClick={() => {
              setActivechart(false)
            }}
          >
            <ChartPie />
          </Button>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresos2021 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresosProcedencia2021
              chart={chart}
              setChart={setActivechart}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <Graficogastostotales2021 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5  pb-36">
          <div className="w-[800px] h-[550px]">
            <GastosPorArea2021 chart={chart} setChart={setActivechart} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Presupuestopublico2021
