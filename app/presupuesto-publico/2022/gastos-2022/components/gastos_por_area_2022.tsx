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
    valor$: 211591005.88,
    fill: "var(--color-conduccionsuperior)",
  },
  {
    nombre: "Secretaría de Gobierno",
    valor$: 692064665.76,
    fill: "var(--color-secgobierno)",
  },
  {
    nombre: "Secretaría de Hacienda",
    valor$: 105960797.17,
    fill: "var(--color-sechacienda)",
  },
  {
    nombre: "Secretaría de Cultura, Educacion y Turismo",
    valor$: 241762073.96,
    fill: "var(--color-secculturaeducacionturismo)",
  },
  {
    nombre: "Secretaría de Obras y Servicios Publicos",
    valor$: 1037788513.01,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaría de Modernizacion y Gestion Publica",
    valor$: 105612795.36,
    fill: "var(--color-secmodernizacionygestionpublica)",
  },
  {
    nombre: "Secretaría de Desarrollo Humano",
    valor$: 201037056.86,
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

export function GastosPorArea2022 ({
  chart,
  setChart,
}: {
  chart: boolean;
  setChart: (chart: boolean) => void;
}) {
  return (
    <div>
      {chart
        ? (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gráfico gastos por área 2022</CardTitle>
              <CardDescription>
                Gastos organizados por área año 2022
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full h-auto max-w-[350px] md:max-w-[600px] lg:max-w-none mx-auto">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[300px] md:h-[350px] lg:h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
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
          )
        : (
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gráfico gastos por área del ejecutivo 2022</CardTitle>
              <CardDescription>
                Gastos organizados por área del ejecutivo año 2022
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
