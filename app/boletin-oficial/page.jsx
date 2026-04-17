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
            text="Bienvenidos a la sección del Boletín Oficial del Municipio de Baradero. Aquí encontrarás información relevante y actualizada sobre las actividades, normativas y decisiones del gobierno municipal."
          />
          <GeneralText
            title="¿Qué es Boletín Oficial?"
            text="El Boletín Oficial es un medio de comunicación institucional que tiene como objetivo informar a la ciudadanía sobre los actos administrativos, resoluciones y avisos de interés público. A través de este boletín, garantizamos la transparencia y el acceso a la información pública."
          />
          <GeneralText
            title="Contenido del Boletín"
            text="En nuestro Boletín Oficial podrás encontrar las Ordenanzas Municipales aprobadas por el Honorable Concejo Deliberante (HCD), además de las resoluciones y decretos emitidos por el mismo órgano. Por otro lado,  se incluyen los Decretos y Resoluciones del Departamento Ejecutivo, que son actos administrativos emitidos por el Intendente y su equipo relacionados con la gestión y administración del municipio, las cuales son determinaciones y decisiones operativas para la implementación de políticas públicas."
          />
        </div>
        <BoletinOficialButtons />
      </div>
    </div>
  )
}
export default PdfDownloader
