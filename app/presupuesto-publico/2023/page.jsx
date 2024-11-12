import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"

export default function Presupuestopublico2023 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2023" />
      <div className="flex justify-center items-center container pb-20 pt-20 ">
        <SectionCard
          titulo="Gastos 2023"
          textlink="Ver mas información"
          link="./2023/gastos-2023"
        />
        <SectionCard
          titulo="Ingresos 2023"
          textlink="Ver mas información"
          link="./2023/ingresos-2023"
        />
      </div>
    </>
  )
}
