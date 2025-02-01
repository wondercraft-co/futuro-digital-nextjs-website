import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UsersIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Una computadora",
    description:
      "Si no cuentas con una, te proporcionamos un equipo para que puedas trabajar y desarrollar tus proyectos sin limitaciones.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Suscripción a Platzi",
    description:
      "Accede a una suscripción gratuita en Platzi para seguir aprendiendo y especializándote en las tecnologías más demandadas.",
    icon: AcademicCapIcon,
  },
  {
    name: "Proyectos reales con clientes",
    description:
      "Trabaja en proyectos reales con clientes, recibiendo feedback profesional y entregando soluciones con impacto en el mundo real.",
    icon: BriefcaseIcon,
  },
  {
    name: "Mentoría personalizada",
    description:
      "Aprende de expertos de la industria que te guiarán en cada paso, resolviendo dudas y ayudándote a mejorar tus habilidades.",
    icon: UsersIcon,
  },
  {
    name: "Simulación de trabajo en una empresa tech",
    description:
      "Utiliza herramientas y metodologías reales, comprendiendo cómo se trabaja en una empresa tecnológica para estar listo para tu primer empleo.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Un portafolio sólido",
    description:
      "Construye un portafolio con casos de estudio y proyectos que realmente sumen a tu CV y te ayuden a destacarte en el mercado laboral.",
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function WhatWeOffer() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Beneficios del programa
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            ¿Qué te ofrecemos en La Junior Agency?
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Esto no es solo aprendizaje, es experiencia real que te ayudará a
            conseguir tu primer empleo en tecnología.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-400"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
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
