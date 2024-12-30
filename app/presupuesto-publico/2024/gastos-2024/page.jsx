"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2024 } from "./components/gastos_por_area"
import { GastosTotales2024 } from "./components/Grafico_gastos"
import { CardContentPp } from "@/components/cardtemplate"

export default function Gastos2024 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2024" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos totales 2024
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="86.13% vs. 2023"
                value="$14.298.719.832,01 "
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$13.301.517.927,21 Áreas del ejecutivo"
                value="164,72% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$686.940.223,79 Servicio de la Deuda"
                value="200,43% vs. 2023"
              />
              <CardContentPp
                title="Menor Variación"
                content="$310.261.681,01 Servicio de la Deuda"
                value="142,39% vs. 2022"
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
            <GastosTotales2024 chart={chart1} setChart={setActivechart1} />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por área del ejecutivo 2024
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="164,72% vs. 2023"
                value="$13.301.517.927,21"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$4.712.467.550,25 Secretaría de Obras y Servicios Públicos"
                value="146,99% vs. 2022"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$4.663.818.981,51 Secretaría de Gobierno"
                value="219,83% vs. 2023"
              />
              <CardContentPp
                title="Menor Variación"
                content="$551.495.130,06 Conducción Superior"
                value="45,26% vs. 2023"
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
            <GastosPorArea2024 chart={chart2} setChart={setActivechart2} />
          </div>
        </div>
      </main>
    </>
  )
}
