import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"

const Main_licitaciones = () => {
  return (
    <>
      <BannerText titulo="COMPRAS Y LICITACIONES" />
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8 pb-10 pt-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenido"
              text="En esta sección, el Municipio de [Nombre del Municipio] pone a tu disposición toda la información relacionada con las licitaciones, tanto públicas como privadas. Nuestro compromiso con la transparencia y la participación ciudadana asegura que todos los procesos de contratación sean accesibles y claros."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es una Licitación?"
              text="Una licitación es un procedimiento mediante el cual el gobierno municipal convoca a proveedores y contratistas a presentar propuestas para la ejecución de obras, adquisición de bienes o prestación de servicios. Este proceso busca garantizar la competencia, la igualdad de oportunidades y la mejor utilización de los recursos públicos."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <GeneralText
              title="Contenido"
              text="En esta sección, podrás encontrar información detallada sobre las licitaciones tanto públicas como privadas convocadas por el Municipio de Baradero. Las licitaciones públicas son procesos abiertos en los que cualquier interesado puede participar, cumpliendo con los requisitos establecidos. Aquí podrás consultar anuncios sobre proyectos disponibles para licitación, con detalles clave como los plazos de presentación y los requisitos técnicos o financieros que se deben cumplir. Además, se publicará la documentación necesaria para presentar una oferta, como formularios específicos o certificaciones requeridas. Al finalizar cada licitación, se publicarán los resultados, incluyendo la adjudicación de contratos y el ganador de la licitación.

Por otro lado, las licitaciones privadas son aquellas en las que solo un grupo seleccionado de empresas o proveedores está invitado a participar. En esta subsección, podrás ver los anuncios correspondientes a estas licitaciones, especificando los requisitos particulares y las condiciones para poder presentar una propuesta. Además, se brindan instrucciones claras sobre cómo participar en este tipo de procesos, incluyendo los criterios de evaluación que se utilizarán para seleccionar al proveedor o contratista adecuado. Al igual que en las licitaciones públicas, se publicarán los resultados y los contratos adjudicados una vez finalizado el proceso.

Si estás interesado en participar en alguna licitación, consulta la información disponible sobre las licitaciones públicas y privadas que se encuentren abiertas en el Municipio de Baradero.
"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex  items-center m-3 mb-12 pb-20 pt-20 lg:m-3 font-sans flex-col lg:flex-row">
            <div className="border-solid border-2 border-blue-header rounded-lg p-10 mx-4 lg:m-2 xs:m-2 font-sans">
              <h1 className="text-blue-header font-bold text-xl p-2 mb-2">
                Licitaciones Publicas
              </h1>
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
      </div>
    </>
  )
}

export default Main_licitaciones
