/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import logo from "../../public/logo_gobiernoAbierto (1).svg"
import face from "../../public/iconos redes/fb.png"
import twitter from "../../public/iconos redes/tw.png"
import instagram from "../../public/iconos redes/ig.png"
import youtube from "../../public/iconos redes/yt.png"
import { HeadernavBar } from "./components/Header-navBar"

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        <div className="flex w-full justify-center items-center sm:flex sm:justify-end sm:items-center sm:w-full h-[40px] bg-blue-header/90 backdrop-blur-sm px-6">
          <ul className=" xs:mt-1 font-sans pr-5">
            <li className="inline-block list-none sm:w-auto">
              <Link
                href="https://www.facebook.com/MunicipalidaddeBaradero/"
                target="_blank"
              >
                <Image
                  src={face}
                  alt="facebook"
                  width={12}
                  height={15}
                  className="text-white hover:text-slate-200 mr-1"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link
                href="https://www.instagram.com/municipiodebaradero/"
                target="_blank"
              >
                <Image
                  src={instagram}
                  width={21}
                  height={20}
                  className="text-white hover:text-slate-200 mr-1"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://twitter.com/municipalidadba" target="_blank">
                <Image
                  src={twitter}
                  width={23}
                  height={20}
                  className="text-white hover:text-slate-200 mr-1"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link
                href="https://www.youtube.com/@municipalidadbaradero9936"
                target="_blank"
              >
                <Image
                  src={youtube}
                  width={26}
                  height={20}
                  className="text-white hover:text-slate-200 mr-2"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto ">
              <Link href="https://baradero.gob.ar/" target="_blank">
                <Globe height={25} width={25} color="white" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:w-full md:flex-row justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-2 lg:border-b-4 lg:border-b-green-nav">
          <Link href="/" className="transition-transform hover:scale-105 duration-300">
            <Image
              alt="Logo Gobierno Abierto"
              src={logo}
              className="w-[180px] h-auto md:w-[220px] lg:w-[250px]"
            />
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
