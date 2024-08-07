import Image from 'next/image'
import Link from 'next/link'

import imagen_fondo_gobierno_abierto from '../public/imagenes/fondo_gobierno_abierto.png'
import mapa_estado_municipal from '../public/imagenes/atajo_MapaDelEstadoMunicipal.png'
import boletin_oficial from '../public/imagenes/atajos_BoletinOficial.png'
import compra_licitaciones from '../public/imagenes/atajo_ComprasYLicitaciones.png'
// import datos_abiertos from '../public/imagenes/atajo_DatosAbiertos.png'
import gestion_compromisos from '../public/imagenes/atajo_GestionDeCompromisos.png'
import presupuesto_publico from '../public/imagenes/atajo_PresupuestoPublico.png'

export const Main = () => {
  return (
    <>

      <div className="block lg:flex lg:justify-around  overflow-x-hidden ">
        <div className="block lg:flex lg:w-[450px] w-full lg:ml-[100px] lg:mt-[60px]  mt-8 ">
          <h1 className="block lg:flex font-bold text-blue-header font-sans lg:text-[80px] text-[60px] text-center">GOBIERNO ABIERTO</h1>
        </div>
        <div className="xs:mt-5 block lg:flex lg:w-[600px] lg:mr-[100px] lg:mt-[30px] ">
          <Image
            src={imagen_fondo_gobierno_abierto}
            alt=""
            className="block lg:flex lg:w-[600px] lg:h-[400px] w-[300px] h-[150px] ml-4" />
        </div>
      </div>
      <div className="hidden lg:w-[100px] lg:h-[10px] lg:bg-green-nav lg:absolute lg:top-[585px] lg:left-[100px]">{/* Barra verde */}</div>
      <div className="xs:mt-5 items-center w-full xs:flex xs:justify-center md:justify-start lg:justify-start flex ">
        <h4 className="w-1/2 text-center font-bold font-sans  text-gray-700 text-[40px] lg:absolute lg:top-[620px] mt-40">Municipio de Baradero</h4>
      </div>
      <div className="flex items-center mb-56 mt-56  justify-around font-sans font-semibold flex-wrap">
        <div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
          <Link href="../organigrama" className='flex flex-col justify-center items-center content-center p-3'>
            <Image className="m-auto" src={mapa_estado_municipal} height={80} width={80} alt="" />
          </Link>
        </div>
        <p>MAPA DEL ESTADO MUNICIPAL</p>
        </div>
        <div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
          <Link href="../boletin-oficial" className='flex flex-col justify-center items-center content-center  p-3'>
            <Image className="m-auto" src={boletin_oficial} height={80} width={80} alt="" />
          </Link>
        </div>
        <p>BOLETÍN OFICIAL</p>
        </div>
        <div>
          <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105  ">
            <Link href="../precios-y-licitaciones" className='flex flex-col justify-center items-center content-center p-2'>
              <Image className="m-auto" src={compra_licitaciones} height={80} width={80} alt="" />
            </Link>
          </div>
          <p>COMPRAS Y LICITACIONES</p>
        </div>
        {/* <div className="text-black text-center p-[20px] mt-[3px]">
          <Link href="#">
            <Image className="m-auto" src={datos_abiertos} height={80} width={80} alt="" />
            <p>Datos Abiertos</p>
          </Link>
        </div> */}
        <div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
          <Link href="../Gestion-de-compromisos" className='flex flex-col justify-center items-center content-center p-3'>
            <Image className="m-auto" src={gestion_compromisos} height={80} width={80} alt="" />
          </Link>
        </div>
        <p>GESTIÓN DE COMPROMISOS</p>
        </div>
        <div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 ">
          <Link href="../presupuesto-publico" className='flex flex-col justify-center items-center content-center p-3'>
            <Image className="m-auto" src={presupuesto_publico} height={80} width={80} alt="" />
          </Link>
        </div>
        <p>PRESUPUESTO PUBLICO</p>
        </div>
      </div>
    </>
  )
}
