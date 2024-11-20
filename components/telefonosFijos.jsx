import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const dataTelefonia = [
  {
    id: 1,
    telefono: "15591172",
    localidad: "STA COLOMA",
    sector: "Delegación - Sala",
  },
  {
    id: 2,
    telefono: "232615421124",
    localidad: "STA COLOMA",
    sector: "Delegación - Sala Semi Publico",
  },
  {
    id: 3,
    telefono: "494024",
    localidad: "ALSINA",
    sector: "Delegación",
  },
  {
    id: 4,
    telefono: "494048",
    localidad: "ALSINA",
    sector: "Jardín de Infantes",
  },
  {
    id: 5,
    telefono: "494095",
    localidad: "ALSINA",
    sector: "Sala de 1º Auxilios",
  },
  {
    id: 6,
    telefono: "494020",
    localidad: "ALSINA",
    sector: "C. Medico",
  },
  {
    id: 7,
    telefono: "496027",
    localidad: "PORTELA",
    sector: "Cultura",
  },
  {
    id: 8,
    telefono: "496028",
    localidad: "PORTELA",
    sector: "Jardin de Infantes",
  },
  {
    id: 9,
    telefono: "496029",
    localidad: "PORTELA",
    sector: "CEPT 17",
  },
  {
    id: 10,
    telefono: "496030",
    localidad: "PORTELA",
    sector: "Delegación",
  },
  {
    id: 11,
    telefono: "496032",
    localidad: "PORTELA",
    sector: "Casa Medico",
  },
  {
    id: 12,
    telefono: "496033",
    localidad: "PORTELA",
    sector: "Sala de 1º Auxilios",
  },
  {
    id: 13,
    telefono: "496034",
    localidad: "PORTELA",
    sector: "Escuela Nº 10",
  },
  {
    id: 14,
    telefono: "496031",
    localidad: "PORTELA",
    sector: "Policia",
  },
]

export function Telefonosfijos () {
  return (
    <>
    <div className="mx-auto container">
    <div className="flex justify-center items-center">
      <ScrollArea className="h-72 w-[450px] rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Telefonos</h4>
          {dataTelefonia.map((data) => (
            <>
              <div key={data.id} className="text-sm m-5">
                <div>
                 Localidad: {data.localidad}
                  <Separator className="mr-2" />
                 Sector: {data.sector}
                  <Separator className="mr-2" />
                 Numero: {data.telefono}
                </div>
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
      </div>
      </div>
    </>
  )
}
