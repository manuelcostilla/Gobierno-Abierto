import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"

function Contactos () {
  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES" />
      <div className=" container mx-auto px-4 py-8">
        <GeneralText
          title="Bienvenidos"
          text="En esta sección encontrarás una lista de contactos importantes y servicios que el Municipio de Baradero pone a disposición de los ciudadanos. Nuestro objetivo es facilitar la comunicación y el acceso a información relevante para resolver trámites, consultas y emergencias de manera ágil y eficiente. Ya sea que necesites información sobre servicios públicos, consultas administrativas, o atención en situaciones de urgencia, aquí podrás encontrar los números y canales adecuados para cada situación. Te invitamos a consultar esta página de forma periódica para mantenerte actualizado sobre los contactos y servicios disponibles. Nuestro compromiso es seguir trabajando para mejorar la calidad de vida de nuestros vecinos y vecinas."
        />
        <div className="flex flex-wrap justify-center items-center pt-20 m-5">
          <div className="m-5">
            <SectionCard
              titulo="Baradero"
              link="/contactos/baradero"
              textlink="Ver más información"
            />
          </div>

          <div className="m-5">
            <SectionCard
              titulo="Portela"
              link="/contactos/portela"
              textlink="Ver más información"
            />
          </div>

          <div className="m-5">
            <SectionCard
              titulo="Santa Coloma"
              link="/contactos/santa-coloma"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Alsina"
              link="/contactos/alsina"
              textlink="Ver más información"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactos
