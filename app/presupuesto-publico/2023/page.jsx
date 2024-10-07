"use client"
import { BannerText } from "../../../components/bannertext"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos } from "./components/Grafico_ingresos"
import { GraficosIngresosProcedencia } from "./components/Grafico_ingresos_procedencia"
import { Graficogastossubtotales } from "./components/Grafico_gastos"
import { GastosPorArea } from "./components/gastos_por_area"
import { useState } from "react"

export default function Presupuestopublico2023 () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <BannerText titulo="Presupuesto Público 2023" />
        <div className="flex justify-center items-center p-5">
          <Link href="/presupuesto-publico/">
            <Button>Inicio</Button>
          </Link>
          <Button className="mr-5 ml-5">2023</Button>
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
            <GraficosIngresos chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <GraficosIngresosProcedencia
              chart={chart}
              setChart={setActivechart}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <div className="w-[800px] h-[550px]">
            <Graficogastossubtotales chart={chart} setChart={setActivechart} />
          </div>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5  pb-36">
          <div className="w-[800px] h-[550px]">
            <GastosPorArea chart={chart} setChart={setActivechart} />
          </div>
        </div>
      </div>
    </>
  )
}
