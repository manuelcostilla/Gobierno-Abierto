import React from "react"
import Banner from "../../../components/Banner"
import { Button } from "@/components/ui/button"
import { GraficoGastos } from "./Grafico_gastos"
import { ChartColumn, ChartPie } from "lucide-react"
import { GraficosIngresos } from "./Grafico_ingresos"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

const Main_presupuesto = () => {
  return (
    <>
      <div>
        <Banner titulo="Presupuesto Publico" />
        <div className="flex justify-center items-center">
          <ul className="flex flex-row">
            <li>Año</li>
            <li>Tipo de gasto</li>
            <li>Tipo de grafico</li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-5">
          <Button>2023</Button>
          <Button>Gasto</Button>
          <Button>Presupuesto</Button>
          <Button>
            <ChartColumn />
          </Button>
          <Button>
            <ChartPie />
          </Button>
        </div>
        <div className="flex justify-end items-center pr-5 pb-5 ">
          <Card className="w-[500px] h-[350px]">
            <CardHeader>
              <CardTitle>Grafico gastos</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficoGastos />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end items-center pr-5 pt-5">
          <Card className="w-[500px] h-[350px]">
            <CardHeader>
              <CardTitle>Grafico Ingresos</CardTitle>
            </CardHeader>
            <CardContent>
              <GraficosIngresos />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-start items-center pb-5 ">
          <Card >
            <CardHeader>
              <CardTitle>
                R.A.F.A.M Situacion Economica Financiera Año 2023
              </CardTitle>
            </CardHeader>
            <CardContent>
              Secretaria de Hacienda y Finanzas publicas
            </CardContent>
            <CardFooter>
              Situacion economico Financiera del 01/01/2023 al 30/06/2023
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Main_presupuesto
