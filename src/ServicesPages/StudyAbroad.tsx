import studyAbroadData from "../data/studyAbroadData";

const countries = [
  "Canada",
  "United Kingdom",
  "United States",
  "Australia",
  "Germany",
  "Ireland",
  "France",
  "Netherlands",
  "Malta",
  "Poland",
];

const requirements = [
  "Valid International Passport",
  "Academic Transcripts",
  "WAEC/NECO or Equivalent",
  "Degree Certificate (Postgraduate Applicants)",
  "Statement of Purpose",
  "Reference Letters",
  "Passport Photograph",
];

const process = [
  "Free Consultation",
  "Choose Country",
  "Select University",
  "Prepare Documents",
  "Receive Admission",
  "Apply for Visa",
];

export default function StudyAbroad() {
  const study = studyAbroadData.find((item) => item.slug === "study-abroad");

  if (!study) return null;

  return (
    <main>
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${study.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="max-w-3xl px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {study.title}
            </h1>

            <p className="text-lg leading-8 mb-8">
              Unlock global opportunities with expert guidance from admission to
              visa approval.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 space-y-24">
        {/* About */}

        <section>
          <h2 className="text-3xl font-bold mb-6">
            Study Abroad With Confidence
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 leading-8">{study.description1}</p>

            <p className="text-gray-600 leading-8">{study.description2}</p>
          </div>
        </section>

        {/* Why Study Abroad */}

        <section>
          <h2 className="text-3xl font-bold mb-8">Why Study Abroad?</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>Internationally recognized qualifications</li>

              <li>Better career opportunities</li>

              <li>Global work experience</li>

              <li>Build an international network</li>
            </ul>

            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>Experience different cultures</li>

              <li>Improve communication skills</li>

              <li>Higher earning potential</li>

              <li>World-class education facilities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Countries We Cover</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {countries.map((country) => (
              <div
                key={country}
                className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition p-6 text-center font-semibold"
              >
                {country}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.offerings.map((service) => (
              <div
                key={service}
                className="rounded-xl bg-gray-50 p-6 border hover:border-blue-500 transition"
              >
                <p className="font-medium text-gray-700">✔ {service}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Admission Requirements</h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Requirements vary depending on your preferred country and
              institution.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Application Process</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {process.map((step, index) => (
              <div
                key={step}
                className="text-center border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>

                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            Scholarships & Financial Support
          </h2>

          <div className="bg-blue-50 rounded-xl p-8">
            <p className="leading-8 text-gray-600 mb-6">
              We help students discover scholarships, tuition discounts, student
              loans, and other financial aid opportunities that make studying
              abroad more affordable.
            </p>

            <ul className="list-disc pl-5 space-y-3">
              <li>Merit Scholarships</li>

              <li>Government Scholarships</li>

              <li>University Scholarships</li>

              <li>Student Loans</li>

              <li>Financial Planning</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="border rounded-lg p-5">
              <summary className="cursor-pointer font-semibold">
                Do I need IELTS?
              </summary>

              <p className="mt-3 text-gray-600">
                Some universities waive English tests depending on your
                qualifications and chosen country.
              </p>
            </details>

            <details className="border rounded-lg p-5">
              <summary className="cursor-pointer font-semibold">
                Can I work while studying?
              </summary>

              <p className="mt-3 text-gray-600">
                Yes. Many countries allow international students to work
                part-time during their studies.
              </p>
            </details>

            <details className="border rounded-lg p-5">
              <summary className="cursor-pointer font-semibold">
                Will ACE assist with my visa?
              </summary>

              <p className="mt-3 text-gray-600">
                Absolutely. We provide complete visa guidance, document
                preparation, and interview support.
              </p>
            </details>
          </div>
        </section>

        <section className="bg-blue-600 rounded-2xl text-white text-center py-16 px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Study Abroad?</h2>

          <p className="max-w-2xl mx-auto mb-8">
            Start your international education journey today. Our experienced
            consultants are ready to help you every step of the way.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}
