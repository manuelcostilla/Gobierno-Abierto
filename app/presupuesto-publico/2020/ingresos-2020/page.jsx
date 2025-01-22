"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2020 } from "./components/grafico_ingresos_2020"
import { GraficosIngresosProcedencia2020 } from "./components/grafico_ingresos_procedencia_2020"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Ingresos2020 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2020" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por procedencia 2020
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="+42.68% vs. 2019"
                value="$1,063,278,085.00"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$577,681,650.00 Provincial"
                value="43.10% vs. 2019"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$467,450,000.00 Municipal"
                value="45.66% vs. 2019"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$18,146,435.00 Nacional"
                value="-11.94% vs. 2019"
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
            <GraficosIngresosProcedencia2020
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2020
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="+42.68% vs. 2019"
                value="$1,063,278,385.00"
              />
              <CardContentPp
                title="Mayor ingreso"
                content=" $498,270,000.00 Total ingresos tributarios"
                value="53.41% vs. 2019"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$2,000,000.00 Total recuperacion de prestamos de largo plazo"
                value="173.97% vs. 2019"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$451,000.00 total ingresos no tributarios"
                value="-97.62% vs. 2019"
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
            <GraficosIngresos2020 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
                      <h1 className="text-3xl font-bold tracking-tight">
                        Subdivisión de gráficos 2020
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosIngresos2020[0].graficoIngresosTributarios
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico Ingresos Tributarios 2020"
                        description=""
                      />

                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosIngresos2020[0].graficoIngresosNoTributarios
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico Ingresos no Tributarios 2020"
                        description=""
                      />
                       <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosIngresos2020[0].graficoTasas
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico Tasas 2020"
                        description=""
                      />
                    </div>
        </div>
      </main>
    </>
  )
}
