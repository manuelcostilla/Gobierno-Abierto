"use client"
import { useState } from "react"
import { pdfBox } from "../data/pdfBoletinOficial"
import { BoletinOficial } from "./BoletinOficial"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function BoletinOficialButtons () {
  const [selectedYear, setSelectedYear] = useState("2023")

  const cambiarBox = (año) => {
    setSelectedYear(año)
  }

  const añosUnicos = [...new Set(pdfBox.map((box) => box.año))]

  return (
    <>
      <div>
        <Card className="flex justify-center text-xs font-sans ">
          {añosUnicos.map((año) => (
            <CardHeader key={año} className="w-full bg-slate-50">
              <CardTitle>
                <Button
                  onClick={() => cambiarBox(año)}
                  className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100  ${
                    selectedYear === año
                      ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                      : ""
                  }`}
                >
                  <p>Año {año}</p>
                </Button>
              </CardTitle>
            </CardHeader>
          ))}
        </Card>
        <Card>
          <CardContent className="bg-slate-50">
            <BoletinOficial
              data={pdfBox.filter((box) => box.año === selectedYear).reverse()}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BoletinOficialButtons
