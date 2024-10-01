import MainLayout from "@/components/MainLayout";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Términos y Condiciones para Empresas | Futuro Digital",
  description: "Conozca los términos y condiciones para empresas participantes en el programa Futuro Digital. Obtenga un sitio web gratuito mientras apoya la educación tecnológica.",
  openGraph: {
    title: "Términos y Condiciones para Empresas | Futuro Digital",
    description: "Conozca los términos y condiciones para empresas participantes en Futuro Digital",
    images: [
      {
        url: "/images/og-image-terminos-empresas.jpg",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones de Futuro Digital para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones para Empresas | Futuro Digital",
    description: "Conozca los términos y condiciones para empresas participantes en Futuro Digital",
    images: ["/images/og-image-terminos-empresas.jpg"],
  },
};


const terms = [
  {
    title: "Propósito del Programa",
    description:
      "El desarrollo del sitio web por parte de los estudiantes de Futuro Digital es una actividad educativa. El objetivo principal es proporcionar a los estudiantes experiencia práctica en el diseño y desarrollo de sitios web, mientras las empresas participantes reciben un sitio web de forma gratuita.",
  },
  {
    title: "Criterios de Participación",
    description:
      "Para participar en este programa, las empresas deben cumplir con los requisitos previamente especificados. La aceptación de cada empresa queda a discreción del equipo de Futuro Digital, en función de la capacidad de los estudiantes y el alineamiento con los objetivos educativos del programa.",
  },
  {
    title: "Derechos sobre el Sitio Web",
    description:
      "El sitio web creado será propiedad de la empresa participante, que podrá usarlo, modificarlo o actualizarlo a su conveniencia. No obstante, Futuro Digital se reserva el derecho de utilizar el proyecto como ejemplo o muestra de trabajo en futuras presentaciones, portafolios o materiales promocionales del programa.",
  },
  {
    title: "Calidad del Producto Final",
    description:
      "Si bien los estudiantes estarán supervisados por mentores y se esforzarán por entregar un producto funcional y de calidad, el sitio web es el resultado de un proceso de aprendizaje. Las empresas entienden que el sitio web puede no cumplir con los estándares comerciales profesionales en todos los casos y que no se pueden garantizar funcionalidades avanzadas o tiempos de entrega específicos.",
  },
  {
    title: "Proceso de Colaboración",
    description:
      "Las empresas participantes deben colaborar activamente durante el proceso, proporcionando información, contenido (imágenes, textos, logotipos, etc.), y retroalimentación oportuna. La falta de comunicación o cooperación podría afectar la calidad y los tiempos de entrega del sitio web.",
  },
  {
    title: "Limitación de Responsabilidad",
    description:
      "Futuro Digital y sus estudiantes no serán responsables de cualquier problema técnico, pérdida de datos, o mal funcionamiento del sitio web una vez entregado. La empresa es responsable de contratar un servicio de hosting externo y de realizar cualquier mantenimiento futuro del sitio.",
  },
  {
    title: "Modificaciones Post-Entrega",
    description:
      "Una vez entregado el sitio web, los estudiantes no realizarán modificaciones adicionales fuera del alcance original del proyecto. Las empresas serán responsables de realizar futuros cambios o ajustes con sus propios recursos.",
  },
  {
    title: "Uso del Sitio Web para Fines Legales",
    description:
      "Las empresas se comprometen a usar el sitio web creado para fines lícitos y conforme a las normativas locales e internacionales aplicables. Futuro Digital no se hace responsable del uso indebido del sitio web por parte de la empresa participante.",
  },
  {
    title: "Cancelación del Proyecto",
    description:
      "Futuro Digital se reserva el derecho de cancelar o suspender la colaboración con una empresa si considera que no se están cumpliendo los términos y condiciones o si la empresa no coopera adecuadamente durante el desarrollo del proyecto.",
  },
  {
    title: "Promoción del Programa",
    description:
      "Las empresas participantes aceptan que Futuro Digital puede utilizar el nombre y logotipo de la empresa, así como capturas de pantalla del sitio web desarrollado, en sus materiales promocionales, incluyendo el sitio web del programa, redes sociales y otros medios de comunicación.",
  },
  {
    title: "Aceptación de los Términos",
    description:
      "Al participar en este programa, las empresas confirman que han leído, comprendido y aceptado estos términos y condiciones.",
  },
];

export default function Page() {
  return (
    <MainLayout>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="prose">
            <span className="text-sm text-gray-500">Actualizado: 30 Sep, 2024 </span>
            <h1 className="font-bold">Términos y Condiciones para empresas</h1>


            <p>
              Al participar en el programa Futuro Digital y permitir que
              nuestros estudiantes desarrollen su sitio web, las empresas
              aceptan los siguientes términos y condiciones:
            </p>

            {terms.map((term) => (
              <div>
                <h3>{term.title}</h3>
                <p>{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
