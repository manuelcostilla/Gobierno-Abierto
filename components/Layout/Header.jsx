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
        <div className="flex w-full justify-center item-center content-center sm:flex sm:justify-end sm:items-center sm:w-full h-[50px] bg-blue-header">
          <ul className=" font-sans sm:justify-start">
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/">
                <Image src={face} alt="facebook" width={12} height={15} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.instagram.com/municipiodebaradero/">
                <Image src={instagram} width={21} height={20} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://twitter.com/municipalidadba">
                <Image src={twitter} width={23} height={20} className="text-white hover:text-slate-200 mr-1"/>
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.youtube.com/@municipalidadbaradero9936">
              <Image src={youtube} width={26} height={20} className="text-white hover:text-slate-200 mr-2"/>
              </Link>
            </li>
          </ul>
          <li className="inline-block list-none sm:w-auto ">
              <Link href="https://baradero.gob.ar/">
              <Image src={BaraderoGob} width={40} height={50} className="text-white hover:text-slate-200 mb-1 mr-2"/>
              </Link>
            </li>
        </div>
        <div className="flex justify-between sm:justify-between items-center sm:w-auto lg:border-b-4 lg:border-b-green-nav">
          <Link href="/" className="ml-14 ">
            <Image alt="" src={logo} height={400} width={400} />
          </Link>
          <div className="">
            <div className=" mt-20">
            <HeadernavBar />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
