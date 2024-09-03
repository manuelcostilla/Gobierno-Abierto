import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { dataAtajos } from './dataAtajos'

import mapa_estado_municipal from '../public/atajos/organigrama.svg'
import boletin_oficial from '../public/atajos/BoletinOficial.svg'
import compra_licitaciones from '../public/atajos/ComprasLicitac.svg'
import gestion_compromisos from '../public/atajos/GestionComprom.svg'
import presupuesto_publico from '../public/atajos/PresupPublico.svg'

const images = {
  mapa_estado_municipal,
  boletin_oficial,
  compra_licitaciones,
  gestion_compromisos,
  presupuesto_publico,
}

export const Atajos = () => {
  return (
    <>
      <div className="hidden lg:w-[100px] lg:h-[10px] lg:bg-green-nav lg:absolute lg:top-[585px] lg:left-[100px]">{/* Barra verde */}</div>
      <div className="flex flex-col lg:flex-row items-center mb-56 mt-56 justify-around font-sans font-semibold flex-wrap">
        {dataAtajos.map((atajo) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={atajo.link} className='m-6 '>
            <div key={atajo.id} className='flex lg:w-[500px] lg:h-[200px] p-6 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-gray-400 shadow-lg'>
                <div className="p-4 m-6 flex">
                    <Image className="lg:w-[90px] lg:h-[90px]" src={images[atajo.img]} alt={atajo.alt} />
                </div>
                <div className=' w-full flex flex-col justify-center content-center items-center'>
                    <p className='font-bold text-balance text-center mb-3'>{atajo.title}</p>
                    <p className='text-xs text-justify'>{atajo.descripcion}</p>
                </div>
            </div>
        </Link>
        ))}
      </div>
    </>
  )
}

export default Atajos
