import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-3 flex flex-col md:flex-row items-center gap-10">
        {/* Image Block */}
        {/* <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=870&q=80"
            alt="Construction workers at site"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div> */}

        {/* Text Block */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-gray-300">
            Building the Future, One Project at a Time
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At <span className="font-semibold text-blue-700">BuildPro</span>,
            we’re more than just builders — we’re problem-solvers, innovators,
            and partners in progress. From homes to highways, our work stands
            for quality and trust.
            <Link href="/about" className="inline text-blue-500">
              {" "}
              Learn more <ArrowRight className="inline w-5 h-5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
