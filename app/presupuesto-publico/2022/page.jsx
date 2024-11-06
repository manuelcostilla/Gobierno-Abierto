"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BannerText } from "../../../components/bannertext"

export default function Presupuestopublico2022 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2022" />
      <div className="flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Gastos 2022</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2022/gastos-2022">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ingresos 2022</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2022/ingresos-2022">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

