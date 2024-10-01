import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Acceso a recursos educativos",
    description:
      "Obtén acceso a una variedad de cursos y materiales didácticos que cubren las áreas más demandadas de la tecnología: desde programación hasta diseño y gestión de proyectos.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Mentoría personalizada",
    description:
      "Recibe el apoyo de mentores experimentados que te guiarán en tu aprendizaje, responderán a tus preguntas y te ayudarán a enfrentar desafíos técnicos.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Proyectos reales",
    description:
      "Trabaja en proyectos con empresas reales y desarrolla un portafolio que demuestre tus habilidades en el mundo laboral.",
    icon: CheckBadgeIcon,
  },
  {
    name: "No es un bootcamp",
    description:
      "No te prometemos la luna, ni ser tu propio jefe. Todo lo que logres sera por tu propio esfuerzo, nosotros estamos para facilitarte el camino, para guiarte en el proceso, para mostrarte como funciona la industria.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Ayuda para conseguir un computador",
    description:
      "Si no tienes un computador adecuado para programar, te ayudamos a conseguir uno. Trabajamos con organizaciones y donantes para proporcionar equipos a estudiantes comprometidos que lo necesiten.",
    icon: CheckBadgeIcon,
  },
  {
    name: "No es un p*to bootcamp",
    description:
      "Sin promesas vacías, sin falsas expectativas, sin atajos - todo lo que logres depende de ti. Nosotros somos facilitadores.",
    icon: CheckBadgeIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            En que consiste?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para transformar tu carrera en tecnología
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Únete a Futuro Digital y accede a recursos esenciales para aprender,
            crecer y conseguir empleo en el mundo de la tecnología. Nuestro
            programa está diseñado para brindarte todo lo necesario para
            convertirte en un profesional.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-indigo-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
