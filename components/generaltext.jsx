import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function GeneralText ({ text, title }) {
  return (
    <>
      <Card>
        <CardHeader className="bg-blue-title">
          <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <p className="text-sm sm:text-base lg:text-lg mb-4 pt-2 ">{text}</p>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  )
}
