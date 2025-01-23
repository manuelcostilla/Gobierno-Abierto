"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2022 } from "./components/gastos_por_area_2022"
import { Graficogastostotales2022 } from "./components/grafico_gastos_2022"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Gastos2022 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2022" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por totales 2022
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="97% vs. 2021"
                value="$2.890.993.817,80"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$2.595.516.908,00 Áreas del ejecutivo"
                value="100% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$1.299.881.322,22 Áreas del ejecutivo"
                value="100% vs. 2021"
              />
              <CardContentPp
                title="Menor Variación"
                content=" $20,063,761.77 HCD"
                value="59% vs. 2021"
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
            <Graficogastostotales2022
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por área del ejecutivo 2022
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="100,35% vs. 2021"
                value="$2.595.816.908,00"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$1.037.788.513,01 Secretaría de Obras y Servicios Públicos"
                value="191,71% vs. 2021"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$682.022.533,96  Secretaría de Obras y Servicios Públicos"
                value="191,71% vs. 2021"
              />
              <CardContentPp
                title="Menor Variación"
                content="$254.486.345,32 Secretaría de Gobierno"
                value="58,16% vs. 2021"
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
            <GastosPorArea2022 chart={chart2} setChart={setActivechart2} />
          </div>
           <div className="flex justify-center items-center mt-10">
                      <h1 className="text-3xl font-bold tracking-tight">
                        Subdivisión de gráficos 2022
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0].conduccionSuperior
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos conducción superior 2022"
                        description=""
                      />

                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0].secGeneralDeGobierno
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria general de gobierno 2022"
                        description=""
                      />

                      <Subgraficos
                        ChartData={dataSubGraficos[0].graficosGastos2022[0].secDeHacienda}
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria de hacienda 2022"
                        description=""
                      />
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0].serviciosDeLaDeuda
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos servicios de la deuda 2022"
                        description=""
                      />
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0]
                            .secDeCulturaEducacionTurismo
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria de cultura, educación y turismo 2022"
                        description=""
                      />
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0]
                            .secDeObrasServiciosPublicos
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria de obras y servicios públicos 2022"
                        description=""
                      />
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0]
                            .secModernizacionGestionPublica
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria de modernización y gestión pública 2022"
                        description=""
                      />
                      <Subgraficos
                        ChartData={
                          dataSubGraficos[0].graficosGastos2022[0].secDeDesarrolloHumano
                        }
                        chart={chart2}
                        setChart={setActivechart2}
                        titulo="Gráfico gastos secretaria de desarrollo humano 2022"
                        description=""
                      />
                    </div>
        </div>
      </main>
    </>
  )
}
