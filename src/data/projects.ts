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
    kind: "Multi-agent AI grading on AWS",
    dates: "Jun 2025 – 2026",
    summary: "Multi-agent AI grading on AWS · published at IEEE SmartNets 2026",
    body:
      "I architected and built the Assessment Engine: a LangGraph-orchestrated workflow that " +
      "routes MCQ, essay, coding and math submissions to specialised evaluator agents, with an " +
      "automated validate-and-retry loop and a dedicated bias-checking stage. Subjective grading " +
      "is grounded in real curriculum content through a RAG pipeline over Pinecone rather than " +
      "model memory. Along the way I tracked down a production scoring bug and a cross-thread " +
      "asyncio event-loop bug that was corrupting database writes.",
    tags: ["Python", "FastAPI", "LangGraph", "Pinecone", "Kafka", "MongoDB", "AWS ECR/ECS"],
    href: "https://ieeexplore.ieee.org/document/11604795",
    hrefLabel: "Read the paper",
    monogram: "IN",
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
  },
];
