import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  const services = [
    { title: "Building Construction", desc: "From design to completion." },
    { title: "Renovation", desc: "Transform your old spaces beautifully." },
    { title: "Road Works", desc: "Quality infrastructure guaranteed." },
  ];

  return (
    <div className="container mx-auto px-0.5 py-10">
      <Hero />
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
}
