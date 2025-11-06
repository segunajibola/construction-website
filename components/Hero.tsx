export function Hero() {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2 py-16 md:py-24">
        {/* Text Block */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Building the <span className="text-blue-700">Future</span> with
            Precision & Quality
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Top-notch construction services that combine innovation,
            craftsmanship, and sustainability.
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition">
            Get a Free Quote
          </button>
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="Construction site"
            className="w-full h-auto shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
