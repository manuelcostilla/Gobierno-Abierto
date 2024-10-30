// import { useState } from "react"

// import { ChartColumn, ChartPie } from "lucide-react"

// import { Button } from "@/components/ui/button"

import { GraficosIngresos2020 } from "./components/grafico_ingresos_2020"
import { GraficosIngresosProcedencia2020 } from "./components/grafico_ingresos_procedencia_2020"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Ingresos2020 () {
  return (
    <>
    <BannerText titulo="Ingresos"/>
      <div className="flex justify-center container">
        <div className="flex justify-start p-20">
          <Card>
            <CardHeader>
              <CardTitle>Grafico Ingresos por rubro en pesos 2020</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center  pb-20 pt-20 ">
              <CardContentPp title="Total" content="$45.223.445" />
              <CardContentPp
                title="Diferencia 2020-2019"
                content="$35.000.000"
              />
              <CardContentPp
                title="Aumento porcentual"
                content="25%"
              />
              <CardContentPp title="Impuestos recaudados" content="Abl" />
            </CardContent>
            <CardContent>
              <Card>
                <CardContent>
                  <GraficosIngresos2020 />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end p-20">
          <Card>
            <CardHeader>
              <CardTitle>Grafico Ingresos por rubro en pesos 2020</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center  pb-20 pt-20 ">
              <CardContentPp title="Total" content="$45.223.445" />
              <CardContentPp
                title="Diferencia 2020-2019"
                content="$35.000.000"
              />
              <CardContentPp
                title="Aumento porcentual"
                content="25%"
              />
              <CardContentPp title="Impuesto recaudados" content="Abl" />
            </CardContent>
            <Card>
              <CardContent>
                <GraficosIngresosProcedencia2020 />
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
    </>
  )
}
