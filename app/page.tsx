import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceCard } from "@/components/ServiceCard";
import { CoreValues } from "@/components/CoreValues";
import { Contact } from "@/components/Contact";
import { LatestProjects } from "@/components/LatestProjects";
import { Map } from "@/components/Map";
export default function Home() {
  return (
    <div className="w-full pt-10">
      <Hero />
      <About />
      <ServiceCard />
      <CoreValues />
      <LatestProjects />
      <Map />
      <Contact />
    </div>
  );
}
