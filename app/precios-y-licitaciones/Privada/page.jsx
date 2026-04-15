import { AcordeonDeLicitaciones } from "./components/Licitaciones"
import { dataLicitacionesPrivadas } from "./data/InfoLicitaciones"
import { BannerText } from "../../../components/bannertext"
const Licitacionesprivadas = () => {
  return (
    <>
    <BannerText titulo='Licitaciones Privadas' />
    <div className='overflow-x-hidden pt-12 pb-20'>
        <AcordeonDeLicitaciones data={dataLicitacionesPrivadas}/>
    </div>
    </>
  )
}

export default Licitacionesprivadas
