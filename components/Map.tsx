"use client";

export function Map() {
  return (
    <section id="location" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Our Location
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Visit our office or construction site location for consultations and
          inquiries.
        </p>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.559293698345!2d3.516587101821891!3d6.449222598041181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7aee7d1b891%3A0x9787fb343929f092!2sLakia%20Construction%20Company!5e0!3m2!1sen!2sng!4v1762731179499!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
