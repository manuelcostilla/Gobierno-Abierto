"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import * as React from "react"

const chartData = [
  {
    nombre: "Total Ingresos Tributarios (Total Coparticipacion de Impuestos)",
    valor$: 498270000.0,
    fill: "var(--color-Ingresostributarios)",
  },
  {
    nombre: "Total Ingresos No Tributarios",
    valor$: 460142500.0,
    fill: "var(--color-Ingresosnotributarios)",
  },
  {
    nombre: "Total Rentas de la propiedad",
    valor$: 1500000.0,
    fill: "var(--color-rentaspropiedad)",
  },
  {
    nombre: "Total Transferencias Corrientes",
    valor$: 97558385.0,
    fill: "var(--color-transferenciacorriente)",
  },
  {
    nombre: "Total Recursos Propios de Capital",
    valor$: 3356500.0,
    fill: "var(--color-recursospropiosdecapital)",
  },
  {
    nombre: "Total Recuperación de préstamos de corto plazo",
    valor$: 2000000.0,
    fill: "var(--color-recuperacionprestamoscortoplazo)",
  },
  {
    nombre: "Total Recuperacion de Prestamos de Largo Plazo",
    valor$: 451000.0,
    fill: "var(--color-recuperacionprestamoslargoplazo)",
  },
]

const chartConfig = {
  Ingresostributarios: {
    label:
      "Total Ingresos Tributarios (Total Coparticipacion de Impuestos) - 0",
    color: "#00517B",

  },
  Ingresosnotributarios: {
    label: "Total Ingresos No Tributarios - 1",
    color: "#007CB6",
  },
  rentaspropiedad: {
    label: "Total Rentas de la propiedad - 2",
    color: "#5294DE",
  },
  transferenciacorriente: {
    label: "Total Transferencias Corrientes - 3",
    color: "#3EAF53",
  },
  recursospropiosdecapital: {
    label: "Total Recursos Propios de Capital - 4",
    color: "#7FDE22",
  },
  recuperacionprestamoscortoplazo: {
    label: "Total Recuperacion de Prestamos de Corto Plazo - 5",
    color: "#7DFE99",
  },
  recuperacionprestamoslargoplazo: {
    label: "Total Recuperacion de Prestamos de Largo Plazo - 6",
    color: "#A4D180",
  },
} satisfies ChartConfig

const CustomLegend = ({ config }: { config: ChartConfig }) => (
  <div>
    {Object.entries(config).map(([key, { label, color }]) => (
      <div key={key} className="flex items-center">
        <div className="w-12 h-5 mr-2" style={{ backgroundColor: color }}></div>
        <span className=" text-balance">{label}</span>
      </div>
    ))}
  </div>
)

export function GraficosIngresos2020 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="valor$" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <CustomLegend config={chartConfig} />
        </>
          )
        : (
        <>
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Grafico 2020</CardTitle>
                <CardDescription>
                  Resumen de los ingresos del 2020
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square w-[350px] "
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={chartData}
                        dataKey="valor$"
                        nameKey="nombre"
                        innerRadius={60}
                        strokeWidth={5}
                      ></Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
                <CardDescription>Division en categorias</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomLegend config={chartConfig} />
              </CardContent>
            </Card>
          </div>
        </>
          )}
    </div>
  )
}
