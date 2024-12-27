import Link from "next/link"
import { secretarias } from "./data/data"

function testPage () {
  return (
    <>
      <div className="mx-auto container pt-20 pb-10">
        <section className="grid grid-cols-1 gap-24 md:gird-cols-2 lg:grid-cols-3">
          {secretarias.map((secretarias) => {
            return (
              <article key={secretarias.id}>
              <Link href={`/testpage/${secretarias.id}`}>
                <h2 className="flex gap-10 font-bold text-xl text-slate-400 text-left text-balance">
                  <span>{secretarias.icon}</span>
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
