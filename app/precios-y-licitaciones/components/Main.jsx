import React from "react"
import { BannerText } from "@/components/bannertext"
import { GeneralText } from "@/components/generaltext"
import { SectionCard } from "@/components/intersectioncard"

const Main_licitaciones = () => {
  return (
    <div className="bg-neutral-50/50 min-h-screen">
      <BannerText titulo="Compras y Licitaciones" />
      <div className="container mx-auto py-20 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GeneralText
            title="Bienvenidos"
            text="En esta sección, el Municipio de Baradero pone a tu disposición toda la información relacionada con las licitaciones, tanto públicas como privadas. Nuestro compromiso con la transparencia y la participación ciudadana asegura que todos los procesos de contratación sean accesibles y claros."
          />
          <GeneralText
            title="¿Qué es una Licitación?"
            text="Una licitación es un procedimiento mediante el cual el gobierno municipal convoca a proveedores y contratistas a presentar propuestas para la ejecución de obras, adquisición de bienes o prestación de servicios. Este proceso busca garantizar la competencia, la igualdad de oportunidades y la mejor utilización de los recursos públicos."
          />
          <GeneralText
            title="Contenido"
            text="En esta sección, podrás encontrar información detallada sobre las licitaciones tanto públicas como privadas convocadas por el Municipio de Baradero. Las licitaciones públicas son procesos abiertos en los que cualquier interesado puede participar, cumpliendo con los requisitos establecidos. Aquí podrás consultar anuncios sobre proyectos disponibles para licitación, con detalles clave como los plazos de presentación y los requisitos técnicos o financieros que se deben cumplir. Además, se publicará la documentación necesaria para presentar una oferta, como formularios específicos o certificaciones requeridas. Al finalizar cada licitación, se publicarán los resultados, incluyendo la adjudicación de contratos y el ganador de la licitación.
Por otro lado, las licitaciones privadas son aquellas en las que solo un grupo seleccionado de empresas o proveedores está invitado a participar. En esta subsección, podrás ver los anuncios correspondientes a estas licitaciones, especificando los requisitos particulares y las condiciones para poder presentar una propuesta. Además, se brindan instrucciones claras sobre cómo participar en este tipo de procesos, incluyendo los criterios de evaluación que se utilizarán para seleccionar al proveedor o contratista adecuado. Al igual que en las licitaciones públicas, se publicarán los resultados y los contratos adjudicados una vez finalizado el proceso.
Si estás interesado en participar en alguna licitación, consulta la información disponible sobre las licitaciones públicas y privadas que se encuentren abiertas en el Municipio de Baradero."
          />
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-12">
          <SectionCard
            titulo="Licitaciones Públicas"
            textlink="Explorar listado"
            link="/precios-y-licitaciones/Publica"
          />
          <SectionCard
            titulo="Licitaciones Privadas"
            textlink="Explorar listado"
            link="/precios-y-licitaciones/Privada"
          />
        </div>
      </div>
    </div>
  )
}

export default Main_licitaciones
