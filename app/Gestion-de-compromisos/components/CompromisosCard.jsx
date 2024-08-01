import React from 'react'
import { dataObra } from '../dataObra/dataObraJSON'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const CompromisosCard = () => {
  return (
    <div className="flex flex-wrap justify-center m-20 ">
      {dataObra.map((data, index) => (
        <Card key={index} className="relative py-4 flex m-5 h-80 w-60 justify-center self-center">
          <div className="relative z-10 flex flex-col items-center p-4 bg-white bg-opacity-25 h-full justify-center rounded-xl">
            <div className="pb-0 pt-2 px-4 flex-col items-center">
              <CardHeader>
                <CardTitle className="text-xl">
                  {data.title}
                </CardTitle>
              </CardHeader>
            </div>
             <CardContent className="absolute">
             {data.description}
          </CardContent>
            <div className="overflow-visible py-2 flex flex-col items-center w-full">
              {/* Puedes eliminar esta sección si no necesitas el CardBody */}
              <Progress value={33} className="w-[60%] bg-slate-700" />
            </div>
            <Button
              color="primary"
              className="text-white bg-blue-header h-11 mt-2"
            >
              Ver mas
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default CompromisosCard
