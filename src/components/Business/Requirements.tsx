import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Empresa en crecimiento",
    description:
      "Buscamos empresas pequeñas o en crecimiento que necesiten un sitio web, brindando a nuestros estudiantes la oportunidad de trabajar en proyectos reales mientras ayudan a la comunidad empresarial.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Compromiso con el impacto social",
    description:
      "La empresa debe estar dispuesta a contribuir al crecimiento de jóvenes en situación de vulnerabilidad, entendiendo que su participación tendrá un impacto positivo en la formación de futuros talentos tecnológicos.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Flexibilidad en el proceso de diseño",
    description:
      "Dado que los proyectos estarán a cargo de estudiantes, las empresas deben estar abiertas a un proceso colaborativo y a ajustes según las necesidades de aprendizaje de los participantes.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Retroalimentación constructiva",
    description:
      "Las empresas participantes deben estar dispuestas a brindar comentarios constructivos a los estudiantes sobre los sitios web desarrollados, contribuyendo así al proceso educativo.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Disponibilidad de recursos básicos",
    description:
      "Aunque el desarrollo del sitio es gratuito, la empresa debe proporcionar algunos recursos básicos como su logotipo, contenido principal y cualquier imagen que quieran incluir en el sitio web.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Visión a largo plazo",
    description:
      "Queremos construir relaciones a largo plazo con las empresas que deseen seguir colaborando con nuestro programa, apoyando a nuestros estudiantes en futuros proyectos o empleos.",
    icon: CheckBadgeIcon,
  },
];
export default function Requirements() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="requerimientos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Que esperamos a cambio?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Estos son algunos de nuestros requerimientos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Para asegurar una experiencia enriquecedora para nuestros
            estudiantes y beneficios reales para tu empresa, buscamos socios que
            cumplan con estos simples requisitos. Juntos, podemos crear un
            impacto positivo en la comunidad mientras elevamos la presencia
            digital de tu negocio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-indigo-400"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
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
