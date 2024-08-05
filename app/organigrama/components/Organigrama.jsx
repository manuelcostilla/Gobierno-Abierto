import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
export function Organigrama () {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[925px] sm:max-h-[600px] bg-slate-200">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <div className="grid gap-4 py-4 sm:max-w-[745px] sm:max-h-[593px] ">
    <div className="w-full h-full">
      <Image alt="Imagen obra"
                height={740}
                width={593}
                src="/imagenes/org.png" className="w-full h-full object-cover rounded-sm"/>
    </div>
  </div>
  </>
  )
}
