// import { useState } from "react"

// import { ChartColumn, ChartPie } from "lucide-react"

// import { Button } from "@/components/ui/button"

import { GraficosIngresos2020 } from "./components/grafico_ingresos_2020"
// import { GraficosIngresosProcedencia2020 } from "./components/grafico_ingresos_procedencia_2020"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"

export default function Ingresos2020 () {
  return (
    <>
      <BannerText titulo="Ingresos" />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Ingresos 2020</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardContentPp
                title="Total"
                content="+20.1% vs. ultimo año"
                value="$450,231,000.89"
              />
              <CardContentPp
                title="Mayor ingreso"
                content="+20.1% desde el ultimo año"
                value="ABL - 1,234.000"
              />
              <CardContentPp
                title="Mayor crecimiento"
                content="+19% desde el ultimo año"
                value="573.000"
              />
              <CardContentPp
                title="Mayor decrecimiento"
                content="-20% desde el ultimo año"
                value="1.200.000"
              />
            </div>
            <GraficosIngresos2020 />
          </div>
        </div>
      </main>
    </>
  )
}
