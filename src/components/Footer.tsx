import { FORM_URLS } from "@/lib/const";
import { SOCIAL } from "@/lib/social";
import Image from "next/image";
import Link from "next/link";

const navigation = {
  students: [
    { name: "Informacion general", href: "/" },
    { name: "Inscríbete", href: FORM_URLS.STUDENTS },
    { name: "Términos y condiciones", href: "/estudiantes/terminos" },
    { name: "Código de Conducta", href: "/estudiantes/codigo-conducta" },
  ],
  business: [
    { name: "Información", href: "/empresas" },
    { name: "Términos y condiciones", href: "/empresas/terminos" },
    { name: "Inscríbe tu empresa", href: FORM_URLS.BUSINESS },
  ],
  aboutus: [
    { name: "¿Por qué?", href: "/nosotros/por-que" },
    { name: "🏗️ Quíenes somos", href: "/nosotros" },
  ],
  // mentors: [{ name: "Quieres ser mentor?", href: "/mentores" }],
  social: [SOCIAL.linkedIn],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              alt="Logo Futuro Digital"
              height={70}
              width={200}
              src="/logo-futuro-digital.svg"
              // className="h-7"
            />
            <p className="text-sm leading-6 text-gray-600">
              Impulsando a jóvenes a transformar su futuro con tecnología.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Estudiantes
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.students.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Empresas
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.business.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Mentores
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.mentors.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Sobre nosotros
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.aboutus.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; Un proyecto de responsabilidad social de{" "}
            <Link
              href="https://wondercraft.co"
              target="_blank"
              className="text-indigo-600"
            >
              wondercraft.co.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
