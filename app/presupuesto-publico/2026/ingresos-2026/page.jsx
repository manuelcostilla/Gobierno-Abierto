"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresosProcedencia2026 } from "./components/Grafico_ingresos_procedencia"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"
import { GraficosIngresos2026 } from "./components/Grafico_ingresos"

export default function Ingresos2026() {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2026" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por procedencia 2026
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="35.56% vs. 2025"
                value="$35,334,342,102.93"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$20,258,428,977.74 Provincial"
                value="42.06% vs. 2025"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$20,258,428,977.74 Provincial"
                value="42.06% vs. 2025"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="$1,292,544,507.19 Nacional"
                value="-36.83% vs. 2025"
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
            <GraficosIngresosProcedencia2026
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2026
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="35.56% vs. 2025"
                value="$35,334,342,102.93"
              />
              <CardContentPp
                title="Mayor Ingreso"
                content="$17,120,394,786.00 Total ingresos tributarios"
                value="44.63% vs. 2025"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$10,000,000.00 Total rentas de la propiedad"
                value="100.00% vs. 2025"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$1,828,959,622.38 Total transferencia del capital"
                value="-24.42% vs. 2025"
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
            <GraficosIngresos2026 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2026
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2026[0]
                  .graficoIngresosTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos Tributarios 2026"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2026[0]
                  .graficoIngresosNoTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos no Tributarios 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2026[0].graficoTasas
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Tasas 2026"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
