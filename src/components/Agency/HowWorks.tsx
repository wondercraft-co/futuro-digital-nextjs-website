import {
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "1️⃣ Aplicación",
    description:
      "Llena el formulario de inscripción y muéstranos lo que ya has aprendido. Queremos conocerte y asegurarnos de que este programa es el indicado para ti.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "2️⃣ Evaluación",
    description:
      "Revisaremos tus conocimientos y motivación para confirmar que estás listo para dar el siguiente paso hacia tu primer empleo tech.",
    icon: CheckCircleIcon,
  },
  {
    name: "3️⃣ Proyectos Reales",
    description:
      "Te unirás a equipos de trabajo para desarrollar soluciones para clientes reales. Aprenderás a manejar entregables, deadlines y expectativas del mundo real.",
    icon: CodeBracketIcon,
  },
  {
    name: "4️⃣ Mentoría y Feedback",
    description:
      "Tendrás sesiones con profesionales de la industria que te guiarán en tu proceso, te darán retroalimentación y te ayudarán a mejorar tu trabajo.",
    icon: UsersIcon,
  },
  {
    name: "5️⃣ Portafolio y Preparación",
    description:
      "Al finalizar, tendrás un portafolio sólido con proyectos reales que te ayudarán a destacarte en el mercado laboral y estarás listo para aplicar a tu primer empleo tech.",
    icon: BriefcaseIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Tu camino al primer empleo
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            ¿Cómo funciona La Junior Agency?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Nuestro proceso está diseñado para brindarte experiencia real en
            proyectos con clientes, acompañamiento profesional y un portafolio
            sólido que te prepare para el mundo laboral.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  {/* <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600"
                  /> */}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
