import { AcordeonDeLicitaciones } from "./components/Licitaciones"
import { licitaciones } from "./data/InfoLicitaciones"
import { BannerText } from "@/components/bannertext"


const Licitacionespublicas = () => {
  return (
    <>
      <BannerText titulo="Licitaciones Públicas" />
      <div className="container mx-auto pb-10 pt-10">
        <AcordeonDeLicitaciones data={licitaciones} />
      </div>
    </>
  )
}

export default Licitacionespublicas
