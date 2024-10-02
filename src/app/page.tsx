import FAQ from "@/components/Homepage/FAQ";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Requirements from "@/components/Homepage/Requirements";
import MainLayout from "@/components/MainLayout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Futuro Digital",
  description:
    "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",

  openGraph: {
    title: "Futuro Digital",
    description:
      "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
    images: [
      {
        url: "https://futurodigital.wondercraft.co/api/og?title=Impulsando%20a%20j%C3%B3venes%20a%20transformar%20su%20futuro%20con%20tecnolog%C3%ADa.",
        width: 1200,
        height: 630,
        alt: "Futuro Digital para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futuro Digital",
    description:
      "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
    images: [
      "https://futurodigital.wondercraft.co/api/og?title=Impulsando%20a%20j%C3%B3venes%20a%20transformar%20su%20futuro%20con%20tecnolog%C3%ADa.",
    ],
  },
};

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Requirements />
      <FAQ />
    </MainLayout>
  );
}
