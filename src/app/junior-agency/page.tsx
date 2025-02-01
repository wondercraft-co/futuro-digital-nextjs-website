import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Agency/Hero";
import About from "@/components/Agency/About";
import Offer from "@/components/Agency/Offer";
import HowWorks from "@/components/Agency/HowWorks";
import { ogObjectFactory } from "@/lib/og";
import { Metadata } from "next/types";

export const metadata: Metadata = ogObjectFactory({
  title: "Junior Agency | Futuro Digital",
  description:
    "Cierra la brecha entre aprender a programar y conseguir tu primer empleo en tecnología.",
  ogImageTitle:
    "Cierra la brecha entre aprender a programar y conseguir tu primer empleo en tecnología.",
  ogImageEyebrow: "Junior Agency",
});

export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Offer />
      <HowWorks />
    </MainLayout>
  );
}
