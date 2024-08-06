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
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Mirar imagen</Button>
        </DialogTrigger>
        <DialogContent className=" max-h-[1240px] max-w-[1240px]">
          <div className="w-full h-full">
            <Image
              alt="Imagen obra"
              height={1240}
              width={1240}
              src="/imagenes/Untitled-2024-08-05-1004.png"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </DialogContent>

      </Dialog>
      <div className="grid gap-4 py-4 sm:max-w-[745px]  "></div>
    </>
  )
}
