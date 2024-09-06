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
  CardHeader,
  CardTitle
} from "@/components/ui/card"

const chartData = [
  {
    nombre: "Total Ingresos Tributarios (Total Coparticipacion de Impuestos)",
    valor$: 2049952360.0,
    fill: "var(--color-Ingresostributarios)",
  },
  {
    nombre: "Total Ingresos No Tributarios",
    valor$: 1581445400.00,
    fill: "var(--color-Ingresosnotributarios)",
  },
  {
    nombre: "Total Rentas de la propiedad",
    valor$: 2000000.00,
    fill: "var(--color-rentaspropiedad)",
  },
  {
    nombre: "Total Transferencias Corrientes",
    valor$: 1257528543.17,
    fill: "var(--color-transferenciacorriente)",
  },
  {
    nombre: "Total Recursos Propios de Capital",
    valor$: 260351000.00,
    fill: "var(--color-recursospropiosdecapital)",
  },
  {
    nombre: "Total Recuperacion de Prestamos de Largo Plazo",
    valor$: 21490000.00,
    fill: "var(--color-recuperacionprestamoslargoplazo)",
  },
  {
    nombre: "Total Disminucion de Otros Activos Financieros",
    valor$: 208561956.30,
    fill: "var(--color-totaldisminucionotrosactivosfinancieros)",
  },
]

const chartConfig = {
  Ingresostributarios: {
    label: "Total Ingresos Tributarios (Total Coparticipacion de Impuestos)",
    color: "#00517B"
  },
  Ingresosnotributarios: {
    label: "Total Ingresos No Tributarios",
    color: "#007CB6"
  },
  rentaspropiedad: {
    label: "Total Rentas de la propiedad",
    color: "#5294DE"
  },
  transferenciacorriente: {
    label: "Total Transferencias Corrientes",
    color: "#3EAF53"
  },
  recursospropiosdecapital: {
    label: "Total Recursos Propios de Capital",
    color: "#7FDE22"
  },
  recuperacionprestamoslargoplazo: {
    label: "Total Recuperacion de Prestamos de Largo Plazo",
    color: "#A4D180"
  },
  totaldisminucionotrosactivosfinancieros: {
    label: "Total Disminucion de Otros Activos Financieros",
    color: "#EE1E52"
  }
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

export function GraficosIngresos ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-[800px] ">
    {chart
      ? (
        <Card>
         <CardHeader>
              <CardTitle>Grafico Ingresos por rubro en pesos</CardTitle>
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
              <CardTitle>Grafico Ingresos por rubro</CardTitle>
            </CardHeader>
        <CardContent className="flex-1 pb-0 X">
          <ChartContainer
            config={chartConfig}
             className="mx-auto aspect-square max-h-[350px]"
          >
            <PieChart>
              <ChartTooltip
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
  </div>)
}
