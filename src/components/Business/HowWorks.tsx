const features = [
  {
    name: "Inscripción de tu empresa",
    description:
      "Regístrate fácilmente a través de nuestro formulario en línea y cuéntanos sobre tu empresa y lo que buscas en tu nuevo sitio web.",
  },
  {
    name: "Revisión y selección",
    description:
      "Nuestro equipo revisará tu solicitud y seleccionará proyectos que se alineen con el nivel de nuestros estudiantes para garantizar un resultado exitoso.",
  },
  {
    name: "Asignación del equipo de estudiantes",
    description:
      "Un equipo de estudiantes, supervisado por un mentor, será asignado para trabajar en el diseño y desarrollo de tu sitio web.",
  },
  {
    name: "Colaboración con tu empresa",
    description:
      "Trabajarás junto con los estudiantes, proporcionando los contenidos necesarios y retroalimentación a medida que el proyecto avanza.",
  },
  {
    name: "Desarrollo del sitio web",
    description:
      "Los estudiantes desarrollarán tu sitio web desde cero, aplicando lo que han aprendido en el programa, y haciendo ajustes basados en tus necesidades.",
  },
  {
    name: "Entrega y ajustes finales",
    description:
      "Una vez completado el proyecto, recibirás tu sitio web funcional. Se realizarán los ajustes finales según tus indicaciones para garantizar que estés completamente satisfecho.",
  },
];

export default function HowWorks() {
  return (
    <div className="bg-white py-20 sm:py-24" id="como">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Trabajamos en conjunto con tu empresa para que nuestros estudiantes
            puedan aprender, mientras tú obtienes un sitio web que represente tu
            negocio. El proceso es simple y te acompaña en cada paso.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-white">0{idx + 1}</span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
