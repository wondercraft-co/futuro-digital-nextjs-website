import CTA from "@/components/Business/CTA";
import Hero from "@/components/Business/Hero";
import HowWorks from "@/components/Business/HowWorks";
import Requirements from "@/components/Business/Requirements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowWorks />
      <Requirements />
      <CTA />
      <Footer />
    </>
  );
}
