import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"



export function Telefonosfijos ({ dataTelefonia }) {
  return (
    <>
      <div className="flex justify-center items-center mb-6">
        <CardHeader>
          <CardTitle className="mb-4 text-xl font-medium leading-none">
            Teléfonos Fijos
          </CardTitle>
        </CardHeader>
      </div>

      <div className="flex justify-center items-center mb-6">
        <ScrollArea className="h-72 w-[450px] rounded-md border">
          <CardContent className="p-4">
            {dataTelefonia.map((data) => (
              <Card key={data.id} className="text-sm m-3">
                <CardContent>
                  <div className="flex justify-between">
                    <div className="font-semibold">Localidad:</div>
                    <div>{data.localidad}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Sector:</div>
                    <div>{data.sector}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Número:</div>
                    <div>{data.telefono}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </ScrollArea>
      </div>
    </>
  )
}
