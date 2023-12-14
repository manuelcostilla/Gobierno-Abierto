import Link from 'next/link'

export const BoletinOficial = ({ data }) => {
  return (
      <>
      {data.map((data, index) => (
        <div key={index} className="flex w-full lg:w-[1250px] mb-10 m-auto p-10 border-dotted border border-gray-400 clip-your-needful-style">
          <div className="w-full">
            <div className="lg:flex lg:flex-col">
                <div className="mb-4">
                  <p className="text-center lg:text-left">{data.texto}</p>
                  <Link href='' className="block mx-auto lg:mx-0 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" >
                  {data.boton}
                  </Link>
                </div>
            </div>
          </div>
        </div>
      ))}
      </>
  )
}
