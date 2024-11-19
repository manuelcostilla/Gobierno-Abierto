import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
export const BoletinOficial = ({ data }) => {
  return (
    <>
      <div className="flex justify-center ">
        <ScrollArea className="flex justify-center w-full h-[500px]">
          {data.map((data, index) => (
            <div key={index} className="pt-5 pb-5">
              <Card className="flex w-[300px] lg:w-[700px] lg:h-[80px] m-auto font-sans text-base xs:text-xs">
                <CardContent className="w-full flex items-center justify-between p-5 ">
                  <CardHeader className=" flex font-bold">
                    <CardTitle className="text-center lg:text-left">
                      <p>{data.texto}</p>
                    </CardTitle>
                  </CardHeader>
                  <Button
                    asChild
                    className="bg-blue-header hover:bg-blue-500 flex justify-center items-center"
                  >
                    <Link
                      href={data.pdfLink}
                      target="_blank"
                      className="block mx-auto lg:mx-0  text-white font-bold py-2 px-4 w-40 text-center rounded-medium text-base xs:text-xs transition duration-300 ease-in-out"
                    >
                      {data.boton}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </ScrollArea>
      </div>
    </>
  )
}
