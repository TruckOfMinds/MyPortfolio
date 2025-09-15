import { Suspense, type JSX } from "react";
import { Route, Routes } from "react-router";

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

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/code-projects" element={<CodePage />}>
            <Route
              path="/code-projects/:project"
              element={<CodeProjectPage />}
            />
          </Route>

          <Route path="/design-projects" element={<DesignsPage />}>
            <Route
              path="/design-projects/:project"
              element={<DesignProjectPage />}
            />
          </Route>

          <Route path="/contact-me" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
