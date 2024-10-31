import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "../../components/bannertext"

const PdfDownloader = () => {
  return (
    <>
      <div className="overflow-x-hidden mx-auto ">
        <BannerText titulo="Boletín Oficial" />
        <div className="grid grid-cols-5 grid-rows-1 pt-10 pb-10">
          <div className="col-start-3">
            <p className="text-xl font-bold">¿Qué es el Boletín Oficial?</p>
            <p className=" text-balance">
              El Boletín Oficial es un medio de comunicación institucional que
              tiene como objetivo informar a la ciudadanía sobre los actos
              administrativos, resoluciones y avisos de interés público. A
              través de este boletín, garantizamos la transparencia y el acceso
              a la información pública.
            </p>
          </div>
          <div className="col-start-4">
            <p className="text-xl font-bold">Contenido del Boletín</p>
            <p>En nuestro Boletín Oficial podrás encontrar:</p>
            <ul>
              <li className="text-balance">
                Ordenanzas Municipales: Legislación local aprobada que regula
                diversas áreas de la vida municipal.
              </li>

              <li className="text-balance">
                Decretos del Honorable Concejo Deliberante (HCD): Resoluciones y
                decretos emitidos por el HCD, que abordan asuntos de interés
                público y normativas locales.
              </li>
              <li className="text-balance">
                Resoluciones del HCD: Decisiones tomadas por el HCD en relación
                con diversas materias que afectan a la comunidad.
              </li>
              <li className="text-balance">
                Decretos del Departamento Ejecutivo: Actos administrativos
                emitidos por el Alcalde y su equipo, relacionados con la gestión
                y administración del municipio.
              </li>
              <li className="text-balance">
                Resoluciones del Departamento Ejecutivo: Determinaciones y
                decisiones operativas del Departamento Ejecutivo para la
                implementación de políticas públicas.
              </li>
            </ul>
          </div>
        </div>
        <BoletinOficialButtons />
      </div>
    </>
  )
}
export default PdfDownloader
