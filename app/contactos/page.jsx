import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"

function Contactos () {
  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES" />
      <div className=" container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <GeneralText
            title="bienvenido"
            text="Nos importa tu opinión y estamos aquí para ayudarte. Si tienes consultas, sugerencias o necesitas información sobre los servicios municipales, no dudes en ponerte en contacto con nosotros."
          />
        </div>
        <div className="flex justify-center items-center pt-10 pb-10">
          <SectionCard
            titulo="Baradero"
            link="/contactos/baradero"
            textlink="Ver más información"
          />
          <SectionCard
            titulo="Portela"
            link="/contactos/portela"
            textlink="Ver más información"
          />
          <SectionCard
            titulo="Santa Coloma"
            link="/contactos/santa-coloma"
            textlink="Ver más información"
          />
          <SectionCard
            titulo="Alsina"
            link="/contactos/alsina"
            textlink="Ver más información"
          />
        </div>
      </div>
    </>
  )
}

export default Contactos
