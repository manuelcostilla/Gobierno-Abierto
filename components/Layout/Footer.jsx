/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Image from 'next/image'
import escudo_baradero from '../../public/imagenes/Escudo_Municipio.png'
import logo_baradero from '../../public/imagenes/logo_blanco.png'
import Link from "next/link"
import face from "../../public/iconos redes/fb.png"
import twitter from "../../public/iconos redes/tw.png"
import instagram from "../../public/iconos redes/ig.png"
import youtube from "../../public/iconos redes/yt.png"
import BaraderoGob from "../../public/iconos redes/baradero.gob.png"


export const Footer = () => {
  return (
    <>
    <footer className="flex flex-col lg:flex-row lg:justify-between lg:p-[15px] bg-black-footer w-full overflow-x-hidden">
        <div className=''>
          <div className="flex justify-center p-[10px] m-auto lg:mt-0 lg:ml-8">
            <Image alt="" src={logo_baradero} height={79} width={247}/>
          </div>
          <div className='flex justify-center items-center'>
            <ul className=" font-sans sm:justify-start">
              <li className="inline-block list-none sm:w-auto">
                <Link href="https://www.facebook.com/MunicipalidaddeBaradero/" target='_blanck'>
                  <Image src={face} alt="facebook" width={12} height={15} className="text-white hover:text-slate-200 mr-1"/>
                </Link>
              </li>
              <li className="inline-block list-none sm:w-auto">
                <Link href="https://www.instagram.com/municipiodebaradero/" target='_blanck'>
                  <Image src={instagram} width={21} height={20} className="text-white hover:text-slate-200 mr-1"/>
                </Link>
              </li>
              <li className="inline-block list-none sm:w-auto">
                <Link href="https://twitter.com/municipalidadba" target='_blanck'>
                  <Image src={twitter} width={23} height={20} className="text-white hover:text-slate-200 mr-1"/>
                </Link>
              </li>
              <li className="inline-block list-none sm:w-auto">
                <Link href="https://www.youtube.com/@municipalidadbaradero9936" target='_blanck'>
                <Image src={youtube} width={26} height={20} className="text-white hover:text-slate-200 mr-2"/>
                </Link>
              </li>
            </ul>
            <li className="inline-block list-none sm:w-auto ">
                <Link href="https://baradero.gob.ar/" target='_blanck'>
                <Image src={BaraderoGob} width={40} height={50} className="text-white hover:text-slate-200 mb-1 mr-2"/>
                </Link>
            </li>
          </div>
        </div>
        <div className='text-center mt-4 lg:mt-0 lg:text-left lg:mr-6 text-white'>
            <div className="lg:mt-[10px] text-white mt-4 text-center">
              <p className='m-2'>Municipalidad Santiago del Baradero</p>
              <p className='m-2'>Av. San Martin 905</p>
              <p className='m-2'>Baradero(B2942)</p>
              <p>Buenos Aires, Argentina</p>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 lg:mr-8">
          <Image alt="" src={escudo_baradero} height={225} width={130}/>
        </div>
      </footer>
      </>
  )
}
