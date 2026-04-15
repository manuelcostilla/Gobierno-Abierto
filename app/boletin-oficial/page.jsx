import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"

const PdfDownloader = () => {
  return (
    <div className="bg-neutral-50/50 min-h-screen pb-20">
      <BannerText titulo="Boletín Oficial" />
      <div className="container mx-auto py-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <GeneralText
            title="Bienvenidos"
            text="Accede a la información relevante y actualizada sobre las actividades, normativas y decisiones del gobierno municipal de Baradero."
          />
          <GeneralText
            title="¿Qué es el Boletín?"
            text="Es el medio de comunicación institucional donde se publican actos administrativos y resoluciones para garantizar la transparencia."
          />
          <GeneralText
            title="Contenido"
            text="Podrás encontrar Ordenanzas del HCD, resoluciones y decretos del Departamento Ejecutivo que rigen la gestión del municipio."
          />
        </div>

        <BoletinOficialButtons />
      </div>
    </div>
  )
}
export default PdfDownloader
