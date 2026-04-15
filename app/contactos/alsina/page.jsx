// direccion San martin 295

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { BannerText } from "@/components/bannertext"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
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
      title: "Dirección Delegación Municipal",
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
      telefono: "(3329) 494024",
      localidad: "ALSINA",
      sector: "Delegación",
    },
    {
      id: 2,
      telefono: "+54 (3329) 494048",
      localidad: "ALSINA",
      sector: "Jardín de Infantes",
    },
    {
      id: 3,
      telefono: "+54 (3329) 494095",
      localidad: "ALSINA",
      sector: "Sala 1Auxilio",
    },
    {
      id: 4,
      telefono: "+54 (3329) 494020",
      localidad: "ALSINA",
      sector: "C. Medico",
    },
  ]

  return (
    <>
      <BannerText titulo="CONTACTOS MUNICIPALES ALSINA" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-start w-full"
          >
            <Card className="bg-white/80 backdrop-blur-xl border border-neutral-100 rounded-[2.5rem] shadow-xl w-full overflow-hidden">
              <CardContent className="p-0">
                <Telefonosfijos dataTelefonia={dataTelefonia} />
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-6">
            {contactoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-neutral-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-50 text-blue-GobAb rounded-xl group-hover:bg-blue-GobAb group-hover:text-white transition-all duration-300">
                          {item.icon && <item.icon.type {...item.icon.props} size={20} />}
                        </div>
                        {item.link
                          ? (
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-lg font-black text-blue-title tracking-tight hover:text-blue-GobAb transition-colors uppercase leading-none"
                            aria-label={item.label}
                          >
                            {item.title}
                          </a>
                            )
                          : (
                          <span className="text-lg font-black text-blue-title tracking-tight uppercase leading-none">{item.title}</span>
                            )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.link
                      ? (
                      <Link
                        href={item.link}
                        className="text-neutral-500 text-sm font-medium hover:text-blue-600 transition-colors"
                        target="_blank"
                      >
                        {item.text}
                      </Link>
                        )
                      : (
                      <p className="text-neutral-500 text-sm font-medium">{item.text}</p>
                        )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactos
