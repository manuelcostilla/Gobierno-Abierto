import { ArchivosDelPresupuestoButtons } from "../../components/buttonsFilter"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"
import { archivosDelPresupuestoPdf } from "../../data/dataArchivosDelPresupuesto"

function rendicionDeCuentas2023 () {
  return (
    <>
      <BannerText titulo="rendición de cuentas presupuesto PÚBLICO 2023" />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8 pb-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text=""
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es rendición de cuentas?"
              text=""
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <GeneralText
              title="Contenido rendición de cuentas"
              text=""
            />
          </div>
        </div>
        <ArchivosDelPresupuestoButtons archivosData={archivosDelPresupuestoPdf[0].situacionEconomicoFinanciera[0].situacion2023}/>
      </div>
    </>
  )
}

export default rendicionDeCuentas2023
