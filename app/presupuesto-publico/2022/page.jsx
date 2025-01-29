"use client"

import { BannerText } from "@/components/bannertext"
import { SectionCard } from "@/components/intersectioncard"
import { GeneralText } from "@/components/generaltext"

export default function Presupuestopublico2022 () {
  return (
    <>
      <BannerText titulo="Ingresos y gastos 2022" />
      <div className="container mx-auto pt-8 p-20">
        <div className="flex flex-col lg:flex-row justify-center items-start text-balance space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Bienvenidos"
              text="En esta sección, te ofrecemos un panorama claro y detallado sobre los ingresos y gastos del presupuesto público del Municipio de Baradero. Nuestro objetivo es garantizar la transparencia en la gestión financiera y promover la confianza de la ciudadanía en el uso de los recursos públicos."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Ingresos del Municipio"
              text="Los ingresos municipales son los recursos que se obtienen para financiar los servicios y proyectos de la ciudad. Estos ingresos provienen de diversas fuentes que incluyen la recaudación de impuestos y tasas locales; fondos recibidos del gobierno Provincia y Nacional destinados a proyectos específicos y a la operación de servicios; ingresos generados por infracciones y multas administrativas; y cobros por servicios públicos y tasas administrativas. Cada una de estas fuentes contribuye a la capacidad del municipio para llevar a cabo sus funciones y atender las necesidades de la comunidad."
            />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <GeneralText
              title="Gastos públicos"
              text="Los gastos públicos representan la inversión del municipio en diversas áreas esenciales para el bienestar de los ciudadanos. Estos se distribuyen en inversión en infraestructura, mantenimiento de calles, suministro de agua, recolección de basura y servicios de salud; recursos destinados a escuelas y programas educativos; gastos en seguridad pública y protección civil; programas de apoyo a comunidades vulnerables y actividades culturales; y proyectos de desarrollo urbano y mejoras en la infraestructura."
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center container pb-20 pt-20 ">
          <div className="m-5">
            <SectionCard
              titulo="Presupuesto 2022"
              textlink="Ver más información"
              link="./2022/archivos-presupuesto-2022"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Ingresos 2022"
              textlink="Ver más información"
              link="./2022/ingresos-2022"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Gastos 2022"
              textlink="Ver más información"
              link="./2022/gastos-2022"
            />
          </div>
          <div className="m-5">
            <SectionCard
              titulo="Rendición de cuentas 2022"
              textlink="Ver más información"
              link="./2022/rendicion-de-cuentas-2022"
            />
          </div>
        </div>
      </div>
    </>
  )
}
