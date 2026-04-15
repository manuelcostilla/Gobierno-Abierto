import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function GeneralText ({ text, title }) {
  return (
    <Card className="h-full border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <CardTitle className="text-blue-GobAb font-bold text-xl text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <p className="text-neutral-600 leading-relaxed text-base">
          {text}
        </p>
      </CardContent>
    </Card>
  )
}
