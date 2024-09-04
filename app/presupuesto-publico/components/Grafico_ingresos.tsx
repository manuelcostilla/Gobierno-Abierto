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

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  {
    month: "Total Coparticipacion de impuestos",
    valor: 2049952360.0,
    fill: "var(--color-coparticipacionimpuestos)"
  },
  { month: "Total Tasas", valor: 1221567000.0, fill: "var(--color-tasas)" },
  { month: "Total Derechos", valor: 145010000.0, fill: "var(--color-derechos)" },
  { month: "Total Alquileres", valor: 3840000.0, fill: "var(--color-alquileres)" },
  { month: "Total Multas", valor: 62550000.0, fill: "var(--color-multas)" },
  { month: "Total Ingresos No Tributarios", valor: 1581445400.0, fill: "var(--color-ingresosnotributarios)" },
  { month: "Total Intereses por prestamos", valor: 2000000.0, fill: "var(--color-tasasinteresesporprestamos)" },
  { month: "Total De administracion nacional", valor: 494741419.7, fill: "var(--color-totaladmnacional)" },
  {
    month: "Total De gobiernos e institucional provinciales y municipales",
    valor: 762787123.47,
    fill: "var(--color-totalgipm)"
  },
  {
    month: "Total Transferencias corrientes",
    valor: 1257528543.17,
  },
  { month: "Total Venta de activos", valor: 240000000.0, fill: "var(--color-totalventasactivos)" },
  { month: "Total Contribucion por mejoras", valor: 20351000.0, fill: "var(--color-totalcontribucionmejoras)" },
  {
    month: "Total Recursos propios de capital",
    valor: 260351000.0,
    fill: "var(--color-totalrecursospropiosdecapital)"
  },
  { month: "Total Del sector privado", valor: 21490000.0, fill: "var(--color-totalprivados)" },
]

const chartConfig = {
  totalcontribucionmejoras: {
    label: "Total Del sector privado",
    color: "#fc3a10 ",
  },
  totalventasactivos: {
    label: "totalrecursospropiosdecapital",
    color: "#ecff00"
  },
  coparticipacionimpuestos: {
    label: "Total Coparticipacion de impuestos",
    color: " #2ae3db"
  }
} satisfies ChartConfig

export function GraficosIngresos ({ chart, setChart }) {
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
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey="valor" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
          )
        : (
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Grafico Ingresos</CardTitle>
            <CardDescription>Grafico Ingresos 2023</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
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
