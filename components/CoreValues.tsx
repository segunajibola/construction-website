import { Leaf, Cpu, Award, Users, Shield, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CoreValues() {
  const values = [
    {
      title: "Eco-Friendly Construction",
      desc: "We use sustainable materials and green building methods to protect our planet.",
      icon: Leaf,
    },
    {
      title: "High-End Technology",
      desc: "We integrate modern tools and smart construction systems for better efficiency.",
      icon: Cpu,
    },
    {
      title: "High Quality Standards",
      desc: "Every project meets rigorous quality benchmarks from start to finish.",
      icon: Award,
    },
    {
      title: "Team Collaboration",
      desc: "We build strong partnerships with clients, engineers, and suppliers.",
      icon: Users,
    },
    {
      title: "Safety & Integrity",
      desc: "We prioritize safety, ethics, and transparency in every operation.",
      icon: Shield,
    },
    {
      title: "Customer Satisfaction",
      desc: "Our clients’ happiness drives everything we do — excellence is our habit.",
      icon: Heart,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-3 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
          We believe in building responsibly — combining technology, teamwork,
          and trust to create lasting impact.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={i} delay={0.1}>
                <div className="flex flex-col items-center text-center py-3 px-2 border rounded-sm shadow-xs hover:shadow-sm transition">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
