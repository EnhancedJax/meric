import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import VerticalMarquee from "../../../../components/VerticalMarquee";
import { SHOE_COUNT } from "../../../../constants";
import Background from "./containers/Background";
import CycleImages from "./containers/CycleImages";
import { WhiteBlob } from "./styles";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="flex items-center flex-col justify-center w-full h-screen p-6 border-b-[0.5px] bg-background border-text-50 md:p-12"
    >
      <div className="absolute z-10 flex justify-center w-full mb-64 overflow-hidden md:mb-64">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
          }}
        >
          <h1 className="text-primary drop-shadow-lg xl:drop-shadow-none font-bold text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] xl:text-[256px] leading-none origin-center whitespace-nowrap">
            {["M", "E", "R", "I", "C"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <WhiteBlob className="h-[200%] md:h-[150%]" />
      </div>
      <div
        className="z-20 w-[80%] md:max-w-[750px] md:w-auto md:h-auto relative"
        style={{
          aspectRatio: 24 / 11,
        }}
      >
        <CycleImages
          images={Array.from(
            { length: SHOE_COUNT },
            (_, index) => `shoes/Shoe${index + 1}.webp`
          )}
          // images={[]}
          interval={400}
          className="w-full h-full"
        />
        <p className="absolute w-full mt-8 text-sm text-center md:text-xl">
          {t("home.hero.p")}
        </p>
      </div>
      <VerticalMarquee
        className="absolute w-full h-screen overflow-hidden"
        style={{
          maskImage: "linear-gradient(180deg, transparent 30%, white 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 30%, white 100%)",
        }}
      >
        <Background className="w-full h-screen border-b border-text-5" />
      </VerticalMarquee>
    </section>
  );
}
