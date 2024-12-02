"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos2023 } from "./components/Grafico_ingresos"
import { GraficosIngresosProcedencia2023 } from "./components/Grafico_ingresos_procedencia"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"

export default function Ingresos2023 () {
  const [chart1, setActivechart1] = useState(true)
  const [chart2, setActivechart2] = useState(true)

  return (
    <>
      <BannerText titulo="Ingresos 2023" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Ingresos por procedencia 2023</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardContentPp
                title="Total"
                content="+86.12% vs. 2022"
                value="$5,381,329,259.47 "
              />
              <CardContentPp
                title="Mayor ingreso"
                content=" $2,824,763,485.47 Provincial"
                value="89.73% vs. 2022"
              />
              <CardContentPp
                title="Mayor Variación"
                content=" $ 443,082,915.98 Nacional"
                value="239.30% vs. 2022"
              />
              <CardContentPp
                title="Menor Variación"
                content="$711,031,607.12 Municipal"
                value="58.41% vs. 2022"
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
            <GraficosIngresosProcedencia2023
              chart={chart1}
              setChart={setActivechart1}
            />
          </div>
        </div>
        <div className="container mx-auto p-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Ingresos por origen 2023
            </h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+86.12% vs. 2022"
                value="$ 5.381.329.259,47"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="$2.049.952.360,00 Total ingresos tributarios"
                value="89.73% vs. 2022"
              />
              <CardContentPp
                title="Mayor Variación"
                content="$1.880.000,00 Total rentas de la propiedad"
                value="1566,67% vs. 2022"
              />
              <CardContentPp
                title="Menor Variación"
                content="$6.490.000,00  Municipal Total recuperacion de prestamos de largo plazo"
                value="43,27% vs. 2022"
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
            <GraficosIngresos2023 chart={chart2} setChart={setActivechart2} />
          </div>
        </div>
      </main>
    </>
  )
}
