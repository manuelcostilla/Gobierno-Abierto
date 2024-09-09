import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const Main_presupuesto = () => {
  return (
    <>
        <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center">
        <h1 className="flex justify-center items-center text-center text-lg lg:text-3xl font-sans text-white font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          PRESUPUESTO PUBLICO
        </h1>
      </div>
      <div className='flex flex-wrap justify-center m-32 text-center'>
            <div className="">
                <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
                <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>2023</h1>
                <Link href="/presupuesto-publico/2023">
                    <Button color="primary" className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
                    Ingresar
                    </Button>
                </Link>
                </div>
            </div>
            <div className="">
                <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
                <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>2022</h1>
                <Link href="/presupuesto-publico/2022">
                    <Button color="primary" className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
                    Ingresar
                    </Button>
                </Link>
                </div>
            </div>
            <div className="">
                <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
                <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>2021</h1>
                <Link href="/presupuesto-publico/2021">
                    <Button color="primary" className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
                    Ingresar
                    </Button>
                </Link>
                </div>
            </div>
            <div className="">
                <div className='border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans'>
                <h1 className='text-blue-header font-bold text-xl p-2 mb-2'>2020</h1>
                <Link href="/presupuesto-publico/2020">
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

export default Main_presupuesto
