import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Dentist Find <br />
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Providing world-class medical services with experienced doctors,
          modern facilities, and patient-centered care.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold hover:bg-blue-800 transition">
            Book Appointment
          </button>

          <button className="rounded-xl border border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition">
            Emergency Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
