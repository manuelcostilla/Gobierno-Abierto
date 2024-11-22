import React from "react"
import Image from "next/image"
import test from "../public/banner/IMG.Baradero.jpg"

export default function banner () {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between pt-10 gap-24 m-5">
        <div className=" lg:w-1/2 pr-5">
          <h1 className="text-[40px] sm:text-[50px] lg:text-[70px] text-blue-GobAb font-bold font-sans text-balance">
            GOBIERNO ABIERTO
          </h1>
          <div className="w-[50px] sm:w-[75px] lg:w-[100px] h-[4px] sm:h-[5px] lg:h-[6px] bg-green-nav rounded-lg mt-4 lg:mt-8"></div>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl mt-4 lg:mt-6 text-fuente-gris text-balance">
            Municipio de Baradero
          </h2>
          <p className="font-sans font-medium mt-4 lg:mt-8 text-fuente-gris text-justify w-full sm:w-[80ch] text-sm sm:text-base">
            Sitio web que proporciona fácil y transparente acceso a información
            pública, como presupuestos, decisiones y datos relevantes. Fomenta
            la participación ciudadana y la rendición de cuentas, permitiendo a
            los ciudadanos seguir y contribuir activamente en la gestión y toma
            de decisiones del municipio.
          </p>
        </div>

        <div className="image-section lg:w-1/2 mt-8 pl-16 lg:mt-0 flex justify-center lg:justify-end sm:hidden md:hidden lg:block">
          <Image
            src={test}
            alt="Banner"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </div>
      </div>
    </div>
  )
}
