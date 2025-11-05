import { ExtraResourceIcon } from "@/components/icons";
import type {
  codeCardProps,
  designCardProps,
  projectCardColours,
  themeType,
  userInputProps,
} from "@/types";
import type { CSSProperties, JSX } from "react";

export {
  myBackground,
  getCardColour,
  shadcnToggle,
  getTheme,
  sortMethod,
  contactsData,
  useMDStyles,
};

const myBackground: { [k: string]: { text: string; title: string; image: string } } = {
  one: {
    title: "Tech Educators",
    image: "",
    text: "_Mar 2025 - Jul 2025 —_",
  },
  two: {
    title: "Access Norwich",
    image: "",
    text: "_Sep 2023 - Jul 2025 —_",
  },
  three: {
    title: "High School",
    image: "",
    text: "_Sep 2018 - Jul 2023 —_",
  },
};

//* —————————————————————————————————————————————————————————————————————————————————————

const randomColour = (): "sky" | "pink" | "yellow" => {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "sky" : choice === 1 ? "pink" : "yellow";
};

const cardColours = new Map<bigint, projectCardColours>();

const getCardColour = (id: bigint) => {
  if (!cardColours.has(id)) cardColours.set(id, randomColour());
  return cardColours.get(id)!;
};

//* —————————————————————————————————————————————————————————————————————————————————————

const shadcnToggle: string = `h-9 px-0 min-w-9 inline-flex items-center justify-center gap-2 rounded-md text-sm 
font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 
data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none 
[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 
focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 
dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap`;

//* —————————————————————————————————————————————————————————————————————————————————————

const getTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "light";
};

//* —————————————————————————————————————————————————————————————————————————————————————

const compareDates = (date1: string, date2: string) => {
  const aMMDD = date1.split("/");
  const dateA = [aMMDD[1], aMMDD[0], aMMDD[2]].join("/");
  const bMMDD = date2.split("/");
  const dateB = [bMMDD[1], bMMDD[0], bMMDD[2]].join("/");

  if (Date.parse(dateA) > Date.parse(dateB)) return 1;
  if (Date.parse(dateA) < Date.parse(dateB)) return -1;
  return 0;
};

const sortMethod = (
  a: designCardProps | codeCardProps,
  b: designCardProps | codeCardProps,
  userInput: userInputProps
): number => {
  if (userInput.sort === "date") return compareDates(a.date, b.date);

  return a.name.localeCompare(b.name);
};

//* —————————————————————————————————————————————————————————————————————————————————————

type contactProps = {
  id: number;
  name: string;
  image: string | JSX.Element;
  hex: { txt: string; bg: string };
  link: string;
};
const contactsData: contactProps[] = [
  {
    id: 1,
    name: "Gmail",
    image: "",
    hex: { bg: "#303030", txt: "#ffffff" },
    link: "mailto:reudbub07@gmail.com",
  },
  {
    id: 2,
    name: "Linkedin",
    image: ExtraResourceIcon({ fill: "white" }),
    hex: { bg: "#0a66c2", txt: "#ffffff" },
    link: "www.linkedin.com/in/reuben-dubois-dev",
  },
  {
    id: 3,
    name: "GitHub",
    image: "/github-mark-white.svg",
    hex: { bg: "#171d1e", txt: "#ffffff" },
    link: "mailto:reudbub07@gmail.com ",
  },
];

//* —————————————————————————————————————————————————————————————————————————————————————

const useMDStyles = (col: string[], theme: themeType): { [k: string]: CSSProperties } =>
  theme === "dark"
    ? {
        card: {
          backgroundColor: col[0],
          scrollbarColor: `${col[0]} transparent`,
        },
        img: { color: col[1] },
        a: { color: col[1] },
        h1: { color: col[1] },
        h2: { color: col[1] },
        h3: { color: col[1] },
        p: { color: col[1] },
        li: { color: col[1] },
      }
    : {
        card: {
          backgroundColor: col[1],
          scrollbarColor: `${col[0]} transparent`,
        },
        img: {
          color: `hsl(from ${col[1]} h s calc(l - 64))`,
        },
        a: { color: `hsl(from ${col[0]} h s calc(l - 10))` },
        h1: { color: `hsl(from ${col[0]} h s calc(l - 10))` },
        h2: { color: `hsl(from ${col[0]} h s calc(l - 10))` },
        h3: { color: `hsl(from ${col[0]} h s calc(l - 10))` },
        p: {
          color: `hsl(from ${col[1]} h s calc(l - 80))`,
        },
        li: {
          color: `hsl(from ${col[1]} h s calc(l - 80))`,
        },
      };
