export function BannerText ({ titulo }) {
  return (
    <>
      <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center text-center">
        <h1
          className="text-sm lg:text-3xl font-sans text-white font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          {titulo.toUpperCase()}
        </h1>
      </div>
    </>
  )
}

