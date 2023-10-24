export const BoletinOficial = ({ id, texto, boton }) => {
  if (id) {
    return (
      <>
        <div className="flex w-full lg:w-[1250px] mb-10 m-auto p-10 border-dotted border border-gray-400 clip-your-needful-style">
          <div className="w-full">
            <div className="lg:flex lg:flex-col">
              {texto && boton && (
                <div className="mb-4">
                  <p className="text-center lg:text-left">{texto}</p>
                  <button className="block mx-auto lg:mx-0 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    {boton}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }
}
