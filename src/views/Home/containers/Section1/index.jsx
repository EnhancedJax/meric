import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import H1 from "../../../../components/H1";

export default function Section1() {
  const { t } = useTranslation();
  const paragraphRef = useRef(null);
  const metricsRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, {});
  const metricsInView = useInView(metricsRef, {});

  return (
    <section id="section-about" className="w-full pb-24 ">
      <section className="py-12 clampcontainer opacity-40">
        <p className="w-full mb-3 text-sm text-center">
          {t("home.section1.trustedBy")}
        </p>
        <Marquee autoFill gradient className="h-12">
          <img src="brands/disney.png" className="h-12 mr-6 md:mr-12 " />
        </Marquee>
      </section>
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
      <motion.section
        ref={metricsRef}
        className="w-full py-12 text-white md:py-8"
        style={{
          backgroundImage: "url(section1_bg.jpg)",
          backgroundPosition: "bottom right",
        }}
        initial={{ x: "-100%" }}
        animate={metricsInView ? { x: 0 } : {}}
        transition={{ duration: 0.4, ease: "circOut" }}
      >
        <div className="flex justify-between px-6 md:justify-center md:gap-20 clampcontainer md:px-0">
          <div className="flex flex-col gap-2.5 md:gap-5">
            <span className="text-5xl font-bold md:text-7xl">200+</span>
            <span className="text-sm font-light md:text-lg">
              {t("home.section1.satisfiedClients")}
            </span>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-5">
            <span className="text-5xl font-bold md:text-7xl">30+</span>
            <span className="text-sm font-light md:text-lg">
              {t("home.section1.partners")}
            </span>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-5">
            <span className="text-5xl font-bold md:text-7xl">{"> "}24</span>
            <span className="text-sm font-light md:text-lg">
              {t("home.section1.yearsOfExperience")}
            </span>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
