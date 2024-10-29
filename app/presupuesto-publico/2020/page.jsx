
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BannerText } from "../../../components/bannertext"

export default function Presupuestopublico2020 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2020" />
      <div className="flex justify-center items-center container pb-20 pt-20 ">
        <Card className="mr-5">
          <CardHeader>
            <CardTitle>Gastos 2020</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2020/gastos-2020">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="ml-5">
          <CardHeader>
            <CardTitle>Ingresos 2020</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="./2020/ingresos-2020">Ver mas info</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

