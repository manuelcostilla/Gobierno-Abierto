"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Organigrama () {
  const [openItem, setOpenItem] = useState(null)

  const handleAccordionChange = (value) => {
    setOpenItem(value === openItem ? null : value)
  }

  return (
    <>
      <div className="flex justify-center m-20 ">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-1" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  INTENDENCIA
                </p>
                <br />
                <p>ESTEBAN DAMIÁN SANZIO | Intendente</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/CONDUCCIONSUPERIOR.jpg"
                alt="CONDUCIÓN SUPERIOR"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/CONDUCCIONSUPERIOR.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-2" ? "text-green-500" : "text-blue-500 "
                  } no-underline`}
                >
                  SECRETARÍA DE GOBIERNO
                </p>
                <br />
                <p>SILVANA NOEMÍ IOZZIA | Secretaria</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIAGOBIERNO.jpg"
                alt="SECRETARÍA DE GOBIERNO"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADEGOBIERNO.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-3" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE PLANIFICACIÓN Y GESTIÓN PÚBLICA
                </p>
                <br />
                <p>RODRIGO GARCIA OTERO | Secretario</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIAPLANIFICACION.jpg"
                alt="SECRETARÍA DE PLANIFICACIÓN Y GESTIÓN PÚBLICA"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADEPLANIFICACIONYGESTIONPUBLICA.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-4" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE OBRAS Y SERVICIOS PÚBLICOS
                </p>
                <br />
                <p>ARIEL JORGE SPRENGER | Secretario</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIAOBRASSERVICIOS.jpg"
                alt="SECRETARÍA DE OBRAS Y SERVICIOS PÚBLICOS"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADEOBRASYSERVICIOSPUBLICOS.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-5" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE HACIENDA Y FINANZAS PÚBLICAS
                </p>
                <br />
                <p>FEDERICO GABRIEL CATALDO | Secretario</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIAHACIENDA.jpg"
                alt="SECRETARÍA DE HACIENDA Y FINANZAS PÚBLICAS"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADEHACIENDAYFINANZASPUBLICAS.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-6" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE CULTURA, EDUCACIÓN, COMUNICACIÓN Y DEPORTES
                </p>
                <br />
                <p>LUCIANA DEPAULI | Secretaria</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIACULTURA.jpg"
                alt="SECRETARÍA DE CULTURA, EDUCACIÓN, COMUNICACIÓN Y DEPORTES"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADECULTURAEDUCACIONCOMUNICACIONYDEPORTES.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-7" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE SALUD
                </p>
                <br />
                <p>DARIO JOSÉ PUEDE | Secretario</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIASALUD.jpg"
                alt="SECRETARÍA DE SALUD"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADESALUD.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    openItem === "item-8" ? "text-green-500" : "text-blue-500"
                  } no-underline`}
                >
                  SECRETARÍA DE DESARROLLO SOCIAL
                </p>
                <br />
                <p>SANTIAGO ERROZ | Secretario</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                src="/imgorganigrama/SECRETARIADESOCIAL.jpg"
                alt="SECRETARÍA DE DESARROLLO SOCIAL"
                width={1200}
                height={300}
              />
              <br />
              <div className="flex justify-center">
                <a
                  href="/pdf/SECRETARIADEDESARROLLOSOCIAL.pdf"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  DESCARGAR.PDF
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
