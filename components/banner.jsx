import React from 'react'
import Image from 'next/image'
import bannerImg from '../public/banner/IMGrecortada.jpg'
import imagenGraph from '../public/banner/RecGraph_1.png'

export default function banner () {
  return (
    <div className='w-full h-auto relative'>
        <div className='w-full'>
            <Image src={bannerImg} alt="" className='w-full'/>
        </div>
        <div className='absolute inset-0 flex justify-around '>
            <div className='w-1/2 bg-white p-4 flex flex-col justify-center items-center'>
                <div className='w-[500px]'>
                    <h1 className='text-[70px] text-blue-GobAb font-bold font-sans'>GOBIERNO ABIERTO</h1>
                    <div className="lg:w-[100px] lg:h-[6px] lg:bg-green-nav rounded-lg mt-8">{/* Barra verde */}</div>
                    <h2 className='font-sans font-bold text-4xl mt-6 text-fuente-gris'>Municipio de Baradero</h2>
                    <p className='font-sans font-medium mt-8 text-fuente-gris'>Sitio web que proporciona fácil y transparente a información pública, como presupuestos, decisiones y datos relevantes. Fomenta la participación ciudadana y la rendición de cuentas, permitiendo a los ciudadanos seguir y contribuir activamente en la gestion y toma de decisiones del municipio.</p>
                </div>
            </div>
            <div className='w-1/2'>
                <Image src={imagenGraph} alt="" className='w-full h-full object-cover bg-gradient-to-r from-white'/>
            </div>
        </div>
    </div>
  )
}

