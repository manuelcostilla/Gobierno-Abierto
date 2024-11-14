"use client"
import { useState } from "react"
import { BsFileEarmarkPdfFill, BsFillArrowUpCircleFill } from "react-icons/bs"
import Direcciondecompras from "./Direcciondecompras"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

export const AcordeonDeLicitaciones = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [objects, setObjects] = useState(data)
  const [selectedYear, setSelectedYear] = useState(null)

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, "_blank")
  }

  const handleShowObjects = (year) => {
    const filteredObjects = data.filter((obj) => obj.año === year)
    setObjects(filteredObjects)
    setSelectedYear(year)
  }

  const resetList = () => {
    setObjects(data)
    setSelectedYear(null)
  }

  return (
    <>
      <Card className="flex flex-wrap justify-center text-xs  font-sans overflow-x-hidden w-full bg-blue-title">
        <CardHeader>
          <CardTitle>
            <Button
              onClick={() => handleShowObjects("2024")}
              className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 p-3 ${
                selectedYear === "2024"
                  ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                  : ""
              }`}
            >
              2024
            </Button>
            <Button
              onClick={() => handleShowObjects("2023")}
              className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 p-3 ${
                selectedYear === "2023"
                  ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                  : ""
              }`}
            >
              2023
            </Button>
            <Button
              onClick={() => handleShowObjects("2022")}
              className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 p-3 ${
                selectedYear === "2022"
                  ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                  : ""
              }`}
            >
              2022
            </Button>
            <Button
              onClick={() => handleShowObjects("2021")}
              className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 p-3 ${
                selectedYear === "2021"
                  ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                  : ""
              }`}
            >
              2021
            </Button>
            <Button
              onClick={resetList}
              className={`text-base lg:text-lg mt-2 m-2 lg:m-5 text-black bg-white hover:bg-slate-100 p-3 ${
                selectedYear === null
                  ? "text-white  border-blue-400 text-base lg:text-lg bg-green-600 hover:bg-green-700 font-semibold"
                  : ""
              }`}
            >
              Mostrar todos
            </Button>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <ScrollArea className="flex justify-center w-full h-[550px]">
          {objects.map((item, index) => (
            <div key={index} className="pt-5 pb-5">
              <Card className="flex w-[300px] lg:w-[700px]  m-auto font-sans text-base xs:text-xs">
                <CardContent className="w-full flex items-center justify-between p-5 ">
                  <CardHeader className=" flex font-bold">
                    <CardTitle className="text-center lg:text-left">
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
                    </CardTitle>
                  </CardHeader>
                </CardContent>
                <CardContent
                  className={`${
                    openIndex === index ? "max-h-full" : "max-h-0"
                  } overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  {openIndex === index && (
                    <div className="word-wrap  p-4 rounded-md">
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
                        <span className="font-bold">{item.tipo}</span>{" "}
                        {item.condicion}
                      </p>
                      <p>
                        <span className="font-bold">{item.dias}</span>{" "}
                        {item.motivo}
                      </p>
                      <p>
                        <span className="font-bold">{item.presupuesto}</span>{" "}
                        {item.plata}
                      </p>
                      <p>
                        <span className="font-bold">{item.garantia}</span>{" "}
                        {item.platagarantia}
                      </p>
                      <p>
                        <span className="font-bold">{item.valorPliego}</span>{" "}
                        {item.plataPliego}
                      </p>
                      <p>
                        <span className="font-bold">
                          {item.fechaAperturaSobre}
                        </span>{" "}
                        {item.fecha}
                      </p>
                      <p>
                        <span className="font-bold">
                          {item.adquisicionPliego}
                        </span>{" "}
                        {item.adquisicion}
                      </p>
                      <p>
                        <span className="font-bold">{item.obtencion}</span>{" "}
                        <br />
                        {item.url1} <br /> {item.url2}{" "}
                      </p>
                      <p>
                        <span className="font-bold">{item.requisitos}</span>
                      </p>
                      <p>
                        <span className="font-bold">{item.capacidad}</span>{" "}
                        {item.valor1}
                      </p>
                      <p>
                        <span className="font-bold">{item.superficie}</span>{" "}
                        {item.valor2}
                      </p>
                      <button
                        onClick={() => handleDownload(item.pdfUrl)}
                        className="flex justify-center items-center m-auto my-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                      >
                        {item.botonTexto}
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </ScrollArea>
        <CardFooter className="pt-5">
          <Direcciondecompras />
        </CardFooter>
      </Card>
    </>
  )
}
