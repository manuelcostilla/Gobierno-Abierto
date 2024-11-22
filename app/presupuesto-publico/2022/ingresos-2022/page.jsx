"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2022 } from "./components/grafico_ingresos_2022"
import { GraficosIngresosProcedencia2022 } from "./components/grafico_ingresos_procedencia_2022"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"

export default function Ingresos2022 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2022" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Ingresos 2022</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+20.1% vs. último año"
                value="$450,231,000.89"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="+20.1% desde el último año"
                value="ABL - 1,234.000"
              />
              <CardContentPp
                title="Mayor crecimiento"
                content="+19% desde el último año"
                value="573.000"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="-20% desde el último año"
                value="1.200.000"
              />
              <div className="flex flex-row justify-between">
                <Button
                  className=" w-[150px]"
                  onClick={() => {
                    setActivechart1(true)
                  }}
                >
                  <ChartColumn />
                </Button>
                <Button
                  className="w-[150px]"
                  onClick={() => {
                    setActivechart1(false)
                  }}
                >
                  <ChartPie />
                </Button>
              </div>
            </div>
            <GraficosIngresos2022 chart={chart1} setChart={setActivechart1} />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por procedencia 2022
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+20.1% vs. último año"
                value="$450,231,000.89"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="+20.1% desde el último año"
                value="ABL - 1,234.000"
              />
              <CardContentPp
                title="Mayor crecimiento"
                content="+19% desde el último año"
                value="573.000"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="-20% desde el último año"
                value="1.200.000"
              />
              <div className="flex flex-row justify-between">
                <Button
                  className=" w-[150px]"
                  onClick={() => {
                    setActivechart2(true)
                  }}
                >
                  <ChartColumn />
                </Button>
                <Button
                  className="w-[150px]"
                  onClick={() => {
                    setActivechart2(false)
                  }}
                >
                  <ChartPie />
                </Button>
              </div>
            </div>
            <GraficosIngresosProcedencia2022
              chart={chart2}
              setChart={setActivechart2}
            />
          </div>
        </div>
      </main>
    </>
  )
}
