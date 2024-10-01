import MainLayout from "@/components/MainLayout";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Términos y Condiciones para Estudiantes | Futuro Digital",
  description:
    "Conozca los términos y condiciones para estudiantes participantes en el programa Futuro Digital.",
};

const terms = [
  {
    title: "Objetivo del Programa",
    description:
      "El objetivo de Futuro Digital es proporcionar a jóvenes en situación de vulnerabilidad la oportunidad de aprender habilidades tecnológicas como programación, diseño y gestión de proyectos. Los estudiantes seleccionados participarán en un programa educativo que incluye cursos, proyectos prácticos y mentoría con profesionales de la industria.",
  },
  {
    title: "Criterios de Elegibilidad",
    description:
      "Para participar en Futuro Digital, los estudiantes deben cumplir con los siguientes requisitos: Tener entre 16 y 25 años de edad, residir en Colombia, tener acceso a un computador o dispositivo con conexión a internet, estar dispuesto a comprometerse con el programa y participar activamente en las actividades, cursos y proyectos, y tener un interés genuino en aprender programación, diseño o gestión de proyectos.",
  },
  {
    title: "Compromiso de Participación",
    description:
      "Al inscribirte, te comprometes a participar de manera activa y responsable en las clases, proyectos y sesiones de mentoría, cumplir con los plazos de entrega establecidos para los proyectos, respetar el código de conducta del programa, fomentando un ambiente de respeto e inclusión, y mantener una actitud positiva y abierta al aprendizaje continuo.",
  },
  {
    title: "Asistencia y Puntualidad",
    description:
      "Es obligatorio asistir a todas las sesiones y actividades programadas, tanto en línea como presenciales (si aplica). La falta de asistencia injustificada o repetida puede resultar en la exclusión del programa.",
  },
  {
    title: "Uso de Recursos",
    description:
      "Futuro Digital proporcionará acceso a diversos recursos educativos (cursos, tutoriales, software, etc.). El uso de estos recursos debe ser exclusivamente para fines educativos dentro del programa. Cualquier uso indebido o distribución no autorizada de estos recursos será motivo de sanción o exclusión.",
  },
  {
    title: "Derechos sobre los Proyectos Realizados",
    description:
      "Como parte del programa, trabajarás en proyectos reales para empresas u organizaciones colaboradoras. Los derechos sobre los proyectos desarrollados serán compartidos entre el estudiante, el programa y la empresa participante. Futuro Digital podrá utilizar los proyectos como ejemplos o material promocional.",
  },
  {
    title: "Privacidad y Confidencialidad",
    description:
      "Toda la información personal proporcionada por los estudiantes será utilizada exclusivamente para los fines del programa y no será compartida con terceros sin el consentimiento del estudiante, excepto en los casos en que la ley lo exija. Los estudiantes también se comprometen a mantener la confidencialidad de cualquier información proporcionada por las empresas para las que trabajen.",
  },
  {
    title: "Conducta y Ética",
    description:
      "Se espera que los estudiantes mantengan un comportamiento ético y profesional durante todo el programa. Cualquier conducta que viole las normas de respeto, inclusión o compromiso será evaluada por el equipo de Futuro Digital y puede resultar en la exclusión del programa.",
  },
  {
    title: "Exoneración de Responsabilidad",
    description:
      "Futuro Digital no se hace responsable de ningún problema técnico, pérdida de datos o dificultades derivadas del uso de las herramientas y recursos proporcionados durante el programa. El estudiante es responsable de garantizar que su equipo y conexión a internet sean adecuados para participar en las actividades.",
  },
  {
    title: "Modificación del Programa",
    description:
      "Futuro Digital se reserva el derecho de modificar o actualizar el contenido del programa, sus actividades o estos términos y condiciones en cualquier momento. Los estudiantes serán notificados de cualquier cambio relevante con suficiente antelación.",
  },
  {
    title: "Finalización del Programa",
    description:
      "Al completar con éxito el programa, los estudiantes recibirán un certificado de participación. El programa no garantiza la obtención de empleo, pero sí proporciona herramientas, recursos y apoyo para mejorar las oportunidades laborales en el sector tecnológico.",
  },
  {
    title: "Aceptación de los Términos y Condiciones",
    description:
      "Al inscribirte en Futuro Digital, confirmas que has leído, comprendido y aceptado estos términos y condiciones.",
  },
];

export default function Page() {
  return (
    <MainLayout>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="prose">
            <span className="text-sm text-gray-500">
              Actualizado: 30 Sep, 2024{" "}
            </span>
            <h1 className="font-bold">
              Términos y Condiciones para estudiantes
            </h1>

            <p>
              Al inscribirte en el programa Futuro Digital, aceptas los
              siguientes términos y condiciones. Te pedimos que los leas
              detenidamente antes de continuar con tu inscripción.
            </p>

            {terms.map((term) => (
              <div key={term.title}>
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
