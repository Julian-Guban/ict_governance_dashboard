import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Redirect from "./utils/redirectionRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Agencies from "./pages/Agencies";
import DICT from "./pages/DICT";
import DOJ from "./pages/DOJ";
import NBI from "./pages/NBI";
import NPC from "./pages/NPC";
import Phishing from "./pages/Phishing";
import Sextortion from "./pages/Sextortion";
import Hacking from "./pages/Hacking";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="agencies" element={<Agencies />}>
              <Route index element={<DICT />} />
              <Route path="dict" element={<DICT />} />
              <Route path="doj" element={<DOJ />} />
              <Route path="nbi" element={<NBI />} />
              <Route path="npc" element={<NPC />} />
            </Route>
            <Route path="alerts" element={<Alerts />}>
              <Route index element={<Phishing />} />
              <Route path="phishing" element={<Phishing />} />
              <Route path="sextortion" element={<Sextortion />} />
              <Route path="hacking" element={<Hacking />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
