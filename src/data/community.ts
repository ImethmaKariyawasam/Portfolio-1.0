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
  // TODO (brief section 8): real photo files not yet supplied — src is a placeholder path.
  // PhotoStrip renders the mono filename as a stand-in frame until images land in
  // /public/images/volunteering/.
  src: string;
  alt: string;
  caption: string;
}

export const photos: Photo[] = [
  { src: "/images/volunteering/wie-chapter.jpg", alt: "WIE chapter group photo, 2024", caption: "WIE chapter, 2024" },
  { src: "/images/volunteering/sight-workshop.jpg", alt: "IEEE SIGHT workshop", caption: "IEEE SIGHT workshop" },
  { src: "/images/volunteering/launchpad.jpg", alt: "Launchpad '24 event", caption: "Launchpad '24" },
  { src: "/images/volunteering/spark.jpg", alt: "SPARK 2024 launch event", caption: "SPARK 2024 launch" },
  { src: "/images/volunteering/xtreme.jpg", alt: "IEEEXtreme 18.0 competition", caption: "IEEEXtreme 18.0" },
  { src: "/images/volunteering/ieee-day.jpg", alt: "IEEE Day at SLIIT", caption: "IEEE Day, SLIIT" },
  { src: "/images/volunteering/wie-session.jpg", alt: "WIE tech session", caption: "WIE tech session" },
  { src: "/images/volunteering/sight-outreach.jpg", alt: "IEEE SIGHT outreach event", caption: "SIGHT outreach" },
  { src: "/images/volunteering/ias-program.jpg", alt: "IEEE IAS programme", caption: "IEEE IAS programme" },
  { src: "/images/volunteering/launch26.jpg", alt: "LAUNCH26 hackathon finals", caption: "LAUNCH26 finals" },
];
