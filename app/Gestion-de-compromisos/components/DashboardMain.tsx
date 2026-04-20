"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Search, Home, MapPin, Briefcase, BarChart2, Shield, Users, Mail, Bell, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Background effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/80 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Navigation Tabs - matching the image */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm font-medium border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 bg-[#2d5699] text-white px-4 py-2 rounded-md font-bold">
            <Home size={16} /> Inicio
          </div>
          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer px-2">
            <Briefcase size={16} /> Compromisos
          </div>
          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer px-2">
            <BarChart2 size={16} /> Indicadores
          </div>
          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer px-2">
            <Shield size={16} /> Transparencia
          </div>
          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer px-2">
            <Users size={16} /> Contacto
          </div>
        </div>

        {/* CSS Grid for Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Column - Left (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Row: Desempeño + Map Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Desempeño Card */}
              <Card className="border-0 shadow-sm bg-gradient-to-br from-[#6297ce] to-[#8ebae2] text-white overflow-hidden relative">
                <div className="p-6 relative z-10">
                  <h3 className="text-lg font-medium mb-1 drop-shadow-sm">Desempeño de Gestión Municipal</h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-6xl font-bold tracking-tighter drop-shadow-md">78</span>
                    <span className="text-xl font-medium mb-2 opacity-80">/100</span>
                  </div>
                  <div className="text-xs text-white/80 hover:text-white cursor-pointer mt-8">
                    ¿Qué mide el Índice? <span className="underline">Ver explicación &gt;</span>
                  </div>
                </div>
                {/* Gauge Background Graphic */}
                <div className="absolute right-[-20px] top-4 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 flex flex-col items-center justify-center relative">
                    {/* Fake gauge colored portions */}
                    <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="44" stroke="#4ade80" strokeWidth="12" fill="none" strokeDasharray="200" strokeDashoffset="50" />
                    </svg>
                    <span className="text-3xl font-bold text-slate-800">78<span className="text-sm">/100</span></span>
                    <span className="text-[10px] font-bold text-[#4ade80] tracking-wider mt-1">BUENO</span>
                  </div>
                </div>
              </Card>

              {/* Map Summary Card */}
              <Card className="border-0 shadow-sm relative overflow-hidden bg-slate-200 min-h-[220px]">
                {/* Fake map background image (placeholder gradient for now until we have an image) */}
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-33.8055,-59.5074&zoom=13&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:landscape|element:geometry|color:0xdfd2ae&style=feature:poi|element:geometry|color:0xdfd2ae&style=feature:poi.park|element:geometry|color:0xa5b076&style=feature:road.highway|element:geometry.fill|color:0xf8c967&style=feature:road.highway|element:geometry.stroke|color:0xe9bc62&style=feature:road.local|element:geometry.fill|color:0xffffff&style=feature:water|element:geometry.fill|color:0xa2daf2&client=gme-geodan&signature=REDACTED')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
                
                <div className="relative p-5 h-full flex flex-col">
                  <div className="space-y-3 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm w-3/4">
                    <div className="flex items-center justify-between text-sm font-medium">
                      <div className="flex items-center gap-2 text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] text-white">✓</div> Pavimento finalizado
                      </div>
                      <span className="font-bold text-lg">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <div className="flex items-center gap-2 text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div> Pavimento en ejecución
                      </div>
                      <span className="font-bold text-lg text-slate-500">6</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <div className="flex items-center gap-2 text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white">✓</div> Cámaras instaladas
                      </div>
                      <span className="font-bold text-lg text-slate-500">8</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <div className="flex items-center gap-2 text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-[10px] text-white">✓</div> Espacios verdes
                      </div>
                      <span className="font-bold text-lg text-slate-500">5</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto self-end">
                    <button className="bg-white text-[#2d5699] px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-slate-50 flex items-center gap-2">
                       Ver Mapa Completo <span className="text-lg">&gt;</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Middle Section: Antes y despues */}
            <Card className="border-0 shadow-sm p-6 overflow-hidden bg-white/80 backdrop-blur-md">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Antes y después</h3>
              <div className="bg-[#eef4fb] rounded-xl p-4 mb-4">
                <span className="text-[#2d5699] font-bold text-lg">Parque del Este</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden relative shadow-sm aspect-video h-48 bg-slate-200">
                   <Image src="https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20Anfiteatro%20Municipal/Anfiteatro1.jpg" alt="Antes" fill className="object-cover" />
                   <div className="absolute bottom-0 left-0 bg-[#276e6a] text-white font-bold px-6 py-1.5 rounded-tr-lg">ANTES</div>
                </div>
                <div className="rounded-xl overflow-hidden relative shadow-sm aspect-video h-48 bg-slate-200">
                   <Image src="https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20Anfiteatro%20Municipal/3-Anfiteatro%20Municipal.jpg" alt="Despues" fill className="object-cover" />
                   <div className="absolute bottom-0 left-0 bg-[#1e488d] text-white font-bold px-6 py-1.5 rounded-tr-lg">DESPUÉS</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="md:w-1/2">
                   <h4 className="font-bold text-lg text-slate-800 mb-2">Recuperamos el Parque del Este</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">Empezamos en este tramo la intervención para mejorar. Con más detalles y obras escénicas, transformaremos el espacio para todos los vecinos.</p>
                 </div>
                 <div className="md:w-1/2 bg-slate-50 p-4 rounded-xl space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 border-2 border-slate-300 rounded flex items-center justify-center text-slate-400 font-bold text-xs">□</div>
                      15 juegos nuevos
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 border-2 border-slate-300 rounded flex items-center justify-center text-slate-400 font-bold text-xs">🚗</div>
                      50 puentes arreglados
                    </div>
                    <button className="w-full mt-2 bg-[#eef4fb] text-[#2d5699] font-bold py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      Ver Otras Obras &gt;
                    </button>
                 </div>
              </div>
            </Card>

            {/* Bottom Row: Impacto */}
            <Card className="border-0 shadow-sm p-6 overflow-hidden bg-white/80 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Impacto de las politicas publicas</h3>
                <span className="text-sm font-medium text-slate-400 hover:text-slate-600 cursor-pointer">Ver Compromisos</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2 px-2 border-slate-100">
                    <div className="w-6 h-6 bg-[#2d5699] rounded text-white flex justify-center items-center font-bold text-xs">B</div>
                    <span className="font-bold text-slate-700">Barrio Bernabé</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm px-2">
                    <div className="flex items-center gap-2 text-slate-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      <div className="w-4 h-4 rounded-full bg-[#4ade80] flex justify-center items-center text-white text-[10px]">✓</div>
                      Pavimento en Liberata 530
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-[#4ade80]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400 w-8">50%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm px-2">
                    <div className="flex items-center gap-2 text-slate-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      <div className="w-4 h-4 border-2 border-teal-500 rounded-full flex justify-center items-center text-teal-500 text-[10px]">●</div>
                      Cámaras J Newbery y Malpiú
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="w-3/4 h-full bg-teal-500"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400 w-8">70%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm px-2">
                    <div className="flex items-center gap-2 text-slate-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      <div className="w-4 h-4 bg-[#2d5699] rounded flex justify-center items-center text-white text-[10px]">B</div>
                      Luminarias LED en Sintia Malla
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="w-full h-full bg-[#2d5699]"></div>
                      </div>
                      <span className="text-xs font-bold text-slate-400 w-8">100%</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 relative bg-slate-100 rounded-xl overflow-hidden min-h-[160px]">
                   {/* Fake map snippet */}
                   <Image src="https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra-Costanera%20Sur/Segunda%20etapa%20de%20pavimentaci%C3%B3n%20-%20Costanera%20Sur%20%20(7).jpg" fill alt="Impacto" className="object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                   
                   <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow text-center flex justify-between items-center px-6">
                      <div className="flex flex-col items-start gap-0">
                         <span className="text-2xl font-bold text-[#2d5699]">128 <span className="text-[#4ade80] text-sm align-top">60%</span></span>
                         <span className="text-xs font-medium text-slate-400">Zonas. Mil</span>
                      </div>
                      <button className="bg-[#eef4fb] text-[#2d5699] text-sm font-bold px-4 py-1.5 rounded-lg flex items-center gap-1">
                        <Search size={14}/> Compromisos
                      </button>
                   </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Ultimos Avances */}
            <Card className="border-0 shadow-sm p-6 bg-white/80 backdrop-blur-md">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Últimos avances</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-slate-600 leading-snug">Nuevo asfalto en calle Cabrera</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-slate-600 leading-snug">Reforestamos la plaza Moreno</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-slate-600 leading-snug">Más turnos digitales en el hospital</span>
                </li>
              </ul>
              <div className="text-[#2d5699] font-bold text-sm cursor-pointer hover:underline">
                Ver Novedades &gt;
              </div>
            </Card>

            {/* En ejecucion */}
            <Card className="border-0 shadow-sm p-6 bg-white/80 backdrop-blur-md">
               <h3 className="text-lg font-bold text-slate-800 mb-4">En ejecución</h3>
               <div className="rounded-xl overflow-hidden mb-3 aspect-video relative bg-slate-200">
                  <Image src="https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20hist%C3%B3rica-Recambio%20de%20ca%C3%B1er%C3%ADas%20en%20zona%20c%C3%A9ntrica/ca%C3%B1erias%20del%20centro%20(1).jpg" alt="En ejecucion" fill className="object-cover" />
               </div>
               <h4 className="font-bold text-slate-800 leading-tight mb-2">Centro de Salud<br/>en Villa Basso</h4>
               <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4">
                  <span className="text-[#4ade80]">2023 <span className="inline-block w-8 h-1.5 ml-1 bg-[#4ade80] rounded-full"></span></span>
                  <span>028 &gt;</span>
                  <span>⚙ 2026</span>
               </div>
               <div className="text-[#2d5699] font-bold text-sm cursor-pointer hover:underline">
                Ver Compromiso &gt;
              </div>
            </Card>

            {/* Comparativa Anual */}
            <Card className="border-0 shadow-sm p-6 bg-white/80 backdrop-blur-md">
               <h3 className="text-lg font-bold text-slate-800 mb-3">Comparativa Anual</h3>
               <div className="bg-[#f0f9ed] text-[#4ea844] font-medium text-sm px-3 py-1 rounded inline-block mb-6">Reciclaje Municipal</div>
               
               {/* Faked Bar Chart */}
               <div className="h-40 flex items-end justify-around border-l border-b border-slate-200 pb-2 pl-2 relative mb-2">
                 <span className="absolute top-0 -left-6 text-[10px] text-slate-400 font-medium">2.20</span>
                 <span className="absolute top-1/2 -left-6 -translate-y-1/2 text-[10px] text-slate-400 font-medium">120</span>
                 
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">130</span>
                    <div className="w-12 h-16 bg-[#7cb8bb] rounded-t-sm"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">155</span>
                    <div className="w-12 h-24 bg-[#93c572] rounded-t-sm"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">190</span>
                    <div className="w-12 h-32 bg-[#8dbf43] rounded-t-sm"></div>
                 </div>
               </div>
               <div className="flex justify-around text-xs font-bold text-slate-500 pl-4 mb-4">
                 <span>2022</span>
                 <span>2023</span>
                 <span>2024</span>
               </div>

               <button className="w-full mt-2 bg-[#eef4fb] text-[#2d5699] font-bold py-2 rounded-lg hover:bg-blue-100 transition-colors">
                 Ver Todos &gt;
               </button>
            </Card>

            {/* Entendiendo el indicador */}
            <Card className="border-0 shadow-sm p-6 bg-white/80 backdrop-blur-md">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Entendiendo el indicador</h3>
              <p className="text-sm font-medium text-slate-600 mb-4">Delitos cada 1000 habitantes</p>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold tracking-tighter text-slate-800">143</span>
                   <span className="text-[10px] font-bold text-slate-400">Meta 2023</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-3xl font-light tracking-tighter text-[#2d5699]">-14%</span>
                   <span className="text-[10px] font-bold text-slate-400">+/- 20%</span>
                 </div>
                 <div className="flex flex-col ml-auto text-right">
                   <span className="text-3xl font-bold tracking-tighter text-[#4ea844]">140</span>
                   <span className="text-[10px] font-bold text-slate-400">Meta anual</span>
                 </div>
              </div>

              {/* Fake inner gauge */}
              <div className="relative h-24 flex justify-center overflow-hidden mb-2">
                 <svg className="w-48 h-48" viewBox="0 0 100 100">
                     <path d="M 20 80 A 40 40 0 0 1 80 80" fill="none" stroke="#fef08a" strokeWidth="15" strokeLinecap="round"/>
                     <path d="M 30 80 A 40 40 0 0 1 70 80" fill="none" stroke="#4ade80" strokeWidth="15" strokeLinecap="round" strokeDasharray="60" strokeDashoffset="-20"/>
                     <path d="M 80 80 A 40 40 0 0 1 75 60" fill="none" stroke="#ef4444" strokeWidth="15" strokeLinecap="round" strokeDasharray="30" strokeDashoffset="0"/>
                 </svg>
                 <div className="absolute bottom-0 w-4 h-16 origin-bottom transform rotate-45">
                    <div className="w-4 h-4 bg-slate-800 rounded-full mx-auto border-4 border-white translate-y-6 shadow-md"></div>
                    <div className="w-1 h-8 bg-slate-800 mx-auto rounded-t-full translate-y-6"></div>
                 </div>
              </div>
              <p className="text-center font-bold text-slate-800 mb-4">En mejora</p>
              
              <button className="w-full bg-[#eef4fb] text-[#2d5699] font-bold py-2 rounded-lg hover:bg-blue-100 transition-colors">
                Ver Más Indicadores &gt;
              </button>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
