import { AcordeonDeLicitaciones } from "./components/Licitaciones"
import { licitaciones } from "./data/InfoLicitaciones"

const Licitacionespublicas = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <AcordeonDeLicitaciones data={licitaciones}/>
      </div>
    </>
  )
}

export default Licitacionespublicas

