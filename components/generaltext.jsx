import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function GeneralText ({ text, title }) {
  return (
    <Card className="h-[450px] flex flex-col border border-neutral-100 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-3xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-50/50 p-6">
        <CardTitle className="text-blue-GobAb font-black text-lg tracking-tight uppercase">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-8">
            <p className="text-neutral-600 leading-relaxed text-[15px] font-medium whitespace-pre-line text-pretty">
              {text}
            </p>
          </div>
        </ScrollArea>
      </CardContent>
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-GobAb opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  )
}
