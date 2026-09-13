import Hero from "@/components/sections/Hero";
import ConfianzaMarquee from "@/components/sections/ConfianzaMarquee";
import Servicios from "@/components/sections/Servicios";
import ComoFunciona from "@/components/sections/ComoFunciona";
import CerradurasDigitales from "@/components/sections/CerradurasDigitales";
import Cobertura from "@/components/sections/Cobertura";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

export default function Home() {
  return (
    <div id="top" className="bg-ink">
      <Hero />
      <ConfianzaMarquee />
      <Servicios />
      <ComoFunciona />
      <CerradurasDigitales />
      <Cobertura />
      <Faq />
      <CtaFinal />
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
