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
    nombre: "Secretaría de Cultura, Educacion y Turismo",
    valor$: 551674046.42,
    fill: "var(--color-secculturaeducacionturismo)",
  },
  {
    nombre: "Secretaría de Obras y Servicios Publicos",
    valor$: 1907994791.88,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaría de Modernizacion y Gestion Publica",
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
  secculturaeducacionturismo: {
    label: "Secretaría de Cultura, Educacion y Turismo -  3",
    color: "#3EAF53",
  },
  secobrasyservpublicos: {
    label: "Secretaría de Obras y Servicios Publicos - 4",
    color: "#7FDE22",
  },
  secmodernizacionygestionpublica: {
    label: "Secretaría de Modernizacion y Gestion Publica - 5",
    color: "#A4D180",
  },
  secdesarrollohumano: {
    label: "Secretaría de Desarrollo Humano - 6",
    color: "#EE1E52",
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

export function GastosPorArea2023 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gráfico gastos por area 2023</CardTitle>
              <CardDescription>
                Gastos organizados por area año 2023
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
              <CardTitle>Gráfico gastos por area del ejecutivo 2023</CardTitle>
              <CardDescription>
                Gastos organizados por area del ejecutivo año 2023
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
