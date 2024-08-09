import React from "react";
import H1 from "../../../../../components/H1";
import MP from "../../../../../components/MP";

export default function AboutUs({ t }) {
  return (
    <section className="w-full px-6 py-24 lg:px-0">
      <div className="flex flex-col gap-8 md:gap-16 md:flex-row clampcontainer">
        <div className="flex-none w-fit md:w-auto">
          <H1 text={t("home.section1.h1")} />
        </div>
        <MP className="text-4xl md:text-5xl">
          <span>{t("home.section1.p")}</span>
          <br />
          <br />
          <span className="opacity-50">{t("home.section1.p2")}</span>
        </MP>
      </div>
    </section>
  );
}
