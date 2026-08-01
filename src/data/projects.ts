export interface Project {
  id: string;
  title: string;
  kind: string; // shown under the title in mono
  dates: string; // display string, e.g. "Jun 2025 - 2026"
  summary: string; // one line (card-sub)
  body?: string; // paragraph (card-body)
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
      "specialist agent — objective, subjective, mathematics, or coding — grounded in course content " +
      "via RAG over Pinecone. It self-corrects malformed outputs through a validate-and-retry loop, " +
      "flags low-confidence grades for teacher review, checks for plagiarism via TF-IDF cosine " +
      "similarity, and feeds Bloom's-taxonomy-classified analytics into teacher dashboards.",
    tags: ["Python", "FastAPI", "LangGraph", "Pinecone", "Kafka", "MongoDB", "AWS ECR/ECS", "IEEE SmartNets 2026"],
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
      "A delivery platform built as independent microservices, with real-time order tracking, " +
      "multi-role access, Stripe payments and automated email updates. I owned the payment " +
      "management service end to end, including how it fails without taking an order down with it.",
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
      "Voice navigation, text-to-speech, speech-to-text and audio product descriptions, so " +
      "someone can search, browse a store and buy without sighted help. I built the user " +
      "management module. The accessibility constraints changed how I think about interface " +
      "state generally.",
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
