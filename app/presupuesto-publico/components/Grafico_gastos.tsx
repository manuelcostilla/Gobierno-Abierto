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
    nombre: "Total Gastos por Area",
    valor$: 5024680266.73,
    fill: "var(--color-totalgastosporarea)",
  },
  {
    nombre: "HCD",
    valor$: 127582089.96,
    fill: "var(--color-hcd)",
  },
  {
    nombre: "Servicio de la deuda",
    valor$: 228650322.0,
    fill: "var(--color-serviciodeladeuda)",
  },
]

const chartConfig = {
  totalgastosporarea: {
    label: "Total Gastos por Area",
    color: "#00517B",
  },
  hcd: {
    label: "HCD",
    color: "#007CB6",
  },
  serviciodeladeuda: {
    label: "Servicio de la deuda",
    color: "#5294DE",
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

export function Graficogastossubtotales ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-[800px] pt-20 ">
      {chart
        ? (
        <Card>
          <CardHeader>
              <CardTitle>Grafico total de los gastos en pesos</CardTitle>
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
                <Bar dataKey="valor$" radius={4} />
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
              <CardTitle>Grafico total de los gastos en pesos</CardTitle>
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
                  dataKey="valor$"
                  nameKey="nombre"
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
