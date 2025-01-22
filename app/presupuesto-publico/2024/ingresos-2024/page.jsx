"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2024 } from "./components/Grafico_ingresos"
import { GraficosIngresosProcedencia2024 } from "./components/Grafico_ingresos_procedencia"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"

export default function Ingresos2024 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2024" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Ingresos por procedencia 2024</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardContentPp
                title="Total"
                content="165,71% vs. 2023"
                value=" $14.298.719.832,01"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$6.897.058.311,08 Provincial"
                value="144,16% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$2.240.171.520,93 Nacional"
                value="256,58% vs. 2023"
              />
              <CardContentPp
                title="Menor Variación"
                content="$6.897.058.311,08 Provincial"
                value="144,16% vs. 2023"
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
            <GraficosIngresosProcedencia2024
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2024
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="165,71% vs. 2023"
                value="$14.298.719.832,01"
              />
              <CardContentPp
                title="Mayor Ingreso"
                content="$5.741.300.000,00 Total ingresos tributarios"
                value="180,07% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$82.500.000,00 Total recuperacion de prestamos de largo plazo"
                value="283,90% vs. 2023"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$879.081.938,00 Total transferencia corriente"
                value="-30,09% vs. 2023"
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
            <GraficosIngresos2024 chart={chart2} setChart={setActivechart2} />
          </div>
        </div>
      </main>
    </>
  )
}
