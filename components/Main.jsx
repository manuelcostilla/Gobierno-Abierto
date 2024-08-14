import Image from 'next/image'
import Link from 'next/link'

import mapa_estado_municipal from '../public/imagenes/atajo_MapaDelEstadoMunicipal.png'
import boletin_oficial from '../public/imagenes/atajos_BoletinOficial.png'
import compra_licitaciones from '../public/imagenes/atajo_ComprasYLicitaciones.png'
// import datos_abiertos from '../public/imagenes/atajo_DatosAbiertos.png'
import gestion_compromisos from '../public/imagenes/atajo_GestionDeCompromisos.png'
import presupuesto_publico from '../public/imagenes/atajo_PresupuestoPublico.png'

export const Main = () => {
  return (
    <>
      <div className="hidden lg:w-[100px] lg:h-[10px] lg:bg-green-nav lg:absolute lg:top-[585px] lg:left-[100px]">{/* Barra verde */}</div>
      <div className="flex flex-col lg:flex-row items-center mb-56 mt-56  justify-around font-sans font-semibold flex-wrap ">
        <div className='flex flex-col flex-wrap '>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
            <Link href="../organigrama" className='flex flex-col justify-center items-center content-center p-3'>
              <Image className="m-auto" src={mapa_estado_municipal} height={60} width={60} alt="" />
            </Link>
          </div>
          <p>MAPA DEL ESTADO MUNICIPAL</p>
        </div>
        <div className='flex flex-col flex-wrap  '>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
            <Link href="../boletin-oficial" className='flex flex-col justify-center items-center content-center  p-3'>
              <Image className="m-auto" src={boletin_oficial} height={60} width={60} alt="" />
            </Link>
          </div>
          <p>BOLETÍN OFICIAL</p>
        </div>
        <div className='flex flex-col flex-wrap'>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105  ">
            <Link href="../precios-y-licitaciones" className='flex flex-col justify-center items-center content-center p-2'>
              <Image className="m-auto" src={compra_licitaciones} height={60} width={60} alt="" />
            </Link>
          </div>
          <p>COMPRAS Y LICITACIONES</p>
        </div>
        {/* <div className="text-black text-center p-[20px] mt-[3px]">
          <Link href="#">
            <Image className="m-auto" src={datos_abiertos} height={60} width={60} alt="" />
            <p>Datos Abiertos</p>
          </Link>
        </div> */}
        <div className='flex flex-col flex-wrap'>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
            <Link href="../Gestion-de-compromisos" className='flex flex-col justify-center items-center content-center p-3'>
              <Image className="m-auto" src={gestion_compromisos} height={60} width={60} alt="" />
            </Link>
          </div>
          <p>GESTIÓN DE COMPROMISOS</p>
        </div>
        <div className='flex flex-col flex-wrap'>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
            <Link href="../presupuesto-publico" className='flex flex-col justify-center items-center content-center p-3'>
              <Image className="m-auto" src={presupuesto_publico} height={60} width={60} alt="" />
            </Link>
          </div>
          <p>PRESUPUESTO PUBLICO</p>
        </div>
      </div>
    </>
  )
}
