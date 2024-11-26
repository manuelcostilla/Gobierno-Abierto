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
    nombre: "Conducción Superior",
    valor$: 379653818.41,
    fill: "var(--color-conduccionsuperior)",
  },
  {
    nombre: "Secretaría de Gobierno",
    valor$: 1458223658.62,
    fill: "var(--color-secgobierno)",
  },
  {
    nombre: "Secretaría de Hacienda",
    valor$: 208311142.31,
    fill: "var(--color-sechacienda)",
  },
  {
    nombre: "Secretaría de Cultura, Educación y Turismo",
    valor$: 551674046.42,
    fill: "var(--color-secculturaeducacionyturismo)",
  },
  {
    nombre: "Secretaría de Obras y Servicios Públicos",
    valor$: 1907994791.88,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaría de Modernización y Gestión Pública",
    valor$: 168240719.4,
    fill: "var(--color-secmodernizacionygestionpublica)",
  },
  {
    nombre: "Secretaría de Desarrollo Humano",
    valor$: 350582089.96,
    fill: "var(--color-secdesarrollohumano)",
  },
]

const chartConfig = {
  conduccionsuperior: {
    label: "Conducción Superior - 0",
    color: "#00517B",
  },
  secgobierno: {
    label: "Secretaría de Gobierno - 1",
    color: "#007CB6",
  },
  sechacienda: {
    label: "Secretaría de Hacienda - 2",
    color: "#5294DE",
  },
  secculturaeducacionyturismo: {
    label: "Secretaría de Cultura, Educación y Turismo - 3",
    color: "#3EAF53",
  },
  secobrasyservpublicos: {
    label: "Secretaría de Obras y Servicios Públicos - 4",
    color: "#7FDE22",
  },
  secmodernizacionygestionpublica: {
    label: "Secretaría de Modernización y Gestión Pública - 5",
    color: "#A4D180",
  },
  secdesarrollohumano: {
    label: "Secretaría de Desarrollo Humano - 6",
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

export function GastosPorArea2023 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gráfico de gastos por área del ejecutivo 2023</CardTitle>
              <CardDescription>
              Gastos organizados por área del ejecutivo año 2023
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
              <p> Información extraída del RAFAM</p>
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
          )
        : (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>
                Gráfico de gastos por área del ejecutivo 2023
              </CardTitle>
              <CardDescription>
                Gastos organizados por área del ejecutivo año 2023
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
          )}
    </div>
  )
}
