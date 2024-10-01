import CTA from "@/components/Business/CTA";
import Hero from "@/components/Business/Hero";
import HowWorks from "@/components/Business/HowWorks";
import Requirements from "@/components/Business/Requirements";
import MainLayout from "@/components/MainLayout";

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
