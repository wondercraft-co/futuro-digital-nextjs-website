import Image from "next/image";
import Link from "next/link";

const requirements = [
  {
    name: "Residencia en Colombia",
    description:
      "El estudiante debe vivir en Colombia para participar en el programa y poder beneficiarse de nuestras oportunidades locales.",
  },
  {
    name: "Edad entre 16 y 25 años",
    description:
      "El programa está diseñado para jóvenes entre 16 y 25 años que deseen construir una carrera en el sector tecnológico.",
  },
  {
    name: "Compromiso total",
    description:
      "Los participantes deben estar dispuestos a comprometerse completamente con el programa, sin excusas, para aprovechar al máximo la oportunidad.",
  },
  {
    name: "Pasión por la programación",
    description:
      "Buscamos jóvenes con un interés genuino y pasión por aprender programación y otras habilidades tecnológicas.",
  },
  {
    name: "Disponibilidad para trabajar en equipo",
    description:
      "Los estudiantes deben estar abiertos a colaborar con otros, ya que muchos proyectos implican trabajo en equipo y cooperación.",
  },
  {
    name: "Ganas de aprender y mejorar",
    description:
      "No es necesario tener experiencia previa, pero se requiere una actitud proactiva para aprender y mejorar continuamente en las áreas de tecnología.",
  },
];

export default function Requirements() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Que necesitas
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Quienes puede aplicar?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Estos son algunos de los prerequisitos que debes cumplir para
                poder aplicar
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {requirements.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div>
              <Image
                alt="Computer"
                // src="/pexels-kevin-ku-92347-577585.jpg"
                src="/computer-illustration.png"
                width={2432}
                height={1442}
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[47rem]"
              />
              <div className="text-xs text-gray-400 text-right mt-2 mr-2">
                Designed by{" "}
                <Link
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Freepik
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
