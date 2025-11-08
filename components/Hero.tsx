export function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-3 pt-8 md:py-24">
        {/* Text Block */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building with Precision andQuality
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Top-notch construction services that combine innovation,
            craftsmanship, and sustainability.
          </p>

          {/* <button className="mt-4 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition">
            Get a Free Quote
          </button> */}
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="Construction site"
            className="w-full h-[60vh] md:h-auto shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
