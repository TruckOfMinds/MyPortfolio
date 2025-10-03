import type { codeProjectProps } from "@/types";
import type { JSX } from "react";

import "./style/Project.css";

import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Link, useParams } from "react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCodeProject } from "@/utils/serverPortal";
import { ExtraResourceIcon, GitHubIcon, ProjectIcon } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CodeProjectPage(): JSX.Element {
  const { owner, project } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: ["codeProject", project],
    queryFn: () => fetchCodeProject(owner!, project!),
  });

  return (
    <>
      <title>{project} | RD Portfolio</title>
      <main>
        <Grid id="top">
          <Header text={project!}>
            <Links links={data.links} />
          </Header>
          <Content {...data} />
        </Grid>
      </main>
    </>
  );
}

const Content = ({ images, ...props }: codeProjectProps) => (
  <section className="flex flex-wrap items-center w-full">
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {images.map(i => (
          <CarouselItem key={i}>
            <img
              src={import.meta.env.VITE_BUCKET_URL + "/" + i}
              alt={`Code Project Image #${images.indexOf(i)}`}
              className="code-project-image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="code-carousel">
        <CarouselNext
          className="code-carousel-button"
          style={{ backgroundColor: props.style[0], color: props.style[1] }}
        />
        <CarouselPrevious
          className="code-carousel-button"
          style={{ backgroundColor: props.style[0], color: props.style[1] }}
        />
      </div>
    </Carousel>

    {/* ————————————————————————————————————————————————————————————————————————————————————— */}

    <Card
      className="scroller markdown-card"
      style={{ backgroundColor: props.style[0], color: props.style[1] }}>
      <Markdown remarkPlugins={[remarkGfm]}>{props.bio}</Markdown>
    </Card>
  </section>
);

const Links = ({ links }: { links: string[] }): JSX.Element => {
  const ProjectLink = ({
    path,
    icon,
    disabled,
  }: {
    path: string;
    icon: JSX.Element;
    disabled: boolean;
  }) =>
    !disabled ? (
      <Link to={path} target="_blank" className="cursor-pointer">
        {icon}
      </Link>
    ) : (
      <div className="cursor-not-allowed opacity-50">{icon}</div>
    );

  const icons = [<ProjectIcon />, <GitHubIcon />, <ExtraResourceIcon />];

  return (
    <Card colour="sky" className="w-1/3 flex items-center justify-evenly gap-2">
      {links.map(l => (
        <ProjectLink
          path={l || ""}
          icon={icons[links.indexOf(l)] || icons[2]}
          disabled={Boolean(l)}
        />
      ))}
    </Card>
  );
};
