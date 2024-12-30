import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"

const Main_presupuesto = () => {
  return (
    <>
      <div className="container mx-auto pt-8 p-20">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text="Bienvenidos a la sección de Presupuesto Público del Municipio de Baradero. Aquí podrás acceder a información transparente y detallada sobre la asignación y ejecución de los recursos públicos de nuestra comunidad."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="¿Qué es Presupuesto Público?"
              text="El presupuesto público es el documento que refleja las prioridades y necesidades de nuestra ciudad. A través de este, se establece cómo se recaudan y distribuyen los fondos para financiar los servicios y proyectos que benefician a todos los ciudadanos."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Transparencia y Participación"
              text="Nuestro compromiso con la transparencia implica que todos los ciudadanos tengan acceso a la información sobre el uso de los recursos públicos."
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center pt-20 m-5">
          <div className="m-5">
            <SectionCard
              titulo="Ejercicio 2020"
              link="/presupuesto-publico/2020"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Ejercicio 2021"
              link="/presupuesto-publico/2021"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Ejercicio 2022"
              link="/presupuesto-publico/2022"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Ejercicio 2023"
              link="/presupuesto-publico/2023"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Ejercicio 2024"
              link="/presupuesto-publico/2024"
              textlink="Ver más información"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Archivos del Presupuesto"
              link="/presupuesto-publico/archivos-del-presupuesto"
              textlink="Ver más información"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main_presupuesto
