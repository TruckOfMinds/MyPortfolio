import type { FallbackProps } from "react-error-boundary";
import Grid from "./Grid";
import type { Refetch } from "@/types";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
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
    <Grid id="top">
      <p>Loading...</p>
    </Grid>
  );
}

const Loading = () => (
  <div className="w-full h-full flex items-center justify-center">Loading...</div>
);

const Error = ({ error, refetch }: { error: Error; refetch: Refetch }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4">
    <img src="/error.svg" alt="Error 'X' Icon" className="max-h-1/2" />
    <h1>{error.message}</h1>
    <button
      onClick={() => refetch()}
      className="rounded-full bg-err text-on-err px-6 py-1 mb-4 cursor-pointer transition-all hover:brightness-75 active:scale-110 active:brightness-105">
      Retry
    </button>
  </div>
);

export { ErrorFallback, NotFound, PageLoading, Loading, Error };
