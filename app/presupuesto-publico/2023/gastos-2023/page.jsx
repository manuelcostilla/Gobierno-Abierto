"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2023 } from "./components/gastos_por_area"
import { GastosTotales2023 } from "./components/Grafico_gastos"
import { CardContentPp } from "@/components/cardtemplate"

export default function Gastos2023 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2023" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos totales 2023
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="86.13% vs. 2022"
                value="$5,380,912,678.69"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$5,024,680,266.73 Áreas del ejecutivo"
                value="93.59% vs. 2022"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$73,625,604.78 HCD "
                value="136.45% vs. 2022"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$12,870,102.62 Servicio de la Deuda"
                value="-5.33% vs. 2022"
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
            <GastosTotales2023 chart={chart1} setChart={setActivechart1} />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por área del ejecutivo 2023
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="93,57% vs. 2022"
                value="$5.024.680.267,00"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="20.1% desde el último año"
                value="136.45% vs. 2022"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$309.911.972,46 Secretaría de Cultura, Educación y Turismo"
                value="128,19% vs. 2022"
              />
              <CardContentPp
                title="Menor Variación"
                content="$62.627.924,04 Secretaría de Modernización y Gestión Pública"
                value="59,30% vs. 2022"
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
            <GastosPorArea2023 chart={chart2} setChart={setActivechart2} />
          </div>
        </div>
      </main>
    </>
  )
}
