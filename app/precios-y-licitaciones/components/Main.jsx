import React from "react"
import { GeneralText } from "@/components/generaltext"
import { SectionCard } from "@/components/intersectioncard"

const Main_licitaciones = () => {
  return (
    <div className="bg-neutral-50/50 min-h-screen">
      <div className="container mx-auto py-20 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GeneralText
            title="Bienvenidos"
            text="En esta sección, el Municipio de Baradero pone a tu disposición toda la información relacionada con las licitaciones, tanto públicas como privadas. Nuestro compromiso con la transparencia asegura que los procesos sean accesibles y claros."
          />
          <GeneralText
            title="¿Qué es una Licitación?"
            text="Es un procedimiento mediante el cual el gobierno municipal convoca a proveedores para la ejecución de obras o adquisición de bienes. Este proceso busca garantizar la competencia y la mejor utilización de los recursos públicos."
          />
          <GeneralText
            title="Contenido"
            text="Podrás encontrar información detallada sobre las licitaciones convocadas por el Municipio. Las públicas son procesos abiertos a cualquier interesado, mientras que las privadas son por invitación selecta corporativa."
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
