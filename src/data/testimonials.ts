export interface Testimonial {
  name: string;
  destination: string;
  service: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    destination: "UK",
    service: "Study Abroad",
    quote:
      "The team made my study abroad journey easier. They guided me through the process and helped me understand my next steps.",
  },
  {
    name: "David Okafor",
    destination: "Canada",
    service: "Work Visa",
    quote:
      "The guidance was helpful and clear. My questions were answered, and I had a better understanding of the process.",
  },
  {
    name: "Maria Lopez",
    destination: "UAE",
    service: "Travel Planning",
    quote:
      "The team helped me understand my travel options and plan my next steps with greater confidence.",
  },
  {
    name: "James Wilson",
    destination: "Australia",
    service: "Study Abroad",
    quote:
      "The consultation gave me useful information about my options and helped me organize my plans.",
  },
  {
    name: "Priya Sharma",
    destination: "Germany",
    service: "Work Visa",
    quote:
      "The team explained the process clearly and helped me understand the requirements I needed to consider.",
  },
  {
    name: "Emeka Nwosu",
    destination: "Schengen Area",
    service: "Travel Planning",
    quote:
      "The advice helped me understand the steps involved in planning my trip and what I needed to prepare.",
  },
];
