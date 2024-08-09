import React from "react";
import Marquee from "react-fast-marquee";
import { CLIENTS } from "../../../../../constants";

export default function TrustedBy({ t }) {
  return (
    <section className="py-12 clampcontainer opacity-40">
      <p className="w-full mb-3 text-sm text-center">
        {t("home.section1.trustedBy")}
      </p>
      <Marquee autoFill gradient className="h-12">
        {CLIENTS.map((client, index) => (
          <img
            src={`brands/${client.img}.png`}
            key={`Section1-TrustedBy-${index}`}
            className="h-12 mr-6 md:mr-12"
            alt={`${client.name} logo`}
          />
        ))}
      </Marquee>
    </section>
  );
}
