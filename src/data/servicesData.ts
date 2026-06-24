export type Service = {
  service: string;
  title: string;
  image: string;
  description: string;
  more: string;
  points: string[];
};

export const servicesData = [
  {
    service: "security",
    title: "Security",
    image: "/images/travel1.jpg",
    description: "....",
    more: "....",
    points: ["24/7 support", "Verified partners"],

    subServices: [
      {
        id: "travel-security",
        title: "Travel Security",
        description: "Full protection during travel.",
        requirements: [
          "Valid passport",
          "Travel insurance",
          "Emergency contact details",
        ],
      },
      {
        id: "document-security",
        title: "Document Security",
        description: "Secure handling of sensitive documents.",
        requirements: ["Identity verification", "Signed authorization form"],
      },
    ],
  },
];

