import React from "react"
import { dataObra } from "../data/dataObraJSON"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
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
          <Card key={index} className="w-[250px] m-5">
            <CardHeader className="flex items-center justify-center bg-blue-header">
              <CardTitle className="text-xl">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-wrap w-[250px] h-[150px] flex justify-center items-center border-b  mt-2">
              <div>{data.description}</div>
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
                  </DialogHeader>
                  <DialogDescription>{data.description}</DialogDescription>
                  <DialogFooter>
                    {/* error no renderiza la imagen */}
                    {/* <Image
                      alt="Imagen obra"
                      height={150}
                      width={150}
                      src="/./trabajador.png"
                    /> */}
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
