import "./style/Navbar.css";

import type { contextType } from "@/types";
import { useContext, useState, type JSX, type KeyboardEvent, type ReactNode } from "react";
import { Link, useMatch } from "react-router";
import { ThemeContext } from "@/lib/context";
import {
  Chevron,
  HomeIcon,
  CodeIcon,
  DesignsIcon,
  ContactIcon,
  LightIcon,
  DarkIcon,
} from "./icons";
import { useMediaQuery } from "@/hooks/use-media-query";

type NavLinkProps = {
  className?: string;
  to: string;
  children: ReactNode;
};
const NavLink = ({ className, ...props }: NavLinkProps) => (
  <Link {...props} className={`${useMatch(props.to) ? `active` : ``} ${className}`} />
);

export default function Navbar(): JSX.Element {
  const { theme, setTheme }: contextType = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        localStorage.setItem("theme", "dark");
        setTheme("dark");
        break;
      case "dark":
        localStorage.setItem("theme", "light");
        setTheme("light");
        break;
    }
  };

  return isDesktop ? (
    <nav
      className={`navbar
        w-[6rem] h-dvh fixed left-0 top-0 text-light
        flex flex-col items-center justify-evenly z-10
        rounded-r-2xl bg-on-pri-f-var pl-3 pr-3 shadow-v
        ${expanded ? `w-[10rem]` : ``}`}>
      <Chevron
        onClick={() => setExpanded(!expanded)}
        onKeyUp={(e: KeyboardEvent<SVGSVGElement>) => e.key === "Enter" && setExpanded(!expanded)}
        className={`nav-toggle transition-transform cursor-pointer ${expanded ? `rotate-180` : ``}`}
        tabIndex={0}
      />

      <div className="nav-links w-full h-3/5 flex flex-col items-center justify-between gap-1">
        <NavLink className="nav-link" to={"/"}>
          <HomeIcon />
          <p className={expanded ? `open` : `closed`}>Home</p>
        </NavLink>

        <NavLink className="nav-link" to={"/code-projects"}>
          <CodeIcon />
          <p className={expanded ? `open` : `closed`}>Dev Projects</p>
        </NavLink>

        <NavLink className="nav-link" to={"/design-projects"}>
          <DesignsIcon />
          <p className={expanded ? `open` : `closed`}>Design Projects</p>
        </NavLink>

        <NavLink className="nav-link" to={"/contact-me"}>
          <ContactIcon />
          <p className={expanded ? `open` : `closed`}>Contact Me</p>
        </NavLink>
      </div>

      <div
        id="themeChanger"
        onClick={toggleTheme}
        onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && toggleTheme()}
        tabIndex={0}>
        {theme !== "dark" ? <DarkIcon /> : <LightIcon />}

        <p className={`text-xs mt-1 ${expanded ? `open` : `closed`}`}>Change Theme</p>
      </div>
    </nav>
  ) : (
    <nav
      className={`
      w-dvw mobile-navbar 
      fixed bottom-0 left-0 
      flex items-center justify-evenly
      bg-on-pri-f-var text-light
      px-1 py-4 rounded-t-2xl z-50
      `}>
      <NavLink
        to="/"
        className="mobile-nav-link flex flex-col gap-2 items-center justify-center text-xs h-9/10"
        children={[<HomeIcon />, <p>Home</p>]}
      />
      <NavLink
        to="/code-projects"
        className="mobile-nav-link flex flex-col gap-2 items-center justify-center text-xs h-9/10"
        children={[<CodeIcon />, <p>Dev</p>]}
      />
      <div
        onClick={toggleTheme}
        onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && toggleTheme()}
        children={theme !== "dark" ? <DarkIcon /> : <LightIcon />}
      />
      <NavLink
        to="/design-projects"
        className="mobile-nav-link flex flex-col gap-2 items-center justify-center text-xs h-9/10"
        children={[<DesignsIcon />, <p>Design</p>]}
      />
      <NavLink
        to="/contact-me"
        className="mobile-nav-link flex flex-col gap-2 items-center justify-center text-xs h-9/10"
        children={[<ContactIcon />, <p>Contact</p>]}
      />
    </nav>
  );
}
