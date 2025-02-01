const faqs = [
  {
    id: 1,
    question: "¿Por qué no pagan a los Juniors en La Junior Agency?",
    answer:
      "Porque este no es un trabajo, es una etapa de formación. Si eres un junior sin experiencia y no consigues empleo, es porque aún no eres lo suficientemente bueno. Y si no eres lo suficientemente bueno, alguien tiene que pagar por tu aprendizaje: o una empresa que asume el riesgo (cosa que rara vez pasa), o tú mismo con tiempo y esfuerzo. En este caso, te damos la oportunidad de aprender en proyectos reales sin que tengas que pagar, pero eso significa que tampoco cobramos por tu trabajo.",
  },
  {
    id: 2,
    question: "¿Por qué los proyectos toman tanto tiempo?",
    answer:
      "Porque aquí el objetivo no es la eficiencia ni la rentabilidad, sino el aprendizaje. Un proyecto que en una empresa normal tomaría un mes, aquí puede tardar tres o cuatro veces más porque el proceso es lo que importa. Si tuvieras que entregar con los tiempos de una empresa real, los mentores terminarían haciendo todo y tú no aprenderías nada.",
  },
  {
    id: 3,
    question: "¿Es gratis?",
    answer:
      "Sí, 100% gratis. No te cobramos por participar. WonderCraft SAS cubre los costos del programa, incluyendo suscripciones a Platzi, computadores y apoyo psicológico. Lo único que pedimos es compromiso total de tu parte.",
  },
  {
    id: 4,
    question: "¿Quiénes pueden aplicar?",
    answer:
      "Personas que ya tengan conocimientos de programación y quieran ganar experiencia real para volverse empleables. Si aún no has escrito código funcional o no entiendes conceptos básicos, este programa no es para ti.",
  },
  {
    id: 5,
    question: "¿Cómo sé si este programa es para mí?",
    answer:
      "Si crees que por haber tomado un curso ya deberías estar ganando dinero sin haber construido nada real, este programa NO es para ti. Si entiendes que para ser valioso en la industria necesitas experiencia, práctica y aprendizaje constante, entonces sí, este programa es para ti.",
  },
  {
    id: 6,
    question: "¿Cómo funciona el proceso de selección?",
    answer:
      "No aceptamos a cualquiera. Hay un proceso de aplicación donde evaluamos tu nivel, compromiso y motivación. Solo queremos personas que realmente estén dispuestas a esforzarse y aprovechar la oportunidad.",
  },
  {
    id: 7,
    question: "¿Cuánto dura el programa?",
    answer:
      "Depende de tu ritmo de aprendizaje y el tiempo que le dediques. No hay un periodo fijo, pero el objetivo es que termines con un portafolio sólido que te permita aplicar a empleos reales.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Preguntas frecuentes
        </h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
