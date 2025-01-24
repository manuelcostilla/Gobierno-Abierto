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
      link: "mailto:santacoloma@baradero.gob.ar",
      text: "santacoloma@baradero.gob.ar",
      label: "Correo electrónico",
    },
    {
      icon: <MapPin />,
      title: "Dirección Delegación Municipal",
      link: "https://www.google.com/maps/place/Delegacion+Municipal+Santa+Coloma/@-34.0590479,-59.5624345,18z/data=!3m1!4b1!4m6!3m5!1s0x95bbc980bd9cca7f:0x1babb9e4a5c9a8d7!8m2!3d-34.0590501!4d-59.5611837!16s%2Fg%2F11ffv16hqd?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      text: "Calle Ceibo entre Ombú y Libertad, B2761 Santa Coloma, Provincia de Buenos Aires",
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
      telefono: "15591172",
      localidad: "SANTA COLOMA",
      sector: "Delegación - Sala",
    },
    {
      id: 2,
      telefono: "232615421124",
      localidad: "SANTA COLOMA",
      sector: "Delegación - Sala Semi Publico",
    },
  ]

  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES SANTA COLOMA" />
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
