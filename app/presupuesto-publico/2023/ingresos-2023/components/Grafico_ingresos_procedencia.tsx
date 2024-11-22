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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const chartData = [
  {
    nombre: "De origen municipal",
    valor$: 236443909.94,
    fill: "var(--color-deorigenmunicipal)",
  },
  {
    nombre: "De origen provincial",
    valor$: 817161485.47,
    fill: "var(--color-deorigenprovincial)",
  },
  {
    nombre: "De origen nacional",
    valor$: 628240864.06,
    fill: "var(--color-deorigennacional)",
  },
  {
    nombre: "Fuentes externas",
    valor$: 0.0,
    fill: "var(--color-fuentesexternas)",
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
    label: "De origen nacional",
    color: "#5294DE",
  },
  fuentesexternas: {
    label: "Fuentes externas",
    color: "#3EAF53",
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

export function GraficosIngresosProcedencia2023 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <>
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Gráfico 2020</CardTitle>
                <CardDescription>
                  Resumen de los ingresos del 2020
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
                <CardTitle>Gráfico 2020</CardTitle>
                <CardDescription>
                  Resumen de los ingresos del 2020
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full h-auto max-w-[350px] md:max-w-[600px] lg:max-w-none mx-auto">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square w-full h-[300px] md:h-[350px] lg:h-[400px] "
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
