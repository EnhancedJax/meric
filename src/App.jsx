import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import i18n from "./i18n";
import HomePage from "./views/Home";
import PrivacyPolicy from "./views/PrivacyPolicy";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router>
          <ReactLenis root>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </ReactLenis>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
