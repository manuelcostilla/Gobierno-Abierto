import Link from "next/link"
import { secretarias } from "./data/data"
import { BannerText } from "@/components/bannertext"

function testPage () {
  return (
    <>
      <BannerText titulo="Áreas de Gobierno" />
      <div className="mx-auto container pt-20 pb-20 flex justify-center items-center">
        <section className="grid grid-cols-1 gap-10 w-[1050px] md:gird-cols-2 lg:grid-cols-3  bg-gray-50 border rounded-md p-20">
          {secretarias.map((secretarias) => {
            return (
              <article key={secretarias.id}>
                <Link href={`/testpage/${secretarias.id}`}>
                  <h2 className="flex font-semibold text-base m-5  text-slate-700 text-balance">
                    <span className="m-2">{secretarias.icon}</span>
                    <span>{secretarias.nombre}</span>
                  </h2>
                </Link>
              </article>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default testPage
