import "./style/Project.css";
import type { codeProjectProps } from "@/types";
import type { JSX } from "react";
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { isDark } from "@/lib/data";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CodeProjectPage(): JSX.Element {
  const { owner, project } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: ["codeProject", project],
    queryFn: () => fetchCodeProject(owner!, project!),
  });

  return (
    <>
      <title>{`${project!} | RD Portfolio`}</title>
      <main>
        <Grid id="top" className="with-header w-full pt-4">
          <Header text={project!} children={<Links links={data.links} />} />
          <Content {...data} />
        </Grid>
      </main>
    </>
  );
}

//* —————————————————————————————————————————————————————————————————————————————————————

const Content = ({ images, ...props }: codeProjectProps) => (
  <>
    <Carousel
      opts={{ loop: true }}
      className="max-w-8/10 min-h-fit h-1/2 [grid-area:c] flex flex-col items-center justify-center gap-4 rounded-2xl"
    >
      <CarouselContent ParentClassName="rounded-2xl">
        {images.map(i => (
          <CarouselItem key={i}>
            <img
              src={import.meta.env.VITE_BUCKET_URL + "/" + i}
              alt={`Code Project Image #${images.indexOf(i)}`}
              className="code-project-image rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="code-carousel">
        <CarouselPrevious
          className="w-2/5"
          style={{ backgroundColor: props.style[0], color: props.style[1] }}
        />
        <CarouselNext
          className="w-2/5"
          style={{ backgroundColor: props.style[0], color: props.style[1] }}
        />
      </div>
    </Carousel>

    {/* ————————————————————————————————————————————————————————————————————————————————————— */}

    <Card
      className="in-grid scroller markdown-card prose prose-invert max-w-1/2 [grid-area:d]"
      style={
        isDark()
          ? {
              backgroundColor: props.style[0],
              color: `hsl(from ${props.style[0]} h s calc(l + 10%))`,
              boxShadow: `0 4px 24px 4px ${props.style[0]}`,
              scrollbarColor: `${props.style[1]} transparent`,
            }
          : {
              backgroundColor: props.style[1],
              color: `hsl(from ${props.style[1]} h s calc(l - 10%))`,
              boxShadow: `0 4px 24px 4px ${props.style[1]}`,
              scrollbarColor: `hsl(from ${props.style[1]} h s calc(l - 64)) transparent`,
            }
      }
    >
      <ReactMarkdown
        children={props.bio}
        remarkPlugins={[remarkGfm]}
        components={
          isDark()
            ? {
                img: () => (
                  <i
                    className="block py-2"
                    style={{
                      color: props.style[1],
                    }}
                  >
                    <s>Redacted Image</s>
                  </i>
                ),
                a: aProps => (
                  <a
                    {...aProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.style[1] }}
                    href={
                      aProps.href && !aProps.href?.startsWith("./")
                        ? aProps.href
                        : `https://github.com/TruckOfMinds/${props.repo_name}/blob/main${aProps.href}`
                    }
                  >
                    {aProps.children}
                  </a>
                ),
                h1: h1props => (
                  <h1 {...h1props} style={{ color: props.style[1] }}>
                    {h1props.children}
                  </h1>
                ),
                h2: h2props => (
                  <h2 {...h2props} style={{ color: props.style[1] }}>
                    {h2props.children}
                  </h2>
                ),
                h3: h3props => (
                  <h3 {...h3props} style={{ color: props.style[1] }}>
                    {h3props.children}
                  </h3>
                ),
                p: pProps => (
                  <p
                    {...pProps}
                    style={{
                      color: props.style[1],
                    }}
                  >
                    {pProps.children}
                  </p>
                ),
                li: liProps => (
                  <li
                    {...liProps}
                    style={{
                      color: props.style[1],
                    }}
                  >
                    {liProps.children}
                  </li>
                ),
                code: codeProps => {
                  const { children, className, ...rest } = codeProps;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      PreTag="div"
                      children={String(children).replace(/\n$|`/, "")}
                      language={match[1]}
                      style={dark}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }
            : // —————————————————————————————————————————————————————————————————————————————————————
              {
                img: () => (
                  <i
                    className="block text-xs"
                    style={{
                      color: `hsl(from ${props.style[1]} h s calc(l - 64))`,
                    }}
                  >
                    <s>Redacted Image</s>
                  </i>
                ),
                a: aProps => (
                  <a
                    {...aProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: `hsl(from ${props.style[0]} h s calc(l - 10))` }}
                    href={
                      aProps.href && !aProps.href?.startsWith("./")
                        ? aProps.href
                        : `https://github.com/TruckOfMinds/${props.repo_name}/blob/main/${aProps.href}`
                    }
                  >
                    {aProps.children}
                  </a>
                ),
                h1: h1props => (
                  <h1
                    {...h1props}
                    style={{ color: `hsl(from ${props.style[0]} h s calc(l - 10))` }}
                  >
                    {h1props.children}
                  </h1>
                ),
                h2: h2props => (
                  <h2
                    {...h2props}
                    style={{ color: `hsl(from ${props.style[0]} h s calc(l - 10))` }}
                  >
                    {h2props.children}
                  </h2>
                ),
                h3: h3props => (
                  <h3
                    {...h3props}
                    style={{ color: `hsl(from ${props.style[0]} h s calc(l - 10))` }}
                  >
                    {h3props.children}
                  </h3>
                ),
                p: pProps => (
                  <p
                    {...pProps}
                    style={{
                      color: `hsl(from ${props.style[1]} h s calc(l - 64))`,
                    }}
                  >
                    {pProps.children}
                  </p>
                ),
                li: liProps => (
                  <li
                    {...liProps}
                    style={{
                      color: `hsl(from ${props.style[1]} h s calc(l - 64))`,
                    }}
                  >
                    {liProps.children}
                  </li>
                ),
                code: codeProps => {
                  const { children, className, ...rest } = codeProps;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      PreTag="div"
                      children={String(children).replace(/\n$|`/, "")}
                      language={match[1]}
                      style={dark}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }
        }
      />
    </Card>
  </>
);

//* —————————————————————————————————————————————————————————————————————————————————————

const Links = ({ links }: { links: (string | null)[][] }): JSX.Element => {
  const getIconFromLabel = (label: string) => {
    switch (label.toLowerCase()) {
      case "Project":
        return <ProjectIcon />;
      case "GitHub":
        return <GitHubIcon />;
      default:
        return <ExtraResourceIcon />;
    }
  };

  return (
    <Card
      colour="sky"
      className="w-1/4 min-w-fit h-16 min-h-fit flex items-center justify-evenly gap-2 "
    >
      {links.map(l =>
        l[0] && l[1] ? (
          <Link to={l[0]} target="_blank" className="cursor-pointer">
            {getIconFromLabel(l[1])}
            <p>{l[1]}</p>
          </Link>
        ) : null
      )}
    </Card>
  );
};
