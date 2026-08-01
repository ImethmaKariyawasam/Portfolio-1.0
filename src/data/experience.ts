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
    body:
      "Contributed to enterprise software development in a live production environment, " +
      "implementing bug fixes, feature enhancements, and system improvements across Java, Spring " +
      "Boot, Java Swing, C#, and Angular. Supported Jenkins CI/CD pipelines and automatic " +
      "deployment environments to maintain reliable and repeatable deployment workflows.",
    tags: ["Java", "Spring Boot", "Angular", "C#", "Jenkins"],
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
