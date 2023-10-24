'use client'
import { useState } from 'react'
import {
  BsFileEarmarkPdfFill,
  BsFillArrowUpCircleFill,
  BsFillTelephoneFill
} from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai'
import { FaCity } from 'react-icons/fa'

export const AcordeonDeLicitaciones = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null) // Si el mismo acordeón está abierto, ciérralo
    } else {
      setOpenIndex(index) // De lo contrario, establece el índice del acordeón abierto
    }
  }

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank')
  }
  return (
    <>
  <div className="flex max-w-screen h-36 bg-blue-header justify-center items-center">
    <h1 className="flex justify-center items-center text-center text-4xl font-sans text-white font-bold">
      COMPRAS Y LICITACIONES
    </h1>
  </div>
  <div className="p-6 mx-2 mt-4 leading-10 max-w-[800px]">
    {data.map((item, index) => (
      <div className="" key={index}>
        <div>
          <button
            onClick={() => toggleAccordion(index)}
            className="transition-all duration-300 ease-in-out"
          >
            <span className="inline-flex items-center">
              {openIndex === index
                ? (
                <BsFillArrowUpCircleFill className="text-blue-header mr-3" />
                  )
                : (
                <BsFileEarmarkPdfFill className="text-blue-header mr-3" />
                  )}
              {item.titulo}
            </span>
          </button>
        </div>
        <div
          className={`${
            openIndex === index ? 'max-h-full' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {openIndex === index && (
            <div className="word-wrap bg-gray-100 p-4 rounded-md">
              <p>
                <span className="font-bold">
                  {item.tituloAcordeonAbierto}
                </span>
              </p>
              <p>
                <span className="font-bold">
                  {item.decreto} {item.numdecreto}
                </span>
              </p>
              <p>
                <span className="font-bold">{item.dias}</span>
                {item.motivo}
              </p>
              <p>
                <span className="font-bold">{item.presupuesto}</span>
                {item.plata}
              </p>
              <p>
                <span className="font-bold">{item.garantia}</span>
                {item.platagarantia}
              </p>
              <p>
                <span className="font-bold">{item.valorPliego}</span>
                {item.plataPliego}
              </p>
              <p>
                <span className="font-bold">{item.fechaAperturaSobre}</span>
                {item.fecha}
              </p>
              <p>
                <span className="font-bold">{item.adquisicionPliego}</span>
                {item.adquisicion}
              </p>

              <button
                onClick={() => handleDownload(item.pdfUrl)}
                className="flex justify-center items-center m-auto my-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                {item.botonTexto}
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
    <div className="lg:w-[300px] mt-4 lg:absolute lg:left-[900px] lg:top-[550px]">
      <h1 className="text-center font-bold text-blue-header lg:flex lg:justify-center">
        Dirección de Compras
      </h1>
      <div className="border-2 border-gray-nav"></div>
      <div className="flex items-center gap-4">
        <div>
          <FaCity className="text-blue-header" />
        </div>
        <div>
          <p>San Martín 905 - 2942 - Baradero</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <AiOutlineClockCircle className="text-blue-header" />
        </div>
        <div>
          <p>Horario: de 8:00 a 12:00 hs</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <BsFillTelephoneFill className="text-blue-header" />
        </div>
        <div>
          <p>03329-482900 | Int. 219</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <AiOutlineMail className="text-blue-header" />
        </div>
        <div>
          <p>compras@baradero.gob.ar</p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
