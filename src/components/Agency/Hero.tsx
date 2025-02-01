"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Cierra la brecha entre aprender a programar y conseguir tu
                  primer empleo en tecnología.
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Sabemos que una de las mayores frustraciones para quienes
                  buscan su primer empleo en tecnología es la clásica paradoja:
                  “No me contratan porque no tengo experiencia, pero no tengo
                  experiencia porque no me contratan.”
                </p>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-800 sm:text-xl/8">
                  La Junior Agency existe para romper ese ciclo y ayudarte a dar
                  el siguiente gran paso en tu carrera.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Únete ahora
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Más información <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            alt="Jóvenes trabajando en equipo en tecnología"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1587&q=80"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>

      <div className="bg-indigo-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Nuestro principal objetivo es que te vayas de La Junior Agency...
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-indigo-200">
              ...que abandones el programa, con trabajo real. <br /> Esta es
              nuestra unica meta, y es que puedas irte con el portafolio lleno
              de proyectos reales que te ayudarán a destacar en el mercado
              laboral.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Únete ahora
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Más información <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
