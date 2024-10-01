import CTA from "@/components/Business/CTA";
import Hero from "@/components/Business/Hero";
import HowWorks from "@/components/Business/HowWorks";
import Requirements from "@/components/Business/Requirements";
import MainLayout from "@/components/MainLayout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Empresas | Futuro Digital",
  description:
    "Participe en Futuro Digital y obtenga un sitio web gratuito desarrollado por estudiantes talentosos. Impulse su negocio mientras apoya la educación tecnológica.",
  openGraph: {
    title: "Empresas | Futuro Digital",
    description:
      "Obtenga un sitio web gratuito y apoye la educación tecnológica",
    images: [
      {
        url: "/images/og-image-empresas.jpg",
        width: 1200,
        height: 630,
        alt: "Futuro Digital para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresas | Futuro Digital",
    description:
      "Obtenga un sitio web gratuito y apoye la educación tecnológica",
    images: ["/images/og-image-empresas.jpg"],
  },
};
export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <HowWorks />
      <Requirements />
      <CTA />
    </MainLayout>
  );
}
