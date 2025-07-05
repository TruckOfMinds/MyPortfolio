export const getTheme = (): string => {
  const theme: string | null | undefined = document
    .querySelector(":root")
    ?.getAttribute("data-theme");
  return theme || "light";
};
