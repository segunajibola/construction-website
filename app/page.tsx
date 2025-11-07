import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
export default function Home() {
  return (
    <div className="container mx-auto px-0.5 py-10">
      <Hero />
      <ServiceCard />
    </div>
  );
}
