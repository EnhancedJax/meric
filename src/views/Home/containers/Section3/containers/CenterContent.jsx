import { motion, useTransform } from "framer-motion";
import React from "react";
import H1 from "../../../../../components/H1";
import { GradientBlob } from "../styles";

const CenterContent = React.forwardRef(({ scrollYProgress, t }, ref) => {
  const parallax = (amount) =>
    useTransform(scrollYProgress, [0, 1], [0, amount]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen"
    >
      <motion.div
        className="relative w-full md:w-[500px] md:p-0 p-6"
        style={{ y: parallax(-100) }}
      >
        <GradientBlob />
        <div className="mb-3 w-fit">
          <H1 text={t("home.section3.h1")} />
        </div>
        <h2 className="mb-6 text-5xl font-bold">{t("home.section3.title")}</h2>
        <p className="text-lg">{t("home.section3.p")}</p>
      </motion.div>
    </div>
  );
});

export default CenterContent;
