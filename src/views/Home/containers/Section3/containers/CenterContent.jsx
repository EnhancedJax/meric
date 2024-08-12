import { motion, useInView, useTransform } from "framer-motion";
import React from "react";
import H1 from "../../../../../components/H1";
import { PRODUCT_IMAGES } from "../../../../../constants";
import { GradientBlob } from "../styles";

const CenterContent = React.forwardRef(({ scrollYProgress, t, isMd }, ref) => {
  const inView = useInView(ref);
  const parallax = (amount) =>
    useTransform(scrollYProgress, [0, 1], [0, amount]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-screen"
    >
      <motion.div
        className="relative w-full md:w-[500px] md:p-0 p-6"
        style={{ y: parallax(isMd ? -100 : 0) }}
      >
        <GradientBlob />
        <div className="mb-3 w-fit">
          <H1 text={t("home.section3.h1")} />
        </div>
        <h2 className="mb-6 text-3xl font-medium md:text-5xl">
          {t("home.section3.title")}
        </h2>
        <div className="flex flex-wrap gap-2 mt-8">
          {PRODUCT_IMAGES.map((image, index) => (
            <motion.span
              key={`Section3-MobileNames-${index}`}
              className="px-6 py-1.5 text-sm text-white rounded-tl-full bg-text-50 rounded-br-full backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    }
                  : {}
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`home.section3.shoeNames.shoe${index}`)}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

export default CenterContent;
