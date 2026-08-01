export interface Experience {
  id: string;
  org: string;
  role: string;
  dates: string;
  bullets?: string[];
  body?: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  monogram: string;
  logo?: string;
}

export const experience: Experience[] = [
  {
    id: "cambio",
    org: "Cambio Software Engineering",
    role: "Software Engineer Intern",
    dates: "Jul 2024 – Jul 2026",
    bullets: [
      "Delivered bug fixes and feature enhancements on enterprise modules of the Cosmic platform, in a live production codebase.",
      "Worked across Java Spring Boot, Java Swing and Angular.",
      "Maintained Active Directory environments and supported Jenkins CI/CD pipelines for repeatable deployments.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "Jenkins"],
    monogram: "CB",
    logo: "/images/logos/cambio.png",
  },
  {
    id: "ieee-sl-spark",
    org: "IEEE Sri Lanka Section",
    role: "Web Development Coordinator · volunteer",
    dates: "Sep 2024",
    body:
      "Built and shipped the official SPARK 2024 competition site in collaboration with the " +
      "Ceylon Chamber of Commerce and the International Labour Organization in Sri Lanka.",
    tags: ["Web", "Client work"],
    href: "https://spark.chamber.lk",
    hrefLabel: "View details",
    monogram: "IE",
    logo: "/images/logos/ieee.png",
  },
];
