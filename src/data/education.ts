export type Education = {
  id: string;
  school: string;
  location: string;
  degree: string;
  fieldOfStudy: string;
  period: { start: string; end: string };
  score: string;
};

export const EDUCATION: Education[] = [
  {
    id: "kgec",
    school: "Kalyani Government Engineering College",
    location: "West Bengal, India",
    degree: "B.Tech",
    fieldOfStudy: "Information Technology",
    period: { start: "Jul 2021", end: "Jun 2025" },
    score: "CGPA 8.83/10",
  },
];
