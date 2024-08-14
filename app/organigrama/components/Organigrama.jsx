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
    <div className="flex justify-center ">
    <div className="flex flex-col mt-10 mb-10">
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title text-xs lg:text-lg w-[350px] lg:w-full">
          <Button variant="outline"className=" font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>CONDUCCIÓN SUPERIOR</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgIntendencia.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA GENERAL DE GOBIERNO</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgGobierno.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE PLANIFICACIÓN Y GESTIÓN PÚBLICA</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgPlanificacion.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className=" font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE OBRAS Y SERVICIOS PÚBLICOS</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgServpublicos.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE HACIENDA Y FINANZAS PÚBLICAS</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgHacienda.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE DESARROLLO SOCIAL</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgSocial.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE SALUD</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgSalud.jpg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
      <Dialog>
        <DialogTrigger asChild className="flex text-balance bg-blue-title w-[350px] lg:w-full text-xs lg:text-lg">
          <Button variant="outline" className="font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>SECRETARÍA DE CULTURA, EDUCACIÓN, COMUNICACIÓN Y DEPORTES</Button>
        </DialogTrigger>
        <DialogContent className=" max-sm:max-h-[700] max-h-[1000px] max-w-[1000px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={800}
              width={800}
              src="/ImgOrg/OrgCultura.jpg"
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
