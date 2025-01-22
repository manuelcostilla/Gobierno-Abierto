import { secretarias } from "../data/data"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function SecretariaPage ({ params }) {
  const { id } = params

  // Buscar la secretaría por ID (convertimos id a número porque los datos tienen id como número)
  const secretaria = secretarias.find((item) => item.id === parseInt(id))

  // Manejo de error si no se encuentra la secretaría
  if (!secretaria) {
    return <p>Secretaría no encontrada</p>
  }

  return (
    <>

      <content>
        <div className="relative">
          {secretaria.imagen && (
            <img
              alt={secretaria.nombre}
              className="h-[300px] blur-sm w-full object-cover"
              src={secretaria.imagen}
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 z-10">
            <div className="text-center">{secretaria.icon}</div>
            <h2 className="mt-4 text-xl font-bold text-white select-none">
              {secretaria.nombre
                ? secretaria.nombre.toUpperCase()
                : "Nombre no disponible"}
            </h2>
          </div>
        </div>

        <article key={secretaria.id} className="mx-auto container pt-10 pb-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-start">
              <p className=" pt-16 opacity-90 text-balance w-[650px]">
                {secretaria.descripcion}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mt-2 pb-2 text-lg text-gray-700">
                Actualmente en el cargo:
              </p>
              {secretaria.imagen && (
                <img
                  alt={secretaria.encargado}
                  className="h-[200px] w-[200px] object-cover rounded-3xl"
                  src={secretaria.cvfoto}
                />
              )}
              <p className="mt-2 text-lg text-gray-700">
                {secretaria.encargado}
              </p>
            </div>
          </div>
        </article>
        <article className="mx-auto container pt-10 pb-10">
        <h1 className="flex justify-center items-center text-3xl pb-10 text-slate-400 font-semibold">Depende de:</h1>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {secretaria.dependencias.map((dependencia) => (
              <Dialog key={dependencia.id}>
                <DialogTrigger>
                  <h2 className="flex gap-10 font-bold text-xl text-slate-400 text-left text-balance">
                    <span>{dependencia.icon}</span>
                    <span>{dependencia.nombre}</span>
                  </h2>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1>{dependencia.nombre}</h1>
                    </DialogTitle>
                    <DialogDescription>
                      {dependencia.encargado}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>{dependencia.descripcion}</DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </section>
        </article>
      </content>
    </>
  )
}
