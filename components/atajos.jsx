import React from "react"
import Image from "next/image"
import Link from "next/link"
import { dataAtajos } from "./dataAtajos"

import mapa_estado_municipal from "../public/atajos/organigrama.svg"
import boletin_oficial from "../public/atajos/BoletinOficial.svg"
import compra_licitaciones from "../public/atajos/ComprasLicitac.svg"
import gestion_compromisos from "../public/atajos/GestionComprom.svg"
import presupuesto_publico from "../public/atajos/PresupPublico.svg"

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
      <div className="hidden lg:w-[100px] lg:h-[10px] lg:bg-green-nav lg:absolute lg:top-[585px] lg:left-[100px]">
        {/* Barra verde */}
      </div>
      <div className="flex justify-center items-center pt-28">
        <h1 className="font-bold  text-4xl">ACCESOS DIRECTOS</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center mb-60 mt-44 justify-around font-sans font-semibold flex-wrap">
        {dataAtajos.map((atajo) => (
          <Link key={atajo.id} href={atajo.link} className="m-6">
            <div className="flex flex-col lg:flex-row lg:w-[500px] lg:h-[200px] w-[300px] h-[300px] p-6 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-gray-400 shadow-lg">
              <div className="p-4 m-6 flex justify-center">
                <Image
                  className="w-[90px] h-[90px]"
                  src={images[atajo.img]}
                  alt={atajo.alt}
                />
              </div>
              <div className="w-full flex flex-col">
                <p className="text-lg font-bold mb-3 text-center break-words">
                  {atajo.title}
                </p>
                <p className="text-xs text-justify hidden lg:block">
                  {atajo.descripcion}
                </p>{" "}
                {/* Oculta la descripción en xs y sm */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Atajos
