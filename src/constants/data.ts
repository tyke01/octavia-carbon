export const PARTNERS = [
  {
    name: "partner 1",
    path: "/partners/p1.svg",
  },
  {
    name: "partner 2",
    path: "/partners/p2.svg",
  },
  {
    name: "partner 3",
    path: "/partners/p3.svg",
  },
  {
    name: "partner 4",
    path: "/partners/p4.png",
  },
  {
    name: "partner 5",
    path: "/partners/p5.svg",
  },
  {
    name: "partner 6",
    path: "/partners/p6.png",
  },
  {
    name: "partner 7",
    path: "/partners/p7.svg",
  },
  {
    name: "partner 8",
    path: "/partners/p8.svg",
  },
  {
    name: "partner 9",
    path: "/partners/p9.svg",
  },
  {
    name: "partner 10",
    path: "/partners/p10.png",
  },
];

interface Slide {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description?: string;
}

export const SLIDES: Slide[] = [
  {
    imageSrc: "/machine.svg",
    title: "The world's most versatile direct air capture technology",
    description:
      "Our plug-and-play electrochemical solution can efficiently recover historic CO₂ emissions anywhere with access to electricity.",
  },
  {
    title: "Carbon that works for climate",
    description:
      "That CO₂ is then permanently removed or used to displace fossil carbons in products and processes.",
  },
  {
    imageSrc: "/removal.png",
    title: "Permanent removal",
    description: "Locking historic CO2 emissions into rock underground",
  },
  {
    imageSrc: "/building.png",
    title: "Building material",
    description: "Using atmospheric carbon to create urban carbon sinks",
  },
  {
    imageSrc: "/fuel.png",
    title: "E-fuels",
    description: "Creating sustainable fuels from air instead of oil",
  },
];
