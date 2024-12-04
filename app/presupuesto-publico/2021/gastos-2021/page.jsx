"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2021 } from "./components/gastos_por_area_2021"
import { Graficogastostotales2021 } from "./components/grafico_gastos_2021"
import { CardContentPp } from "@/components/cardtemplate"

export default function Gastos2020 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2021" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos totales 2021
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="48% vs. 2020"
                value="$1,470,936,536.01"
              />
              <CardContentPp
                title="Mayor Gasto"
                content=" $1,295,635,585.78 Áreas del ejecutivo"
                value="40% vs. 2020"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$92,534,507.53 Servicio de la deuda"
                value="189.33% vs. 2020"
              />
              <CardContentPp
                title="Menor Variación"
                content="$373,370,763.15 Áreas del ejecutivo"
                value="40.48% vs. 2020"
              />
              <div className="flex flex-row justify-between">
                <Button
                  className="w-[150px]"
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
            <Graficogastostotales2021
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Gráfico de gastos por área del ejecutivo 2021</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="30,57% vs. 2020"
                value=" $1.295.635.585,78"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$437.578.320,44 Secretaría de Gobierno"
                value="773,13% vs. 2020"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$387.462.260,74  Secretaría de Gobierno"
                value="773,13% vs. 2020"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="-$261.512.555,15  Conducción Superior"
                value="-66,80% vs. 2020"
              />
              <div className="flex flex-row justify-between">
                <Button
                  className="w-[150px]"
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
            <GastosPorArea2021 chart={chart2} setChart={setActivechart2} />
          </div>
        </div>
      </main>
    </>
  )
}
