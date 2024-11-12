export function GeneralText ({ text, title }) {
  return (
    <>
      <div>
        <h1 className=" text-xl mb-2 text-balance">{title}</h1>
        <p className="text-lg mb-4 text-balance">{text}</p>
      </div>
    </>
  )
}
