import { Route, Routes } from "react-router";

import "./style/Tailwind.css";
import "./style/App.css";

import HomePage from "./pages/Home";
import CodePage from "./pages/Code";
import ProjectPage from "./pages/Project";
import DesignsPage from "./pages/Designs";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <>
      <nav
        className="w-fit h-dvh sticky left-0 top-0
        flex flex-col items-center justify-evenly
        rounded-r-2xl bg-pri-f"
      >
        {/* chevron + 4 icons 
          —> make icon component to store them */}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-projects" element={<CodePage />}>
          <Route path="/code-projects/:project" element={<ProjectPage />} />
        </Route>
        <Route path="/design-projects" element={<DesignsPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
      </Routes>
    </>
  );
}
