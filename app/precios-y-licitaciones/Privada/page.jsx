import { AcordeonDeLicitaciones } from "./components/Licitaciones"
import { licitaciones } from "./data/InfoLicitaciones"
import { BannerText } from "../../../components/bannertext"
const Licitacionesprivadas = () => {
  return (
    <>
    <BannerText titulo='Licitaciones Privadas' />
    <div className='overflow-x-hidden'>
        <AcordeonDeLicitaciones data={licitaciones}/>
    </div>
    </>
  )
}

export default Licitacionesprivadas
