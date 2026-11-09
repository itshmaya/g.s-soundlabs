export interface Project {
  id: string;
  title: string;
  client: string;
  vimeoId: string;
  edition?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Freesbe",
    client: "TV Campaign",
    vimeoId: "1182385582",
  },
  {
    id: "2",
    title: "Lightricks",
    client: "Die Young",
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
    client: "Pet insurance campaign",
    vimeoId: "1174841840",
    edition: "Film 01",
  },
  {
    id: "7",
    title: "Papaya Global",
    client: "Brand Identity",
    vimeoId: "1174835414",
  },
  {
    id: "5",
    title: "Lemonade & Google",
    client: "Pet insurance campaign",
    vimeoId: "1174845298",
    edition: "Film 02",
  },
  {
    id: "6",
    title: "Lemonade & Google",
    client: "Pet insurance campaign",
    vimeoId: "1174844060",
    edition: "Film 03",
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
    title: "Sound design",
    description: "Sound effects, atmospheres and textures shaped to the edit, from product details to full soundscapes.",
  },
  {
    title: "Music production",
    description: "Original music for commercials, brand films and animation, built around the pace and mood of the picture.",
  },
  {
    title: "Voice & mix",
    description: "Voiceover recording and editing, dialogue cleanup, final mixing and alternate versions for delivery.",
  },
];
