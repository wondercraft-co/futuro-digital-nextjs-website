import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Qué es Futuro Digital?",
    answer:
      "Futuro Digital es una iniciativa de impacto social creada por WonderCraft SAS que brinda a jóvenes en situación de vulnerabilidad la oportunidad de aprender programación, diseño y gestión de proyectos a través de recursos educativos, mentoría y proyectos reales con empresas.",
  },
  {
    question: "¿Cómo puedo inscribirme como estudiante?",
    answer:
      "Para inscribirte, debes cumplir con los requisitos de elegibilidad (tener entre 16 y 25 años, residir en Colombia, y tener acceso a un computador). Una vez verifiques que cumples con los requisitos, puedes completar el formulario de inscripción en nuestro sitio web. Nos pondremos en contacto contigo para confirmar tu participación.",
  },
  {
    question: "¿Es solo para programación?",
    answer:
      "No, Futuro Digital ofrece oportunidades de aprendizaje en varias áreas tecnológicas, no solo en programación. También puedes aprender diseño web, diseño gráfico, y gestión de proyectos. Nuestro objetivo es proporcionarte un conjunto de habilidades tecnológicas amplias para que puedas explorar diferentes caminos en la industria.",
  },
  {
    question:
      "¿Es necesario tener conocimientos previos en tecnología para unirse?",
    answer:
      "No, no es necesario tener conocimientos previos. Futuro Digital está diseñado tanto para principiantes como para aquellos con algo de experiencia. El programa se adapta a diferentes niveles de habilidad, así que solo necesitas tener una actitud de aprendizaje y ganas de mejorar.",
  },
  {
    question: "¿Cuánto tiempo dura el programa para los estudiantes?",
    answer:
      "El programa tiene una duración aproximada de 6 meses. Durante este tiempo, los estudiantes participarán en cursos en línea, mentorías y proyectos prácticos con empresas reales. La duración puede variar dependiendo de la complejidad de los proyectos y el progreso individual de cada estudiante.",
  },
  {
    question: "¿Qué tipo de apoyo recibirán los estudiantes?",
    answer:
      "Los estudiantes recibirán apoyo continuo de mentores que los guiarán en su aprendizaje y en los proyectos prácticos. Además, tendrán acceso a recursos educativos de alta calidad, talleres y espacios de colaboración con otros estudiantes.",
  },
  {
    question: "¿Qué sucede si un estudiante no puede completar el programa?",
    answer:
      "Entendemos que pueden surgir situaciones imprevistas. Si un estudiante tiene dificultades para completar el programa, debe comunicarse con el equipo de Futuro Digital para evaluar la situación. Dependiendo del caso, se pueden buscar soluciones, como prórrogas o apoyo adicional.",
  },
  {
    question:
      "¿Los estudiantes recibirán un certificado al completar el programa?",
    answer:
      "Sí, todos los estudiantes que completen el programa exitosamente recibirán un certificado de participación que acredita las habilidades adquiridas y la experiencia obtenida trabajando en proyectos reales.",
  },
  {
    question: "¿Qué costos tiene participar en Futuro Digital?",
    answer:
      "Futuro Digital es completamente gratuito para los estudiantes. Nuestro objetivo es proporcionar oportunidades accesibles sin barreras económicas.",
  },
  {
    question: "¿Qué tipo de proyectos realizarán los estudiantes?",
    answer:
      "Los estudiantes trabajarán en proyectos reales, principalmente en el desarrollo de sitios web para pequeñas empresas. Estos proyectos les permitirán aplicar lo que han aprendido y desarrollar un portafolio profesional.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Preguntas Frecuentes (FAQ)
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
