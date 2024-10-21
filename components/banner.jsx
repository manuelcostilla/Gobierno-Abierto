import React from 'react'
import Image from 'next/image'
import bannerImg from '../public/banner/IMGrecortada.jpg'
import imagenGraph from '../public/banner/RecGraph_1.png'

export default function banner () {
  return (
    <div className='w-full h-auto relative'>
  {/* Banner Image */}
  <div className='w-full'>
    <Image src={bannerImg} alt="" className='w-full' />
  </div>

  {/* Container for overlay content */}
  <div className='absolute inset-0 flex flex-col lg:flex-row justify-around'>
    {/* Text Content */}
    <div className='w-full lg:w-1/2 bg-white p-4 flex flex-col justify-center items-center'>
      <div className='w-full lg:w-[500px]'>
        <h1 className='text-[40px] sm:text-[50px] lg:text-[70px] text-blue-GobAb font-bold font-sans text-center lg:text-left'>
          GOBIERNO ABIERTO
        </h1>
        <div className="w-[50px] sm:w-[75px] lg:w-[100px] h-[4px] sm:h-[5px] lg:h-[6px] bg-green-nav rounded-lg mt-4 lg:mt-8"></div>
        <h2 className='font-sans font-bold text-2xl sm:text-3xl lg:text-4xl mt-4 lg:mt-6 text-fuente-gris text-center lg:text-left'>
          Municipio de Baradero
        </h2>
        <p className='font-sans font-medium mt-4 lg:mt-8 text-fuente-gris text-balance w-[80ch] lg:text-left text-sm sm:text-base'>
          Sitio web que proporciona fácil y transparente acceso a información pública, como presupuestos, decisiones y datos relevantes. Fomenta la participación ciudadana y la rendición de cuentas, permitiendo a los ciudadanos seguir y contribuir activamente en la gestión y toma de decisiones del municipio.
        </p>
      </div>
    </div>
    {/* Graph Image */}
    <div className='hidden lg:block lg:w-1/2 mt-4 lg:mt-0'>
      <Image src={imagenGraph} alt="" className='w-full h-full object-cover bg-gradient-to-r from-white' />
    </div>
  </div>
</div>
  )
}

