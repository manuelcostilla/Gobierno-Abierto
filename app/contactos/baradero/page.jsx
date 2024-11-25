import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { BannerText } from "@/components/bannertext"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Telefonosfijos } from "@/components/telefonosFijos"

function Contactos () {
  const contactoItems = [
    {
      icon: <Mail />,
      title: "Correo electrónico",
      link: "mailto:baradero@baradero.gob.ar",
      text: "baradero@baradero.gob.ar",
      label: "Correo electrónico",
    },
    {
      icon: <MapPin />,
      title: "Dirección",
      link: "https://www.google.com/maps/place/Municipalidad+de+Baradero/@-33.8064118,-59.5053001,17z/data=!3m1!4b1!4m6!3m5!1s0x95ba37ca3e544c29:0xda0f3f48e49120fb!8m2!3d-33.8064163!4d-59.5027252!16s%2Fg%2F11g1l5q9jm?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
      text: "San Martín 905, Baradero",
      label: "Dirección",
    },
    {
      icon: <Clock />,
      title: "Horario de Atención",
      text: "Lunes a Viernes, 7:00 - 12:00",
      label: "Horario de atención",
    },
  ]

  const dataTelefonia = [
    {
      id: 1,
      telefono: "482677",
      localidad: "BARADERO",
      sector: "Administración (ROTATIVA)",
    },
    {
      id: 2,
      telefono: "482900",
      localidad: "BARADERO",
      sector: "Administración (ROTATIVA)",
    },
    {
      id: 3,
      telefono: "480413",
      localidad: "BARADERO",
      sector: "Administración Privada (FAX)",
    },
    {
      id: 4,
      telefono: "488786",
      localidad: "BARADERO",
      sector: "Anfiteatro Municipal",
    },
    {
      id: 5,
      telefono: "486697",
      localidad: "BARADERO",
      sector: "Atención Primaria - ex Sala Don Mario",
    },
    {
      id: 6,
      telefono: "485232/482270",
      localidad: "BARADERO",
      sector: "Biblioteca/Internet",
    },
    {
      id: 7,
      telefono: "483575",
      localidad: "BARADERO",
      sector: "Bromatología",
    },
    {
      id: 8,
      telefono: "481543",
      localidad: "BARADERO",
      sector: "Casa de la Mujer",
    },
    {
      id: 9,
      telefono: "480481",
      localidad: "BARADERO",
      sector: "Centro de Cultura",
    },
    {
      id: 10,
      telefono: "486919",
      localidad: "BARADERO",
      sector: "Centro de Cultura - Secretaria",
    },
    {
      id: 11,
      telefono: "486465",
      localidad: "BARADERO",
      sector: "Centro Cultural Nestor Kirchner",
    },
    {
      id: 12,
      telefono: "481375",
      localidad: "BARADERO",
      sector: "Centro Esperanza",
    },
    {
      id: 13,
      telefono: "486706",
      localidad: "BARADERO",
      sector: "Centro Integrador Comunitario CIC",
    },
    {
      id: 14,
      telefono: "486915",
      localidad: "BARADERO",
      sector: "Comision Puerto Ultramar",
    },
    {
      id: 15,
      telefono: "481392",
      localidad: "BARADERO",
      sector: "Compras (FAX)",
    },
    {
      id: 16,
      telefono: "480615",
      localidad: "BARADERO",
      sector: "Corralón",
    },
    {
      id: 17,
      telefono: "481526",
      localidad: "BARADERO",
      sector: "Corralón Porteria",
    },
    {
      id: 18,
      telefono: "482681",
      localidad: "BARADERO",
      sector: "Deportes",
    },
    {
      id: 19,
      telefono: "486918",
      localidad: "BARADERO",
      sector: "Derechos Humanos",
    },
    {
      id: 20,
      telefono: "483092",
      localidad: "BARADERO",
      sector: "H.C.D.",
    },
    {
      id: 21,
      telefono: "480479",
      localidad: "BARADERO",
      sector: "Hogar de Ancianos",
    },
    {
      id: 22,
      telefono: "481626",
      localidad: "BARADERO",
      sector: "Hogar del Niño",
    },
    {
      id: 23,
      telefono: "107",
      localidad: "BARADERO",
      sector: "Hospital (107)",
    },
    {
      id: 24,
      telefono: "486910",
      localidad: "BARADERO",
      sector: "Juez de Faltas",
    },
    {
      id: 25,
      telefono: "483627",
      localidad: "BARADERO",
      sector: "Turismo (oficina)",
    },
  ]

  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES BARADERO" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-start">
            <Card className="bg-white m-5 text-black w-full">
              <CardContent>
                <Telefonosfijos dataTelefonia={dataTelefonia} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-between">
            {contactoItems.map((item, index) => (
              <Card key={index} className="bg-white m-5 text-black">
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-start">
                      {item.icon}
                      {item.link
                        ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="pl-2"
                          aria-label={item.label}
                        >
                          {item.title}
                        </a>
                          )
                        : (
                        <p className="pl-2">{item.title}</p>
                          )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.link
                    ? (
                    <Link
                      href={item.link}
                      className="text-gray-600"
                      target="_blank"
                    >
                      {item.text}
                    </Link>
                      )
                    : (
                    <p className="text-gray-600">{item.text}</p>
                      )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactos
