import Image from "next/image";
export default function AboutJuniorAgency() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-indigo-600">
            Sobre nosotros
          </p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            ¿Qué es La Junior Agency?
          </h1>
          <p className="mt-6 text-balance text-xl/8 text-gray-700">
            Es un programa diseñado para quienes ya tienen conocimientos en
            programación y están listos para empezar a construir su experiencia
            real. Aquí no solo aprenderás, sino que también trabajarás en
            proyectos reales con clientes reales, desarrollando un portafolio
            sólido y conociendo cómo funciona una empresa de tecnología por
            dentro.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
              No es para principiantes
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Este programa está diseñado para quienes ya han estudiado
              programación y necesitan ese último empujón para volverse
              empleables. No es solo aprender, es aplicar esos conocimientos en
              proyectos que simulan el entorno de una empresa tecnológica real.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Aquí te enfrentarás a desafíos técnicos y de equipo, tal como lo
              harías en un trabajo real. Con el apoyo de mentores, trabajarás
              con clientes, cumplirás entregas y desarrollarás las habilidades
              necesarias para tu primer empleo en tecnología.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={1000}
                  height={1000}
                  alt="Trabajo en equipo"
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={1000}
                  height={1000}
                  alt="Desarrollo de software"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={1000}
                  height={1000}
                  alt="Programación en equipo"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={1000}
                  height={1000}
                  alt="Trabajo en un proyecto real"
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">
              Impacto del programa
            </p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">
                  Proyectos reales entregados
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>50+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Juniors preparados</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>100+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">
                  Empresas colaboradoras
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>30+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">
                  Colocación en empleos tech
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>85%</span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
