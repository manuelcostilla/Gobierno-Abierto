import Link from 'next/link'
import React from 'react'

const Main_presupuesto = () => {
  return (
    <>
      <div className="flex h-36 w-full bg-blue-header justify-center items-center">
        <h1 className="text-4xl font-sans text-white font-bold">PRESUPUESTO PUBLICO</h1>
      </div>
      <div className="flex p-8 break-normal">
        <p>Información de gastos en personal, no personales, bienes de consumo, bienes de personal, y otros gastos, realizados por el Municipio de Baradero.</p>
      </div>
      <div className="flex justify-evenly items-center m-3 mb-12">
        <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4'>
          <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>Presupuesto Municipal</h1>
          <p className='mb-6'>Información en gastos de personal, no personales, bienes de consumo, bienes de personal y otros gastos, realizados por el municipio de Baradero</p>
        <Link href="/presupuesto-publico/gastos">
          <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-bold py-2 px-4 w-[150px]">
           Gastos
          </button>
        </Link>
        </div>
        <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4'>
        <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>Presupuesto Municipal</h1>
          <p className='mb-6'>Información en gastos de personal, no personales, bienes de consumo, bienes de personal y otros gastos, realizados por el municipio de Baradero</p>
        <Link href="/presupuesto-publico/ingresos">
          <button className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
            Ingresos
          </button>
        </Link>
        </div>
        <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4'>
        <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>Presupuesto Municipal</h1>
          <p className='mb-6'>Información en gastos de personal, no personales, bienes de consumo, bienes de personal y otros gastos, realizados por el municipio de Baradero</p>
        <Link href="/presupuesto-publico/ingresos">
          <button className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
            Presupuesto
          </button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Main_presupuesto
