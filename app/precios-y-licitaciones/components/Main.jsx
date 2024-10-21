import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"

const Main_licitaciones = () => {
  return (
    <>
        <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center">
        <h1 className="flex justify-center items-center text-center text-lg lg:text-3xl font-sans text-white font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          COMPRAS Y LICITACIONES
        </h1>
      </div>
      <div className='flex'>
        <div className="flex justify-evenly items-center m-3 mb-12 pb-20 pt-20 lg:m-3 font-sans flex-col lg:flex-row">
          <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
            <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>Licitaciones Publicas</h1>
            <p className='mb-6'>Información sobre licitaciones públicas realizadas por el municipio de Baradero</p>
            <Link href="/precios-y-licitaciones/Publica">
              <Button color="primary" className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly items-center m-3 mb-12 pb-20 pt-20 lg:m-3 font-sans flex-col lg:flex-row">
          <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
            <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>Licitaciones Privadas</h1>
            <p className='mb-6'>Información sobre licitaciones privadas realizadas por el municipio de Baradero</p>
            <Link href="/precios-y-licitaciones/Privada">
              <Button color="primary" className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
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
