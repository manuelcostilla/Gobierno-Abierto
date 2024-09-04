"use client"

import { Banner } from "../../../components/banner"
import { Button } from "@/components/ui/button"
import { GraficoGastos } from "./Grafico_gastos"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos } from "./Grafico_ingresos"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

const Main_presupuesto = () => {
  const [chart, setActivechart] = useState(false)


  return (
    <>
      <div>
        <Banner titulo="Presupuesto Publico" />
        <div className="flex justify-center items-center p-5">
          <ul className="flex flex-row pr-4">
            <li className="mr-5 ml-5">Año</li>
            <li className="mr-10 ml-16">Tipo de gasto</li>
            <li className="mr-5  ml-24">Tipo de grafico</li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-5">
          <Button className="mr-5 ml-5">2023</Button>
          <Button className="mr-5 ml-5">Gasto</Button>
          <Button className="mr-3 ml-3">Presupuesto</Button>
          <Button className="mr-5 ml-5" >
            <ChartColumn />
          </Button>
          <Button className="mr-5 ml-5">
            <ChartPie />
          </Button>
        </div>
        <div className="flex justify-center items-center mb-5 pr-5 pt-5">
          <Card className="w-[850px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico Ingresos</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficosIngresos chart={chart} setChart={setActivechart} />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center m-5 ">
          <Card className="w-[800px] h-[550px]">
            <CardHeader>
              <CardTitle>Grafico gastos</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficoGastos />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Main_presupuesto
