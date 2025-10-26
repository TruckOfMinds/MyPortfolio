import "./style/Tailwind.css";
import "./style/App.css";

import type { themeType } from "@/types";
import { Suspense, useEffect, useState, type JSX } from "react";
import { Route, Routes, useLocation } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, PageLoading, NotFound } from "@/components/fallbacks";

import HomePage from "@/pages/Home";
import CodePage from "@/pages/Code";
import CodeProjectPage from "@/pages/CodeProject";
import DesignsPage from "@/pages/Designs";
import DesignProjectPage from "@/pages/DesignProject";
import ContactPage from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContext } from "@/lib/context";
import { getTheme } from "@/lib/data";

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<themeType>(getTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: scrollY * -1, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const rootClasses = document.querySelector(":root")?.classList;
    const isDark = theme === "dark";
    rootClasses?.remove(isDark ? "light" : "dark");
    rootClasses?.add(isDark ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <Suspense fallback={<PageLoading />}>
        <Navbar />
        <ErrorBoundary children={<Content />} FallbackComponent={ErrorFallback} key={pathname} />
        <Footer />
      </Suspense>
    </ThemeContext>
  );
}

const Content = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/code-projects" element={<CodePage />} />
    <Route path="/code-projects/:owner/:project" element={<CodeProjectPage />} />

    <Route path="/design-projects" element={<DesignsPage />} />
    <Route path="/design-projects/:project" element={<DesignProjectPage />} />

    <Route path="/contact-me" element={<ContactPage />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
