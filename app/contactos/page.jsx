import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { BannerText } from "@/components/bannertext"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

function Contactos () {
  return (
    <>
      <BannerText titulo="Contactos Municipales" />
      <div className="flex justify-center items-center pt-5">
        <p className=" text-balance text-xl">
          Estamos aquí para ayudarte. No dudes en ponerte en contacto con
          nosotros para cualquier consulta o trámite que necesites realizar.
        </p>
      </div>
      <div className=" container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className=" bg-white m-5 text-black">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-start">
                  <Phone />
                  <a href="tel:+543329480020" className="pl-2">
                    Teléfono
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+543329480020" className=" text-gray-600">
                (03329) 48-0020
              </a>
            </CardContent>
          </Card>
          <Card className=" bg-white m-5 text-black">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-start">
                  <Mail />
                  <a
                    href="mailto:info@baradero.gob.ar"
                    target="_blank"
                    className="pl-2"
                  >
                    Correo Electrónico
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:info@baradero.gob.ar"
                target="_blank"
                className="text-gray-600"
              >
                info@baradero.gob.ar
              </a>
            </CardContent>
          </Card>
          <Card className="bg-white m-5 text-black">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-start">
                  <MapPin />
                  <Link
                    href="https://www.google.com/maps/place/Municipalidad+de+Baradero/@-33.8064118,-59.5053001,17z/data=!3m1!4b1!4m6!3m5!1s0x95ba37ca3e544c29:0xda0f3f48e49120fb!8m2!3d-33.8064163!4d-59.5027252!16s%2Fg%2F11g1l5q9jm?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="pl-2"
                  >
                    Dirección
                  </Link>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://www.google.com/maps/place/Municipalidad+de+Baradero/@-33.8064118,-59.5053001,17z/data=!3m1!4b1!4m6!3m5!1s0x95ba37ca3e544c29:0xda0f3f48e49120fb!8m2!3d-33.8064163!4d-59.5027252!16s%2Fg%2F11g1l5q9jm?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                className="text-gray-600"
                target="_blank"
              >
                San Martín 1063, Baradero
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white m-5 text-black">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-start">
                  <Clock />
                  <p className="pl-2">Horario de Atención</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Lunes a Viernes, 7:00 - 12:00</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Contactos
