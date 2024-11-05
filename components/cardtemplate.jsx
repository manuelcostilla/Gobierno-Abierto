import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CardContentPp ({ title, content }) {
  return (
    <>
      <Card className="m-2">
        <CardHeader className=" bg-blue-header">
          <CardTitle className="flex justify-center items-center">
            <p className="text-balance text-base text-white">{title}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center pt-2">
          <p className="text-balance text-2xl text-black ">{content}</p>
        </CardContent>
      </Card>
    </>
  )
}
