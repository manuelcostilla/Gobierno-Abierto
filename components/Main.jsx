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

      <div className="block lg:flex lg:justify-between overflow-x-hidden">
        <div className="block lg:flex lg:w-[450px] w-full lg:ml-[100px] lg:mt-[60px] ml-8 mt-8">
          <h1 className="block lg:flex font-bold text-blue-header font-sans lg:text-[80px] text-[60px]">GOBIERNO ABIERTO</h1>
        </div>
        <div className="block lg:flex lg:w-[600px] lg:mr-[100px] lg:mt-[30px]">
          <Image
            src={imagen_fondo_gobierno_abierto}
            alt=""
            className="block lg:flex lg:w-[600px] lg:h-[400px] w-[300px] h-[150px] ml-4" />
        </div>
      </div>
      <div className="hidden lg:w-[100px] lg:h-[5px] lg:bg-green-nav lg:absolute lg:top-[585px] lg:left-[100px]">{/* Barra verde */}</div>
      <div className="ml-[30px]">
        <h4 className="font-bold font-helvetica text-gray-700 text-[40px] lg:absolute lg:top-[620px] lg:left-[100px]">Municipio de Baradero</h4>
      </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center lg:mb-60 lg:mt-60 lg:gap-10 lg:grid-cols-main lg:grid-rows-main-row grid grid-cols-1 w-full flex justify-center items-center">
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="../organigrama">
            <Image className="m-auto" src={mapa_estado_municipal} height={80} width={80} alt="" />
            <p>Mapa Del Estado Municipal</p>
          </Link>
        </div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="../boletin-oficial">
            <Image className="m-auto" src={boletin_oficial} height={80} width={80} alt="" />
            <p>Boletín Oficial</p>
          </Link>
        </div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="../precios-y-licitaciones">
            <Image className="m-auto" src={compra_licitaciones} height={80} width={80} alt="" />
            <p className="ml-[15px]">Compras y Licitaciones</p>
          </Link>
        </div>
        {/* <div className="text-black text-center p-[20px] mt-[3px]">
          <Link href="#">
            <Image className="m-auto" src={datos_abiertos} height={80} width={80} alt="" />
            <p>Datos Abiertos</p>
          </Link>
        </div> */}
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="../gestion_de_compromisos/main_compromisos">
            <Image className="m-auto" src={gestion_compromisos} height={80} width={80} alt="" />
            <p>Gestión de Compromisos</p>
          </Link>
        </div>
        <div className="text-black text-center p-4 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="../presupuesto-publico">
            <Image className="m-auto" src={presupuesto_publico} height={80} width={80} alt="" />
            <p>Presupuesto Publico</p>
          </Link>
        </div>
      </div>
    </>
  )
}
