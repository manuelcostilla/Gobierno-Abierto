import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
export function Organigrama () {
  return (
    <>
    <div className="flex justify-center">
    <div className="flex flex-col mt-10 mb-10">
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline"className=" font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>CONDUCCIÓN SUPERIOR</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA GENERAL DE GOBIERNO</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE PLANIFICACIÓN Y GESTIÓN PÚBLICA</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className=" font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE OBRAS Y SERVICIOS PÚBLICOS</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE HACIENDA Y FINANZAS PÚBLICAS</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE DESARROLLO SOCIAL</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE SALUD</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-full">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE CULTURA, EDUCACIÓN, COMUNICACIÓN Y DEPORTES</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/imagenes/organigrama6-8.png"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      </div>
      </div>
    </>
  )
}
