import MainLayout from "@/components/MainLayout";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Términos y Condiciones para Estudiantes | Futuro Digital",
  description:
    "Conozca los términos y condiciones para estudiantes participantes en el programa Futuro Digital.",
};

const terms = [
  {
    title: "Respeto Mutuo",
    description:
      "Cada estudiante, mentor, y colaborador del programa merece ser tratado con respeto, sin importar su origen, género, orientación sexual, religión, etnia, o habilidades. El lenguaje y el comportamiento ofensivo, discriminatorio o intimidante no serán tolerados.",
  },
  {
    title: "Comportamiento Profesional",
    description:
      "Se espera que todos los participantes mantengan un comportamiento ético y profesional en todas las interacciones, ya sea con compañeros, mentores, empresas o cualquier persona involucrada en el programa. Esto incluye respetar los tiempos de los demás, cumplir con los compromisos y mantener una actitud de colaboración.",
  },
  {
    title: "Compromiso con el Aprendizaje",
    description:
      "Los estudiantes se comprometen a participar activamente en todas las actividades del programa, incluyendo clases, mentorías y proyectos. La falta de participación, absentismo injustificado o la entrega tardía de proyectos sin justificación válida puede resultar en una revisión de su participación en el programa.",
  },
  {
    title: "Colaboración y Trabajo en Equipo",
    description:
      "En Futuro Digital, fomentamos un ambiente colaborativo. Se espera que los estudiantes trabajen bien en equipo, compartan ideas, ayuden a sus compañeros y reciban retroalimentación de manera constructiva. La cooperación y la comunicación efectiva son esenciales para el éxito del programa.",
  },
  {
    title: "Honestidad y Transparencia",
    description:
      "La integridad es fundamental en el aprendizaje y el trabajo profesional. Los estudiantes deben ser honestos sobre su progreso y desafíos, y siempre dar crédito a las fuentes de información que utilicen en su trabajo. El plagio o cualquier forma de deshonestidad académica no serán permitidos.",
  },
  {
    title: "Uso Responsable de los Recursos",
    description:
      "Los estudiantes deben usar los recursos educativos proporcionados por Futuro Digital (software, plataformas, etc.) exclusivamente para fines de aprendizaje dentro del programa. No se permite el uso de estos recursos con fines comerciales o personales fuera del alcance del programa.",
  },
  {
    title: "Respeto a la Privacidad",
    description:
      "Se espera que todos los participantes respeten la confidencialidad de la información personal y de proyectos proporcionada por otros estudiantes, mentores o empresas colaboradoras. No se debe compartir información confidencial sin el consentimiento de todas las partes involucradas.",
  },
  {
    title: "Resolución de Conflictos",
    description:
      "En caso de que surjan conflictos o malentendidos, los estudiantes deben abordarlos de manera respetuosa y profesional. Si no se puede llegar a una solución, deben acudir a los mentores o al equipo de Futuro Digital para mediar en el conflicto.",
  },
  {
    title: "Inclusión y Diversidad",
    description:
      "Futuro Digital promueve un entorno inclusivo, donde se valora la diversidad de ideas, experiencias y orígenes. Los estudiantes deben esforzarse por ser abiertos de mente y apoyar un espacio donde todos se sientan bienvenidos y puedan expresarse libremente.",
  },
  {
    title: "Consecuencias del Incumplimiento",
    description:
      "El incumplimiento de este código de conducta puede resultar en advertencias formales, suspensión temporal o, en casos graves o repetidos, la expulsión del programa. El equipo de Futuro Digital se reserva el derecho de tomar las medidas disciplinarias que considere necesarias para garantizar el bienestar de la comunidad.",
  },
  {
    title: "Aceptación del Código de Conducta",
    description:
      "Al participar en Futuro Digital, aceptas cumplir con este Código de Conducta y contribuir a un ambiente de respeto, aprendizaje y colaboración para todos.",
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
            <h1 className="font-bold">Código de Conducta</h1>
            <p>
              En Futuro Digital, estamos comprometidos con crear un ambiente de
              aprendizaje inclusivo, respetuoso y colaborativo. Todos los
              participantes deben adherirse a las siguientes pautas para
              garantizar una experiencia positiva y enriquecedora para todos.
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
