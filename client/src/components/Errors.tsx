import type { FallbackProps } from "react-error-boundary";

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div>
			<h1>Something went wrong</h1>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

export const NotFound = () => <>page not found</>;
