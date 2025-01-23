"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2025 } from "./components/Grafico_ingresos"
import { GraficosIngresosProcedencia2025 } from "./components/Grafico_ingresos_procedencia"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Ingresos2024 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2025" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Ingresos por procedencia 2025</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardContentPp
                title="Total"
                content="165,71% vs. 2024"
                value=" $14.298.719.832,01"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$14,260,768,797.12  Provincial"
                value="106.77% vs. 2024"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$14,260,768,797.12  Provincial"
                value="106.77% vs. 2024"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="$2,046,138,638.29 Nacional"
                value="-8.66% vs. 2024"
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
            <GraficosIngresosProcedencia2025
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2025
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="82.29% vs. 2024"
                value="$26,065,574,503.41"
              />
              <CardContentPp
                title="Mayor Ingreso"
                content="$11,837,579,893.00 Total ingresos tributarios"
                value="106.18% vs. 2024"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$2,175,035,097.61 Total transferencia corriente"
                value="147.42% vs. 2024"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$522,610,000.00 Total recursos propios del capital"
                value="-4.19% vs. 2024"
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
            <GraficosIngresos2025 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2025
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2025[0]
                  .graficoIngresosTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos Tributarios 2025"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2025[0]
                  .graficoIngresosNoTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos no Tributarios 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2025[0].graficoTasas
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Tasas 2025"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
