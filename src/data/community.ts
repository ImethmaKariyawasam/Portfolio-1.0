export interface CommunityRole {
  role: string;
  org: string;
  dates: string;
}

export const communityIntro = "Mostly IEEE, mostly organising things for other students.";

export const communityRoles: CommunityRole[] = [
  { role: "Chapter Vice Chairperson", org: "SLIIT IEEE Women in Engineering", dates: "2024" },
  { role: "IEEE Day Ambassador", org: "SLIIT", dates: "2024" },
];

export const alsoInvolvedWith: string[] = [
  "IEEE SL SIGHT",
  "IEEE SL IAS",
  "IEEE SLIIT SB",
  "IEEE SLIIT CS",
  "AIESEC",
];

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export const photos: Photo[] = [
  { src: "/images/volunteering/ieee-session.jpg", alt: "IEEE Day 2024", caption: "IEEE Day 2024" },
  { src: "/images/volunteering/cybershield-3.0-outdoor.jpg", alt: "CyberShield 3.0, outdoor group photo", caption: "CyberShield 3.0" },
  { src: "/images/volunteering/cybershield-3.0-indoor.jpg", alt: "CyberShield 3.0 organising team, indoor group photo", caption: "CyberShield 3.0 team" },
  { src: "/images/volunteering/unravel-2.0-group.jpg", alt: "UNravel 2.0 organising team, large group photo", caption: "UNravel 2.0, JamborIEEE" },
  { src: "/images/volunteering/unravel-2.0-team.jpg", alt: "UNravel 2.0 team photo", caption: "UNravel 2.0 team" },
  { src: "/images/volunteering/unravel-2.0-committee.jpg", alt: "UNravel 2.0 group photo", caption: "UNravel 2.0" },
  { src: "/images/volunteering/path-to-internship-24-auditorium.jpg", alt: "Path to Internship '24, full auditorium", caption: "Path to Internship '24" },
  { src: "/images/volunteering/path-to-internship-24-group.jpg", alt: "Path to Internship '24 organising team", caption: "Path to Internship '24 team" },
  { src: "/images/volunteering/path-to-internship-24-committee.jpg", alt: "Path to Internship '24 group photo", caption: "Path to Internship '24" },
];
