import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceCard } from "@/components/ServiceCard";
import { CoreValues } from "@/components/CoreValues";
export default function Home() {
  return (
    <div className="container mx-auto px-0.5 py-10">
      <Hero />
      <About />
      <ServiceCard />
      <CoreValues />
    </div>
  );
}
