import React from 'react'
import { Card, CardHeader, CardBody, Image, Button } from '@nextui-org/react'
import { dataObra } from '../dataObra/dataObraJSON'

const CompromisosCard = () => {
  return (
    <div className='flex flex-wrap justify-center m-20 '>
      {dataObra.map((data, index) => (
        <Card key={index} className="relative py-4 flex m-5 h-80 w-60">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Card background"
              className="object-cover w-full h-80 rounded-xl"
              src={data.image}
            />
          </div>
          <div className="relative z-10 flex flex-col items-center p-4 bg-white bg-opacity-25 h-full justify-center rounded-xl">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold">{data.title}</p>
              <Button color="primary" className='text-white bg-blue-header h-11 mt-2'>Ver mas</Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col items-center w-full">
              {/* Puedes eliminar esta sección si no necesitas el CardBody */}
              <h4 className='text-white'>Progreso de obra</h4>
            </CardBody>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default CompromisosCard
