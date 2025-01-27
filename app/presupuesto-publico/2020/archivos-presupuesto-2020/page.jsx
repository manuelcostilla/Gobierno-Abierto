import { ArchivosDelPresupuestoButtons } from "../../components/buttonsFilter"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"
import { archivosDelPresupuestoPdf } from "../../data/dataArchivosDelPresupuesto"

function archivosDelPresupuesto () {
  return (
    <>
      <BannerText titulo="Archivos del Presupuesto PÚBLICO 2020" />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8 pb-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text="Bienvenido al archivo de Presupuestos Públicos del Municipio. Este espacio está diseñado para fomentar la transparencia y facilitar el acceso a la información financiera de nuestra comunidad. Aquí podrás consultar, analizar y descargar los documentos que detallan cómo se asignan y utilizan los recursos públicos en nuestro municipio."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es el archivo del presupuesto?"
              text="El Archivo del Presupuesto es un repositorio digital donde se organizan y almacenan todos los presupuestos públicos aprobados por el municipio. Estos documentos reflejan la planificación financiera anual, incluyendo ingresos previstos, gastos asignados a diferentes áreas y proyectos, y cualquier modificación presupuestaria realizada durante el año. Este archivo es una herramienta clave para garantizar la rendición de cuentas y la participación ciudadana."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <GeneralText
              title="Contenido archivo del presupuesto"
              text="El contenido del Archivo del Presupuesto incluye los documentos completos de cada año fiscal, que presentan un desglose detallado de los ingresos y gastos planificados. También se encuentran los registros de modificaciones presupuestarias, que documentan los ajustes realizados al presupuesto aprobado, explicando las razones detrás de estos cambios y su impacto. Además, se incluyen informes periódicos sobre la ejecución del presupuesto, que detallan el avance en la implementación, los proyectos finalizados y los gastos realizados. Finalmente, el archivo ofrece la posibilidad de consultar y descargar todos los documentos en un formato accesible como PDF lo que facilita su análisis y revisión."
            />
          </div>
        </div>
        <ArchivosDelPresupuestoButtons archivosData={archivosDelPresupuestoPdf[0].archivosDelPresupuestoPorAño[0].archivos2020}/>
      </div>
    </>
  )
}

export default archivosDelPresupuesto
