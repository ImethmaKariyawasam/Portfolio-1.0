export interface EducationItem {
  id: string;
  school: string;
  dates: string;
  summary: string;
  body?: string;
  tags?: string[];
  monogram: string;
  logo?: string;
}

export const education: EducationItem[] = [
  {
    id: "sliit",
    school: "Sri Lanka Institute of Information Technology",
    dates: "2022 – Present",
    summary: "BSc (Hons) in Information Technology, specialising in Software Engineering",
    monogram: "SL",
    logo: "/images/logos/sliit.png",
  },
  {
    id: "devi-balika",
    school: "Devi Balika Vidyalaya, Colombo",
    dates: "2019 – 2022",
    summary: "G.C.E. Advanced Level, Physical Science stream",
    monogram: "DB",
    logo: "/images/logos/devi-balika.png",
  },
  {
    id: "princess-of-wales",
    school: "Princess of Wales' College, Moratuwa",
    dates: "2008 – 2018",
    summary: "G.C.E. Ordinary Level",
    monogram: "PW",
    logo: "/images/logos/princess-of-wales.png",
  },
];
