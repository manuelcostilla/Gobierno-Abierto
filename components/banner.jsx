export const Banner = ({ titulo }) => {
  return (
    <>
      <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center">
        <h1
          className="flex justify-center items-center text-center text-lg lg:text-3xl font-sans text-white font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          {titulo}
        </h1>
      </div>
    </>
  )
}
