"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "De origen municipal", origenmunicipal: 236443909.94 },
  { month: "De origen provincial", origenprovincial: 817161485.47 },
  { month: "De origen Nacional", origennacional: 628240864.06 },
  { month: "Fuentes externas", fuentesexternas: 0.00 },
  { month: "total general", totalgeneral: 5381329259.47 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function GraficoGastos () {
  return (
    <div className="flex justify-center items-center">
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[850px] ">
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
        <Bar dataKey="origenmunicipal" fill="var(--color-mobile)" radius={4} />
        <Bar dataKey="origenprovincial" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="origennacional" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="fuentesexternas" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="totalgeneral" fill="var(--color-desktop)" radius={4} />

      </BarChart>
    </ChartContainer>
    </div>
  )
}
