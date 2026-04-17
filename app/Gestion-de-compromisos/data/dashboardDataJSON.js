export const dashboardData = {
  desempeno: {
    score: 78,
    max: 100,
    label: "BUENO",
    circleColor: "#4ade80" // Tailwind green-400
  },
  
  resumenMapa: [
    { id: 1, label: "Pavimento finalizado", value: 12, color: "bg-yellow-400", checkColor: "text-yellow-400" },
    { id: 2, label: "Pavimento en ejecución", value: 6, color: "bg-green-500", checkColor: "text-green-500" },
    { id: 3, label: "Cámaras instaladas", value: 8, color: "bg-teal-500", checkColor: "text-teal-500" },
    { id: 4, label: "Espacios verdes", value: 5, color: "bg-slate-500", checkColor: "text-slate-500" }
  ],

  ultimosAvances: [
    { id: 1, title: "Nuevo asfalto en calle Cabrera", link: "#" },
    { id: 2, title: "Reforestamos la plaza Moreno", link: "#" },
    { id: 3, title: "Más turnos digitales en el hospital", link: "#" }
  ],

  enEjecucion: {
    title: "Centro de Salud en Villa Basso",
    image: "https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20hist%C3%B3rica-Recambio%20de%20ca%C3%B1er%C3%ADas%20en%20zona%20c%C3%A9ntrica/ca%C3%B1erias%20del%20centro%20(1).jpg",
    yearStart: 2023,
    yearEnd: 2026,
    code: "028",
    statusColor: "#4ade80"
  },

  antesDespues: {
    etiquetaSuperior: "Parque del Este",
    title: "Recuperamos el Parque del Este",
    description: "Empezamos en este tramo la intervención para mejorar. Con más detalles y obras escénicas, transformaremos el espacio para todos los vecinos.",
    imageAntes: "https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20Anfiteatro%20Municipal/Anfiteatro1.jpg",
    imageDespues: "https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra%20Anfiteatro%20Municipal/3-Anfiteatro%20Municipal.jpg",
    bullets: [
      { id: 1, icon: "□", text: "15 juegos nuevos" },
      { id: 2, icon: "🚗", text: "50 puentes arreglados" }
    ]
  },

  impactoPoliticas: {
    imagenFondo: "https://pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/Obra-Costanera%20Sur/Segunda%20etapa%20de%20pavimentaci%C3%B3n%20-%20Costanera%20Sur%20%20(7).jpg",
    metricaGlobal: { numero: "128", porcentaje: "60%", leyenda: "Zonas. Mil" },
    listaBarrios: [
      { 
        id: 1, 
        barrio: "Barrio Bernabé", 
        obra: "Pavimento en Liberata 530", 
        porcentaje: 50, 
        colorIcon: "bg-[#4ade80]", 
        colorBar: "bg-[#4ade80]", 
        iconShape: "circle", // o square
        letter: "✓"
      },
      { 
        id: 2, 
        barrio: "Barrio J. Newbery", 
        obra: "Cámaras J Newbery y Malpiú", 
        porcentaje: 70, 
        colorIcon: "border-2 border-teal-500 text-teal-500", 
        colorBar: "bg-teal-500", 
        iconShape: "outline", 
        letter: "●"
      },
      { 
        id: 3, 
        barrio: "Barrio Sintia", 
        obra: "Luminarias LED en Sintia Malla", 
        porcentaje: 100, 
        colorIcon: "bg-[#2d5699]", 
        colorBar: "bg-[#2d5699]", 
        iconShape: "square", 
        letter: "B"
      }
    ]
  },

  comparativaAnual: {
    etiqueta: "Reciclaje Municipal",
    dataBar: [
      { year: 2022, value: 130, colorClass: "bg-[#7cb8bb]", heightClass: "h-16" },
      { year: 2023, value: 155, colorClass: "bg-[#93c572]", heightClass: "h-24" },
      { year: 2024, value: 190, colorClass: "bg-[#8dbf43]", heightClass: "h-32" }
    ]
  },

  entendiendoIndicador: {
    descripcion: "Delitos cada 1000 habitantes",
    valorActual: 143,
    metaPasada: "Meta 2023",
    variacion: "-14%",
    leyendaVariacion: "+/- 20%",
    metaFuturaValor: 140,
    metaFuturaLeyenda: "Meta anual",
    estado: "En mejora"
  }
}
