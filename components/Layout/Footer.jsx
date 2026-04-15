/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe, Facebook, Instagram, Youtube } from "lucide-react"
import escudo_baradero from "../../public/imagenes/Escudo_Municipio.png"
import logo_baradero from "../../public/logo_negro.png"

const XIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
)

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100 text-neutral-800 py-16 border-t border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo and Socials */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <Image
              src={logo_baradero}
              alt="Municipio de Baradero"
              width={250}
              height={80}
              className=""
            />
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/MunicipalidaddeBaradero/" target="_blank" className="text-neutral-600 hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.instagram.com/municipiodebaradero/" target="_blank" className="text-neutral-600 hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://twitter.com/municipalidadba" target="_blank" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                <XIcon size={22} />
              </Link>
              <Link href="https://www.youtube.com/@municipalidadbaradero9936" target="_blank" className="text-neutral-600 hover:text-red-500 transition-colors">
                <Youtube size={24} />
              </Link>
              <Link href="https://baradero.gob.ar/" target="_blank" className="text-neutral-600 hover:text-green-500 transition-colors">
                <Globe size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-4">
            <h3 className="text-neutral-900 font-bold text-lg uppercase tracking-wider">Contacto</h3>
            <div className="space-y-2 text-neutral-600">
              <p>Municipalidad Santiago del Baradero</p>
              <p>Av. San Martín 905</p>
              <p>Baradero (B2942)</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          {/* Escudo */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={escudo_baradero}
              alt="Escudo de Baradero"
              width={100}
              height={170}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} Gobierno Abierto - Municipio de Baradero. Transparencia y Participación Ciudadana.</p>
        </div>
      </div>
    </footer>
  )
}
