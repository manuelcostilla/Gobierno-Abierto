import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const BoletinOficial = ({ data }) => {
  return (
      <>
      {data.map((data, index) => (
        <div key={index} className="flex w-full lg:w-[1100px] mb-10 m-auto p-10 border-dotted border border-gray-400 clip-your-needful-style text-base xs:text-xs">
          <div className="w-full">
            <div className="lg:flex justify-between items-center">
                <div className=" flex ">
                  <p className="text-center lg:text-left">{data.texto}</p>
                </div>
                <Button asChild className='bg-blue-header hover:bg-blue-500'>
                  <Link href={data.pdfLink} className="block mx-auto lg:mx-0 mt-2  text-white font-bold py-2 px-4 w-40 text-center rounded-medium text-base xs:text-xs transition duration-300 ease-in-out" >
                  {data.boton}
                  </Link>
                  </Button>
            </div>
          </div>
        </div>
      ))}
      </>
  )
}
