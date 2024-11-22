export function BannerText ({ titulo }) {
  return (
    <>
      <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center text-center">
        <h1
          className=" text-3xl font-sans text-white font-bold"
        >
          {titulo.toUpperCase()}
        </h1>
      </div>
    </>
  )
}

