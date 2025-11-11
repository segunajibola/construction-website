export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300 mb-6">
          About <span className="text-blue-700">Lakia</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          We’re a trusted construction and infrastructure company dedicated to
          delivering high-quality projects with precision, innovation, and
          integrity. Our goal is to build not just structures — but lasting
          partnerships.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-50 rounded-sm shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To deliver world-class construction solutions that exceed
            expectations, enhance communities, and uphold the highest standards
            of safety and sustainability.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-50 rounded-sm shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To be recognized as a leader in construction and infrastructure
            development — known for reliability, innovation, and craftsmanship
            across every project we undertake.
          </p>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="container mx-auto p-8">
        <div className="bg-blue-700 text-white rounded-sm p-3 md:p-16">
          <h2 className="text-2xl font-bold mb-6">Our Experience</h2>
          <p className="text-blue-100 max-w-3xl mb-6 dark:text-gray-200">
            With over a decade of experience, Lakia has successfully completed
            residential, commercial, and public infrastructure projects across
            the nation. Our team of skilled engineers, architects, and builders
            ensures that every detail is handled with care — from foundation to
            finish.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-blue-50 font-medium">
            <li>🏗️ 150+ Completed Projects</li>
            <li>👷 10+ Years of Industry Experience</li>
            <li>🌍 Nationwide Operations</li>
            <li>🏢 Certified Professionals & Engineers</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-300 px-4 mb-8">
          From groundbreaking to grand opening — we’re with you every step of
          the way.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
