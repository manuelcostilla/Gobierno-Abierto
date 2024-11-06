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
    valor$: 1103116690.01,
    fill: "var(--color-Ingresostributarios)",
  },
  {
    nombre: "Total Ingresos No Tributarios",
    valor$: 955927102.82,
    fill: "var(--color-Ingresosnotributarios)",
  },
  {
    nombre: "Total Venta de Bienes y Servicios",
    valor$: 120000.00,
    fill: "var(--color-bienesyservicios)",
  },
  {
    nombre: "Total Transferencias Corrientes",
    valor$: 55521418.51,
    fill: "var(--color-transferenciacorriente)",
  },
  {
    nombre: "Total Recursos Propios de Capital",
    valor$: 163068800.00,
    fill: "var(--color-recursospropiosdecapital)",
  },
  {
    nombre: "Total Recuperacion de Prestamos de Corto Plazo",
    valor$: 15000000.00,
    fill: "var(--color-recuperacionprestamoscortoplazo)",
  },
  {
    nombre: "Total Recuperacion de Prestamos de Largo Plazo",
    valor$: 677400.00,
    fill: "var(--color-recuperacionprestamoslargoplazo)",
  },
  {
    nombre: "Total Disminucion de Otros Activos Financieros",
    valor$: 98169206.46,
    fill: "var(--color-totaldisminucionotrosactivosfinancieros)",
  },
]

const chartConfig = {
  Ingresostributarios: {
    label: "Total Ingresos Tributarios (Total Coparticipacion de Impuestos) - 0",
    color: "#00517B"
  },
  Ingresosnotributarios: {
    label: "Total Ingresos No Tributarios - 1",
    color: "#007CB6"
  },
  bienesyservicios: {
    label: "Total Venta de Bienes y Servicios - 2",
    color: "#5294DE"
  },
  transferenciacorriente: {
    label: "Total Transferencias Corrientes - 3",
    color: "#3EAF53"
  },
  recursospropiosdecapital: {
    label: "Total Recursos Propios de Capital - 4",
    color: "#7FDE22"
  },
  recuperacionprestamoslargoplazo: {
    label: "Total Recuperacion de Prestamos de Largo Plazo - 5",
    color: "#A4D180"
  },
  recuperacionprestamoscortoplazo: {
    label: "Total Recuperacion de Prestamos de Corto Plazo - 6",
    color: "#A4D180"
  },
  totaldisminucionotrosactivosfinancieros: {
    label: "Total Disminucion de Otros Activos Financieros - 7",
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

export function GraficosIngresos2022 ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-[800px] ">
    {chart
      ? (
        <Card>
         <CardHeader>
              <CardTitle>Grafico Ingresos por rubro en pesos 2022</CardTitle>
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
              <CardTitle>Grafico Ingresos por rubro 2022</CardTitle>
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
