"use client"
import { ArchivosDelPresupuestoScrollPdf } from "./archivoPresupuestoScrollPdf"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArchivosDelPresupuestoButtons ({ archivosData }) {
  return (
    <>
      <div>
        <Card className="flex flex-wrap justify-center text-xs font-sans overflow-x-hidden w-full bg-slate-50">
          <CardHeader className="w-full flex bg-slate-50">
            <CardTitle className="flex justify-center flex-wrap">
              <p> {archivosData[0].año}</p>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardContent className="bg-slate-50">
            <ArchivosDelPresupuestoScrollPdf
              archivosDelPresupuestoPdf={archivosData}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
