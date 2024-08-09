import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import VerticalMarquee from "../../../../components/VerticalMarquee";
import Background from "./containers/Background";
import CycleImages from "./containers/CycleImages";
import { WhiteBlob } from "./styles";

const images = ["shoes/0.png", "shoes/1.png"];

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
      <div className="absolute z-10 flex justify-center w-full mb-64 overflow-hidden md:mb-40 lg:mb-80">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
          }}
        >
          <h1 className="text-primary drop-shadow-lg font-bold text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] xl:text-[256px] leading-none origin-center whitespace-nowrap">
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
      <CycleImages
        images={images}
        interval={1000}
        className="z-20 max-h-[60%] max-w-[80%]"
      />
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
      <div className="absolute flex mt-[70%] md:text-white md:shadow md:mt-0 md:bottom-0 lg:right-0 lg:pr-24">
        <p className=" md:bg-text pl-10 pr-10 md:pr-20 py-4 rounded-tl-[40px] md:text-xl text-center">
          {t("home.hero.p")}
        </p>
        <div className="px-8 py-5 -ml-10 bg-primary rounded-tl-[40px] rounded-br-[40px] md:block hidden">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
