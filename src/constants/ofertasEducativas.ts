interface OfertaCardProps {
  id: string;
  title: string;
  description: string;
  puntos: string[];
  src: string;
  color: string;
  bgcolor: string;
  link: string;
}

export const OFERTAS: OfertaCardProps[] = [
  {
    id: "0",
    title: "Preescolar",
    description: "Las niñas y niños darán sus primeros pasos en un mundo lleno de descubrimientos y alegría. fomentamos su curiosidad natural, creatividad y habilidades sociales. Nuestro programa está diseñado para que los pequeños aprendan en un ambiente seguro y estimulante.",
    puntos: [
      "Desarrollo integral: cognitivo, emocional, social y físico.",
      "Espacios seguros y adaptados a sus necesidades.",
      "Primer contacto con valores como el respeto, la solidaridad y el trabajo en equipo.",
    ],
    src: "preescolar.jpg",
    color: "bg-sky-500",
    bgcolor: "bg-sky-600",
    link: "/niveles/preescolar"
  },
  {
    id: "1",
    title: "Primaria",
    description: "Acompañamos a los estudiantes en una etapa clave de su desarrollo académico y personal. Con un enfoque innovador y centrado en el estudiante, fomentamos el amor por el aprendizaje, el pensamiento crítico y la autonomía.",
    puntos: [
      "Educación personalizada que respeta el ritmo de aprendizaje de cada niño.",
      "Desarrollo de habilidades digitales y pensamiento lógico-matemático.",
      "Promoción de valores como la responsabilidad, la honestidad y el respeto.",
    ],
    src: "primaria.jpg",
    color: "bg-orange-400",
    bgcolor: "bg-orange-500",
    link: "/niveles/primaria"
  },
  {
    id: "2",
    title: "Secundaria",
    description: "Espacio donde los jóvenes consolidan su identidad, potencian sus talentos y se preparan para enfrentar los retos del mundo actual. Con un enfoque en la excelencia académica, el desarrollo de habilidades socioemocionales y la formación en valores, se convertirán en ciudadanos globales, críticos y comprometidos con su entorno.",
    puntos: [
      "Programa académico que incluye ciencias, matemáticas, humanidades y tecnología.",
      "Formación en liderazgo, trabajo en equipo y responsabilidad social.",
      "Actividades extracurriculares como deportes, arte y tecnologías.",
    ],
    src: "secundaria.jpg",
    color: "bg-rose-700",
    bgcolor: "bg-rose-800",
    link: "/niveles/secundaria"
  }
]