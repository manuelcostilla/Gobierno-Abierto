import { AcordeonDeLicitaciones } from "./components/Licitaciones"
import { licitaciones } from "./data/InfoLicitaciones"
import { BannerText } from "../../../components/bannertext"
const Licitacionespublicas = () => {
  return (
    <>
      <BannerText titulo='Licitaciones Públicas' />
      <div className="overflow-x-hidden">
        <AcordeonDeLicitaciones data={licitaciones} />
      </div>
    </>
  )
}

export default Licitacionespublicas
