import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const BoletinOficial = ({ data }) => {
  return (
      <>
      {data.map((data, index) => (
        <div key={index} className="flex w-full lg:w-[700px] lg:h-[80px] mb-10 m-auto font-sans border-dotted border border-gray-400 clip-your-needful-style text-base xs:text-xs">
          <div className="w-full flex items-center justify-between p-5">
                <div className=" flex font-bold">
                  <p className="text-center lg:text-left">{data.texto}</p>
                </div>
                <Button asChild className='bg-blue-header hover:bg-blue-500 flex justify-center items-center'>
                  <Link href={data.pdfLink} target='_blank' className="block mx-auto lg:mx-0  text-white font-bold py-2 px-4 w-40 text-center rounded-medium text-base xs:text-xs transition duration-300 ease-in-out" >
                  {data.boton}
                  </Link>
                  </Button>
          </div>
        </div>
      ))}
      </>
  )
}
