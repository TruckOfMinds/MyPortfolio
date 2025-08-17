import type { JSX } from "react";
import { Route, Routes } from "react-router";

import "./style/Tailwind.css";
import "./style/App.css";

import HomePage from "../pages/Home";
import CodePage from "../pages/Code";
import ProjectPage from "../pages/Project";
import DesignsPage from "../pages/Designs";
import ContactPage from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App(): JSX.Element {
  return (
    <div id="top" className="w-dvw min-h-dvh jb-mono">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-projects" element={<CodePage />}>
          <Route path="/code-projects/:project" element={<ProjectPage />} />
        </Route>
        <Route path="/design-projects" element={<DesignsPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
