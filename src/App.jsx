import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { I18nextProvider } from "react-i18next";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Cursor from "./components/Cursor";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import MobileNav from "./containers/MobileNav";
import { useTailwindBreakpoint } from "./hooks/useTailwindBreakpoint";
import i18n from "./i18n";
import HomePage from "./views/Home";

function App() {
  const isMd = useTailwindBreakpoint("md");
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router>
          <ReactLenis root>
            {isMd ? <Header /> : <MobileNav />}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
            <Cursor />
          </ReactLenis>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
