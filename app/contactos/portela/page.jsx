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
      link: "mailto:portela@baradero.gob.ar",
      text: "portela@baradero.gob.ar",
      label: "Correo electrónico",
    },
    {
      icon: <MapPin />,
      title: "Dirección",
      link: "https://www.google.es/maps/place/Delegacion+Municipal+Ireneo+Portela/@-33.9816676,-59.6713328,20.21z/data=!4m6!3m5!1s0x95bbd3a39c521b0d:0x12f6aeae94e2083a!8m2!3d-33.9816287!4d-59.6710886!16s%2Fg%2F11gslq9n61?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D",
      text: "primera colonia 360, Ireneo Portela, Provincia de Buenos Aires",
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
      telefono: "496027",
      localidad: "PORTELA",
      sector: "Cultura",
    },
    {
      id: 2,
      telefono: "496028",
      localidad: "PORTELA",
      sector: "Jardin de Infantes",
    },
    {
      id: 3,
      telefono: "496029",
      localidad: "PORTELA",
      sector: "CEPT 17",
    },
    {
      id: 4,
      telefono: "496030",
      localidad: "PORTELA",
      sector: "Delegación",
    },
    {
      id: 5,
      telefono: "496032",
      localidad: "PORTELA",
      sector: "Casa Medico",
    },
    {
      id: 6,
      telefono: "496033",
      localidad: "PORTELA",
      sector: "Sala de 1º Auxilios",
    },
    {
      id: 7,
      telefono: "496034",
      localidad: "PORTELA",
      sector: "Escuela Nº 10",
    },
    {
      id: 8,
      telefono: "496031",
      localidad: "PORTELA",
      sector: "Policia",
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
