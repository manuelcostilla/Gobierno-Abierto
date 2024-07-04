'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public//logo_negro.png'
import { HeadernavBar } from './components/Header-navBar'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube
} from 'react-icons/ai'

export const Header = () => {
  return (
    <>
      <header className="overflow-x-hidden">
        <div className="flex w-full justify-center item-center sm:flex sm:justify-end sm:items-center sm:w-full h-[40px] bg-blue-header">
          <ul className="sm:p-[15px] font-sans sm:justify-start">
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/">
                <AiFillFacebook
                  size="35px"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.instagram.com/municipiodebaradero/">
                <AiFillInstagram
                  size="35px"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://twitter.com/municipalidadba">
                <AiFillTwitterSquare
                  size="35px"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
            <li className="inline-block list-none sm:w-auto">
              <Link href="https://www.youtube.com/@municipalidadbaradero9936">
                <AiFillYoutube
                  size="35px"
                  className="text-white hover:text-slate-200"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-start items-center p-[50px] sm:w-auto">
          <Link href="/">
          <Image alt="" src={logo} height={79} width={247} />
          </Link>
        </div>
      </header>
      <HeadernavBar />
    </>
  )
}
