import React from "react"
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  FileText,
  FileCheck,
  Users,
  Building,
  ArrowLeft,
} from "lucide-react"
import { secretarias } from "../data/data"
import Link from "next/link"

export function generateStaticParams() {
  return secretarias.map((sec) => ({
    id: sec.id.toString(),
  }))
}

export default async function SecretariaDetail({ params }) {
  const { id } = await params
  const secretaria = secretarias.find((item) => item.id === parseInt(id))

  if (!secretaria) {
    return <div>Secretaría no encontrada</div>
  }

  return (
    <div className="min-h-screen bg-neutral-50/50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/areas-de-gobierno"
          className="inline-flex items-center gap-2 text-blue-GobAb hover:text-blue-title font-bold transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          VOLVER AL LISTADO
        </Link>
      </div>
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <img
          src={secretaria.imagen}
          alt={secretaria.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            {secretaria.titulo}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Info & Official */}
          <div className="lg:col-span-2 space-y-12">
            {/* Section: Functionary */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img
                  src={secretaria.funcionario.cvfoto}
                  alt={secretaria.funcionario.nombre}
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {secretaria.funcionario.nombre}
                  </h2>
                  <p className="text-gray-600 mb-4 uppercase tracking-wider font-semibold">
                    {secretaria.funcionario.posicion}
                  </p>
                  <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
                    <a
                      href={secretaria.funcionario.curriculum}
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition shadow-md"
                    >
                      <FileText className="mr-2" size={20} />
                      Ver Curriculum
                    </a>
                    <a
                      href={secretaria.funcionario.declaracionJurada}
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-600 transition shadow-md"
                    >
                      <FileCheck className="mr-2" size={20} />
                      DDJJ
                    </a>
                    <a
                      href={secretaria.funcionario.decretoDesignacion}
                      className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition shadow-md"
                    >
                      <FileCheck className="mr-2" size={20} />
                      Decreto de Designación
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Mission & Functions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <Building className="mr-3 text-blue-600" /> Misión y Funciones
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {secretaria.descripcionCompleta}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secretaria.funciones.map((fun, index) => (
                  <li key={index} className="flex items-start bg-blue-50 p-4 rounded-xl">
                    <div className="mr-3 mt-1 h-2 w-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{fun}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{secretaria.contactos.Direccion}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{secretaria.contactos.Celular}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{secretaria.contactos.email}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{secretaria.contactos.horarios}</span>
                </div>
              </div>
            </div>

            {/* Structure Links */}
            <div className="bg-blue-900 p-6 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Users className="mr-3" /> Estructura
              </h3>
              <ul className="space-y-3">
                {secretaria.estructura.secretaria?.map((item, index) => (
                  <li key={index} className="flex items-center group cursor-pointer hover:bg-blue-800 p-2 rounded-lg transition">
                    <div className="h-1.5 w-1.5 bg-blue-300 rounded-full mr-3" />
                    <span className="text-sm font-medium">{item.nombre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
