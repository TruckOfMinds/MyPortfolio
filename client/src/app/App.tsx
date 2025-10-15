import { Suspense, useEffect, type JSX } from "react";
import { Route, Routes, useLocation } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import "./style/Tailwind.css";
import "./style/App.css";

import HomePage from "@/pages/Home";
import CodePage from "@/pages/Code";
import CodeProjectPage from "@/pages/CodeProject";
import DesignsPage from "@/pages/Designs";
import DesignProjectPage from "@/pages/DesignProject";
import ContactPage from "@/pages/Contact";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ErrorFallback, PageLoading, NotFound } from "@/components/fallbacks";

export default function App(): JSX.Element {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo({ top: scrollY * -1, behavior: "instant" }), [pathname]);

  return (
    <>
      <Navbar />

      <ErrorBoundary FallbackComponent={ErrorFallback} key={pathname}>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/code-projects" element={<CodePage />} />
            <Route path="/code-projects/:owner/:project" element={<CodeProjectPage />} />

            <Route path="/design-projects" element={<DesignsPage />} />
            <Route path="/design-projects/:project" element={<DesignProjectPage />} />

            <Route path="/contact-me" element={<ContactPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </>
  );
}
