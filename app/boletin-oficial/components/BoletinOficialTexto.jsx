import React from 'react'

export const BoletinOficialTexto = () => {
  return (
    <>
  <div className='flex h-36 w-full bg-blue-title justify-center items-center '>
    <h1 className='text-lg lg:text-3xl font-sans text-white font-bold 'style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>BOLETIN OFICIAL</h1>
  </div>
  <div className='px-4 md:px-8 xs:flex xs:justify-center'>
    <div className='flex justify-center text-balance'>
      <h2 className='text-sm lg:text-lg w-full md:w-2/4 my-8 lg:ml-20 md:my-20 text-slate-700 text-center md:text-left font-sans xs:w-full'>
        En esta sección encontrarás los Boletines
        Oficiales del Municipio de Baradero. Puede consultar libre y públicamente el Boletín Oficial que le interese, verlo completo en PDF en pantalla, imprimir o guardar en su dispositivo.
      </h2>
    </div>
  </div>
</>

  )
}
