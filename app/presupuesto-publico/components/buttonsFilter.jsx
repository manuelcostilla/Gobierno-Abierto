'use client'
import { ArchivosDelPresupuestoScrollPdf } from "./archivoPresupuestoScrollPdf"
import { Calendar, ChartBar } from "lucide-react"

export function ArchivosDelPresupuestoButtons ({ archivosData }) {
  if (!archivosData || archivosData.length === 0) return null

  return (
    <div className="space-y-12">
      {/* Header Interactivo */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-xl border border-neutral-100 p-8 rounded-[2rem] shadow-xl">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-green-50 text-green-600 rounded-2xl shadow-inner">
            <ChartBar size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-blue-title tracking-tight uppercase">Documentación por Ejercicio</h2>
            <p className="text-neutral-500 text-sm font-medium">Archivos correspondientes al año fiscal seleccionado</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-neutral-50 px-6 py-3 rounded-full border border-neutral-100 shadow-inner">
          <Calendar size={18} className="text-blue-GobAb" />
          <span className="text-lg font-black text-blue-GobAb tracking-tighter">AÑO {archivosData[0].año}</span>
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
