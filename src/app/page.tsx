import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Requirements from "@/components/Homepage/Requirements";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Requirements />
    </MainLayout>
  );
}
