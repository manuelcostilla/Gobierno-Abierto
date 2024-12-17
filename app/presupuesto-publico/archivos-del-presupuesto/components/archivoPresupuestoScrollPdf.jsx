import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArchivosDelPresupuestoScrollPdf ({ archivosDelPresupuestoPdf }) {
  return (
    <div className="flex justify-center ">
      <ScrollArea className="flex justify-center w-full h-[500px]">
        {archivosDelPresupuestoPdf.map((archivosDelPresupuestoPdf) => (
          <div key={archivosDelPresupuestoPdf.id} className="pt-5 pb-5">
            <Card className="flex w-[250px] lg:w-[700px] lg:h-[80px] m-auto font-sans text-base text-balance xs:text-xs">
              <CardContent className="w-full flex items-center justify-between p-5 ">
                <CardHeader className=" flex font-bold">
                  <CardTitle className="text-center text-base lg:text-left text-balance">
                    <p>
                      {archivosDelPresupuestoPdf.nombre}{" "}
                      {archivosDelPresupuestoPdf.año}
                    </p>
                  </CardTitle>
                </CardHeader>
                <Button
                  asChild
                  className="bg-blue-header hover:bg-blue-500 flex justify-center items-center"
                >
                  <Link
                    href={archivosDelPresupuestoPdf.link}
                    target="_blank"
                    className="block mx-auto lg:mx-0  text-white font-bold py-2 px-4 w-40 text-center rounded-medium text-base xs:text-xs transition duration-300 ease-in-out"
                  >
                    <p>Descargar</p>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
