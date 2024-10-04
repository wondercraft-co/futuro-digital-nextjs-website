import MainLayout from "@/components/MainLayout";
import { ogObjectFactory } from "@/lib/og";

import { Metadata } from "next/types";

export const metadata: Metadata = ogObjectFactory({
  title: "¿Por qué? | Futuro Digital",
  description: "Carta abierta a todos los participantes de Futuro Digital",
  ogImageTitle: "Carta abierta a todos los participantes de Futuro Digital",
  ogImageEyebrow: "¿Por qué?",
});

export default function Page() {
  return (
    <MainLayout>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="prose">
            <h1>Carta abierta a todos los participantes de Futuro Digital</h1>
            <p>Queridos participantes,</p>
            <p>
              Las carreras en tecnología tienen una particularidad increíble:
              ofrecen la oportunidad real y concreta de transformar sus vidas.
              No es solo una transformación en términos de conocimiento o
              habilidades, sino que puede cambiar sus vidas{" "}
              <b>económicamente</b>. Sí, estoy hablando de la posibilidad de
              mejorar su situación financiera de manera significativa. La
              tecnología es una de las industrias más dinámicas y con más
              demanda en el mundo, y con las herramientas adecuadas, ustedes
              pueden acceder a esas oportunidades que les permitirán cambiar su
              futuro y el de sus familias.
              <br />
              <br />
              Sin embargo, es muy importante para mi hablarles con total
              honestidad acerca de este camino que están por recorrer. Entrar al
              mundo de la tecnología no es sencillo, ni rápido. Requiere
              disciplina, esfuerzo constante y, sobre todo, una verdadera
              pasión. Es un camino para aquellos que están dispuestos a
              obsesionarse con lo que hacen, que no se conforman con lo fácil y
              que entienden que las grandes recompensas solo llegan después de
              superar grandes desafíos.
              <br />
              <br />
              Van a enfrentarse a retos todos los días. Habrá momentos en los
              que les parecerá que es más fácil rendirse. Y es en esos momentos
              donde quiero ser muy claro: las excusas siempre están al alcance
              de la mano. Si las buscan, las van a encontrar. Son cómodas, están
              ahí a nuestro lado, esperando que las tomemos para justificar el
              darse por vencido y para que los demas nos den un
              &quot;pobrecito&quot; y un par de palmadas en la espalda. Pero
              cada vez que las tomen, estarán alejándose un poco más de sus
              sueños. La única forma de llegar a la meta es con convicción, con
              ese fuego en el corazón que les dice que pueden y que deben seguir
              intentándolo, sin importar qué tan difícil sea.
              <br />
              <br />A lo largo de mi vida, siempre he sentido la necesidad de
              devolver un poco de lo que la vida me ha dado.{" "}
              <b>Futuro Digital</b> es mi forma de hacer eso. Es un espacio
              donde ustedes no solo aprenderán sobre tecnología, sino que
              también se empoderarán para cambiar sus vidas de manera tangible.
              No busquen excusas, busquen soluciones, sigan adelante y
              aprovechen la enorme oportunidad que tienen frente a ustedes.
              <br />
              <br />
              El esfuerzo de hoy puede ser el puente hacia un mañana mejor. No
              lo olviden.
              <br />
              <br />
              ¡Vamos por todo! <br />
              Con admiración y compromiso,
              <br />
              <br />
              <b>Juan Pablo Solano</b>
              <br />
              Director
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
