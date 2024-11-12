"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2022 } from "./components/gastos_por_area_2022"
import { Graficogastostotales2022 } from "./components/grafico_gastos_2022"
import { CardContentPp } from "@/components/cardtemplate"

export default function Gastos2020 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Gastos por area 2022</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+20.1% vs. ultimo año"
                value="$450,231,000.89"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="+20.1% desde el ultimo año"
                value="ABL - 1,234.000"
              />
              <CardContentPp
                title="Mayor crecimiento"
                content="+19% desde el ultimo año"
                value="573.000"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="-20% desde el ultimo año"
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
            <GastosPorArea2022 chart={chart1} setChart={setActivechart1} />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
             Gastos 2022
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+20.1% vs. ultimo año"
                value="$450,231,000.89"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="+20.1% desde el ultimo año"
                value="ABL - 1,234.000"
              />
              <CardContentPp
                title="Mayor crecimiento"
                content="+19% desde el ultimo año"
                value="573.000"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="-20% desde el ultimo año"
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
            <Graficogastostotales2022
              chart={chart2}
              setChart={setActivechart2}
            />
          </div>
        </div>
      </main>
    </>
  )
}


