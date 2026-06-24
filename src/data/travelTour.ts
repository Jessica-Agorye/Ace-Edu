export type Service = {
  service: string;
  title: string;
  image: string;
  description: string;
  more: string;
  points: string[];
};

const travelTourData = [
  {
    slug: "travel-consultation",
    title: "Travel Consultation",
    image: "/images/travel1.jpg",
    description1:
      "Every successful journey begins with proper planning. Our travel consultation service helps individuals, families, students, and business travelers make informed decisions before committing to a destination, visa process, educational opportunity, or travel arrangement.",

    description2:
      "Our consultants evaluate your goals, budget, preferred destinations, travel timeline, and requirements to recommend the most suitable options. We simplify complex travel processes and provide expert guidance that helps reduce delays, avoid costly mistakes, and improve travel outcomes.",

    offerings: [
      "Personalized travel planning and strategy",
      "Destination recommendations based on your goals",
      "Visa eligibility assessment",
      "Travel requirement evaluation",
      "Document preparation guidance",
      "University and study-abroad consultation",
      "Budget and financial planning advice",
      "Accommodation recommendations",
      "Flight and transportation guidance",
      "Travel insurance recommendations",
    ],
  },

  {
    slug: "study-abroad",
    title: "Study Abroad",
    image: "/images/travel1.jpg",

    description1:
      "Studying abroad provides access to world-class education, international exposure, and career opportunities. Our study abroad service helps students identify suitable institutions and programs that align with their academic and professional aspirations.",

    description2:
      "ACE is an Education and Travel consultancy business registered with the Corporate Affairs Commission (CAC). At Ace, you get to discover why you should study abroad, where to study and how to process your admission and visa.Our services include full professional support to those interested in studying and living abroad. Our professional support covers countries in Europe, America, Asia and Australia. Staff experience is top-notch and they are available to provide you with the best service that would enable you to realize your dreams. Ace Consult also offers special benefits that include From university selection to application submission and visa preparation, we provide end-to-end support throughout the admission process, ensuring students have the resources needed to succeed.",

    offerings: [
      "Full Professional Support.",
      "No English Test or Exams [GMAT, GRE, IELTS, TOEFL].",
      "Work Permit Guaranteed Upon Visa Approval.",
      "Access to Student Loans and Scholarships.",
      "Scholarship guidance",
      "Open-Ended Tuition Payment Plan",
      // "Application tracking support",
      // "Student visa assistance",
      // "Pre-departure orientation",
      // "Accommodation guidance",
    ],
  },

  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    image: "/images/travel1.jpg",

    description1:
      "Applying for a visa can be challenging due to changing requirements and documentation standards. Our visa assistance service provides professional guidance to simplify the application process.",

    description2:
      "We help clients prepare accurate applications, organize required documents, and prepare confidently for interviews while minimizing avoidable errors.",

    offerings: [
      "Visa eligibility review",
      "Application guidance",
      "Document verification",
      "Form completion support",
      "Appointment booking guidance",
      "Interview preparation",
      "Application tracking",
      "Travel history review",
      "Supporting document checks",
      "Professional consultation",
    ],
  },

  {
    slug: "tour-packages",
    title: "Tour Packages",
    image: "/images/travel1.jpg",

    description1:
      "Explore incredible destinations through carefully designed travel experiences. Our tour packages cater to individuals, families, groups, and corporate travelers.",

    description2:
      "Whether you're seeking adventure, relaxation, culture, or luxury, we curate travel experiences that deliver unforgettable memories.",

    offerings: [
      "Local and international tours",
      "Family vacation packages",
      "Group travel planning",
      "Adventure travel experiences",
      "Cultural tourism",
      "Historical site visits",
      "Transportation arrangements",
      "Accommodation booking",
      "Guided tour services",
      "Customized itineraries",
    ],
  },

  {
    slug: "flight-reservations",
    title: "Flight Reservations",
    image: "/images/travel1.jpg",

    description1:
      "We help travelers secure convenient and cost-effective flight options for domestic and international travel.",

    description2:
      "Our team assists with itinerary planning, route selection, and travel scheduling to ensure a smooth booking experience.",

    offerings: [
      "Domestic flight booking",
      "International flight booking",
      "Multi-city travel arrangements",
      "Business travel bookings",
      "Group flight reservations",
      "Fare comparison support",
      "Travel itinerary planning",
      "Flexible travel options",
      "Schedule recommendations",
      "Travel advisory support",
    ],
  },

  {
    slug: "hotel-booking",
    title: "Hotel Booking",
    image: "/images/travel1.jpg",

    description1:
      "Finding the right accommodation is an important part of any successful trip. We help travelers secure comfortable lodging based on their preferences and budget.",

    description2:
      "Our accommodation solutions range from budget-friendly stays to luxury hotels and long-term accommodation options.",

    offerings: [
      "Budget hotel reservations",
      "Luxury accommodation booking",
      "Business travel accommodation",
      "Family-friendly lodging",
      "Long-term stay options",
      "Resort bookings",
      "Apartment reservations",
      "Destination-based recommendations",
      "Booking management assistance",
      "Accommodation consultation",
    ],
  },
];

export default travelTourData;
