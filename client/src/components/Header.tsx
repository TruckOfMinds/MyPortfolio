import "./style/Header.css";

import type { ChangeEvent, JSX, ReactNode } from "react";
import type { setUserInputProps, userInputProps } from "@/types";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SortOrderIcon } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { shadcnToggle } from "@/lib/data";

import Sort from "./Sort";

/* In-File Components :
  - TitleSection
  - SearchAndSort
*/

export default function Header({
  className,
  isDev,
  isDesign,
  text,
  children,
}: {
  className?: string;
  isDev?: boolean;
  isDesign?: boolean;
  text: string;
  children?: ReactNode;
}) {
  return (
    <header
      className={`flex items-center justify-between w-[96%] justify-self-end row-start-1 row-end-1 col-start-2 col-end-4 ${className}`}>
      <TitleSection isDev={isDev} isDesign={isDesign} text={text} />
      {children}
    </header>
  );
}

const TitleSection = ({
  isDev,
  isDesign,
  text,
}: {
  isDev?: boolean;
  isDesign?: boolean;
  text: string;
}): JSX.Element => {
  const Title = ({ text }: { text: string }): JSX.Element => (
    <h1 className="orbit text-5xl mb-3">{text}</h1>
  );

  return (
    <section className="project-title flex items-center gap-4">
      <Title text={text} />

      {isDev ? (
        <div className="text-pri text-2xl rounded-full border-pri border-3 px-7">Dev</div>
      ) : isDesign ? (
        <div className="text-sec text-2xl rounded-full border-sec border-3 px-7">Design</div>
      ) : (
        <></>
      )}
    </section>
  );
};

export const SearchAndSort = ({
  isDev,
  userInput,
  setUserInput,
}: {
  isDev?: boolean;
  userInput: userInputProps;
  setUserInput: setUserInputProps;
}): JSX.Element => (
  <form
    onSubmit={e => e.preventDefault()}
    className={`max-w-full flex items-center gap-4 mr-12 ${isDev ? "dev" : "design"}`}>
    <Label htmlFor="search" className="flex flex-col items-start">
      Search
      <Input
        className="search-y-sort "
        type="text"
        placeholder={`${isDev ? "e.g. JavaScript" : "Project name"}`}
        name="search"
        id="search"
        value={userInput.search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserInput({ ...userInput, search: e.target.value })
        }
      />
    </Label>

    <fieldset className="flex items-end gap-2">
      <Label htmlFor="sort" className="flex flex-col items-start">
        Sort by
        <Sort userInput={userInput} setUserInput={setUserInput} />
      </Label>

      <Tooltip delayDuration={500}>
        <TooltipTrigger type="button">
          <article
            className={"search-y-sort " + shadcnToggle}
            onClick={() => setUserInput({ ...userInput, desc: !userInput.desc })}>
            <SortOrderIcon
              className={`sort-icon transition-transform ${userInput.desc ? "rotate-90" : ""}`}
            />
          </article>
        </TooltipTrigger>
        <TooltipContent>
          <p>{userInput.desc ? "Descending" : "Ascending"}</p>
        </TooltipContent>
      </Tooltip>
    </fieldset>
  </form>
);
