import Grid from "@/components/Grid";
import Header from "@/components/Header";
import { fetchDesignProject } from "@/utils/serverPortal";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { JSX } from "react";
import { useParams } from "react-router";

export default function DesignProjectPage(): JSX.Element {
  const { project } = useParams();
  const { isPending, isError, isFetching, error, data, refetch } = useSuspenseQuery({
    queryKey: ["designProject", project!],
    queryFn: () => fetchDesignProject(project!),
  });
  return (
    <>
      <title>{`${project!} | RD Portfolio`}</title>
      <main>
        <Grid id="top" className="with-header">
          <Header text={project!} isDesign />
          <Content />
        </Grid>
      </main>
    </>
  );
}

const Content = () => <></>;
