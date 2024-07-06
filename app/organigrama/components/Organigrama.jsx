'use client'
import { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

export const Organigrama = () => {
  const [sections, setSections] = useState({
    intendecia: false,
    subSeguridad: false,
    coordinacion: false,
    genero: false,
    gobierno: false,
    economico: false,
    comercio: false,
    salud: false,
    personas: false,
    modernizacion: false,
    legal: false,
    urbana: false,
    tecnologia: false,
    obras: false,
    servicios: false,
    publicas: false,
    finanzas: false,
    tesoreria: false,
    contaduria: false,
    fiscalizacion: false,
    presupuestaria: false,
    municipales: false,
    provinciales: false,
    desarrollo: false,
    sociales: false,
    familia: false,
    cultura: false,
    educacion: false
  })

  const toggleSection = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }))
  }
  return (
    <>
      <div className="flex max-w-screen h-36 bg-blue-title justify-center items-center">
        <h1 className="text-4xl font-sans text-white font-bold"style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          ORGANIGRAMA
        </h1>
      </div>
      <div className="lg:mt-4 lg:flex lg:justify-center lg:items-center flex justify-center items-center p-4 lg:p-0">
        <h3 className="lg:text-[20px] text-[18px]">ESQUEMA DE LA ESTRUCTURA ORGÁNICA - FUNCIONAL DE LA MUNICIPALIDAD DE BARADERO</h3>
      </div>
      <div className="p-6 w-full">
        <div className="w-full lg:w-[593px] lg:ml-5 p-2 mb-2">
          <div className="border-solid border-b-2 border-b-gray-400">
        <ul>
          <li>
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('intendencia')}
            >
    {/* intendencia */}
              <BsArrowRightShort className="inline text-xl relative bottom-[1px]"/> INTENDENCIA
              <p className="text-black mb-2">
                ESTEBAN DAMIAN SANZIO | Intendente
              </p>
              </h1>
              </li>
              </ul>
              </div>
          {sections.intendencia && (
            <ul>
            <li>
            <h1 className="font-bold mt-2">SECRETARÍA PRIVADA</h1>
            <p className="text-gray-700 mb-2">BECHTHOLT MARÍA LAURA | Secretaría</p>
            </li>
            <div className="border-solid border-b-2 border-b-gray-400">
              </div>
              <li>
              <h1 className="font-bold mt-2 ml-8"
              onClick={() => toggleSection('subSeguridad')}>
                <BsArrowRightShort className="inline text-blue-header text-xl relative bottom-[1px]"/>SUBSECRETARÍA DE SEGURIDAD CIUDADANA</h1>
            <p className="text-gray-700 mb-2 ml-8">LUCERO, SERGIO SAUL | Subsecretario</p>
            {sections.subSeguridad && (
              <ul>
            <div className="border-solid border-b-2 border-b-gray-400">
              </div>
              <li>
              <h1 className="font-bold text-gray-500 mt-2 ml-8">DPTO DE SEGURIDAD VIAL</h1>
            <p className="text-gray-700 mb-2 ml-8">BRETHAUER, RODRIGO | Jefe de Departamento</p>
            </li>
            <li>
              <h1 className="font-bold text-gray-500 mt-2 ml-8">DPTO DE LICENCIAS DE CONDUCIR</h1>
            <p className="text-gray-700 mb-2 ml-8">SOLOWIEJ, FERNANDA LORENA | Jefa de Departamento</p>
            </li>
              </ul>
            )}
            <div className="border-solid border-b-2 border-b-gray-400">
              </div>
            <li>
              <h1 className="font-bold mt-2 ml-8">JUZGADO DE FALTAS MUNICIPAL</h1>
            <p className="text-gray-700 mb-2 ml-8">DIEZ, FRANCISCO JOSE | Juez de Faltas</p>
            </li>
            <div className="border-solid border-b-2 border-b-gray-400">
              </div>
            <li>
              <h1 className="font-bold mt-2 ml-8">DIRECCIÓN GENERAL DE COMUNICACIÓN Y MEDIOS</h1>
            <p className="text-gray-700 mb-2 ml-8">DEPAULI, LUCIANA | Directora General</p>
            </li>
            <div className="border-solid border-b-2 border-b-gray-400">
              </div>
            <h1 className="font-bold mt-2 ml-8 mb-2"
              onClick={() => toggleSection('coordinacion')}>
                <BsArrowRightShort className="inline text-blue-header text-xl relative bottom-[1px]"/>DIRECCIÓN GENERAL DE COORDINACIÓN</h1>
                {sections.coordinacion && (
                  <ul>
                    <div className="border-solid border-b-2 border-b-gray-400">
                  </div>
                  <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DELEGACIÓN ALSINA</h1>
                <p className="text-gray-700 mb-2 ml-8">ALI, MARIA ANGELICA | Delegada</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DELEGACIÓN SANTA COLOMA</h1>
                <p className="text-gray-700 mb-2 ml-8">SOTTO, ROQUE ALBERTO | Delegado</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DELEGACIÓN IRENEO PORTELA</h1>
                <p className="text-gray-700 mb-2 ml-8">SANZIO, MARISA GABRIELA | Delegada</p>
                </li>
                </ul>
                )}
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                <h1 className="font-bold mt-2 ml-8"
              onClick={() => toggleSection('genero')}>
                <BsArrowRightShort className="inline text-blue-header text-xl relative bottom-[1px]"/>DIRECCIÓN GENERAL DE UNIDAD DE POLÍTICAS DE GÉNERO</h1>
                <p className="text-gray-700 mb-2 ml-8">CARLSSON, ERIKA | Directora Interina</p>
                {sections.genero && (
                  <ul>
                    <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                    <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE EQUIDAD DE GÉNERO</h1>
                <p className="text-gray-700 mb-2 ml-8">BARATTINI, ARACELI | Jefa de Departamento</p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </li>
                  </ul>
                )}
            </li>
            </ul>
          )}
          <ul>
          <li>
          {/* secretaria de gobierno */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('gobierno')}
            >
              <BsArrowRightShort className="inline text-xl relative bottom-[1px]"/> SECRETARÍA DE GOBIERNO
              <p className="text-black mb-2">
              IVAN NICOLAS MOREIRA | Secretario
              </p>
              </h1>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.gobierno && (
                <ul>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('economico')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE DESARROLLO ECONÓMICO SUSTENTABLE
                </h1>
                <p className="text-gray-700 mb-2">
                LACERNA, ANTONIO SANTIAGO | Subsecretario
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.economico && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL DE TURISMO</h1>
                <p className="text-gray-700 mb-2 ml-8">GIORGETTI, PABLO EDUARDO | Director General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL DE AMBIENTE</h1>
                <p className="text-gray-700 mb-2 ml-8">CAMPORA, SILVINA NATALIA | Directora General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN DE ECONOMÍA POPULAR Y COOPERATIVAS</h1>
                <p className="text-gray-700 mb-2 ml-8">MELCHIORI, MARIA LAURA | Directora</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('comercio')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE COMERCIO, HABILITACIÓN E INSPECCIÓN</h1>
                <p className="text-gray-700 mb-2">
                MORI, DAMIAN FEDERICO CESAR | Subsecretario
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.comercio && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE HABILITACIONES INDUSTRIALES, COMERCIOS Y REBA</h1>
                <p className="text-gray-700 mb-2 ml-8">INSAURRALDE, ANGELINA ANDREA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('salud')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE SALUD</h1>
                <p className="text-gray-700 mb-2">
                BALIELA GRASSINO, CARLOS ALBERTO | Subsecretario
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.salud && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL DE ATENCIÓN PRIMARIA Y PREVENCIÓN DE LA SALUD</h1>
                <p className="text-gray-700 mb-2 ml-8">ELMER, MARCELO ALEJANDRO | Director General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL ADMINISTRATIVA DEL HOSPITAL MUNICIPAL</h1>
                <p className="text-gray-700 mb-2 ml-8">LENGUITTI, JULIO MANUEL | Director General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL MÉDICA DEL HOSPITAL MUNICIPAL</h1>
                <p className="text-gray-700 mb-2 ml-8">EJARQUE, SILVIO ROBERTO | Director General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE ENFERMERÍA</h1>
                <p className="text-gray-700 mb-2 ml-8">SOTTO, NORA BEATRIZA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('personas')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN GENERAL DE PERSONAL Y CAPITAL HUMANO</h1>
                <p className="text-gray-700 mb-2">
                VIGLIETTI, VALERIA BEATRIZ | Directora General
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.personas && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE LIQUIDACIONES</h1>
                <p className="text-gray-700 mb-2 ml-8">ROJAS, DIANA MARIA | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE PREVISIÓN SOCIAL</h1>
                <p className="text-gray-700 mb-2 ml-8">CHERUSE, AGOSTINA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE LOGÍSTICA</h1>
                <p className="text-gray-700 mb-2">
                GUILANEA, JUAN MANUEL | Director
                </p>
                </ul>
              )}
              <ul>
          <li>
          {/* secretaria de modernizacion */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('modernizacion')}
            >
              <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SECRETARÍA DE MODERNIZACIÓN Y GESTION PÚBLICA
              <p className="text-black mb-2">
              RODRIGO GARCIA OTERO | Secretario
              </p>
              </h1>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.modernizacion && (
                <ul>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('legal')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE LEGAL Y TÉCNICA</h1>
                <p className="text-gray-700 mb-2">
                GENTILE, ELIANA | Subsecretaria
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.legal && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN DE DESPACHO, MESA DE ENTRADAS Y ARCHIVO</h1>
                <p className="text-gray-700 mb-2 ml-8">MORO, MARIA CRISTINA | Directora</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE DESPACHO Y ARCHIVO</h1>
                <p className="text-gray-700 mb-2 ml-8">LOPEZ, DEBORA VANINA | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE ASUNTOS JUDICIALES</h1>
                <p className="text-gray-700 mb-2 ml-8">DELEGLISE, MARIANELA | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN DE DEFENSA DEL CONSUMIDOR</h1>
                <p className="text-gray-700 mb-2 ml-8">ARTERO, MARIA EUGENIA | Directora</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('urbana')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE PLANIFICACIÓN URBANA Y HÁBITAT</h1>
                <p className="text-gray-700 mb-2">
                CARLSSON, ERIKA | Subsecretaria
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.urbana && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN DE REGULACIÓN DOMINIAL Y TIERRAS</h1>
                <p className="text-gray-700 mb-2 ml-8">ROSSIER, MARCELO DANIEL PEDRO | Director</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE BANCO DE TIERRAS</h1>
                <p className="text-gray-700 mb-2 ml-8">SANTAGATI, NESTOR JUAN | Jefe de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE CATASTRO</h1>
                <p className="text-gray-700 mb-2 ml-8">RIOLFO, PATRICIA MABEL | Jefe de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('tecnologia')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN DE INNOVACIÓN TECNOLOGÍCA</h1>
                <p className="text-gray-700 mb-2">
                CHENA, GUSTAVO RUBEN | Director
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.tecnologia && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE SISTEMAS Y PROGRAMACIÓN</h1>
                <p className="text-gray-700 mb-2 ml-8">MAROLI, DARIO JAVIER | Jefe de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
                </ul>
              )}
              <ul>
          <li>
          {/* secretaria de obras y servicios publicos */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('obras')}
            >
              <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SECRETARÍA DE OBRAS Y SERVICIOS PÚBLICOS</h1>
              <p className="text-black mb-2">
              ARIEL JORGE SPRENGER | Secretario
              </p>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.obras && (
                <ul>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('servicios')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SUBSECRETARÍA DE SERVICIOS PÚBLICOS</h1>
                <p className="text-gray-700 mb-2">
                GENOUD, JULIO RICARDO | Subsecretario
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.servicios && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN GENERAL DE VIALIDAD Y SERVICIOS PÚBLICOS</h1>
                <p className="text-gray-700 mb-2 ml-8">CHAPUIS, JUAN OSVALDO | Director General</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE MANTENIMIENTO MECÁNICO</h1>
                <p className="text-gray-700 mb-2 ml-8">BEREN, EDGARDO LUIS | Jefe de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <h1
                className="font-bold cursor-pointer ml-8"
              >
                 SUBSECRETARÍA DE OBRAS SANITARIAS Y ESPACIOS PÚBLICOS</h1>
                <p className="text-gray-700 mb-2">
                MALACALZA, DARIO DAMIAN | Subsecretario
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('publicas')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN GRAL DE OBRAS PÚBLICAS</h1>
                <p className="text-gray-700 mb-2">
                CORREA, PABLO HERNAN | Director General
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.publicas && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DIRECCIÓN DE OBRAS PÚBLICAS Y LICITACIONES</h1>
                <p className="text-gray-700 mb-2 ml-8">FACHETTI, JULIETA | Directora</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
                </ul>
              )}
              <ul>
          <li>
          {/* secretaria de Hacienda y finanzas publicas */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('finanzas')}
            >
              <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SECRETARÍA DE HACIENDA Y FINANZAS PÚBLICAS
              <p className="text-black mb-2">
              FEDERICO GABRIEL CATALDO | Secretario
              </p>
              </h1>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.finanzas && (
                <ul>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('tesoreria')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> TESORERÍA MUNICIPAL</h1>
                <p className="text-gray-700 mb-2">
                PANNO, MARCELA ANDREA | Tesorera
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.tesoreria && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">SUBTESORERÍA MUNICIPAL</h1>
                <p className="text-gray-700 mb-2 ml-8">CASTRO, JOSE LUIS | Sub Tesorero</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE TESORERÍA</h1>
                <p className="text-gray-700 mb-2 ml-8">MARTINEZ, MIRIAM PATRICIA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('contaduria')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> CONTADURÍA MUNICIPAL</h1>
                <p className="text-gray-700 mb-2">
                PREIS, ELBA SILVIA | Contadora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.contaduria && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">SUBCONTADURÍA MUNICIPAL</h1>
                <p className="text-gray-700 mb-2 ml-8">VERGARA, CARLA LORENA | Sub Contadora</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE PATRIMONIO</h1>
                <p className="text-gray-700 mb-2 ml-8">GAFURI, MICAELA ABIGAIL | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 JEFA DE COMPRAS MUNICIPAL</h1>
                <p className="text-gray-700 mb-2">
                PULIDO, ANDREA PAULA | Jefa de Compras
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('fiscalizacion')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN DE FISCALIZACIÓN</h1>
                <p className="text-gray-700 mb-2">
                ETCHEVERRY, CECILIA BEATRIZ | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.fiscalizacion && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE CONTROL DE ASUNTOS ECONÓMICOS</h1>
                <p className="text-gray-700 mb-2 ml-8">VARGAS, ANDREA ANALIA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('presupuestaria')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN DE CONTROL Y ADMINISTACIÓN PRESUPUESTARIA</h1>
                <p className="text-gray-700 mb-2">
                CUNNINGHAM, ANA MARIA | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.presupuestaria && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE PRESUPUESTO</h1>
                <p className="text-gray-700 mb-2 ml-8">PUSICH, MARIA SOL | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('municipales')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN DE RECURSOS MUNICIPALES</h1>
                <p className="text-gray-700 mb-2">
                JULIANO, MARIANA RAQUEL | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.municipales && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE TASAS, DERECHOS Y TRIBUTACIONES</h1>
                <p className="text-gray-700 mb-2 ml-8">ROSAS, ELMA FABIANA | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE ACTIVIDADES ECONÓMICAS</h1>
                <p className="text-gray-700 mb-2 ml-8">SILVA ALVARADO, GABRIELA INES | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE ACTIVIDADES RURALES</h1>
                <p className="text-gray-700 mb-2 ml-8">LIAUDAT, SILVIO RAUL | Jefe de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE ARCHIVO DE RENTAS MUNICIPAL</h1>
                <p className="text-gray-700 mb-2 ml-8">PASCUALI, MARISA LILIAN | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE RECURSOS PROVINCIALES</h1>
                <p className="text-gray-700 mb-2">
                VILLANUEVA, MARIA JOSE | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
          <li>
          {/* secretaria de desarrollo social */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('desarrollo')}
            >
              <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SECRETARÍA DE DESARROLLO SOCIAL
              <p className="text-black mb-2">
              SANTIAGO ERROZ | SecretarioSANTIAGO ERROZ | Secretario
              </p>
              </h1>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.desarrollo && (
                <ul>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('sociales')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN GENERAL DE POLÍTICAS SOCIALES</h1>
                <p className="text-gray-700 mb-2">
                SIMOUR, MARINA NOEMI | Directora General
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.sociales && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE SEGURIDAD ALIMENTARIA Y ASISTENCIA CRÍTICA</h1>
                <p className="text-gray-700 mb-2 ml-8">PEREZ, JORGELINA BEATRIZ | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE DISCAPACIDAD Y PERSONAS ADULTAS MAYORES</h1>
                <p className="text-gray-700 mb-2 ml-8">SOLARI, SABINA | Jefa de Departamento</p>
                </li>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE CENTROS BARRIALES Y GESTIÓN COMUNITARIA</h1>
                <p className="text-gray-700 mb-2 ml-8">MOREL, HECTOR ARNALDO | Jefe de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <ul>
                <li>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('familia')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN GENERAL DE NIÑEZ, ADOLESCENCIA Y FAMILIA</h1>
                <p className="text-gray-700 mb-2">
                TOBARES, LUIS FERNANDO| Director General
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
                </div>
              </li>
              </ul>
              {sections.familia && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE HOGAR DEL NIÑO</h1>
                <p className="text-gray-700 mb-2 ml-8">PUCHI, MARIANELA VANESA | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN GENERAL DE PARTICIPACIÓN Y RELACIONES CON LA COMUNIDAD</h1>
                <p className="text-gray-700 mb-2">
                NEGRE, NATALIA JIMENA | Directora General
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE DDHH Y DIVERSIDAD SEXUAL</h1>
                <p className="text-gray-700 mb-2">
                BARRAS, GIANFRANCO | Director
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
              <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE JUVENTUDES</h1>
                <p className="text-gray-700 mb-2">
                SAVARESI, AGOSTINA | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
              <ul>
          <li>
          {/* secretaria de cultura, educación y deportes */}
            <h1
              className="text-blue-header font-bold cursor-pointer"
              onClick={() => toggleSection('cultura')}
            >
              <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> SECRETARÍA DE CULTURA, EDUCACIÓN Y DEPORTES
              <p className="text-black mb-2">
              SILVANA NOEMI IOZZIA | Secretaria
              </p>
              </h1>
              <div className="border-solid border-b-2 border-b-gray-400">
                </div>
                </li>
                </ul>
              {sections.cultura && (
                <ul>
                  <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE CULTURA</h1>
                <p className="text-gray-700 mb-2">
                NOYA, MARIA VERONICA | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                <h1
                className="font-bold cursor-pointer ml-8"
                onClick={() => toggleSection('educacion')}
              >
                <BsArrowRightShort className="text-blue-header inline text-xl relative bottom-[1px]"/> DIRECCIÓN DE EDUCACIÓN Y JARDINES DE INFANTES MUNICIPALES</h1>
                <p className="text-gray-700 mb-2">
                SILVA, IRMA ALICIA | Directora
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                {sections.educacion && (
                <ul>
                <li>
                  <h1 className="text-gray-500 font-bold mt-2 ml-8">DPTO DE CENTRO MUNICIPAL UNIVERSITARIO</h1>
                <p className="text-gray-700 mb-2 ml-8">ALONSO, SILVANA INES | Jefa de Departamento</p>
                </li>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
                )}
                <h1
                className="font-bold cursor-pointer ml-8"
              >
                 DIRECCIÓN DE DEPORTES</h1>
                <p className="text-gray-700 mb-2">
                MINDURRY, OSVALDO JOSE HORACIO | Director
                </p>
                <div className="border-solid border-b-2 border-b-gray-400">
              </div>
                </ul>
              )}
        </div>
      </div>
    </>
  )
}
