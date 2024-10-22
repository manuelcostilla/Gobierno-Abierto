import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CardContentPp ({ title, content }) {
  return (
    <>
        <Card className="m-2">
          <CardHeader>
            <CardTitle className="flex justify-center items-center">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <p>{content}</p>
          </CardContent>
        </Card>
    </>
  )
}
