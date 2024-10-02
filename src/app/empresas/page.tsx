import CTA from "@/components/Business/CTA";
import Hero from "@/components/Business/Hero";
import HowWorks from "@/components/Business/HowWorks";
import Requirements from "@/components/Business/Requirements";
import MainLayout from "@/components/MainLayout";
import { ogObjectFactory } from "@/lib/og";
import { Metadata } from "next/types";

export const metadata: Metadata = ogObjectFactory({
  title: "Empresas | Futuro Digital",
  description:
    "Participe en Futuro Digital y obtenga un sitio web gratuito desarrollado por estudiantes talentosos. Impulse su negocio mientras apoya la educación tecnológica.",
  ogImageTitle: "Haz crecer tu negocio y forma el futuro talento tech",
  ogImageEyebrow: "Empresas",
});

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
