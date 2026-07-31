export const site = {
  name: "Imethma Kariyawasam",
  role: "Backend · Cloud · Applied AI",
  // Reference HTML footer says "Negombo, LK" specifically — kept exact per the brief's
  // "port it, don't reinterpret it" rule, even though it differs from "Colombo" used
  // in earlier CV drafts. Confirm which is correct.
  location: { label: "Negombo, LK", timezone: "Asia/Colombo" },
  status: "Open to work",
  links: {
    email: "imethmak@gmail.com",
    github: "https://github.com/ImethmaKariyawasam",
    linkedin: "https://linkedin.com/in/ImethmaKariyawasam",
    // TODO (brief section 8): art channel and Medium URLs not yet supplied.
    // Leave empty — components must render nothing rather than a dead "#" link.
    art: "",
    instagram: "",
    medium: "",
    // TODO (brief section 8): CV PDF not yet supplied.
    cv: "",
  },
  tagline: "I build the parts that have to keep working.",
  intro:
    "Backend services, cloud infrastructure, and the AI agents that increasingly sit inside them. " +
    "Final-year software engineering undergraduate at SLIIT, with two years at Cambio behind me " +
    "working on a live enterprise codebase, and co-author of an IEEE paper on a multi-agent grading engine I " +
    "designed and shipped.",
  introTags: ["Dean's List, Y1 & Y4", "WGPA 3.68", "IEEE published", "AWS certs in progress"],
  footerNote: "Built by hand. No template.",
};
