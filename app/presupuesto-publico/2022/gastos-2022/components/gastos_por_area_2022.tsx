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
    nombre: "Conduccion superior",
    valor$: 211591005.88,
    fill: "var(--color-conduccionsuperior)",
  },
  {
    nombre: "Secretaria de Gobierno",
    valor$: 692064665.76,
    fill: "var(--color-secgobierno)",
  },
  {
    nombre: "Secretaria de Hacienda",
    valor$: 105960797.17,
    fill: "var(--color-sechacienda)",
  },
  {
    nombre: "Secretaria de Cultura, Educacion y Turismo",
    valor$: 241762073.96,
    fill: "var(--color-secculturaeducacionturismo)",
  },
  {
    nombre: "Secretaria de Obras y Servicios Publicos",
    valor$: 1037788513.01,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaria de Modernizacion y Gestion Publica",
    valor$: 105612795.36,
    fill: "var(--color-secmodernizacionygestionpublica)",
  },
  {
    nombre: "Secretaria de Desarrollo Humano",
    valor$: 201037056.86,
    fill: "var(--color-secdesarrollohumano)",
  },
]

const chartConfig = {
  conduccionsuperior: {
    label: "Conduccion superior - 0",
    color: "#00517B",
  },
  secgobierno: {
    label: "Secretaria de Gobierno - 1",
    color: "#007CB6",
  },
  sechacienda: {
    label: "Secretaria de Hacienda - 2",
    color: "#5294DE",
  },
  secculturaeducacionturismo: {
    label: "Secretaria de Cultura, Educacion y Turismo -  3",
    color: "#3EAF53",
  },
  secobrasyservpublicos: {
    label: "Secretaria de Obras y Servicios Publicos - 4",
    color: "#7FDE22",
  },
  secmodernizacionygestionpublica: {
    label: "Secretaria de Modernizacion y Gestion Publica - 5",
    color: "#A4D180",
  },
  secdesarrollohumano: {
    label: "Secretaria de Desarrollo Humano - 6",
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

export function GastosPorArea2022 ({ chart, setChart }) {
  return (
    <div>
      {chart
        ? (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Grafico gastos por area 2022</CardTitle>
              <CardDescription>
                Gastos organizados por area año 2022
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
              <CardTitle>Grafico gastos por area 2022</CardTitle>
              <CardDescription>
                Gastos organizados por area año 2022
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
