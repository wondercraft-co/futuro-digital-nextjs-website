import FAQ from "@/components/Homepage/FAQ";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Requirements from "@/components/Homepage/Requirements";
import MainLayout from "@/components/MainLayout";
import { ogObjectFactory } from "@/lib/og";
import { Metadata } from "next/types";

export const metadata: Metadata = ogObjectFactory({
  title: "Futuro Digital",
  description:
    "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo.",
  ogImageTitle:
    "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
});
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
