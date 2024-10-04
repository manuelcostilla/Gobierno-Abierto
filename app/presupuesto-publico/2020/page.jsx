"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Graficogastostotales2020 } from "./components/grafico_gastos_2020"
import { GraficosIngresos2020 } from "./components/grafico_ingresos_2020"
import { GraficosIngresosProcedencia2020 } from "./components/grafico_ingresos_procedencia_2020"
import { GastosPorArea2020 } from "./components/gastos_por_area_2020"

import { ChartColumn, ChartPie } from "lucide-react"
import { useState } from "react"

function Presupuestopublico2022 () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <div className="flex justify-center items-center p-5">
        <Link href="/presupuesto-publico/">
        <Button>Inicio</Button></Link>
          <Button className="mr-5 ml-5">2020</Button>
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
        <div className="flex justify-center items-center pr-5 pt-5 pb-36">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresos2020 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresosProcedencia2020
              chart={chart}
              setChart={setActivechart}
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="w-[800px] h-[550px]">
            <Graficogastostotales2020 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5 pb-36">
          <div className="w-[800px] h-[550px]">
            <GastosPorArea2020 chart={chart} setChart={setActivechart} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Presupuestopublico2022
