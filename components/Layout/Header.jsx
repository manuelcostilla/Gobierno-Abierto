/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo_gobiernoAbierto (1).svg"
import face from "../../public/iconos redes/fb.png"
import twitter from "../../public/iconos redes/tw.png"
import instagram from "../../public/iconos redes/ig.png"
import youtube from "../../public/iconos redes/yt.png"
import BaraderoGob from "../../public/iconos redes/baradero.gob.png"
import { HeadernavBar } from "./components/Header-navBar"


export const Header = () => {
  return (
    <>
      <header className="overflow-x-hidden">
        <div className="flex w-full justify-center item-center content-center sm:flex sm:justify-end sm:items-center sm:w-full  h-[50px] bg-blue-header">
          <ul className=" xs:mt-1 font-sans">
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/" target="_blank">
                <Image src={face} alt="facebook" width={12} height={15} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto" >
              <Link href="https://www.instagram.com/municipiodebaradero/"
              target="_blank">
                <Image src={instagram} width={21} height={20} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto" >
              <Link href="https://twitter.com/municipalidadba" target="_blank">
                <Image src={twitter} width={23} height={20} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.youtube.com/@municipalidadbaradero9936" target="_blank">
              <Image src={youtube} width={26} height={20} className="text-white hover:text-slate-200 mr-2"/>
              </Link>
            </li>
          </ul>
          <li className="inline-block list-none sm:w-auto ">
              <Link href="https://baradero.gob.ar/" target="_blank">
              <Image src={BaraderoGob} width={40} height={50} className="text-white hover:text-slate-200 mb-1 mr-2"/>
              </Link>
            </li>
        </div>
        <div className="flex flex-col sm:w-full md:flex-row md:border border-solid justify-between items-center content-center md:w-auto lg:border-b-4 lg:border-b-green-nav">
        <Link href="/" className=" md:mb-0">
            <Image alt="" src={logo} className="w-[300px] h-[300px] xs:w-[400px] xs:h-[200px] sm:w-full sm:h-[200px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[300px] mx-auto sm:mx-0"/>
          </Link>
          <div className="w-full sm:w-auto">
            <div className="mt-4 sm:mt-0">
              <HeadernavBar />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
