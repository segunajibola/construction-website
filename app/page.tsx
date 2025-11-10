import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceCard } from "@/components/ServiceCard";
import { CoreValues } from "@/components/CoreValues";
import { Contact } from "@/components/Contact";
import { LatestProjects } from "@/components/LatestProjects";
import { Map } from "@/components/Map";
import { ScrollReveal } from "@/components/ScrollReveal";
export default function Home() {
  return (
    <div className="w-full pt-10">
      <Hero />
      <ScrollReveal delay={0.2}>
        <About />
      </ScrollReveal>
      <ServiceCard />
      <CoreValues />
      <LatestProjects />
      <Map />
      <ScrollReveal delay={0.2}>
        <Contact />
      </ScrollReveal>
    </div>
  );
}
