"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { BannerText } from "@/components/bannertext"
import { GastosPorArea2026 } from "./components/gastos_por_area"
import { GastosTotales2026 } from "./components/Grafico_gastos"
import { CardContentPp } from "@/components/cardtemplate"
import { Subgraficos } from "../../components/subgraficos"
import { dataSubGraficos } from "../../data/dataSubGraficos"

export default function Gastos2026() {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Gastos 2026" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos totales 2026
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="35.56% vs. 2025"
                value="35,334,342,102.93"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$31,661,371,368.89 Áreas del ejecutivo"
                value="35.14% vs. 2025"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$744,320,233.44  HCD"
                value="65.95% vs. 2025"
              />
              <CardContentPp
                title="Menor Variación"
                content="$2,928,650,500.60 Servicio de la Deuda"
                value="33.84% vs. 2025"
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
            <GastosTotales2026 chart={chart1} setChart={setActivechart1} />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Gastos por área del ejecutivo 2026
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="35.14% vs. 2025"
                value="$31,661,371,368.89"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$10,074,516,376.12 Secretaría de Salud"
                value="43.36% vs. 2025"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$2,917,038,342.06 Conducción Superior"
                value="177.67% vs. 2025"
              />
              <CardContentPp
                title="Mayor Decrecimiento"
                content="$7,278,769,174.18 Secretaría de Obras y Servicios Públicos"
                value="8.75% vs. 2025"
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
            <GastosPorArea2026 chart={chart2} setChart={setActivechart2} />
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1 className="text-3xl font-bold tracking-tight">
              Subdivisión de gráficos 2026
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0].conduccionSuperior
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos conducción superior 2026"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0].secGeneralDeGobierno
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria general de gobierno 2026"
              description=""
            />

            <Subgraficos
              ChartData={dataSubGraficos[0].graficosGastos2026[0].secDeHacienda}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de hacienda 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0].serviciosDeLaDeuda
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos servicios de la deuda 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0]
                  .secDeCulturaEducacionTurismo
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de cultura, educación y turismo 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0]
                  .secDeObrasServiciosPublicos
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de obras y servicios públicos 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0]
                  .secModernizacionGestionPublica
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de modernización y gestión pública 2026"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2026[0].secDeDesarrolloHumano
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de desarrollo humano 2026"
              description=""
            />
            <Subgraficos
              ChartData={dataSubGraficos[0].graficosGastos2026[0].secDeSalud}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de salud 2026"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
