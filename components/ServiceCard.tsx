import Image from "next/image";
import { services } from "@/components/data/services";

export function ServiceCard() {
  return (
    <section className="mt-4 py-10 bg-gray-50">
      <div className="mx-auto px-3">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Our Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
