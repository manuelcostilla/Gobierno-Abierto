'use client'
import { useState } from 'react'
import { BsFileEarmarkPdfFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import Direcciondecompras from './Direcciondecompras'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

export const AcordeonDeLicitaciones = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [objects, setObjects] = useState(data)
  const [selectedYear, setSelectedYear] = useState(null) // Estado para guardar el año seleccionado

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank')
  }

  const handleShowObjects = (year) => {
    const filteredObjects = data.filter((obj) => obj.año === year)
    setObjects(filteredObjects)
    setSelectedYear(year) // Actualiza el año seleccionado
  }

  const resetList = () => {
    setObjects(data) // Restablece a los objetos originales (data)
    setSelectedYear(null) // Reinicia el año seleccionado
  }

  return (
    <>
      <div className=" lg:m-10 flex flex-wrap justify-center text-xs  font-sans overflow-x-hidden">
        <Button
          onClick={() => handleShowObjects('2024')}
          className={`mt-2 lg:ml-16 mr-4 bg-blue-header hover:bg-blue-500 text-white font-bold py-4 px-4 border-dotted border-l border-r border-t border-gray-400 xs:px-1 xs:py-1 lg:text-base ${selectedYear === '2024' ? 'text-black bg-gray-300 text-sm lg:text-base' : ''}`}style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          2024
        </Button>
        <Button
          onClick={() => handleShowObjects('2023')}
          className={`mt-2 mr-4 bg-blue-header hover:bg-blue-500 text-white font-bold py-4 px-4 border-dotted border-l border-r border-t border-gray-400 xs:px-1 xs:py-1 lg:text-base ${selectedYear === '2023' ? 'text-black bg-gray-300 text-sm lg:text-base' : ''}`}style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          2023
        </Button>
        <Button
          onClick={() => handleShowObjects('2022')}
          className={`mt-2 mr-4 bg-blue-header hover:bg-blue-500 text-white font-bold py-4 px-4 border-dotted border-l border-r border-t border-gray-400 xs:px-1 xs:py-1 lg:text-base ${selectedYear === '2022' ? 'text-black bg-gray-300 text-sm lg:text-base' : ''}`}style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          2022
        </Button>
        <Button
          onClick={() => handleShowObjects('2021')}
          className={`mt-2 mr-4 bg-blue-header hover:bg-blue-500 text-white font-bold py-4 px-4 border-dotted border-l border-r border-t border-gray-400 xs:px-1 xs:py-1 lg:text-base ${selectedYear === '2021' ? 'text-black bg-gray-300 text-sm lg:text-base' : ''}`}style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          2021
        </Button>
        <Button
          onClick={resetList}
          className={`mt-2 mb-2 bg-blue-header hover:bg-blue-500 text-white font-bold py-4 px-4 border-dotted border-l border-r border-t border-gray-400 xs:px-2 xs:py-2 lg:text-base ${selectedYear === null ? 'text-black bg-gray-300 text-sm lg:text-base' : ''}`}style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          Mostrar todos
        </Button>
      </div>

      <ScrollArea className="flex flex-col w-full lg:w-[1250px] h-[500px] mb-10 m-auto p-10 border-dotted border border-gray-400 clip-your-needful-style min-h-60">
        {objects.map((item, index) => (
          <div className="" key={index}>
            <div>
              <button
                onClick={() => toggleAccordion(index)}
                className="transition-all duration-300 ease-in-out"
              >
                <span className="inline-flex items-center">
                  {openIndex === index
                    ? <BsFillArrowUpCircleFill className="text-blue-header mr-3" />
                    : <BsFileEarmarkPdfFill className="text-blue-header mr-3" />
                  }
                  {item.titulo + item.año}
                </span>
              </button>
            </div>
            <div className={`${openIndex === index ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
              {openIndex === index && (
                <div className="word-wrap bg-gray-100 p-4 rounded-md">
                  <p><span className="font-bold">{item.tituloAcordeonAbierto}</span></p>
                  <p><span className="font-bold">{item.decreto} {item.numdecreto}</span></p>
                  <p><span className="font-bold">{item.tipo}</span> {item.condicion}</p>
                  <p><span className="font-bold">{item.dias}</span> {item.motivo}</p>
                  <p><span className="font-bold">{item.presupuesto}</span> {item.plata}</p>
                  <p><span className="font-bold">{item.garantia}</span> {item.platagarantia}</p>
                  <p><span className="font-bold">{item.valorPliego}</span> {item.plataPliego}</p>
                  <p><span className="font-bold">{item.fechaAperturaSobre}</span> {item.fecha}</p>
                  <p><span className="font-bold">{item.adquisicionPliego}</span> {item.adquisicion}</p>
                  <p><span className="font-bold">{item.obtencion}</span> <br />{item.url1} <br /> {item.url2} </p>
                  <p><span className="font-bold">{item.requisitos}</span></p>
                  <p><span className="font-bold">{item.capacidad}</span> {item.valor1}</p>
                  <p><span className="font-bold">{item.superficie}</span> {item.valor2}</p>
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
      </ScrollArea>
      <div className="mt-10 border-2 border-gray-nav"></div>
      <div className="flex items-center gap-4"></div>
      <Direcciondecompras />
    </>
  )
}
