"use client"
import BannerText from "../../../components/bannertext"
import { Button } from "@/components/ui/button"
import { GraficosIngresosProcedencia } from "./Grafico_ingresos_procedencia"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos } from "./Grafico_ingresos"
import { GastosPorArea } from "./gastos_por_area"
import { Graficogastossubtotales } from "./Grafico_gastos"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { useState } from "react"

export default function Main_presupuesto () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <BannerText titulo="Presupuesto Publico" />
        <div className="flex justify-center items-center p-5">
          <Button className="mr-5 ml-5">2023</Button>
          <Button
            className="mr-5 ml-5"
            onClick={() => {
              setActivechart(true)
            }}
          >
            <ChartColumn />
          </Button>
          <Button
            className="mr-5 ml-5"
            onClick={() => {
              setActivechart(false)
            }}
          >
            <ChartPie />
          </Button>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <Card className="w-[800px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico Ingresos por rubro</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficosIngresos chart={chart} setChart={setActivechart} />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center m-5 ">
          <Card className="w-[800px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico ingresos por procedencia</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficosIngresosProcedencia
                chart={chart}
                setChart={setActivechart}
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center m-5 ">
          <Card className="w-[800px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico total de los gastos</CardTitle>
            </CardHeader>
            <CardContent>
              <Graficogastossubtotales
                chart={chart}
                setChart={setActivechart}
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center m-5 ">
          <Card className="w-[800px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico Subtotal de los gastos por area</CardTitle>
            </CardHeader>
            <CardContent>
              <GastosPorArea
                chart={chart}
                setChart={setActivechart}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
