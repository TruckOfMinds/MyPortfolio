import type { FallbackProps } from "react-error-boundary";
import type { Refetch } from "@/types";
import { Button } from "./ui/button";

import Grid from "./Grid";

export { ErrorFallback, NotFound, PageLoading, Loading, Error };

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center gap-4 justify-between">
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

function NotFound() {
  return (
    <>
      <title>404 | RD Portfolio</title>
      <main>
        <Grid id="top">Page not found</Grid>
      </main>
    </>
  );
}

function PageLoading() {
  return (
    <section
      className={`w-dvw h-dvh bg-surf-d flex flex-col items-center justify-center gap-4 z-100`}>
      <p>Loading...</p>
    </section>
  );
}

const Loading = () => (
  <div className="w-full h-full flex items-center justify-center absolute trans top-1/2 left-1/2">
    Loading...
  </div>
);

const Error = ({
  error,
  refetch,
  className,
}: {
  error: Error;
  refetch: Refetch;
  className?: string;
}) => (
  <div
    className={`w-full h-4/5 flex flex-col items-center justify-start gap-4 max-h-4/5 text-center ${className}`}>
    <img src="/error.svg" alt="Error 'X' Icon" className="max-h-1/2" />
    <h1>{error.message}</h1>
    <button
      onClick={() => refetch()}
      className="rounded-full bg-err text-light px-6 py-1 mb-4 cursor-pointer transition-all hover-active">
      Retry
    </button>
  </div>
);
