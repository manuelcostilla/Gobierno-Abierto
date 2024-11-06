"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BannerText } from "../../../components/bannertext"

export default function Presupuestopublico2023 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2023" />
      <div className="flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Gastos 2023</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2023/gastos-2023">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ingresos 2023</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2023/ingresos-2023">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

