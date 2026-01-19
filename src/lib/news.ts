interface NewsProps {
  date: string;
  title: string;
  image?: string;
  description?: string;
  featured: boolean;
  term?: string; // For grants: e.g., "2025-2028"
}

interface EventProps {
  date: string;
  endDate?: string;
  title: string;
  time: string;
  location: string;
  speaker: string;
}

export const upcomingEvents: EventProps[] = [
  {
    date: "Apr 2026",
    title: "Guest Lecture: AI Ethics in Research",
    time: "2:00 PM - 4:00 PM",
    location: "Goodwin Hall, Room 524",
    speaker: "Dr. Emily Watson, University of Toronto",
  },
  {
    date: "Jan 2026",
    title: "BAM Lab Research Seminar",
    time: "10:00 AM - 12:00 PM",
    location: "Online (Zoom)",
    speaker: "PhD Candidate Presentations",
  },
  {
    date: "Dec 2026",
    endDate: "Dec 2026",
    title: "Workshop on Big Data in Healthcare",
    time: "9:00 AM - 5:00 PM",
    location: "Queen's University Conference Centre",
    speaker: "Multiple Speakers",
  },
  {
    date: "Dec 2026",
    title: "Industry Partner Showcase",
    time: "1:00 PM - 6:00 PM",
    location: "Innovation Park",
    speaker: "BAM Lab & Industry Partners",
  },
];

export const News: NewsProps[] = [
  {
    date: "Jan 2026",
    title: "Paper Accepted at IEEE ICC (CISS)",
    description:
      "Nafiz Sadman (Ph.D. student), co-authored with Dr. Furkan Alaca and Dr. Farhana Zulkernine, published his Master's thesis titled 'DepthPulse+: A Depth and Vital Sign Based Method for Face Presentation Attack Detection' at IEEE International Conference on Communications (Track: Communications and Information Systems Security). Congratulations!",
    featured: true,
  },
  {
    date: "Jan 2025",
    title: "Connected Mind Team Grant: $1,500,000",
    description:
      "Co-creating Intelligent Neuro-Technologies for Healthy Aging (CINTHeA). Source: CFREF Connected Mind Team Grant",
    featured: true,
    term: "2025-2028",
  },
  {
    date: "Dec 2025",
    title: "Paper Accepted at TMLR",
    description:
      "Our paper 'InfGraND: An Influence-Guided GNN-to-MLP Knowledge Distillation' has been accepted at Transactions on Machine Learning Research (TMLR).",
    featured: true,
  },
  {
    date: "Jan 2025",
    title: "NSERC Discovery Grant Awarded: $210,000",
    description:
      "Dr. Zulkernine awarded NSERC Discovery Grant for 'Advancing Machine Perception for Situation-Aware Goal-Oriented Human Machine Interaction'. Source: NSERC Discovery",
    featured: false,
    term: "2025-2030",
  },
  {
    date: "Dec 2025",
    title: "Paper Accepted at JMIR",
    description:
      "Our paper 'A Multiagent Summarization and Auto-Evaluation Framework for Medical Text: Development and Evaluation Study' has been accepted to the Journal of Medical Internet Research (JMIR).",
    featured: false,
  },
  {
    date: "Jan 2025",
    title: "Connected Mind Team Grant: $1,500,000",
    description:
      "When People Talk, Listen Completely. Source: CFREF Connected Mind Team Grant",
    featured: false,
    term: "2025-2028",
  },
  {
    date: "Jan 2025",
    title: "Connected Mind Seed Grant: $75,000",
    description:
      "Developing an AI-Based Tool for Optimizing Disability Accessibility of Pedestrian Networks in Marginalized Neighborhoods. Source: CFREF Connected Mind Seed Grant",
    featured: false,
    term: "2025-2027",
  },
  {
    date: "Jan 2024",
    title: "Queen's Multidisciplinary Health Sciences Grant: $50,000",
    description:
      "Leveraging machine learning for competency-based medical education: A tool for facilitating decision making in resident progress and promotion assessments. Source: Queen's Annual Multidisciplinary DOR Health Sciences RG",
    featured: false,
    term: "2024-2026",
  },
  {
    date: "Jan 2023",
    title: "NFRF Exploration Grant: $250,000",
    description:
      "Companion: A Cognitive Voice and Video Assistant Bot for Safe Aging. Source: NFRF Exploration",
    featured: false,
    term: "2023-2027",
  },
];
