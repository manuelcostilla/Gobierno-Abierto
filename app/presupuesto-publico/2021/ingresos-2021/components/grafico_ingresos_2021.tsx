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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  {
    nombre: "Total Ingresos Tributarios (Total Coparticipación de Impuestos)",
    valor$: 701641317.01,
    fill: "var(--color-Ingresostributarios)",
  },
  {
    nombre: "Total Ingresos No Tributarios",
    valor$: 563141560.38,
    fill: "var(--color-Ingresosnotributarios)",
  },
  {
    nombre: "Total Rentas de la Propiedad",
    valor$: 1500000.0,
    fill: "var(--color-rentaspropiedad)",
  },
  {
    nombre: "Total Transferencias Corrientes",
    valor$: 148695158.62,
    fill: "var(--color-transferenciacorriente)",
  },
  {
    nombre: "Total Recursos Propios de Capital",
    valor$: 42506500.0,
    fill: "var(--color-recursospropiosdecapital)",
  },
  {
    nombre: "Total Recuperación de Préstamos de Corto Plazo",
    valor$: 3000000.0,
    fill: "var(--color-recuperacionprestamoscortoplazo)",
  },
  {
    nombre: "Total Recuperación de Préstamos de Largo Plazo",
    valor$: 452000.0,
    fill: "var(--color-recuperacionprestamoslargoplazo)",
  },
  {
    nombre: "Total Disminución de Otros Activos Financieros",
    valor$: 10000000.0,
    fill: "var(--color-totaldisminucionotrosactivosfinancieros)",
  },
]

const chartConfig = {
  Ingresostributarios: {
    label:
      "Total Ingresos Tributarios (Total Coparticipación de Impuestos) - 0",
    color: "#00517B",
  },
  Ingresosnotributarios: {
    label: "Total Ingresos No Tributarios - 1",
    color: "#007CB6",
  },
  rentaspropiedad: {
    label: "Total Rentas de la Propiedad - 2",
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
  recuperacionprestamoslargoplazo: {
    label: "Total Recuperación de Préstamos de Largo Plazo - 5",
    color: "#A4D180",
  },
  recuperacionprestamoscortoplazo: {
    label: "Total Recuperación de Préstamos de Corto Plazo - 6",
    color: "#A4D180",
  },
  totaldisminucionotrosactivosfinancieros: {
    label: "Total Disminución de Otros Activos Financieros - 7",
    color: "#EE1E52",
  },
} satisfies ChartConfig

const CustomLegend = ({ config }: { config: ChartConfig }) => (
  <div className="flex flex-col gap-4 w-full">
    {Object.entries(config).map(([key, { label, color }]) => (
      <div
        key={key}
        className="flex items-center w-full bg-gray-50 p-4 rounded"
      >
        <div
          className="w-6 h-6 rounded mr-4 flex-shrink-0"
          style={{ backgroundColor: color }}
        ></div>

        <span className="flex-grow text-balance">{label}</span>
      </div>
    ))}
  </div>
)

export function GraficosIngresos2021 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <>
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Gráfico 2021</CardTitle>
                <CardDescription>
                  Resumen de los ingresos del 2021
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full h-auto max-w-[350px] md:max-w-[600px] lg:max-w-none mx-auto">
                <ChartContainer
                  config={chartConfig}
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px]"
                >
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
                <p>Información extraída del RAFAM</p>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
                <CardDescription>División en categorías</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomLegend config={chartConfig} />
              </CardContent>
            </Card>
          </div>
        </>
          )
        : (
        <>
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Gráfico 2021</CardTitle>
                <CardDescription>
                  Resumen de los ingresos del 2021
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full h-auto max-w-[350px] md:max-w-[600px] lg:max-w-none mx-auto">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square w-full h-[300px] md:h-[350px] lg:h-[400px]"
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
                <p className="m-5 pb-5"> Información extraída del RAFAM</p>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
                <CardDescription>División en categorías</CardDescription>
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
