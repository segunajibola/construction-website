import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceCard } from "@/components/ServiceCard";
import { CoreValues } from "@/components/CoreValues";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <div className="w-full pt-10">
      <Hero />
      <About />
      <ServiceCard />
      <CoreValues />
      <Contact />
    </div>
  );
}
