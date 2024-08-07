import { dataObra } from "../data/dataObraJSON"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const CompromisosCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center self-center m-20 w-[1250px]">
        {dataObra.map((data, index) => (
          <Card key={index} className="w-[250px]  m-5">
            <CardHeader className="flex items-center justify-center bg-blue-header">
              <CardTitle className="text-xl text-balance">
                {data.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs overflow-hidden whitespace-nowrap text-balance text-ellipsis w-[250px] h-[100px]  border-b  mt-2">
              <p>{data.description.substring(0, 140)}...</p>
            </CardContent>
            <CardContent>
              <div className="mt-4">
                <Progress value={data.progressvalue} className="bg-white" />
                <Label>{data.progressvalue}%</Label>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    color="primary"
                    className="text-white bg-blue-header h-10 mt-2 rounded-[25px] hover:bg-blue-400"
                  >
                    Ver mas
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <Label className="text-balance">{data.subtitle}</Label>
                  </DialogHeader>
                  <DialogDescription>
                    <div className="text-sm  text-pretty">{data.description}</div>
                    <div className="flex justify-center items-center mt-5 mb-5">
                      <Image
                        alt="Imagen obra"
                        height={960}
                        width={642}
                        src={data.Imagelocation}
                        priority={true}
                      />
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <Button asChild>
                      <a
                        target="_blank"
                        href="https://baradero.gob.ar/secretaria-de-obras-y-servicios-publicos/"
                      >
                        Informacion relacionada
                      </a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CompromisosCard
