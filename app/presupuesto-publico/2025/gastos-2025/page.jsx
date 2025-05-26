"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2024 } from "./components/gastos_por_area"
import { GastosTotales2024 } from "./components/Grafico_gastos"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

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
              Gastos totales 2025
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="76,14% vs. 2024"
                value="$26.065.574.503,41"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$23.428.807.934,87 Áreas del ejecutivo"
                value="76,14% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$2.188.233.063,99 Servicio de la Deuda"
                value="218,55% vs. 2024"
              />
              <CardContentPp
                title="Menor Variación"
                content="$448.533.504,55 HCD"
                value="44,57% vs. 2023"
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
              Gastos por área del ejecutivo 2025
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="76,14% vs. 2024"
                value="$23.428.807.934,87"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$7.027.643.689,62 Secretaría de Salud"
                value="101,59% vs. 2024"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$1.038.060.943,96 Secretaría de Modernización y Gestión Pública"
                value="128,86% vs. 2024"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$1.969.464.186,64 Secretaría de Gobierno"
                value="-57,77% vs. 2024"
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
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2025
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0].conduccionSuperior
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos conducción superior 2025"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0].secGeneralDeGobierno
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria general de gobierno 2025"
              description=""
            />

            <Subgraficos
              ChartData={dataSubGraficos[0].graficosGastos2025[0].secDeHacienda}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de hacienda 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0].serviciosDeLaDeuda
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos servicios de la deuda 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0]
                  .secDeCulturaEducacionTurismo
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de cultura, educación y turismo 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0]
                  .secDeObrasServiciosPublicos
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de obras y servicios públicos 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0]
                  .secModernizacionGestionPublica
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de modernización y gestión pública 2025"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2025[0].secDeDesarrolloHumano
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de desarrollo humano 2025"
              description=""
            />
            <Subgraficos
              ChartData={dataSubGraficos[0].graficosGastos2025[0].secDeSalud}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de desarrollo humano 2025"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
