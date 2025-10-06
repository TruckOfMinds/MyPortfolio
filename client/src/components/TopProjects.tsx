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
import type { topCarouselProps, topProps } from "@/types";
import { Error, Loading } from "./fallbacks";

export default function TopProjects(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [project, setProject] = useState({ name: "project_name", owner: "na", isCode: false });

  const { isPending, isError, isFetching, error, data, refetch } = useQuery({
    queryKey: ["top"],
    queryFn: fetchTopProjects,
  });

  // —————————————————————————————————————————————————————————————————————————————————————

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      const currentElement = api.slideNodes()[currentIndex]?.firstElementChild;

      const projectName = currentElement?.getAttribute("data-name") || "project_name";
      const projectOwner = currentElement?.getAttribute("data-owner") || "na";
      const projectType = currentElement?.getAttribute("data-is-code");

      setCurrent(currentIndex);
      setProject({ name: projectName, owner: projectOwner, isCode: Boolean(projectType) });
    };
    handleSelect();

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect); // cleanup
    };
  }, [api]);

  // —————————————————————————————————————————————————————————————————————————————————————

  if (isPending) return <Loading />;
  if (isError) return <Error error={error} refetch={refetch} />;

  return (
    <div className={`flex flex-col items-center h-full gap-4 ${isFetching ? "opacity-75" : ""}`}>
      <h2 className="text-start w-full orbit [letter-spacing:.1rem] text-xl mt-1">Top Projects</h2>

      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="flex items-center justify-evenly h-3/4 w-[80%]">
        <CarouselContent className="flex items-center w-fit h-full justify-center">
          <Items data={data} />
        </CarouselContent>

        <section className="flex flex-col items-center justify-between gap-4">
          <h1 className="w-fit text-xl">{project.name}</h1>

          <ViewProject name={project.name} isCode={project.isCode} owner={project.owner} />
        </section>

        {/* absolute */}
        <CarouselPrevious className="text-sec bg-sec-cont transition-opacity hover:opacity-75 active:opacity-50" />
        <CarouselNext className="text-sec bg-sec-cont transition-opacity hover:opacity-75 active:opacity-50" />
      </Carousel>

      <div className="flex items-center gap-1 min-h-2 translate-y-[-0.25rem]">
        {api?.scrollProgress() && api?.scrollProgress() > 1 ? (
          Array.from({ length: api?.scrollProgress() }).map((_, index) => (
            <ScrollMarker key={index} current={index === current} index={index} api={api} />
          ))
        ) : (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all ">
            <circle
              cx="4.19946"
              cy="4.04224"
              r="3.2981"
              fill="rgb(253 214 255)"
              stroke="rgb(253 214 255)"
              strokeWidth="1"
              className="opacity-50"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

//* —————————————————————————————————————————————————————————————————————————————————————

const Items = ({ data }: { data: topProps[] }): JSX.Element => {
  if (!data) return <></>;

  if (data.length === 0) {
    return (
      <CarouselItem className="flex items-center px-4 py-2 min-w-fit h-full justify-center">
        <CarouselImage />
      </CarouselItem>
    );
  }

  return (
    <>
      {data.map(d => (
        <CarouselItem
          key={d.id}
          className="flex items-center px-4 py-2 min-w-fit h-full justify-center">
          <CarouselImage
            src={import.meta.env.VITE_BUCKET_URL + d.image}
            alt={d.name}
            dataName={d.name}
            isCode={d.is_code}
            dataOwner={d.owner}
          />
        </CarouselItem>
      ))}
    </>
  );
};

//* —————————————————————————————————————————————————————————————————————————————————————

const CarouselImage = ({
  src = "fallback.svg",
  alt = "my project",
  dataName = "project_name",
  isCode,
  dataOwner,
}: topCarouselProps): JSX.Element => (
  <img
    src={src}
    alt={"Showcase of " + alt}
    data-name={dataName}
    data-is-code={isCode}
    data-owner={dataOwner}
    className="carousel-image rounded-2xl min-w-48 h-full"
  />
);

//* —————————————————————————————————————————————————————————————————————————————————————

const ViewProject = ({
  name,
  isCode,
  owner,
}: {
  name: string;
  isCode: boolean;
  owner: string;
}): JSX.Element => {
  if (name === "project_name" || !name)
    return (
      <Button
        className="cursor-not-allowed w-full min-w-40 h-10 opacity-50 bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f"
        aria-disabled={true}
        tabIndex={-1}>
        <i>View Project</i>
      </Button>
    );

  return (
    <Link to={`${isCode ? `code-projects/${owner}` : "design-projects"}/${name}`}>
      <Button className="bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f hover:brightness-75">
        <i>View Project</i>
      </Button>
    </Link>
  );
};

//* —————————————————————————————————————————————————————————————————————————————————————

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
    className="transition-all hover:scale-125">
    <circle
      cx="4.19946"
      cy="4.04224"
      r="3.2981"
      fill="rgb(253 214 255)"
      strokeWidth={current ? "1" : "0"}
      stroke="rgb(253 214 255)"
      className={`cursor-pointer ${!current ? "opacity-50" : ""}`}
    />
  </svg>
);
