export interface Project {
  id: string;
  title: string;
  kind: string; // shown under the title in mono
  dates: string; // display string, e.g. "Jun 2025 - 2026"
  summary: string; // one line (card-sub)
  body?: string; // paragraph (card-body)
  credit?: string; // small mono line below body, e.g. publication/deployment credit
  tags: string[];
  href?: string;
  hrefLabel?: string; // "Read the paper", "View details"
  monogram: string; // "IN", "FF", "CB" — shown in the tile
  logo?: string;
}

export const currentlyBuilding: Project = {
  id: "next-project",
  title: "Next project",
  kind: "Starting this week",
  dates: "From Aug 2026",
  summary: "Starting this week",
  body:
    "Something new in backend and applied AI. This card will describe it properly once " +
    "there is working code behind it.",
  tags: [],
  monogram: "NEW",
};

export const projects: Project[] = [
  {
    id: "intellea",
    title: "INTELLEA",
    kind: "AI-driven learning platform · SAGE grading engine",
    dates: "Jun 2025 – 2026",
    summary: "AI-driven learning platform · SAGE grading engine",
    body:
      "INTELLEA is an AI-driven learning platform that personalises education through adaptive " +
      "tutoring, real-time emotion analysis, and multi-agent assessment. I designed and built SAGE, " +
      "its grading engine: a LangGraph-orchestrated pipeline that routes each submission to a " +
      "specialist agent for objective, subjective, mathematics, or coding work, grounded in course " +
      "content via RAG over Pinecone. It self-corrects malformed outputs through a validate-and-retry " +
      "loop, flags low-confidence grades for teacher review, checks for plagiarism via TF-IDF cosine " +
      "similarity, and feeds Bloom's-taxonomy-classified analytics into teacher dashboards.",
    credit: "Built, deployed and run on AWS, and published at IEEE SmartNets 2026.",
    tags: ["Python", "FastAPI", "LangGraph", "Pinecone", "Kafka", "MongoDB", "AWS ECR/ECS"],
    href: "https://ieeexplore.ieee.org/document/11604795",
    hrefLabel: "Read the paper",
    monogram: "IN",
    logo: "/images/logos/intellea.png",
  },
  {
    id: "flavour-fleet",
    title: "Flavour Fleet",
    kind: "Cloud-native food ordering and delivery",
    dates: "Apr – Jul 2025",
    summary: "Cloud-native food ordering and delivery",
    body:
      "A cloud-native food delivery platform built using microservices, enabling customer ordering, " +
      "restaurant management, delivery assignment, real-time order tracking, and secure Stripe " +
      "payments. The system includes role-based access control and automated email notifications " +
      "for order updates. I owned the Payment Management Service end-to-end, designing payment " +
      "workflows and handling failure scenarios to keep the ordering experience reliable.",
    tags: ["Spring Boot", "Docker", "Kubernetes", "React", "Microservices"],
    monogram: "FF",
    logo: "/images/logos/flavour-fleet.png",
  },
  {
    id: "visionspot",
    title: "VisionSpot",
    kind: "Shopping built for visually impaired users",
    dates: "Jun – Nov 2024",
    summary: "Shopping built for visually impaired users",
    body:
      "An accessible shopping platform built for visually impaired users, enabling independent " +
      "product discovery and purchasing through voice-based interactions. The system uses voice " +
      "navigation, speech-to-text, text-to-speech, and audio product descriptions to improve " +
      "accessibility. I developed the User Management module, while working within accessibility " +
      "constraints that shaped how I approach user experience and interface design.",
    tags: ["React", "React Native", "Node", "Express", "MongoDB", "Firebase"],
    monogram: "VS",
    logo: "/images/logos/visionspot.png",
  },
  {
    id: "zerowaste",
    title: "ZeroWaste",
    kind: "Waste collection that pays you back for recyclables",
    dates: "Jun – Nov 2024",
    summary: "Waste collection that pays you back for recyclables",
    body:
      "Collection scheduling, regional driver assignment and progress tracking, with rewards for " +
      "recyclable waste and service fees for everything else. I built the payment management " +
      "module. Money moving in both directions made the logic more interesting than it sounds.",
    tags: ["React", "Node", "Express", "MongoDB"],
    monogram: "ZW",
    logo: "/images/logos/zerowaste.png",
  },
];
