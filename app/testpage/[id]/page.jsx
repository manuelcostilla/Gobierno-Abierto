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
} from "lucide-react"
import { secretarias } from "../data/data"

function SecretariaDetail ({ params }) {
  const { id } = params
  const secretaria = secretarias.find((item) => item.id === parseInt(id))

  if (!secretaria) {
    return <div>Secretaría no encontrada</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <img
          src={secretaria.imagen}
          alt={secretaria.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-4xl font-bold text-white">
                {secretaria.titulo}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Official Information Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Funcionario a Cargo</h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={secretaria.funcionario.cvfoto}
                    alt={secretaria.funcionario.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-xl font-semibold mb-2">
                    {secretaria.funcionario.nombre}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {secretaria.funcionario.posicion}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <a
                      href={secretaria.funcionario.curriculum}
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
                    >
                      <FileText className="mr-2" size={20} />
                      Ver Curriculum
                    </a>
                    <a
                      href={secretaria.funcionario.declaracionJurada}
                      className="inline-flex items-center justify-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      <FileCheck className="mr-2" size={20} />
                      Declaración Jurada
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizational Structure */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">
                Estructura Organizacional
              </h3>

              {/* Secretarías */}
              {secretaria.estructura.secretarias?.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={24} className="text-blue-900" />
                    <h4 className="text-xl font-semibold">Secretarías</h4>
                  </div>
                  <div className="grid gap-4">
                    {secretaria.estructura.secretarias.map((sec, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900">
                          {sec.nombre}
                        </h5>
                        <p className="text-gray-600 text-sm mt-1">
                          {sec.responsabilidades}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subsecretarías */}
              {secretaria.estructura.subsecretarias?.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={24} className="text-blue-900" />
                    <h4 className="text-xl font-semibold">Subsecretarías</h4>
                  </div>
                  <div className="grid gap-4">
                    {secretaria.estructura.subsecretarias.map(
                      (subsec, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-900">
                            {subsec.nombre}
                          </h5>
                          <p className="text-gray-600 text-sm mt-1">
                            {subsec.responsabilidades}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Direcciones */}
              {secretaria.estructura.directores?.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={24} className="text-blue-900" />
                    <h4 className="text-xl font-semibold">Direcciones</h4>
                  </div>
                  <div className="grid gap-4">
                    {secretaria.estructura.directores.map((dir, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900">
                          {dir.nombre}
                        </h5>
                        <p className="text-gray-600 text-sm mt-1">
                          {dir.responsabilidades}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">
                Acerca de la Secretaría
              </h3>
              <p className="text-gray-600 mb-6">
                {secretaria.descripcionCompleta}
              </p>

              <h4 className="text-xl font-semibold mb-4">
                Funciones Principales
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                {secretaria.funciones.map((funcion, index) => (
                  <li key={index}>{funcion}</li>
                ))}
              </ul>

              <h4 className="text-xl font-semibold mb-4">
                Proyectos Destacados
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {secretaria.proyectos.map((proyecto, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">{proyecto.titulo}</h5>
                    <p className="text-sm text-gray-600">
                      {proyecto.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-4">
                Información de Contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">
                      {secretaria.contactos.Direccion}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">
                      {secretaria.contactos.Celular}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">
                      {secretaria.contactos.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-gray-600">
                      {secretaria.contactos.horarios}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {secretaria.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-blue-900 hover:text-blue-700 transition flex items-center"
                    >
                      <span className="mr-2">→</span>
                      {link.titulo}
                    </a>
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

export default SecretariaDetail
