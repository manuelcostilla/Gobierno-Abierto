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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  {
    nombre: "Total Gastos por Area",
    valor$: 922264822.63,
    fill: "var(--color-totalgastosporarea)",
  },
  {
    nombre: "HCD",
    valor$: 22139843.08,
    fill: "var(--color-hcd)",
  },
  {
    nombre: "Servicio de la deuda",
    valor$: 48873719.29,
    fill: "var(--color-serviciodeladeuda)",
  },
]

const chartConfig = {
  totalgastosporarea: {
    label: "Total Gastos por Area - 0",
    color: "#00517B",
  },
  hcd: {
    label: "HCD - 1",
    color: "#007CB6",
  },
  serviciodeladeuda: {
    label: "Servicio de la deuda - 2",
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

export function Graficogastostotales2020 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <Card>
          <CardHeader>
            <CardTitle>Grafico total de los gastos en pesos 2020</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] h-[250px] w-[350px] md:min-h-[200px] md:h-[250px] md:w-[600px] lg:min-h-[200px] lg:h-[250px] lg:w-[600px] "
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
            <CardTitle>Grafico total de los gastos en pesos 2020</CardTitle>
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