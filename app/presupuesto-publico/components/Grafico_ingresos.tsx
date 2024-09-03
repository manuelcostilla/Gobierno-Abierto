"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  {
    month: "Total Coparticipacion de impuestos",
    coparticipacionimpuestos: 2049952360.0,
  },
  { month: "Total Tasas", tasas: 1221567000.0 },
  { month: "Total Derechos", derechos: 145010000.0 },
  { month: "Total Alquileres", alquileres: 3840000.0 },
  { month: "Total Multas", multas: 62550000.0 },
  { month: "Total Ingresos No Tributarios", notributarios: 1581445400.0 },
  { month: "Total Intereses por prestamos", interesprestamos: 2000000.0 },
  { month: "Total De administracion nacional", admnacional: 494741419.7 },
  {
    month: "Total De gobiernos e institucional provinciales y municipales",
    totalgipm: 762787123.47,
  },
  {
    month: "Total Transferencias corrientes",
    transferenciacorriente: 1257528543.17,
  },
  { month: "Total Venta de activos", ventaactivos: 240000000.0 },
  { month: "Total Contribucion por mejoras", contribucionmejoras: 20351000.0 },
  {
    month: "Total Recursos propios de capital",
    recursospropiosdecapital: 260351000.0,
  },
  { month: "Total Del sector privado", totalsectorprivado: 21490000.0 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function GraficosIngresos () {
  return (
    <div className="flex justify-center items-center">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-[850px] ">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="coparticipacionimpuestos"
            fill="var(--color-mobile)"
            radius={4}
          />
          <Bar dataKey="tasas" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="derechos" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="alquileres" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="multas" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="notributarios" fill="var(--color-desktop)" radius={4} />
          <Bar
            dataKey="interesprestamos"
            fill="var(--color-desktop)"
            radius={4}
          />
          <Bar dataKey="admnacional" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="totalgipm" fill="var(--color-desktop)" radius={4} />
          <Bar
            dataKey="transferenciacorriente"
            fill="var(--color-desktop)"
            radius={4}
          />
          <Bar dataKey="ventaactivos" fill="var(--color-desktop)" radius={4} />
          <Bar
            dataKey="contribucionmejoras"
            fill="var(--color-desktop)"
            radius={4}
          />
          <Bar
            dataKey="recursospropiosdecapital"
            fill="var(--color-desktop)"
            radius={4}
          />
          <Bar
            dataKey="totalsectorprivado"
            fill="var(--color-desktop)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
