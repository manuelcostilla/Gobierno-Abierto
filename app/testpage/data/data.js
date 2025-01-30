import { Landmark } from "lucide-react"

export const secretarias = [
  {
    id: 1,
    titulo: "Intendencia",
    descripcionCorta: "Gestion de la ciudad de Baradero",
    icon: <Landmark height={70} width={70} color="#007CB6" />,
    imagen: "/testbanner.jpg",
    cvlink: "#",
    funcionario: {
      nombre: "Esteban  Damian Sanzio",
      posicion: "Intendente",
      cvfoto: "/test.webp",
      curriculum: "#",
      declaracionJurada: "#",
    },
    descripcionCompleta:
      "Esteban Damián Sanzio es el actual intendente de la ciudad de Baradero, comprometido con el desarrollo y bienestar de la comunidad. Durante su gestión, ha trabajado en la mejora de la infraestructura local, el fortalecimiento de los servicios públicos y el impulso de políticas que fomenten el crecimiento económico y social de la ciudad.",
    estructura: {
      secretaria: [
        { nombre: "Secretaria General De Gobierno" },
        { nombre: "Secretaria De Planificacion Y Gestion Publica" },
        { nombre: "Secretaría De Obras Y Servicios Públicos" },
        { nombre: "Secretaría De Hacienda Y Finanzas Públicas" },
        { nombre: "Secretaría De Cultura, Educación, Comunicación Y Deportes" },
        { nombre: "Secretaría De Salud" },
        { nombre: "Secretaría De Desarrollo Social" },
      ],
    },
    funciones: [
      "Dirigir la administración general y coordinar el funcionamiento del gobierno municipal.",
      "Representar al municipio en actos oficiales y relaciones institucionales.",
      "Garantizar el cumplimiento de ordenanzas, reglamentos y resoluciones locales.",
      "Coordinar acciones de gestión de emergencias y protección civil.",
      "Supervisar la ejecución de políticas públicas en todas las secretarías.",
    ],
    proyectos: [
      {
        titulo: "Mirgor",
        descripcion: "Fabrica de robotica y autopartes"
      }
    ],
    contactos: {
      Direccion: "xxxxxxxxxxx, xxxxxx Baradero",
      Celular: "xxxx-xxxxxx",
      email: "intendente@baradero.gob.ar",
      horarios: "Lunes a Viernes: 8:00 - 14:00"
    },
    links: [
      { titulo: "Facebook", url: "#" },
      { titulo: "Instagram", url: "#" },
      { titulo: "X", url: "#" },
    ]
  },
]
