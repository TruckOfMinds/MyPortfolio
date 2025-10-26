import type { contextType } from "@/types";
import { createContext } from "react";

export const ThemeContext = createContext<contextType>({ theme: "light", setTheme: () => {} });
