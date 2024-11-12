"use client"

import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"

export default function Presupuestopublico2022 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2022" />
      <div className="flex justify-center items-center container pb-20 pt-20 ">
        <SectionCard
          titulo="Gastos 2022"
          textlink="Ver mas información"
          link="./2022/gastos-2022"
        />
        <SectionCard
          titulo="Ingresos 2022"
          textlink="Ver mas información"
          link="./2022/ingresos-2022"
        />
      </div>
    </>
  )
}
