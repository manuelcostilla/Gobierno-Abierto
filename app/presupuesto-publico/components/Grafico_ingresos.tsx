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
  CardFooter,
} from "@/components/ui/card"

const chartData = [
  {
    month: "Total Coparticipacion de impuestos",
    valor: 2049952360.0,
    fill: "var(--color-coparticipacionimpuestos)",
  },
  { month: "Total Tasas", valor: 1221567000.0, fill: "var(--color-tasas)" },
  {
    month: "Total Derechos",
    valor: 145010000.0,
    fill: "var(--color-derechos)",
  },
  {
    month: "Total Alquileres",
    valor: 3840000.0,
    fill: "var(--color-alquileres)",
  },
  { month: "Total Multas", valor: 62550000.0, fill: "var(--color-multas)" },
  {
    month: "Total Ingresos No Tributarios",
    valor: 1581445400.0,
    fill: "var(--color-ingresosnotributarios)",
  },
  {
    month: "Total Intereses por prestamos",
    valor: 2000000.0,
    fill: "var(--color-tasasinteresesporprestamos)",
  },
  {
    month: "Total De administracion nacional",
    valor: 494741419.7,
    fill: "var(--color-totaladmnacional)",
  },
  {
    month: "Total De gobiernos e institucional provinciales y municipales",
    valor: 762787123.47,
    fill: "var(--color-totalgipm)",
  },
  {
    month: "Total Transferencias corrientes",
    valor: 1257528543.17,
    fill: "var(--color-transferenciacorriente)",
  },
  {
    month: "Total Venta de activos",
    valor: 240000000.0,
    fill: "var(--color-totalventasactivos)",
  },
  {
    month: "Total Contribucion por mejoras",
    valor: 20351000.0,
    fill: "var(--color-totalcontribucionmejoras)",
  },
  {
    month: "Total Recursos propios de capital",
    valor: 260351000.0,
    fill: "var(--color-totalrecursospropiosdecapital)",
  },
  {
    month: "Total Del sector privado",
    valor: 21490000.0,
    fill: "var(--color-totalprivados)",
  },
]

const chartConfig = {
  coparticipacionimpuestos: {
    label: "Total Coparticipacion de impuestos",
    color: "#00517B",
  },
  tasas: {
    label: "Total Tasas",
    color: "#007CB6",
  },
  derechos: {
    label: "Total Derechos",
    color: "#5294DE",
  },
  alquileres: {
    label: "Total Alquileres",
    color: "#3EAF53",
  },
  multas: {
    label: "Total Multas",
    color: "#7FDE22",
  },
  ingresosnotributarios: {
    label: "Total Ingresos No Tributarios",
    color: "#A4D180",
  },
  tasasinteresesporprestamos: {
    label: "Total Intereses por prestamos",
    color: "#EE1E52",
  },
  totaladmnacional: {
    label: "Total De administracion nacional",
    color: "#F58634",
  },
  totalgipm: {
    label: "Total De gobiernos e institucional provinciales y municipales",
    color: "#FFF212",
  },
  transferenciacorriente: {
    label: "Total Transferencias corrientes",
    color: "#4D4D4D",
  },
  totalventasactivos: {
    label: "Total Venta de activos",
    color: "#666666",
  },
  totalcontribucionmejoras: {
    label: "Total Contribucion por mejoras",
    color: "#B3B3B3",
  },
  totalrecursospropiosdecapital: {
    label: "totalrecursospropiosdecapital",
    color: "#0975bd",
  },
  totalprivados: {
    label: "Total Del sector privado",
    color: " #8bd0fe",
  },
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
