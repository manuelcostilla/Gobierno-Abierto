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
  {
    month: "total general",
    valor: 5381329259.47,
    fill: "var(--color-totalgeneral)",
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
  totalgeneral: {
    label: "total general",
    color: "#7FDE22",
  },
} satisfies ChartConfig

export function GraficoGastos ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center">
      {chart
        ? (
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-[850px] "
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
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
                  nameKey="month"
                  innerRadius={60}
                  strokeWidth={5}
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
