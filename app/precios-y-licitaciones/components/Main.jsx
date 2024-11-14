import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { BannerText } from "@/components/bannertext"

const Main_licitaciones = () => {
  return (
    <>
      <BannerText titulo="Compras y Licitaciones" />
      <div className="flex justify-center items-center mr-10 ml-10">
        <div className="flex  items-center m-3 mb-12 pb-20 pt-20 lg:m-3 font-sans flex-col lg:flex-row">
          <div className="border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans">
            <h1 className="text-blue-header font-bold text-xl p-2 mb-2">
              Licitaciones Publicas
            </h1>
            <p className="mb-6">
              Información sobre licitaciones públicas realizadas por el
              municipio de Baradero
            </p>
            <Link href="/precios-y-licitaciones/Publica">
              <Button
                color="primary"
                className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]"
              >
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex  items-center m-3 mb-12 pb-20 pt-20 lg:m-3 font-sans flex-col lg:flex-row">
          <div className="border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans">
            <h1 className="text-blue-header font-bold text-xl p-2 mb-2">
              Licitaciones Privadas
            </h1>
            <p className="mb-6">
              Información sobre licitaciones privadas realizadas por el
              municipio de Baradero
            </p>
            <Link href="/precios-y-licitaciones/Privada">
              <Button
                color="primary"
                className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]"
              >
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main_licitaciones
