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

const predefinedColors = [
  "#00517B",
  "#007CB6",
  "#5294DE",
  "#3EAF53",
  "#7FDE22",
  "#A4D180",
  "#EE1E52",
  "#FF6347",
  "#FFD700",
  "#32CD32",
]

export function generateChartData (data) {
  return data.map((item, index) => ({
    nombre: item.nombre,
    valor$: item.valor,
    fill: predefinedColors[index % predefinedColors.length],
  }))
}

export function generateChartConfig (data) {
  return data.reduce((config, item, index) => {
    const key = item.nombre.replace(/\s+/g, "").toLowerCase()
    config[key] = {
      label: item.nombre,
      color: predefinedColors[index % predefinedColors.length],
    }
    return config
  }, {})
}

export function Subgraficos ({
  ChartData,
  chart,
  setChart,
  titulo,
  description,
}) {
  const chartData = generateChartData(ChartData)
  const chartConfig = generateChartConfig(ChartData)

  return (
    <div>
      {chart
        ? (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {titulo}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] mx-auto"
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
        </div>
          )
        : (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{titulo}</CardTitle>
              <CardDescription>{description}</CardDescription>
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
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="m-5 pb-5"> Información extraída del RAFAM</p>
            </CardContent>
          </Card>
        </div>
          )}
    </div>
  )
}
