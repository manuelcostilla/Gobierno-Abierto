"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart, } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
  {
    nombre: "Conduccion superior",
    valor$: 379653818.41,
    fill: "var(--color-conduccionsuperior)",
  },
  {
    nombre: "Secretaria de Gobierno",
    valor$: 1458223658.62,
    fill: "var(--color-secgobierno)",
  },
  {
    nombre: "Secretaria de Hacienda",
    valor$: 208311142.31,
    fill: "var(--color-sechacienda)",
  },
  {
    nombre: "Secretaria de Cultura, Educacion y Turismo",
    valor$: 551674046.42,
    fill: "var(--color-secculturaeducacionturismo)",
  },
  {
    nombre: "Secretaria de Obras y Servicios Publicos",
    valor$: 1907994791.88,
    fill: "var(--color-secobrasyservpublicos)",
  },
  {
    nombre: "Secretaria de Modernizacion y Gestion Publica",
    valor$: 168240719.4,
    fill: "var(--color-secmodernizacionygestionpublica)",
  },
  {
    nombre: "Secretaria de Desarrollo Humano",
    valor$: 350582089.96,
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


export function GastosPorArea2021 ({ chart, setChart }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-[800px] pt-20">
      {chart
        ? (
        <Card>
           <CardHeader>
              <CardTitle>Grafico Subtotal de los gastos por area en pesos</CardTitle>
            </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] h-[250px] w-[600px]"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  axisLine={false}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                    />
                  }
                />
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
              <CardTitle>Grafico Subtotal de los gastos por area en pesos</CardTitle>
            </CardHeader>
          <CardContent className="flex-1 pb-0 X">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[350px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Pie
                  data={chartData}
                  dataKey="valor$"
                  nameKey="nombre"
                  innerRadius={60}
                  strokeWidth={5}
                  fill="var(--color-desktop)"
                ></Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <CustomLegend config={chartConfig} />
          </CardFooter>
        </Card>
          )}
    </div>
  )
}
