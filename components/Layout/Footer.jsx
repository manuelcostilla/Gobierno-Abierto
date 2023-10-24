import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import escudo_baradero from '../../public/imagenes/Escudo_Municipio.png'
import logo_baradero from '../../public/imagenes/logo_blanco.png'

export const Footer = () => {
  return (
    <>
    <footer className="lg:flex lg:justify-between lg:p-[15px] bg-black-footer grid grid-cols-1 w-full overflow-x-hidden">
        <div className="block lg:p-[10px] lg:ml-[110px] m-auto lg:m-0 lg:mt-0 mt-4">
          <Image alt="" src={logo_baradero} height={79} width={247}/>
          <p className="lg:mt-[10px] text-white mt-4">
            Municipalidad Santiago del Baradero <br/> <br/>
            Av. San Martin 905 <br/> <br/>
            Baradero(B2942) <br/> <br/>
            Buenos Aires, Argentina
          </p>
        </div>
        <div className="lg:relative lg:left-[0px] m-auto lg:m-0 my-2 lg:my-0">
          <Image alt="" src={escudo_baradero} height={225} width={150}/>
        </div>
        <div className="lg:flex lg:items-center lg:text-center m-auto lg:m-0 flex-col lg:flex-row">
          <div>
          <Link href="tel:911">
            <h5 className="text-[40px] px-[20px] text-emergencia">911</h5>
            <p className="text-white text-[18px] lg:relative lg:left-0 relative left-0">Emergencias</p>
            </Link>
          </div>
          <div>
          <Link href="tel:101">
            <h5 className="text-[40px] px-[20px] text-policia">101</h5>
            <p className="text-white text-[18px] lg:relative lg:left-0 relative left-[25px]">Policia</p>
            </Link>
          </div>
          <div>
          <Link href="tel:100">
            <h5 className="text-[40px] px-[20px] text-bombero">100</h5>
            <p className="text-white text-[18px] lg:relative lg:left-0 relative left-[14px]">Bomberos</p>
            </Link>
          </div>
          <div>
          <Link href="tel:107">
            <h5 className="text-[40px] px-[20px] text-hospital">107</h5>
            <p className="text-white text-[18px] lg:relative lg:left-0 relative left-[19px]">Hospital</p>
            </Link>
          </div>
          <div className='lg:relative lg:top-[14px] mb-4 lg:mb-0'>
            <Link href="tel:144">
            <h5 className="text-[40px] px-[20px] text-genero">144</h5>
            <p className="text-white text-[18px] lg:relative lg:left-0 relative left-[0px] text-center">Violencia de <br/> Genero</p>
            </Link>
          </div>
        </div>
      </footer>
      </>
  )
}
