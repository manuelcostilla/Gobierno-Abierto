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

import { Card, CardContent, CardFooter } from "@/components/ui/card"

const chartData = [
  {
    nombre: "Conduccion superior",
    valor: 379653818.41,
    fill: "var(--color-conduccionsuperior)",
  },
  {
    nombre: "Secretaria de Gobierno",
    valor: 1458223658.62,
    fill: "var(--color-secgobierno)",
  },
  {
    nombre: "Secretaria de Hacienda",
    valor: 208311142.31,
    fill: "var(--color-sechacienda)",
  },
  {
    nombre: "Secretaria de Cultura, Educacion y Turismo",
    valor: 551674046.42,
    fill: "var(--color-secculturaeducacionturismo)",
  },
  {
    nombre: "Secretaria de Obras y Servicios Publicos",
    valor: 1907994791.88,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaria de Modernizacion y Gestion Publica",
    valor: 168240719.4,
    fill: "var(--color-secmodernizacionygestionpublica)",
  },
  {
    nombre: "Secretaria de Desarrollo Humano",
    valor: 350582089.96,
    fill: "var(--color-secdesarrollohumano)",
  },
]

const chartConfig = {
  conduccionsuperior: {
    label: "Conduccion superior",
    color: "#00517B",
  },
  secgobierno: {
    label: "Secretaria de Gobierno",
    color: "#007CB6",
  },
  sechacienda: {
    label: "Secretaria de Hacienda",
    color: "#5294DE",
  },
  secculturaeducacionturismo: {
    label: "Secretaria de Cultura, Educacion y Turismo",
    color: "#3EAF53",
  },
  secobrasyservpublicos: {
    label: "Secretaria de Obras y Servicios Publicos",
    color: "#7FDE22",
  },
  secmodernizacionygestionpublica: {
    label: "Secretaria de Modernizacion y Gestion Publica",
    color: "#A4D180",
  },
  secdesarrollohumano: {
    label: "Secretaria de Desarrollo Humano",
    color: "#EE1E52",
  },
} satisfies ChartConfig

export function GastosPorArea ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center">
      {chart
        ? (
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-[100%] "
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nombre"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey="valor" radius={4} />
          </BarChart>
        </ChartContainer>
          )
        : (
        <Card className="flex flex-col h-[300px] w-[350px]">
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
                  nameKey="nombre"
                  innerRadius={60}
                  strokeWidth={5}
                  fill="var(--color-desktop)"
                ></Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
        </Card>
          )}
    </div>
  )
}
