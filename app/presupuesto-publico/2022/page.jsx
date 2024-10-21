"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Graficogastostotales2022 } from "./components/grafico_gastos_2022"
import { GraficosIngresos2022 } from "./components/grafico_ingresos_2022"
import { GraficosIngresosProcedencia2022 } from "./components/grafico_ingresos_procedencia_2022"
import { GastosPorArea2022 } from "./components/gastos_por_area_2022"
import { BannerText } from "../../../components/bannertext"

import { ChartColumn, ChartPie } from "lucide-react"
import { useState } from "react"

function Presupuestopublico2022 () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <BannerText titulo="Presupuesto Público 2022" />
        <div className="flex justify-center items-center p-5">
          <Link href="/presupuesto-publico/">
            <Button>Inicio</Button>
          </Link>
          <Button className="mr-5 ml-5">2022</Button>
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
            <GraficosIngresos2022 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresosProcedencia2022
              chart={chart}
              setChart={setActivechart}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <Graficogastostotales2022 chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5  pb-36">
          <div className="w-[800px] h-[550px]">
            <GastosPorArea2022 chart={chart} setChart={setActivechart} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Presupuestopublico2022
