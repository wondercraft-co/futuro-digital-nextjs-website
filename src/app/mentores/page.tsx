import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Mentors/Hero";
import { ogImageUrl } from "@/lib/og";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Mentores | Futuro Digital",
  description: "Aun estamos trabajando en esta area del proyecto",
};
export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <Image
        src={ogImageUrl("Hello ther +!@#!%", "Empresas | Hellóo")}
        width={1200}
        height={630}
        alt=""
      />
    </MainLayout>
  );
}
