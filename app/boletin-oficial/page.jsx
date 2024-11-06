import BoletinOficialButtons from "./components/BoletinOficialButtons"
import { BannerText } from "../../components/bannertext"

const PdfDownloader = () => {
  return (
    <>
      <BannerText titulo="Boletín Oficial" />
      <div className=" container mx-auto">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-xl font-bold ">¿Qué es el Boletín Oficial?</p>
            <p className="text-balance ">
              El Boletín Oficial es un medio de comunicación institucional que
              tiene como objetivo informar a la ciudadanía sobre los actos
              administrativos, resoluciones y avisos de interés público. A
              través de este boletín, garantizamos la transparencia y el acceso
              a la información pública.
            </p>
          </div>
        </div>
      </div>
      <BoletinOficialButtons />
    </>
  )
}
export default PdfDownloader
