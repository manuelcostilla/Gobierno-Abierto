import {
  BsFillTelephoneFill
} from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai'
import { FaCity } from 'react-icons/fa'

function Direcciondecompras () {
  return (
        <>
        <div className="lg:w-[300px] mt-4 lg:absolute lg:left-[900px] lg:top-[550px]">
      <h1 className="text-center font-bold text-blue-header lg:flex lg:justify-center">
        Dirección de Compras
      </h1>
      <div className="border-2 border-gray-nav"></div>
      <div className="flex items-center gap-4">
        <div>
          <FaCity className="text-blue-header" />
        </div>
        <div>
          <p>San Martín 905 - 2942 - Baradero</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <AiOutlineClockCircle className="text-blue-header" />
        </div>
        <div>
          <p>Horario: de 8:00 a 12:00 hs</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <BsFillTelephoneFill className="text-blue-header" />
        </div>
        <div>
          <p>03329-482900 | Int. 219</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <AiOutlineMail className="text-blue-header" />
        </div>
        <div>
          <p>compras@baradero.gob.ar</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Direcciondecompras
