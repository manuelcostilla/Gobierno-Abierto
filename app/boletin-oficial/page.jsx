import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"

const PdfDownloader = () => {
  return (
    <>
      <BannerText titulo="Boletín Oficial" />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8 pb-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text="Bienvenidos a la sección del Boletín Oficial del Municipio de Baradero. Aquí encontrarás información relevante y actualizada sobre las actividades, normativas y decisiones del gobierno municipal."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es Boletín Oficial?"
              text="El Boletín Oficial es un medio de comunicación institucional que tiene como objetivo informar a la ciudadanía sobre los actos administrativos, resoluciones y avisos de interés público. A través de este boletín, garantizamos la transparencia y el acceso a la información pública."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <GeneralText
              title="Contenido del Boletín"
              text="En nuestro Boletín Oficial podrás encontrar las Ordenanzas Municipales, que son la legislación local aprobada que regula diversas áreas de la vida municipal, así como los Decretos del Honorable Concejo Deliberante (HCD), que son resoluciones y decretos emitidos por el HCD para abordar asuntos de interés público y normativas locales. También se publican las Resoluciones del HCD, que son las decisiones tomadas por el mismo en relación con diversas materias que afectan a la comunidad. Además, se incluyen los Decretos del Departamento Ejecutivo, que son actos administrativos emitidos por el Alcalde y su equipo relacionados con la gestión y administración del municipio, y las Resoluciones del Departamento Ejecutivo, que son determinaciones y decisiones operativas para la implementación de políticas públicas."
            />
          </div>
        </div>
        <BoletinOficialButtons />
      </div>
    </>
  )
}
export default PdfDownloader
