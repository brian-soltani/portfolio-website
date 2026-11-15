export type EducationEntry = {
  school: string;
  credential: string;
  detail: string;
  timeframe: string;
};

export type Award = {
  event: string;
  href?: string;
  results: string[];
  timeframe?: string;
  location?: string;
};

export const education: EducationEntry[] = [
  {
    school: "George Mason University",
    credential: "B.S. Mathematics, Data Science concentration",
    detail: "",
    timeframe: "2026 - 2028",
  },
  {
    school: "C.G. Woodson High School & Northern Virginia Community College",
    credential: "Dual enrollment",
    detail: "",
    timeframe: "2022 - 2026",
  },
];

export const awards: Award[] = [
  {
    event: "Commonwealth Cyber Initiative (CCI)",
    results: ["Cybersecurity Scholar Award Winner"],
    timeframe: "2026",
    location: "Fairfax, VA",
  },
  {
    event: "HackFax x PatriotHacks 2026",
    href: "https://www.patriothacks.org/",
    results: ["2nd Place, Cybersecurity Track", "2nd Place, Gemini API Track"],
    timeframe: "2026",
  },
];
