import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { MapContact } from "@/components/site/MapContact";
import { Testimonials } from "@/components/site/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <MapContact />
    </>
  );
}
