"use client"
import BannerText from "../../../components/bannertext"
import { Button } from "@/components/ui/button"
import { ChartColumn, ChartPie } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GastosPorArea } from "./components/gastos_por_area"
import { useState } from "react"

export default function Main_presupuesto () {
  const [chart, setActivechart] = useState(true)

  return (
    <>
      <div>
        <BannerText titulo="Presupuesto Publico Gastos por area" />
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
              <CardTitle>Gastos por area</CardTitle>
            </CardHeader>
            <CardContent>
              <GastosPorArea chart={chart} setChart={setActivechart} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
