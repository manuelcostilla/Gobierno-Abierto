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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  {
    nombre: "Total Gastos por area del ejecutivo",
    valor$: 922264822.63,
    fill: "var(--color-totalgastosporarea)",
  },
  {
    nombre: "HCD",
    valor$: 22139843.08,
    fill: "var(--color-hcd)",
  },
  {
    nombre: "Servicio de la deuda",
    valor$: 48873719.29,
    fill: "var(--color-serviciodeladeuda)",
  },
]

const chartConfig = {
  totalgastosporarea: {
    label: "Total Gastos por area del ejecutivo - 0",
    color: "#00517B",
  },
  hcd: {
    label: "HCD - 1",
    color: "#007CB6",
  },
  serviciodeladeuda: {
    label: "Servicio de la deuda - 2",
    color: "#5294DE",
  },
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

export function Graficogastostotales2020 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Grafico total de gastos 2020</CardTitle>
              <CardDescription>
                Grafico total de gastos en pesos 2020
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ChartContainer config={chartConfig} className="w-[550px] ">
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
              <p> información extraída del RAFAM</p>
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
          )
        : (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gráfico total de gastos 2020</CardTitle>
              <CardDescription>
              Gráfico total de gastos en pesos 2020
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
              <p> información extraída del RAFAM</p>
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
          )}
    </div>
  )
}
