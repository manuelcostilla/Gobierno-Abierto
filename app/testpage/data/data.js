import {
  Landmark,
  Laptop,
  Briefcase,
  Hammer,
  ChartArea,
  Users,
  Cross,
  Handshake,
} from "lucide-react"

export const secretarias = [
  {
    id: 1,
    nombre: "Intendencia",
    encargado: "Esteban Damián Sanzio",
    descripcion:
      "La Intendencia representa la máxima autoridad ejecutiva del municipio. Su función principal es dirigir, coordinar y supervisar la administración pública local, garantizando el cumplimiento de las políticas y programas gubernamentales. Además, promueve el desarrollo integral del municipio y gestiona la relación con otros niveles de gobierno.",
    dependencias: [
      {
        id: "1",
        nombre: "Secretaria General De Gobierno",
        encargado: "Silvana Noemí Iozzia",
        icon: <Briefcase height={50} width={50} color="#007CB6" />,
        cargo: "Secretaria",
        descripcion:
          "Actúa como el órgano coordinador entre el Intendente y las distintas secretarías. Su responsabilidad incluye la gestión administrativa y legal del municipio, así como la supervisión del cumplimiento normativo. Además, facilita la comunicación institucional y la implementación de decisiones ejecutivas.",
      },
      {
        id: "2",
        nombre: "Secretaria De Planificacion Y Gestion Publica",
        encargado: "Rodrigo Garcia Otero",
        icon: <Laptop height={50} width={50} color="#007CB6" />,
        cargo: "Secretario",
        descripcion:
          "Su función principal es diseñar, planificar y evaluar políticas públicas a corto, mediano y largo plazo. Coordina proyectos estratégicos para optimizar la eficiencia y modernización de la gestión pública, promoviendo la innovación y el uso responsable de los recursos.",
      },
      {
        id: "3",
        nombre: "Secretaría De Obras Y Servicios Públicos",
        encargado: "Ariel Jorge Sprenger",
        icon: <Hammer height={50} width={50} color="#007CB6" />,
        cargo: "Secretario",
        descripcion:
          "Encargada de la planificación, ejecución y mantenimiento de las infraestructuras y servicios públicos municipales, como redes de agua, cloacas, pavimentación, alumbrado y espacios verdes. También garantiza la prestación de servicios esenciales para el bienestar de la comunidad.",
      },
      {
        id: "4",
        nombre: "Secretaría De Hacienda Y Finanzas Públicas",
        encargado: "Federico Gabriel Cataldo",
        icon: <ChartArea height={50} width={50} color="#007CB6" />,
        cargo: "Secretario",
        descripcion:
          "Gestiona los recursos económicos del municipio. Sus funciones incluyen la elaboración del presupuesto anual, el control de ingresos y egresos, la administración tributaria y el cumplimiento de las normativas financieras para asegurar una gestión eficiente y transparente.",
      },
      {
        id: "5",
        nombre: "Secretaría De Cultura, Educación, Comunicación Y Deportes",
        encargado: "Luciana Depauli",
        icon: <Users height={50} width={50} color="#007CB6" />,
        cargo: "Secretaria",
        descripcion:
          "Fomenta la vida cultural, educativa y deportiva del municipio. Promueve programas de acceso a la educación, actividades recreativas y eventos culturales, al tiempo que gestiona la comunicación institucional para mantener informada a la comunidad.",
      },
      {
        id: "6",
        nombre: "Secretaría De Salud",
        encargado: "Dario José Puede",
        icon: <Cross height={50} width={50} color="#007CB6" />,
        cargo: "Secretario",
        descripcion:
          "Responsable de garantizar el acceso a servicios de salud pública de calidad. Administra centros de atención médica, campañas de prevención y programas de promoción de la salud, priorizando el bienestar físico y mental de la población.",
      },
      {
        id: "7",
        nombre: "Secretaría De Desarrollo Social",
        encargado: "Santiago Erroz",
        icon: <Handshake height={50} width={50} color="#007CB6" />,
        cargo: "Secretario",
        descripcion:
          "Su objetivo principal es promover la inclusión social y la igualdad de oportunidades. Desarrolla programas de asistencia, apoyo a grupos vulnerables y políticas de integración, abordando problemáticas como la pobreza, la violencia de género y la protección infantil.",
      },
      {
        id: "8",
        nombre: "",
        encargado: "",
        cargo: "",
        descripcion: "",
      },
      {
        id: "9",
        nombre: "",
        encargado: "",
        cargo: "",
        descripcion: "",
      },
      {
        id: "10",
        nombre: "",
        encargado: "",
        cargo: "",
        descripcion: "",
      },
    ],
    icon: <Landmark height={150} width={150} color="#007CB6" />,
    imagen: "/prueba.jpg",
    cvfoto: "/prueba-cv.jpg",
  },
  {
    id: 2,
    nombre: "Secretaria General De Gobierno",
    encargado: "Silvana Noemí Iozzia",
    descripcion:
      "Actúa como el órgano coordinador entre el Intendente y las distintas secretarías. Su responsabilidad incluye la gestión administrativa y legal del municipio, así como la supervisión del cumplimiento normativo. Además, facilita la comunicación institucional y la implementación de decisiones ejecutivas.",
    dependencias: [""],
    icon: <Briefcase height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 3,
    nombre: "Secretaria De Planificacion Y Gestion Publica",
    encargado: "Rodrigo Garcia Otero",
    descripcion:
      "Su función principal es diseñar, planificar y evaluar políticas públicas a corto, mediano y largo plazo. Coordina proyectos estratégicos para optimizar la eficiencia y modernización de la gestión pública, promoviendo la innovación y el uso responsable de los recursos.",
    dependencias: [""],
    icon: <Laptop height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 4,
    nombre: "Secretaría De Obras Y Servicios Públicos",
    encargado: "Ariel Jorge Sprenger",
    descripcion:
      "Encargada de la planificación, ejecución y mantenimiento de las infraestructuras y servicios públicos municipales, como redes de agua, cloacas, pavimentación, alumbrado y espacios verdes. También garantiza la prestación de servicios esenciales para el bienestar de la comunidad.",
    dependencias: [""],
    icon: <Hammer height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 5,
    nombre: "Secretaría De Hacienda Y Finanzas Públicas",
    encargado: "Federico Gabriel Cataldo",
    descripcion:
      "Gestiona los recursos económicos del municipio. Sus funciones incluyen la elaboración del presupuesto anual, el control de ingresos y egresos, la administración tributaria y el cumplimiento de las normativas financieras para asegurar una gestión eficiente y transparente.",
    dependencias: [""],
    icon: <ChartArea height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 6,
    nombre: "Secretaría De Cultura, Educación, Comunicación Y Deportes",
    encargado: "Luciana Depauli",
    descripcion:
      "Fomenta la vida cultural, educativa y deportiva del municipio. Promueve programas de acceso a la educación, actividades recreativas y eventos culturales, al tiempo que gestiona la comunicación institucional para mantener informada a la comunidad.",
    dependencias: [""],
    icon: <Users height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 7,
    nombre: "Secretaría De Salud",
    encargado: "Dario José Puede",
    descripcion:
      "Responsable de garantizar el acceso a servicios de salud pública de calidad. Administra centros de atención médica, campañas de prevención y programas de promoción de la salud, priorizando el bienestar físico y mental de la población.",
    dependencias: [""],
    icon: <Cross height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
  {
    id: 8,
    nombre: "Secretaría De Desarrollo Social",
    encargado: "Santiago Erroz",
    descripcion:
      "Su objetivo principal es promover la inclusión social y la igualdad de oportunidades. Desarrolla programas de asistencia, apoyo a grupos vulnerables y políticas de integración, abordando problemáticas como la pobreza, la violencia de género y la protección infantil.",
    dependencias: [""],
    icon: <Handshake height={150} width={150} color="#007CB6" />,
    imagen: "",
    cvfoto: "",
  },
]
