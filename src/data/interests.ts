import { site } from "./site";

export interface Interest {
  title: string;
  summary: string;
  body: string;
  href: string;
  hrefLabel: string;
  monogram: string;
}

// Both link out to URLs still marked TODO in site.ts (art, medium). The Interests
// component only renders the "view" link when href is non-empty, per the brief's
// "render nothing rather than a dead # link" rule — it does not hide the whole card,
// since the description text is still true even before the link exists.
export const interests: Interest[] = [
  {
    title: "Art channel",
    summary: "Pencil sketches and paintings",
    body: "I draw what I like and whatever catches my eye, which covers most things.",
    href: site.links.art,
    hrefLabel: "See the work",
    monogram: "ART",
  },
  {
    title: "Writing",
    summary: "Whatever I am learning",
    body: "I learn something, then write it down so the next person does not have to work it out alone.",
    href: site.links.medium,
    hrefLabel: "Read on Medium",
    monogram: "M",
  },
];
