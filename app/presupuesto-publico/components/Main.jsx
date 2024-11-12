import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"
const Main_presupuesto = () => {
  return (
    <>
      <div className=" container ">
        <div className="w-[550px]">
          <GeneralText
            title="Presupuesto Publico"
            text="Bienvenido a la sección de Presupuesto Público del Municipio de Baradero. Aquí podrás acceder a información transparente y detallada sobre la asignación y ejecución de los recursos públicos de nuestra comunidad."
          />
        </div>
        <div className="flex flex-wrap justify-center m-32 text-center">
          <SectionCard
            titulo="Ejercicio 2023"
            link="/presupuesto-publico/2023"
            textlink="Ingresar"
          />
          <SectionCard
            titulo="Ejercicio 2022"
            link="/presupuesto-publico/2022"
            textlink="Ingresar"
          />
          <SectionCard
            titulo="Ejercicio 2021"
            link="/presupuesto-publico/2021"
            textlink="Ingresar"
          />
          <SectionCard
            titulo="Ejercicio 2020"
            link="/presupuesto-publico/2020"
            textlink="Ingresar"
          />
        </div>
      </div>
    </>
  )
}

export default Main_presupuesto
