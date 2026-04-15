export function BannerText ({ titulo }) {
  return (
    <div className="relative bg-blue-GobAb py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/banner/IMG.Baradero.jpg')] bg-cover bg-center blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-2xl lg:text-4xl font-sans text-white font-black tracking-tight drop-shadow-md max-w-4xl mx-auto leading-tight uppercase">
          {titulo}
        </h1>
        <div className="h-1 w-24 bg-green-nav mx-auto mt-6 rounded-full"></div>
      </div>
    </div>
  )
}
