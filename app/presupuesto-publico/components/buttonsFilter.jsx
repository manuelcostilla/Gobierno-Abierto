'use client'
import { ArchivosDelPresupuestoScrollPdf } from "./archivoPresupuestoScrollPdf"
import { Calendar, ChartBar } from "lucide-react"

export function ArchivosDelPresupuestoButtons ({ archivosData }) {
  if (!archivosData || archivosData.length === 0) return null

  return (
    <div className="space-y-12">
      {/* Header Interactivo */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-xl border border-neutral-100 p-5 rounded-3xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-2xl shadow-inner">
              <ChartBar size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black text-blue-title tracking-tight uppercase">Documentación por Ejercicio</h2>
              <p className="text-neutral-500 text-xs font-medium">Archivos correspondientes al año fiscal seleccionado</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-50 px-5 py-2.5 rounded-full border border-neutral-100 shadow-inner">
            <Calendar size={16} className="text-blue-GobAb" />
            <span className="text-base font-black text-blue-GobAb tracking-tighter uppercase">AÑO {archivosData[0].año}</span>
          </div>
        </div>
      </div>

      <div>
        <ArchivosDelPresupuestoScrollPdf
          archivosDelPresupuestoPdf={archivosData}
        />
      </div>
    </div>
  )
}
