"use client"

import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"

export default function Presupuestopublico2021 () {
  return (
    <>
      <BannerText titulo="Presupuesto Público 2021" />
      <div className="flex justify-center items-center container pb-20 pt-20 ">
        <SectionCard
          titulo="Gastos 2021"
          textlink="Ver mas información"
          link="./2021/gastos-2021"
        />
        <SectionCard
          titulo="Ingresos 2021"
          textlink="Ver mas información"
          link="./2021/ingresos-2021"
        />
      </div>
    </>
  )
}

