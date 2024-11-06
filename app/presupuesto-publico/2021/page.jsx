"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BannerText } from "../../../components/bannertext"

export default function Presupuestopublico2021 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2021" />
      <div className="flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Gastos 2021</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2021/gastos-2021">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ingresos 2021</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2021/ingresos-2021">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

