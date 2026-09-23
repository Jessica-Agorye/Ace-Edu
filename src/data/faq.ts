export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  title: string;
  description: string;
  questions: FAQItem[];
};

export const faqCategories: FAQCategory[] = [
  {
    title: "Study Abroad",
    description:
      "Questions about studying abroad and starting your application.",
    questions: [
      {
        question: "What study-abroad support does Ace provide?",
        answer:
          "Ace states that it assists with programme and institution selection, admission processing, visa assistance, accommodation arrangements and pre-departure support.",
      },
      {
        question:
          "What documents are generally required for undergraduate admission?",
        answer:
          "WAEC/GCE or NECO results, relevant result verification details where applicable, secondary-school transcripts/testimonial, international passport data page, CV/resume where applicable, and additional documents required by the institution. Documents are requested in PDF format.",
      },
      {
        question:
          "What documents are generally required for postgraduate admission?",
        answer:
          "The website lists BSc credentials, academic transcripts, WAEC/NECO documentation, international passport data page,secondary-school testimonial, academic and/or professional references, recommendation letters where required, and a letter of intent/statement of purpose. Requirements vary by institution.",
      },
      {
        question: "When are academic intakes available?",
        answer:
          "The website references September/Fall, January/Winter and May/Spring-Summer intakes, while noting that academic sessions differ by country and institution.",
      },
      {
        question: "Do I need IELTS, TOEFL, GMAT or GRE to study abroad?",
        answer:
          "Requirements depend on the country, institution and programme. The website advertises programmes where certain English or entrance tests may not be required, but applicants should confirm the specific requirement for their chosen programme.",
      },
      {
        question: "Can ACE help with my student visa application?",
        answer:
          "Yes. Visa assistance is listed among Ace's services, including guidance through the application process and preparation.",
      },
      {
        question: "Can Ace help arrange accommodation?",
        answer:
          "Yes. Accommodation arrangements are listed as part of the study-abroad support service.",
      },
      {
        question: "Does Ace provide pre-departure support?",
        answer:
          "Yes. The website states that pre-departure support can include.",
      },
      {
        question: "Can I study abroad if I do not have a relative overseas?",
        answer:
          "Yes. Having a relative abroad is not generally a prerequisite for studying abroad. Eligibility depends on the destination's admission and visa requirements, your programme, finances and supporting documentation.",
      },
      {
        question: "Can someone with an HND apply to study abroad?",
        answer:
          "Potentially, depending on the country, institution and programme. An HND holder should have their credentials assessed against the specific admission requirements before selecting a programme.",
      },
    ],
  },

  {
    title: "Imigration",
    description: "Everything you need to know about Imigration.",
    questions: [
      {
        question:
          "For Federal Skilled Worker immigration, does my work experience have to be current?",
        answer:
          "The existing Ace Immigration 101 article states that qualifying work experience may count if it was obtained within the relevant period and does not necessarily have to be a current job. Immigration rules and eligibility criteria should be checked against current official requirements before relying on this answer.",
      },
      {
        question:
          "What is the best Canadian city to choose under the skilled-worker stream?",
        answer:
          "The website explains that the appropriate destination can depend on factors such as cost of living, family or friends, available opportunities, career objectives and personal goals. For provincial nomination routes, applicants may have obligations connected to the nominating province.",
      },
      {
        question:
          "If my Canadian programme moves online, should I defer or continue?",
        answer:
          "The older website article explains that the appropriate choice depends on whether the applicant already has the relevant study authorization and on the institution's policy. Because this answer is time-sensitive, applicants should verify current study-permit and institutional rules before deciding.",
      },
      {
        question:
          "What factors are considered when deciding whether I can study or immigrate to Canada?",
        answer:
          "The older Ace article identifies factors such as age, educational qualifications, work experience, adaptability and spouse/family circumstances. The exact requirements depend on the immigration or study pathway.",
      },
      {
        question: "How long does a provincial nomination take?",
        answer:
          "The existing article explains that processing varies by province and applicant circumstances, including how quickly an applicant submits required documents. The article gives historical examples ranging from roughly 30–45 days to six months; these should not be treated as current processing-time guarantees.",
      },
      {
        question:
          "Is there a maximum processing time for Canadian permanent residence?",
        answer:
          "The existing Ace article states that there is no single maximum processing time applicable to every permanent-residence application because processing varies by pathway and case. Applicants should consult current official processing-time information..",
      },
      {
        question: "Can someone around age 50 qualify for Canadian immigration?",
        answer:
          "The existing article explains that age can affect eligibility and points under some economic immigration routes and mentions alternative pathways. Eligibility is pathway-specific and should be assessed against current rules.",
      },
      {
        question: "Should I use a recruitment agency to find a Canadian job?",
        answer:
          "The existing Ace article encourages applicants to consider applying directly to employers and using legitimate employment platforms. Applicants should be cautious of anyone asking them to pay for a Canadian job offer.",
      },
      {
        question:
          "Can I include my spouse after receiving an invitation to apply? ",
        answer:
          "The existing article explains that adding a spouse can affect the applicant's points and eligibility. The applicant's score and eligibility would need to be recalculated under the applicable rules before proceeding. ",
      },
      {
        question:
          "Does proof of funds have to be in the principal applicant's account? ",
        answer:
          "The existing Ace article states that proof of funds may be held in a spouse's account in some circumstances. The precise evidence required depends on the immigration programme and current rules. ",
      },
      {
        question:
          "Can I immigrate to Canada if my occupation is not currently selected by a particular programme? The ",
        answer:
          "The existing article suggests considering other occupations or pathways, including further study where appropriate. Applicants should assess current eligible occupations and programmes rather than relying on historical programme lists. ",
      },
      {
        question:
          "Is there a Canadian immigration route for a single parent with limited proof of funds? ",
        answer:
          "The existing Ace article discusses pathways with different financial requirements but does not guarantee eligibility. Proof-of-funds rules are pathway-specific and should be verified against current official requirements. ",
      },
      {
        question:
          "How long can I remain outside Canada after becoming a permanent resident? ",
        answer:
          "The existing article refers to the permanent-residency residency obligation. The exact requirement should be checked against current Canadian immigration rules, including exceptions and how physical presence is calculated.",
      },
      {
        question:
          "Does a child born in Canada automatically give the parents immigration benefits? ",
        answer:
          "The existing Ace article distinguishes the child's citizenship status from the parents' immigration status. A child's status does not automatically confer permanent residence or citizenship on the parents. ",
      },
      {
        question:
          "Can someone in Canada find a job for me while I am still in Nigeria? ",
        answer:
          "The existing article recommends legitimate direct job-search channels and cautions against paying for a job offer. Applicants should verify employers and recruitment arrangements carefully.",
      },

      {
        question:
          "Can I use a Canadian relative to sponsor or arrange a caregiver job for me? ",
        answer:
          "The existing article explains that caregiver employment and immigration pathways have specific employer and candidate requirements. The exact pathway and current eligibility criteria must be verified before proceeding.",
      },
      {
        question:
          "Do I need IELTS and credential evaluation for Canadian Express Entry if I studied in the United States?",
        answer:
          " The existing Ace article states that applicants may still need the applicable language test and educational credential assessment, and may need police certificates depending on residence history. Current programme requirements should be checked before applying.",
      },
    ],
  },

  {
    title: "Travel & VIisa",
    description: "Questions about travelling and visa processing.",
    questions: [
      {
        question: "Can Ace help me apply for a tourist visa?",
        answer:
          "Ace can provide travel and visa guidance as part of its travel-support services. Visa decisions remain with the relevant embassy, consulate or immigration authority. ",
      },
      {
        question: "Which documents do I usually need for a tourist visa??",
        answer:
          "Requirements vary by destination. Common documents may include a valid passport, completed application forms, photographs where required, financial evidence, travel itinerary, accommodation evidence, employment or business evidence, and documents demonstrating the purpose and circumstances of the trip. ",
      },
      {
        question:
          "How much money should I have in my account before applying for a tourist visa? ",
        answer:
          "There is no universal balance that guarantees visa approval. Financial requirements differ by destination and depend on factors such as trip length, accommodation, income, travel history and who is funding the trip. ",
      },
      {
        question: "Does having a large bank balance guarantee visa approval? ",
        answer:
          "No. Visa decisions are based on the full application and the destination's rules. Financial evidence is only one part of the assessment.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Yes, potentially. Self-employed applicants may need to provide credible evidence of their business activities, income, tax or registration records where applicable, financial position and the purpose of travel. ",
      },
      {
        question: "Can a student apply for a tourist visa?  ",
        answer:
          "Potentially, provided the applicant meets the destination's visitor-visa requirements and can demonstrate the genuine purpose and circumstances of the trip. ",
      },
      {
        question:
          "Can I apply for a visa without previous international travel history?  ",
        answer:
          "Yes. Previous travel is not universally mandatory. However, the applicant must satisfy the destination's requirements and provide credible evidence supporting the application.",
      },
      {
        question: "Can Ace guarantee my visa approval?  ",
        answer:
          "No responsible consultant should guarantee a visa decision. Ace can provide guidance and application support, but the final decision rests with the relevant immigration or consular authority.",
      },
      {
        question: "What happens if my visa application is refused?",
        answer:
          "The appropriate next step depends on the refusal reason and the destination's rules. The refusal letter should be reviewed carefully before deciding whether to reapply, appeal where permitted, or address deficiencies in a new application. ",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
      {
        question: "Can I apply for a visa if I am self-employed in Nigeria? ",
        answer:
          "Some immigration pathways may provide a route toward permanent residence, but this depends on the country, visa category, and your circumstances.",
      },
    ],
  },

  {
    title: "Travel & Relocation",
    description:
      "Practical questions about preparing for your trip or move abroad.",
    questions: [
      {
        question: "How early should I start planning my trip?",
        answer:
          "It is generally helpful to begin planning well in advance so you have enough time for documentation, visa processing, accommodation, flights, and other arrangements.",
      },
      {
        question: "Can you help me plan my relocation?",
        answer:
          "Yes. We can help you understand the major steps involved in preparing for an international move, depending on your destination and purpose of travel.",
      },
      {
        question: "Can you help with accommodation?",
        answer:
          "Depending on the service and destination, we can guide you on accommodation options and what to consider before booking.",
      },
      {
        question: "Can you help with flight arrangements?",
        answer:
          "We can provide guidance around your travel arrangements and help you understand what to consider when planning your journey.",
      },
      {
        question: "What should I prepare before travelling?",
        answer:
          "You should ensure that your passport, visa, travel documents, accommodation information, financial arrangements, and other destination-specific requirements are in order before travelling.",
      },
    ],
  },

  {
    title: "General Questions",
    description: "Answers to common questions about our services and process.",
    questions: [
      {
        question: "What does Ace Edu and Travel Consult do?",
        answer:
          "Ace provides education, travel, immigration and related professional support. Its website describes services including study-abroad advisory, admission support, visa assistance, travel and tours, immigration advisory, career strategy and professional writing services.",
      },
      {
        question: "Which destinations does Ace support?",
        answer:
          "Ace supports clients across Europe, America, Asia and Australia. Destination availability can vary by programme, institution, visa route and current policy.",
      },
      {
        question: "Can Ace help me choose a study destination?",
        answer:
          "Yes. Ace provides guidance on choosing a suitable country, institution and programme based on the client's academic and career objectives.",
      },
      {
        question: "Does Ace provide travel and tour services?",
        answer:
          "Yes. Ace describes its Travel and Tours service as providing travel management and travel experiences for business, leisure and group travellers.",
      },
      {
        question: "Where is Ace located?",
        answer:
          "The website lists 294 Herbert Macaulay Way, Yaba 101212, Lagos, Nigeria.",
      },
      {
        question: "How can I contact Ace?",
        answer:
          "The website lists +234 902 706 5862 for calls or WhatsApp and consultace91@gmail.com as an email contact.",
      },
    ],
  },
];
