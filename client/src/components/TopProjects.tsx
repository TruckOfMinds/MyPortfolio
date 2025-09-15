import { useEffect, useState, type JSX } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchTopProjects } from "@/utils/serverPortal";
import { Link } from "react-router";

export default function TopProjects(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [name, setName] = useState("project_name");

  const { isPending, isError, error, data /* refetch */ } = useQuery({
    queryKey: ["top"],
    queryFn: fetchTopProjects,
  });

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      const projectName = api
        .slideNodes()
        // eslint-disable-next-line no-unexpected-multiline
        [currentIndex]?.firstElementChild?.getAttribute("data-name");

      setCurrent(currentIndex);
      setName(projectName || "project_name");
    };
    handleSelect();

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect); // cleanup
    };
  }, [api]);

  // temporary
  if (isPending) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <article className="flex flex-col items-center justify-center w-3/4 gap-4 py-2">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="flex items-center w-full"
      >
        <span className="flex items-center justify-around w-full">
          <CarouselContent>
            {data.map((d) => (
              <CarouselItem key={d.id}>
                <img
                  src={d.image}
                  alt={`Showcase of ${d.repo_name || "my project"}`}
                  data-name={d.repo_name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <section className="flex flex-col items-center justify-between gap-2">
            <h1 className="w-fit text-xl">{name}</h1>

            {name !== "project_name" ? (
              <Link to={`code-projects/${name}`}>
                <Button className="bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f hover:brightness-75">
                  <i>View Project</i>
                </Button>
              </Link>
            ) : (
              <Button
                className="cursor-not-allowed opacity-50 bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f"
                aria-disabled={true}
              >
                <i>View Project</i>
              </Button>
            )}
          </section>
        </span>

        <CarouselPrevious className="pink transition-opacity hover:opacity-75 active:opacity-50" />
        <CarouselNext className="pink transition-opacity hover:opacity-75 active:opacity-50" />
      </Carousel>
      <div className="flex items-center gap-1">
        {Array.from({ length: data.length }).map((_, index) => (
          <ScrollMarker
            key={index}
            current={index === current}
            index={index}
            api={api}
          />
        ))}
      </div>
    </article>
  );
}

const ScrollMarker = ({
  current,
  index,
  api,
}: {
  current: boolean;
  index: number;
  api: CarouselApi;
}): JSX.Element => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => api?.scrollTo(index)}
    className="transition-all hover:scale-125"
  >
    <circle
      cx="4.19946"
      cy="4.04224"
      r="3.2981"
      fill="rgb(253 214 255)"
      strokeWidth={current ? "1" : "0"}
      stroke="rgb(253 214 255)"
      className={!current ? "opacity-50" : ""}
    />
  </svg>
);
