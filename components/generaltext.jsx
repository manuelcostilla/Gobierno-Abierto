import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function GeneralText ({ text, title }) {
  return (
    <>
      <Card>
        <CardHeader className="bg-blue-500">
          <CardTitle className="text-lg mb-2 text-white text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <p className="text-sm mb-4 pt-2 text-justify">{text}</p>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  )
}
