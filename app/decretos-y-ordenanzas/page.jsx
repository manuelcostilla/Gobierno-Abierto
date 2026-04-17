import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"

const PdfDownloader = () => {
  return (
    <div className="bg-neutral-50/50 min-h-screen pb-20">
      <BannerText titulo="Decretos y Ordenanzas" />
      <div className="container mx-auto py-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <GeneralText
            title="Bienvenidos"
            text="Te damos la bienvenida a la sección oficial de Decretos y Ordenanzas del Municipio de Baradero, un espacio fundamental para la transparencia democrática donde centralizamos el marco legal que rige nuestra ciudad y garantizamos que cada vecino tenga acceso directo a las normativas que definen el presente y el futuro de nuestra comunidad."
          />

          <GeneralText
            title="¿Qué son los Decretos y Ordenanzas?"
            text="Los Decretos y Ordenanzas constituyen el conjunto de normas y actos administrativos que regulan la vida en el municipio, funcionando como el instrumento legal para formalizar las decisiones gubernamentales. Mientras las ordenanzas establecen leyes locales permanentes debatidas en el cuerpo legislativo, los decretos permiten al poder ejecutivo tomar determinaciones operativas y de gestión para el funcionamiento diario de la ciudad."
          />

          <GeneralText
            title="Contenido de la Sección"
            text="En este apartado podrás consultar las Ordenanzas aprobadas por el Honorable Concejo Deliberante que regulan temas estructurales como el presupuesto y el planeamiento urbano, junto con las resoluciones y decretos del Departamento Ejecutivo que incluyen designaciones, licitaciones y disposiciones administrativas firmadas por el Intendente para la implementación de las políticas públicas locales."
          />
        </div>
        <BoletinOficialButtons />
      </div>
    </div>
  )
}
export default PdfDownloader
