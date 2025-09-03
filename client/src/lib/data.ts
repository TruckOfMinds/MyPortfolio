export const bgTexts: { [k: string]: string } = {
  one: "this is the text for one",
  two: "you've reached two",
  three: "congrats on the hatrick",
};

export const randomColour = (): "sky" | "pink" | "yellow" => {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "sky" : choice === 1 ? "pink" : "yellow";
};
