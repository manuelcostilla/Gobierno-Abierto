"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2022 } from "./components/grafico_ingresos_2022"
import { GraficosIngresosProcedencia2022 } from "./components/grafico_ingresos_procedencia_2022"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Ingresos2022 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2022" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por procedencia 2022
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="+96% vs. 2021"
                value=" $2,891,293,817.80"
              />
              <CardContentPp
                title="Mayor Ingreso"
                content=" $1,488,842,566.90 Provincial"
                value="85% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$129,326,647.46 Nacional"
                value="231% vs. 2021"
              />
              <CardContentPp
                title="Menor Variación"
                content=" $ 684,337,391.89 Provincial"
                value="85% vs. 2021"
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
            <GraficosIngresosProcedencia2022
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              ingresos del 2022 por origen
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="96,56% vs. 2021"
                value="$2.891.293.817,80"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$1.103.116.690,01 Total ingresos tributarios"
                value="57,22% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$98.169.206,46 Total disminucion de otros activos financieros"
                value="881,69% vs. 2021"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$120.000,00 Total rentas de la propiedad"
                value="-92,00% vs. 2021"
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
            <GraficosIngresos2022 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2022
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2022[0]
                  .graficoIngresosTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos Tributarios 2022"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2022[0]
                  .graficoIngresosNoTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos no Tributarios 2022"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2022[0].graficoTasas
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Tasas 2022"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
