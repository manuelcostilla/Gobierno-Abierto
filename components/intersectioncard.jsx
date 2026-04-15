"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function SectionCard ({ titulo, link, textlink }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="border border-neutral-100 rounded-2xl overflow-hidden glass shadow-sm hover:shadow-xl transition-all duration-300 min-w-[280px]">
        <CardHeader className="bg-blue-GobAb/5 p-6 border-b border-blue-100">
          <CardTitle className="text-blue-GobAb font-black text-xl text-center leading-tight uppercase tracking-tight">
            {titulo}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-8 bg-white/50">
          <Button
            asChild
            className="group bg-blue-GobAb hover:bg-blue-title text-white rounded-full px-8 py-6 font-bold shadow-lg transition-all"
          >
            <Link href={link} className="flex items-center gap-2">
              {textlink}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
