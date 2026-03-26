export interface Project {
  id: string;
  title: string;
  client: string;
  vimeoId: string;
  description?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Better Safe Than Neutered",
    client: "Short Film",
    vimeoId: "1174836160",
  },
  {
    id: "2",
    title: "Lightricks",
    client: "Brand Campaign",
    vimeoId: "1174837184",
  },
  {
    id: "3",
    title: "Sweet Security",
    client: "Product Launch",
    vimeoId: "1174837480",
  },
  {
    id: "4",
    title: "Lemonade & Google",
    client: "Collaboration",
    vimeoId: "1174841840",
  },
  {
    id: "5",
    title: "Lemonade & Google",
    client: "Collaboration",
    vimeoId: "1174845298",
  },
  {
    id: "6",
    title: "Lemonade & Google",
    client: "Collaboration",
    vimeoId: "1174844060",
  },
  {
    id: "7",
    title: "Papaya Global",
    client: "Brand Identity",
    vimeoId: "1174835414",
  },
  {
    id: "8",
    title: "Sweet Security",
    client: "Security Tech",
    vimeoId: "1174837803",
  },
  {
    id: "9",
    title: "Papaya Global",
    client: "Fintech",
    vimeoId: "1174835642",
  },
  {
    id: "10",
    title: "Moonshine",
    client: "Creative Project",
    vimeoId: "1174835388",
  },
];

export const SERVICES = [
  {
    title: "Sound Design",
    description: "Bespoke audio for commercials across TV, digital, and social platforms.",
  },
  {
    title: "Sonic Branding",
    description: "Creating unique audio identities that define and elevate modern brands.",
  },
  {
    title: "Voiceover Production",
    description: "Professional recording, editing, and processing for crystal clear narration.",
  },
  {
    title: "Sound for Film",
    description: "Immersive soundscapes for animation, AI, and live-action short films.",
  },
  {
    title: "Interactive Audio",
    description: "Dynamic sound solutions for games and interactive experiences.",
  },
  {
    title: "UI/UX Sound",
    description: "Functional and aesthetic product sound design for tech companies.",
  },
];
