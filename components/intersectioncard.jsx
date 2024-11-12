import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SectionCard ({ titulo, link, textlink }) {
  return (
    <>
      <Card className="border-solid border-2 border-blue-header rounded-lg  mx-4 lg:m-2 xs:m-2 font-sans">
        <CardHeader>
          <CardTitle className="text-blue-header font-bold text-xl p-2 mb-2 flex justify-center items-center">
            {titulo}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <Button
            asChild
            color="primary"
            className="mx-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]"
          >
            <Link href={link}>{textlink}</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
