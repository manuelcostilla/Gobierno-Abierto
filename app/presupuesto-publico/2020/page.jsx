import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"

export default function Presupuestopublico2020 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2020" />
      <div className="flex justify-center items-center container pb-20 pt-20 ">
        <SectionCard
          titulo="Gastos 2020"
          textlink="Ver mas información"
          link="./2020/gastos-2020"
        />
        <SectionCard
          titulo="Ingresos 2020"
          textlink="Ver mas información"
          link="./2020/ingresos-2020"
        />
      </div>
    </>
  )
}
