import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"

const Main_presupuesto = () => {
  return (
    <div className="bg-neutral-50/50 min-h-screen">
      <div className="container mx-auto py-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GeneralText
            title="Bienvenidos"
            text="Bienvenidos a la sección de Presupuesto Público del Municipio de Baradero. Aquí podrás acceder a información transparente y detallada sobre la asignación y ejecución de los recursos públicos de nuestra comunidad."
          />
          <GeneralText
            title="¿Qué es Presupuesto Público?"
            text="El presupuesto público es el documento que refleja las prioridades y necesidades de nuestra ciudad. A través de este, se establece cómo se recaudan y distribuyen los fondos para financiar los servicios y proyectos que benefician a todos los ciudadanos."
          />
          <GeneralText
            title="Transparencia y Participación"
            text="Nuestro compromiso con la transparencia implica que todos los ciudadanos tengan acceso a la información sobre el uso de los recursos públicos."
          />
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-black text-blue-GobAb mb-12 text-center uppercase tracking-widest">
            Ejercicios Presupuestarios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionCard
              titulo="Ejercicio 2020"
              link="/presupuesto-publico/2020"
              textlink="Ver detalles"
            />
            <SectionCard
              titulo="Ejercicio 2021"
              link="/presupuesto-publico/2021"
              textlink="Ver detalles"
            />
            <SectionCard
              titulo="Ejercicio 2022"
              link="/presupuesto-publico/2022"
              textlink="Ver detalles"
            />
            <SectionCard
              titulo="Ejercicio 2023"
              link="/presupuesto-publico/2023"
              textlink="Ver detalles"
            />
            <SectionCard
              titulo="Ejercicio 2024"
              link="/presupuesto-publico/2024"
              textlink="Ver detalles"
            />
            <SectionCard
              titulo="Ejercicio 2025"
              link="/presupuesto-publico/2025"
              textlink="Ver detalles"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main_presupuesto
