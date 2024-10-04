'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

export const HeadernavBar = () => {
  const [subMenus, setSubMenus] = useState({
    organigrama: false,
    boletin: false,
    licitaciones: false,
    presupuesto: false,
    compromisos: false
  })

  const organigramaRef = useRef(null)
  const boletinRef = useRef(null)
  const licitacionesRef = useRef(null)
  const presupuestoRef = useRef(null)
  const compromisosRef = useRef(null)

  // const handleSubMenuClick = (menu) => {
  //   setSubMenus((prevState) => ({
  //     ...prevState,
  //     [menu]: !prevState[menu]
  //   }))
  // }

  const handleClickOutside = (event) => {
    if (
      organigramaRef.current &&
      !organigramaRef.current.contains(event.target) &&
      boletinRef.current &&
      !boletinRef.current.contains(event.target) &&
      licitacionesRef.current &&
      !licitacionesRef.current.contains(event.target) &&
      presupuestoRef.current &&
      !presupuestoRef.current.contains(event.target) &&
      compromisosRef.current &&
      !compromisosRef.current.contains(event.target)
    ) {
      setSubMenus({
        organigrama: false,
        boletin: false,
        licitaciones: false,
        presupuesto: false
      })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
    <div className="flex justify-end items-center w-full h-full p-6 lg:hidden">
  <button onClick={handleNavToggle}>
    <FaBars className="mr-5 hidden" size="35px" />
  </button>
</div>

<nav className={`text-sm font-medium lg:flex lg:justify-evenly lg:items-center ${isNavOpen ? 'block' : 'hidden'} lg:w-full lg:h-[60px] bg-gray-nav pl-6 pr-6 lg:pl-20 lg:pr-20 w-full h-auto font-sans`}>
  <ul className={`flex-col lg:flex-row lg:space-x-8 ${isNavOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row`}>
    <Link href="/">
      <li className="relative">
        <button className="text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out">
          INICIO
        </button>
      </li>
    </Link>

    {/* INICIA SECCION ORGANIGRAMA BARRA DE NAVEGACIÓN */}
    <li className="relative" ref={organigramaRef}>
      <button className='text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out'>
        <Link href="../organigrama">ORGANIGRAMA<BiChevronDown className="inline lg:hidden ml-2 lg:ml-0" /></Link>
      </button>
      {subMenus.organigrama && (
        <div className="lg:text-center relative top-[0px] left-0 lg:mt-2 text-black bg-gray-nav lg:absolute lg:top-[35px] lg:left-0 lg:border-b-2 lg:border-b-green-nav lg:border-l-2 lg:border-l-green-nav lg:border-r-2 lg:border-r-green-nav">
          <ul className="py-0 lg:py-2">
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Organigrama</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Nomina de Empleados</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />DDJJ de Funcionarios</li>
            </Link>
          </ul>
        </div>
      )}
    </li>

    {/* INICIA BOLETIN OFICIAL BARRA DE NAVEGACIÓN */}
    <li className="relative" ref={boletinRef}>
      <button className='text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out'>
        <Link href="../boletin-oficial">BOLETIN OFICIAL<BiChevronDown className="inline lg:hidden ml-2 lg:ml-0" /></Link>
      </button>
      {subMenus.boletin && (
        <div className="lg:text-center relative top-[0px] left-0 lg:mt-2 text-black bg-gray-nav lg:absolute lg:top-[35px] lg:left-0 lg:border-b-2 lg:border-b-green-nav lg:border-l-2 lg:border-l-green-nav lg:border-r-2 lg:border-r-green-nav">
          <ul className="py-0 lg:py-2">
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />HCD</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Ejecutivo Municipal</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />SIBOM</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Rendición de Cuentas</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Ordenanza con Prioridad</li>
            </Link>
          </ul>
        </div>
      )}
    </li>

    {/* INICIA COMPRAS Y LICITACIONES */}
    <li className="relative" ref={licitacionesRef}>
      <button className='text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out'>
        <Link href="../precios-y-licitaciones">COMPRAS Y LICITACIONES<BiChevronDown className="inline lg:hidden ml-2 lg:ml-0" /></Link>
      </button>
      {subMenus.licitaciones && (
        <div className="lg:text-center relative top-[0px] left-0 lg:mt-2 text-black bg-gray-nav lg:absolute lg:top-[35px] lg:left-0 lg:border-b-2 lg:border-b-green-nav lg:border-l-2 lg:border-l-green-nav lg:border-r-2 lg:border-r-green-nav">
          <ul className="py-0 lg:py-2">
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Concurso de Precios</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Licitaciones Publicas</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Licitaciones Privadas</li>
            </Link>
          </ul>
        </div>
      )}
    </li>

    {/* INICIA PRESUPUESTO PUBLICO */}
    <li className="relative" ref={presupuestoRef}>
      <button className='text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out'>
        <Link href="../presupuesto-publico">PRESUPUESTO PUBLICO<BiChevronDown className="inline lg:hidden ml-2 lg:ml-0" /></Link>
      </button>
      {subMenus.presupuesto && (
        <div className="lg:text-center relative top-[0px] left-0 lg:mt-2 text-black bg-gray-nav lg:absolute lg:top-[35px] lg:left-0 lg:border-b-2 lg:border-b-green-nav lg:border-l-2 lg:border-l-green-nav lg:border-r-2 lg:border-r-green-nav">
          <ul className="py-0 lg:py-2">
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Presupuesto</li>
            </Link>
            <Link href="#">
              <li className="px-6 py-1 lg:px-4 lg:py-2 border-b border-gray-400 lg:border-b-0 hover:text-gray-700"><AiOutlineRight className="lg:hidden inline mx-2 lg:mx-0" />Pauta Publicitaria</li>
            </Link>
          </ul>
        </div>
      )}
    </li>

    {/* INICIA CONTACTO */}
    {/* <Link href="../contacto">
      <li className="relative">
        <button className='text-black text-left w-full lg:w-full lg:p-0 p-2 border-b border-gray-400 lg:border-b-0 px-4 lg:px-0 hover:text-gray-400 transition duration-300 ease-in-out'>
          CONTACTO
        </button>
      </li>
    </Link> */}
  </ul>
</nav>
    </>
  )
}
