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
              Gastos totales 2024
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="86.13% vs. 2023"
                value="$14.298.719.832,01 "
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$13.301.517.927,21 Áreas del ejecutivo"
                value="164,72% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$686.940.223,79 Servicio de la Deuda"
                value="200,43% vs. 2023"
              />
              <CardContentPp
                title="Menor Variación"
                content="$310.261.681,01 HCD"
                value="142,39% vs. 2023"
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
              Gastos por área del ejecutivo 2024
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="TOTAL"
                content="164,72% vs. 2023"
                value="$13.301.517.927,21"
              />
              <CardContentPp
                title="Mayor Gasto"
                content="$4.712.467.550,25 Secretaría de Obras y Servicios Públicos"
                value="146,99% vs. 2023"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$4.663.818.981,51 Secretaría de Gobierno"
                value="219,83% vs. 2023"
              />
              <CardContentPp
                title="Menor Variación"
                content="$551.495.130,06 Conducción Superior"
                value="45,26% vs. 2023"
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
              Subdivisión de gráficos 2024
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-20 mb-10">
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0].conduccionSuperior
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos conducción superior 2024"
              description=""
            />

            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0].secGeneralDeGobierno
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria general de gobierno 2024"
              description=""
            />

            <Subgraficos
              ChartData={dataSubGraficos[0].graficosGastos2024[0].secDeHacienda}
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de hacienda 2024"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0].serviciosDeLaDeuda
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos servicios de la deuda 2024"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0]
                  .secDeCulturaEducacionTurismo
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de cultura, educación y turismo 2024"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0]
                  .secDeObrasServiciosPublicos
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de obras y servicios públicos 2024"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0]
                  .secModernizacionGestionPublica
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de modernización y gestión pública 2024"
              description=""
            />
            <Subgraficos
              ChartData={
                dataSubGraficos[0].graficosGastos2024[0].secDeDesarrolloHumano
              }
              chart={chart2}
              setChart={setActivechart2}
              titulo="Gráfico gastos secretaria de desarrollo humano 2024"
              description=""
            />
          </div>
        </div>
      </main>
    </>
  )
}
