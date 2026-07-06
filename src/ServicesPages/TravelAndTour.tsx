const travelServices = [
  "Flight Booking",
  "Hotel Reservations",
  "Visa Assistance",
  "Travel Insurance",
  "Airport Pickup",
  "Holiday Packages",
  "Corporate Travel",
  "Tour Planning",
  "Group Tours",
  "Cruise Bookings",
];

export default function TravelAndTour() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-[url('/images/travel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="mx-auto max-w-4xl px-5 text-center text-white sm:px-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Travel & Tour Services
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              Explore the world with confidence. We help individuals, families,
              and businesses plan memorable trips with ease.
            </p>

            <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 sm:px-8">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-6 md:space-y-24 md:py-20 lg:px-8">
        {/* About */}
        <section className="space-y-10">
          <div className="max-w-4xl">
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Discover The World With Ease
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Whether you're planning a holiday, business trip, study abroad
              journey, or group tour, Ace Travel provides professional travel
              solutions designed to make every trip smooth, affordable, and
              memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-gray-600 leading-8">
                ACE Consult is an Education and Travel consultancy registered
                with the Corporate Affairs Commission (CAC) and based in Lagos.
                We assist individuals, families, and organizations with
                personalized travel planning, ensuring every client receives
                exceptional service from departure to arrival.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-gray-600 leading-8">
                From visa processing and flight bookings to study abroad
                admissions, accommodation, holiday packages, and destination
                planning, our experienced consultants work closely with trusted
                global partners to deliver reliable travel experiences at
                competitive prices.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Why Choose Our Travel Services?
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <ul className="list-disc space-y-4 pl-5 text-gray-600 leading-8">
              <li>Personalized travel planning</li>
              <li>Affordable travel packages</li>
              <li>Professional travel consultants</li>
              <li>Flexible travel solutions</li>
            </ul>

            <ul className="list-disc space-y-4 pl-5 text-gray-600 leading-8">
              <li>Reliable customer support</li>
              <li>Stress-free travel experience</li>
              <li>Trusted global travel partners</li>
              <li>Fast visa and documentation assistance</li>
            </ul>
          </div>
        </section>

        {/* More Information */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <p className="max-w-prose text-gray-600 leading-8">
              We partner with trusted airlines, hotels, embassies, and travel
              providers to give our clients access to competitive prices,
              excellent accommodations, and premium travel experiences.
            </p>

            <p className="max-w-prose text-gray-600 leading-8">
              Whether you're traveling locally or internationally, our dedicated
              team provides expert guidance before, during, and after your trip
              to ensure everything runs smoothly.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Travel & Tour Services We Offer
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {travelServices.map((service) => (
              <div
                key={service}
                className="flex min-h-[120px] items-center rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md"
              >
                <p className="font-medium text-gray-700">✔ {service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="rounded-2xl bg-blue-50 p-6 sm:p-8 lg:p-10">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Travel Without The Stress
          </h2>

          <p className="mb-6 max-w-3xl text-gray-600 leading-8">
            Our goal is to make travel planning simple, convenient, and
            enjoyable. We take care of the details so you can focus on making
            unforgettable memories and enjoying every moment of your journey.
          </p>

          <p className="max-w-3xl text-gray-600 leading-8">
            Whether you're planning a solo adventure, family vacation, group
            tour, honeymoon, or corporate trip, our experienced team is here to
            support you every step of the way.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-blue-600 px-6 py-14 text-center text-white sm:py-16 lg:px-10 lg:py-20">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready For Your Next Adventure?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Let us help you plan a seamless and memorable travel experience.
            From flights and visas to accommodation and tours, we've got every
            detail covered.
          </p>

          <button className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100 sm:px-8">
            Contact Us Today
          </button>
        </section>
      </div>
    </main>
  );
}
