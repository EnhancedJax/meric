import React from "react";
import Marquee from "react-fast-marquee";

export default function TrustedBy({ t }) {
  return (
    <section className="py-12 clampcontainer opacity-40">
      <p className="w-full mb-3 text-sm text-center">
        {t("home.section1.trustedBy")}
      </p>
      <Marquee autoFill gradient className="h-12">
        <img
          src="brands/disney.png"
          className="h-12 mr-6 md:mr-12"
          alt="Disney logo"
        />
        {/* Add more brand logos here */}
      </Marquee>
    </section>
  );
}
