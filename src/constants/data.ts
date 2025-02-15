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
    description: "Locking historic CO₂ emissions into rock underground",
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

export const PROJECTS = [
  {
    badge: "Canada",
    heading: "Deep Sky",
    subHeading: "Eliminating CO₂",
    body: "Scaling a world leading carbon removal hub in Canada that turns CO₂ into rocks",
    amount: "250tCO₂",
    date: "2024",
    status: "Sceduled delivery",
    image: "/projects/deep-sky.jpg",
    href: "/projects/deep-sky",
  },
  {
    badge: "UK",
    heading: "Sheffield University",
    subHeading: "Creating pioneer fuels",
    body: "Pioneering a UK ecosystem for sustainable aviation fuel made from air.",
    amount: "50tCO₂",
    date: "2023",
    status: "Delivered",
    image: "/projects/sheffield.jpg",
    href: "/projects/sheffield",
  },
  {
    badge: "UK",
    heading: "O.C.O Technology",
    subHeading: "Building with air",
    body: "Developing pathways to turn CO₂ into carbon-negative building materials",
    amount: "250tCO₂",
    date: "2024",
    status: "Sceduled delivery",
    image: "/projects/oco.jpg",
    href: "/projects/oco",
  },
];

export const NOTES = [
  {
    id: 1,
    title: "The Future of Carbon Capture",
    date: "April 15, 2025",
    image: "/notes/lab-1.jpg",
    href: "/lab-notes/carbon-capture",
  },
  {
    id: 2,
    title: "Sustainable Carbon Materials",
    date: "March 22, 2025",
    image: "/notes/lab-2.jpg",
    href: "/lab-notes/sustainable-materials",
  },
  {
    id: 3,
    title: "Carbon Pricing Models",
    date: "February 10, 2025",
    image: "/notes/lab-3.jpg",
    href: "/lab-notes/pricing-models",
  },
  {
    id: 4,
    title: "Carbon Pricing Models",
    date: "February 10, 2025",
    image: "/notes/lab-4.jpg",
    href: "/lab-notes/pricing-models-2",
  },
  {
    id: 5,
    title: "Carbon Pricing Models",
    date: "February 10, 2025",
    image: "/notes/lab-5.png",
    href: "/lab-notes/pricing-models-3",
  },
  {
    id: 6,
    title: "Carbon Pricing Models",
    date: "February 10, 2025",
    image: "/notes/lab-6.jpg",
    href: "/lab-notes/pricing-models-4",
  },
];

export const NAVLINKS = [
  {
    href: "/technology",
    label: "Technology",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/lab-notes",
    label: "Lab Notes",
  },
  {
    href: "/careers",
    label: "Careers",
  },
];
