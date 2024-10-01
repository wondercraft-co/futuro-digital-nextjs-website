import { FORM_URLS } from "@/lib/const";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="bg-indigo-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center grid md:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para empezar?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Únete a nosotros y deja que nuestros estudiantes creen el sitio
              web que tu empresa necesita, mientras tú contribuyes a formar a la
              próxima generación de profesionales tecnológicos. ¡Es fácil, sin
              costo y con un impacto positivo!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={FORM_URLS.BUSINESS}
                target="_blank"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Inscribete ahora
              </Link>
              <Link
                href="/empresas/terminos"
                className="text-sm font-semibold leading-6 text-white"
              >
                Términos & condiciones <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/illustration-woman-screen.svg"
              width={300}
              height={300}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
