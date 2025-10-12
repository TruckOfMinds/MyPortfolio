import type { Elem, ElemRef, skillProps } from "@/types";
import { fetchSkills } from "@/utils/serverPortal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useLayoutEffect, useRef, useState, type JSX } from "react";
import { createPortal } from "react-dom";
import { Error, Loading } from "./fallbacks";
import Card from "./Card";
import "./style/Skills.css";

export default function Skills({ portalRef }: { portalRef: ElemRef }): JSX.Element {
  const { isPending, isError, isFetching, error, data, refetch } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isPending) return <Loading />;
  if (isError) return <Error error={error} refetch={refetch} />;

  return (
    <>
      <section
        id="skillContainer"
        className={`w-full h-[86%] pb-2 pt-3 flex flex-wrap items-center content-evenly justify-center gap-x-4 gap-y-2 scroller background ${
          isFetching ? "opacity-75" : ""
        }`}>
        {data.map(d => (
          <SkillCard key={d.name} d={d} portalRef={portalRef} />
        ))}
      </section>
    </>
  );
}

const SkillCard = ({ d, portalRef }: { d: skillProps; portalRef: ElemRef }): JSX.Element => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number | string }>({
    top: 0,
    left: "50%",
  });
  const ref = useRef<Elem>(null);
  const skillNameRef = useRef<Elem>(null);

  // —— EVENTS ——————————————————————————————————————————————————————————————————————————

  //* Handle Position
  useLayoutEffect(() => {
    if (!show) return;
    if (!ref.current || !portalRef.current || !skillNameRef.current) {
      setCoords({
        top: 0,
        left: "50%",
      });
      return;
    }

    const cardRect = ref.current.getBoundingClientRect();
    const targetRect = portalRef.current.getBoundingClientRect();
    const popupRect = skillNameRef.current.getBoundingClientRect();

    setCoords({
      top: cardRect.top - targetRect.top,
      left: cardRect.left - targetRect.left + (cardRect.width - popupRect.width) / 2,
    });
  }, [show, portalRef]);

  //* Handle State
  useEffect(() => {
    // if event is not on its corresponding skill
    const handleEvent = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShow(false);
    };

    const checkKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleEvent(e);
    };

    // manages both mouse and keyboard events
    const addListeners = () => {
      document.addEventListener("click", handleEvent);
      document.addEventListener("keyup", checkKey);
      document.getElementById("skillContainer")?.addEventListener("scroll", () => setShow(false));
    };
    const removeListeners = () => {
      document.removeEventListener("click", handleEvent);
      document.removeEventListener("keyup", checkKey);
      document
        .getElementById("skillContainer")
        ?.removeEventListener("scroll", () => setShow(false));
    };

    if (show) addListeners();
    return () => removeListeners();
  }, [show, ref]);

  // —————————————————————————————————————————————————————————————————————————————————————

  return (
    <>
      <Card
        // ! Event not firing — refs are null
        onClick={() => setShow(!show)}
        className="skill cursor-pointer rounded-lg h-16 w-16 brightness-105 flex items-center justify-center transition-all hover:brightness-115 hover:scale-110 active:brightness-90 active:scale-95"
        colour="purple"
        ref={ref}
        tabIndex={0}
        onKeyUp={e => (e.key === "Enter" ? setShow(!show) : null)}>
        <img
          src={[import.meta.env.VITE_BUCKET_URL, d.logo_name].join("/skills/") || "/noSkill.svg"}
          alt="logo"
          className="h-9/10 [user-select:none]"
        />
      </Card>

      {show &&
        portalRef.current &&
        createPortal(
          <Card
            ref={skillNameRef}
            style={coords}
            className="skill-name absolute rounded-md z-10 shadow-v">
            {d.name || "n/a"}
          </Card>,
          portalRef.current
        )}
    </>
  );
};
