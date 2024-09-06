"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  {
    month: "De origen municipal",
    valor: 236443909.94,
    fill: "var(--color-deorigenmunicipal)",
  },
  {
    month: "De origen provincial",
    valor: 817161485.47,
    fill: "var(--color-deorigenprovincial)",
  },
  {
    month: "De origen Nacional",
    valor: 628240864.06,
    fill: "var(--color-deorigennacional)",
  },
  {
    month: "Fuentes externas",
    valor: 0.0,
    fill: "var(--color-fuentesexternas)",
  },
]

const chartConfig = {
  deorigenmunicipal: {
    label: "De origen municipal",
    color: "#00517B",
  },
  deorigenprovincial: {
    label: "De origen provincial",
    color: "#007CB6",
  },
  deorigennacional: {
    label: "De origen Nacional",
    color: "#5294DE",
  },
  fuentesexternas: {
    label: "Fuentes externas",
    color: "#3EAF53",
  },

} satisfies ChartConfig

const CustomLegend = ({ config }: { config: ChartConfig }) => (
  <div>
    {Object.entries(config).map(([key, { label, color }]) => (
      <div key={key} className="flex items-center">
        <div className="w-12 h-5 mr-2" style={{ backgroundColor: color }}></div>
        <span className=" text-balance">{label} </span>
      </div>
    ))}
  </div>
)

export function GraficosIngresosProcedencia ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-[800px] pt-20">
      {chart
        ? (
          <Card>
           <CardHeader>
              <CardTitle>Grafico ingresos por procedencia en pesos</CardTitle>
            </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
             className="min-h-[200px] h-[250px] w-[600px]"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="valor" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <CustomLegend config={chartConfig} />
          </CardFooter>
        </Card>
          )
        : (
        <Card>
            <CardHeader>
              <CardTitle>Grafico ingresos por procedencia</CardTitle>
            </CardHeader>
          <CardContent className="flex-1 pb-0 X">
            <ChartContainer
              config={chartConfig}
               className="mx-auto aspect-square max-h-[350px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Pie
                  data={chartData}
                  dataKey="valor"
                  nameKey="month"
                  innerRadius={60}
                  strokeWidth={5}
                ></Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <CustomLegend config={chartConfig} />
          </CardFooter>
        </Card>
          )}
    </div>
  )
}
