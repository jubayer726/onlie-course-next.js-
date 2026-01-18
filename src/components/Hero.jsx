const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#c01f5b] to-[#4b2a6b] py-20">
      <div
            className="max-w-6xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-6">
            <HeroItem
              color="#00bcd4"
              text="Medical Admissions Program"
            />
            <HeroItem
              color="#f59e0b"
              text="University 'K' Admissions Program"
            />
            <HeroItem
              color="#ff5c8a"
              text="Model Test Program"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <HeroItem
              color="#8b2c2c"
              text="Engineering Admissions Program"
            />
            <HeroItem
              color="#6b6b6b"
              text="University 'Kh' Admissions Program"
            />
            <HeroItem
              color="#7e22ce"
              text="Class 6-10 Academic Program"
            />
          </div>
        </div>

        {/* Bottom Center */}
        <div className="mt-10 flex justify-center">
          <HeroItem
            color="#2563eb"
            text="Talent Hunt Program"
            wide
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Item */
function HeroItem({ color, text, wide }) {
  return (
    <div
      className={`flex items-center gap-4 bg-white rounded-full shadow-lg px-5 py-3
      ${wide ? "w-full md:w-2/3 justify-center" : ""}`}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: color }}
      >
        ★
      </div>

      {/* Text */}
      <p className="text-gray-900 font-semibold text-sm md:text-base">
        {text}
      </p>
    </div>
  );
}

export default Hero;
