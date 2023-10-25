'use client'
import { useState } from 'react'
import {
  BsFileEarmarkPdfFill,
  BsFillArrowUpCircleFill
} from 'react-icons/bs'
import Direcciondecompras from './Direcciondecompras'

export const AcordeonDeLicitaciones = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [objects, setObjects] = useState(data)

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

  const handleShowObjects = (year) => {
    const filteredObjects = data.filter((obj) => obj.año === year)
    setObjects(filteredObjects)
    setSelectedYear(year)
  }

  const resetList = () => {
    setObjects(data) // Restablece a los objetos originales (data)
    setSelectedYear(null)
  }

  return (
    <>
      <div className="flex max-w-screen h-36 bg-blue-header justify-center items-center">
        <h1 className="flex justify-center items-center text-center text-4xl font-sans text-white font-bold">
          COMPRAS Y LICITACIONES
        </h1>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleShowObjects('2023')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Mostrar objetos 2023
        </button>
        <button
          onClick={() => handleShowObjects('2022')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Mostrar objetos 2022
        </button>
        <button
          onClick={() => handleShowObjects('2021')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Mostrar objetos 2021
        </button>
        <button
          onClick={() => handleShowObjects('2020')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Mostrar objetos 2020
        </button>
        <button
          onClick={resetList}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Mostrar todos
        </button>
      </div>
      <div className="p-6 mx-2 mt-4 leading-10 max-w-[800px]">
        {objects.map((item, index) => (
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
                  {item.titulo + item.año}
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
        <Direcciondecompras />
        <div className="border-2 border-gray-nav"></div>
        <div className="flex items-center gap-4"></div>
      </div>
    </>

  )
}
