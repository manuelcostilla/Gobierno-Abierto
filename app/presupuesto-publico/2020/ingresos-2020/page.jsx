// import { useState } from "react"

// import { ChartColumn, ChartPie } from "lucide-react"

// import { Button } from "@/components/ui/button"

import { GraficosIngresos2020 } from "./components/grafico_ingresos_2020"
// import { GraficosIngresosProcedencia2020 } from "./components/grafico_ingresos_procedencia_2020"
import { BannerText } from "@/components/bannertext"
import { CardContentPp } from "@/components/cardtemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Ingresos2020 () {
  return (
    <>
      <BannerText titulo="Ingresos" />
      <div className="conntainer mx-auto my-10 px-20 flex justify-center items-center">
        <div className="flex justify-center w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Grafico Ingresos por rubro en pesos 2020
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <CardContentPp title="Total" content="$45.223.445" />
              <CardContentPp
                title="Diferencia 2020-2019"
                content="$35.000.000"
              />
              <CardContentPp title="Aumento porcentual" content="25%" />
              <CardContentPp title="Impuestos recaudados" content="Abl" />
            </CardContent>
            <CardContent>
              <Card>
                <CardContent>
                  <GraficosIngresos2020 />
                </CardContent>
              </Card>
            </CardContent>
            <CardContent>
              <Card>
                <CardContent className="flex justify-end">
                  <div>
                    <p>
                      llfjfjjjkjklkskjkfkjfksjkljkskjskjsksakjsfjlksfjklfsjklsfkljsjklsfklj
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
