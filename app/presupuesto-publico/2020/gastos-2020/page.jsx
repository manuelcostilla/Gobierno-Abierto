"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2020 } from "./components/gastos_por_area_2020"
import { GraficogastosTotales2020 } from "./components/grafico_gastos_2020"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "./components/subgrafico_gastos_por_area_2020"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Gastos2020 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2020" />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos totales 2020
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="30.47% vs. 2019"
                value="$993,278,385.00"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$22,139,843.08"
                value="37.58% vs. 2019"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$22,139,843.08 HCD"
                value="37.58% vs. 2019"
              />
              <CardContentPp
                title="Menor Variación"
                content="$922,264,822.63 Total Areas del Ejecutivo"
                value="23.76% vs. 2019"
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
            <GraficogastosTotales2020
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por Área del ejecutivo 2020
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="33.15% vs. 2019"
                value="$992,264,822.63"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$391,475,921.46 Conducción Superior"
                value="1050.63% vs. 2019"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$391,475,921.46 Conducción Superior"
                value="1050.63% vs. 2019"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="-$50,116,059.70 Conducción Superior"
                value="-83.57% vs. 2019"
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
            <GastosPorArea2020 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2020[0].graficoIngresosTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
               titulo="Grafico Ingresos tributarios 2020"
              description="Grafico de los mayores ingresos tributados"
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2020[0]
                  .graficoIngresosNoTributarios2020
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Grafico Ingresos no tributado 2020"
              description="Grafico de los mayores ingresos no tributados"
            />

            <Subgraficos
              ChartData={dataSubGraficos[0].graficosIngresos2020[0].graficoTasas2020}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Grafico tasas 2020"
              description="Grafico de las tasas principales 2020"
            />
          </div>
        </div>
      </main>
    </>
  )
}
