import React from "react";
import { useTranslation } from "react-i18next";
import AboutUs from "./containers/AboutUs";
import Metrics from "./containers/Metrics";
import TrustedBy from "./containers/TrustedBy";

export default function Section1() {
  const { t } = useTranslation();

  return (
    <section id="section-about" className="w-full pb-24">
      <TrustedBy t={t} />
      <AboutUs t={t} />
      <Metrics t={t} />
    </section>
  );
}
