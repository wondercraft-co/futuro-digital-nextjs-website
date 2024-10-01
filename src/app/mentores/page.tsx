import Hero from "@/components/Mentors/Hero";
import MainLayout from "@/components/MainLayout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Mentores | Futuro Digital",
  description: "Aun estamos trabajando en esta area del proyecto",
};
export default function Page() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}
