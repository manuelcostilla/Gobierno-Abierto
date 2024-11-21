// direccion San martin 295

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
      link: "mailto:alsina@baradero.gob.ar",
      text: "alsina@baradero.gob.ar",
      label: "Correo electrónico",
    },
    {
      icon: <MapPin />,
      title: "Dirección",
      link: "https://www.google.es/maps/place/Delegacion+Municipal+Alsina/@-33.9093616,-59.393731,17z/data=!3m1!4b1!4m6!3m5!1s0x95bbb59c0f492ca1:0xc5f42b302a6b0a8f!8m2!3d-33.9093661!4d-59.3911561!16s%2Fg%2F11gyxd69hx?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D",
      text: " San martin 295, Alsina, Provincia de Buenos Aires",
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
      telefono: "494024",
      localidad: "ALSINA",
      sector: "Delegación",
    },
    {
      id: 2,
      telefono: "494048",
      localidad: "ALSINA",
      sector: "Jardín de Infantes",
    },
    {
      id: 3,
      telefono: "494095",
      localidad: "ALSINA",
      sector: "Sala 1Auxilio",
    },
    {
      id: 4,
      telefono: "494020",
      localidad: "ALSINA",
      sector: "C. Medico",
    },
  ]

  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES PORTELA" />
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
