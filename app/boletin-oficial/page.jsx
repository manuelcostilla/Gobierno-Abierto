import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "../../components/bannertext"

const contenidoItems = [
  {
    id: 1,
    text: "Ordenanzas Municipales",
  },
  {
    id: 2,
    text: "Decretos del Honorable Concejo Deliberante (HCD)",
  },
  {
    id: 3,
    text: "Resoluciones del HCD",
  },
  {
    id: 4,
    text: "Decretos del Departamento Ejecutivo",
  },
  {
    id: 5,
    text: "Resoluciones del Departamento Ejecutivo",
  },
]

const PdfDownloader = () => {
  return (
    <>
      <BannerText titulo="Boletín Oficial" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xl font-bold">¿Qué es el Boletín Oficial?</p>
            <p className="text-balance">
              El Boletín Oficial es un medio de comunicación institucional que
              tiene como objetivo informar a la ciudadanía sobre los actos
              administrativos, resoluciones y avisos de interés público. A
              través de este boletín, garantizamos la transparencia y el acceso
              a la información pública.
            </p>
          </div>
          <div>
            <p className="text-xl font-bold mb-4">Contenido del Boletín</p>
            <p className="mb-4">En nuestro Boletín Oficial podrás encontrar:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ol className="space-y-4 ">
                {contenidoItems.map((item) => (
                  <li key={item.id} className="text-balance">
                    {item.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <BoletinOficialButtons />
    </>
  )
}
export default PdfDownloader
