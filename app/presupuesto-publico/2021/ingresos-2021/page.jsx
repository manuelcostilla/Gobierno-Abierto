"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2021 } from "./components/grafico_ingresos_2021"
import { GraficosIngresosProcedencia2021 } from "./components/grafico_ingresos_procedencia_2021"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Ingresos2021 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2021" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por procedencia 2021
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"

                content="+38.34% vs. 2021"

               

                value="$1,470,936,536.01"
              />
              <CardContentPp
                title="Mayor Ingreso"
                content="$804,505,175.01 Provincial"
                value="39.26% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$37,684,865.62 Nacional"
                value="207% vs. 2021"
              />
              <CardContentPp
                title="Menor Variación"
                content="$143,150,060.38 Municipal"
                value="30% vs. 2021"
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
            <GraficosIngresosProcedencia2021
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2021
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"

                content="+38,34% vs. 2021"

               

                value=" $1.470.936.536,01"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$701.641.317,01 "
                value="40,82% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$9.549.000,00  Total disminucion de otros activos financieros"
                value="2117,29% vs. 2021"
              />
              <CardContentPp
                title="Menor Variación"
                content="$102.999.060,38  total ingresos no tributarios"
                value="22,38% vs. 2021"
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
            <GraficosIngresos2021 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2021
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2021[0]
                  .graficoIngresosTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos Tributarios 2021"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2021[0]
                  .graficoIngresosNoTributarios
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Ingresos no Tributarios 2021"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosIngresos2021[0].graficoTasas
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico Tasas 2021"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
