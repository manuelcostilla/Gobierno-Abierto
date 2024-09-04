"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo_gobiernoAbierto (1).svg"
import { HeadernavBar } from "./components/Header-navBar"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai"

export const Header = () => {
  return (
    <>
      <header className="overflow-x-hidden">
        <div className="flex w-full justify-center item-center sm:flex sm:justify-end sm:items-center sm:w-full h-[40px] bg-blue-header">
          <ul className="sm:p-[15px] font-sans sm:justify-start">
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/">
                <AiFillFacebook
                  size="25"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.instagram.com/municipiodebaradero/">
                <AiFillInstagram
                  size="25"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://twitter.com/municipalidadba">
                <AiFillTwitterSquare
                  size="25"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.youtube.com/@municipalidadbaradero9936">
                <AiFillYoutube
                  size="25"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
          </ul>
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
