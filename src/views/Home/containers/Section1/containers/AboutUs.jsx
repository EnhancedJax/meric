import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import H1 from "../../../../../components/H1";

export default function AboutUs({ t }) {
  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, {});

  return (
    <section className="w-full px-6 py-24 md:px-0">
      <div className="flex flex-col gap-8 md:gap-16 md:flex-row clampcontainer">
        <div className="flex-none w-fit md:w-auto">
          <H1>{t("home.section1.h1")}</H1>
        </div>
        <motion.p
          ref={paragraphRef}
          className="text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span>{t("home.section1.p")}</span>
          <br />
          <br />
          <span className="opacity-50">{t("home.section1.p2")}</span>
        </motion.p>
      </div>
    </section>
  );
}
