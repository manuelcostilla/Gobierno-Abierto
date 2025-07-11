import { ArchivosDelPresupuestoButtons } from "../../components/buttonsFilter"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"
import { archivosDelPresupuestoPdf } from "../../data/dataArchivosDelPresupuesto"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function rendicionDeCuentas2024 () {
  return (
    <>
      <BannerText titulo="rendición de cuentas presupuesto PÚBLICO 2025" />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8 pb-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text="Bienvenidos al portal de Rendición de Cuentas del Presupuesto Público de la Municipalidad de Baradero en nuestra gestión, la transparencia y el compromiso con la comunidad son pilares fundamentales. Este espacio está dedicado a informarles de manera clara y accesible cómo se planifica, ejecuta y fiscaliza el uso de los recursos públicos que administramos, siempre con el objetivo de mejorar su calidad de vida y el desarrollo sostenible de nuestro municipio."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es rendición de cuentas?"
              text="La Rendición de Cuentas es el proceso mediante el cual la Municipalidad informa a la ciudadanía sobre el manejo de los fondos públicos. Esto incluye explicar cómo se planifica el presupuesto anual, cómo se ejecuta en proyectos concretos (como la reparación de calles, la compra de equipos médicos o la implementación de programas sociales) y cómo se fiscaliza cada gasto para garantizar transparencia. Es una herramienta clave para que ustedes, como vecinos, conozcan, pregunten y participen en las decisiones que impactan su día a día."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <GeneralText
              title="Contenido rendición de cuentas"
              text="En esta sección podrán acceder a documentos oficiales de la situación económica y financiera del municipio e informes trimestrales de ejecución gastos  por finalidad y función. Todos los datos están disponibles para descargar, revisar y compartir."
            />
          </div>
        </div>
        <Tabs defaultValue="Situacióneconómicofinanciera">
          <TabsList>
            <TabsTrigger value="Situacióneconómicofinanciera">
              <p>Situación económico financiera</p>
            </TabsTrigger>
            <TabsTrigger value="estadodeEjecucionporFinalidadyFuncion">
              <p>Estado de ejecución por finalidad y función</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Situacióneconómicofinanciera">
            <ArchivosDelPresupuestoButtons
              archivosData={
                archivosDelPresupuestoPdf[0].situacionEconomicoFinanciera[0]
                  .situacion2025
              }
            />
          </TabsContent>
          <TabsContent value="estadodeEjecucionporFinalidadyFuncion">
            <ArchivosDelPresupuestoButtons
              archivosData={
                archivosDelPresupuestoPdf[1]
                  .estadodeEjecucionporFinalidadyFuncion[0].ejecucion2025
              }
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default rendicionDeCuentas2024
