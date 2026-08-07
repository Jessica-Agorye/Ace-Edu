export default function PremiumConsulting() {
  const values = [
    "Accountability",
    "Quality Service",
    "Independent Thinking",
    "Win-Win Partnership",
    "Creativity and Innovation",
  ];

  return (
    <main>
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-[url('/images/travel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="mx-auto max-w-4xl px-5 text-center text-white sm:px-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Premium Consulting
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              Guiding students and professionals toward world-class education,
              global opportunities, and successful international careers.
            </p>

            <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 sm:px-8">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-6 md:space-y-24 md:py-20 lg:px-8">
        <section className="space-y-10">
          <div className="max-w-4xl">
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Discover Your Global Potential
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              ACE Consult helps students, professionals, and families access
              quality education and international opportunities through expert
              guidance, personalized support, and trusted global partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="max-w-prose text-gray-600 leading-8">
                ACE Consult is an Education and Travel consultancy registered
                with the Corporate Affairs Commission (CAC). We assist students
                in identifying the right study destinations, selecting suitable
                institutions, processing admissions, and obtaining visas for
                countries across Europe, North America, Asia, and Australia.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <p className="max-w-prose text-gray-600 leading-8">
                Our experienced consultants provide professional guidance
                throughout every stage of the journey—from career counselling
                and application support to travel preparation—ensuring every
                client receives reliable, personalized service.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-md">
            <h2 className="mb-5 text-2xl font-bold text-blue-600">
              Our Vision
            </h2>

            <p className="leading-8 text-gray-600">
              Creating the full realization of education's potential in driving
              innovation, productivity, sustainable development, and global
              opportunities for individuals and communities.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-md">
            <h2 className="mb-5 text-2xl font-bold text-blue-600">
              Our Mission
            </h2>

            <p className="leading-8 text-gray-600">
              To be a knowledge powerhouse providing exceptional educational
              consulting and travel services that inspire curiosity, empower
              individuals, and transform lives through international
              opportunities.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Our Core Values
            </h2>

            <p className="leading-8 text-gray-600">
              Everything we do is built upon values that guide our decisions,
              relationships, and commitment to delivering outstanding service to
              every client.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex min-h-[120px] items-center rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-md"
              >
                <p className="font-medium text-gray-700">✓ {value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-blue-600 px-6 py-14 text-center text-white sm:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready To Begin Your Journey?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Whether you're planning to study abroad, relocate, or explore
            international opportunities, our experienced consultants are ready
            to guide you every step of the way.
          </p>

          <button className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100 sm:px-8">
            Contact Us Today
          </button>
        </section>
      </div>
    </main>
  );
}
