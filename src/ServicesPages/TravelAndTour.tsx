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
      <section className="relative h-[70vh] bg-[url('images/travel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel & Tour Services
            </h1>

            <p className="text-lg leading-8 mb-8">
              Explore the world with confidence. We help individuals, families,
              and businesses plan memorable trips with ease.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 space-y-24">
        {/* About */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Discover The World With Ease
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 leading-8">
              A leader in the Travel Management, providing high quality,
              enhanced travel services for travellers going for business,
              leisure…
            </p>

            <p className="text-gray-600 leading-8">
              ACE Consult is an Education and Travel consultancy business
              registered with the Corporate Affairs Commission (CAC) and located
              in Lagos. At Ace Travel, we offer a variety of travel packages for
              companies, individuals, and groups. Among the most talented
              consulting business in the travel industry, and we excel in
              creating one-of-a-kind vacations and destination events that offer
              truly breathtaking experiences at an affordable cost. At Ace Edu
              you get to discover why you should study abroad, where to study
              and how to process your admission and visa. You also get to
              interact with different cultures and form new experiences with our
              affordable travel packages. Our services include
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Our Travel Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>Personalized travel planning</li>
              <li>Affordable travel packages</li>
            </ul>

            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>Reliable customer support</li>
              <li>Stress-free travel experience</li>
            </ul>
          </div>
        </section>

        {/* More Information */}
        <section>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 leading-8">
              We work with trusted travel partners to ensure clients receive the
              best possible travel options, competitive prices, and quality
              service throughout their journey.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you're traveling locally or internationally, our team
              provides guidance and support to help make your trip smooth and
              memorable.
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            Travel & Tour Services We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelServices.map((service) => (
              <div
                key={service}
                className="rounded-xl bg-gray-50 p-6 border hover:border-blue-500 transition"
              >
                <p className="font-medium text-gray-700">✔ {service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6">Travel Without The Stress</h2>

          <p className="text-gray-600 leading-8 mb-6">
            Our goal is to make travel planning simple, convenient, and
            enjoyable. We handle the details so you can focus on creating
            unforgettable memories.
          </p>

          <p className="text-gray-600 leading-8">
            Whether you're planning a solo adventure, family vacation, group
            tour, or corporate trip, we're here to help every step of the way.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl text-white text-center py-16 px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready For Your Next Adventure?
          </h2>

          <p className="max-w-2xl mx-auto mb-8">
            Let us help you plan a seamless and memorable travel experience.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
            Contact Us Today
          </button>
        </section>
      </div>
    </main>
  );
}
