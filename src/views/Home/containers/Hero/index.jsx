import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import CycleImages from "./containers/CycleImages";
import VerticalMarquee from "./containers/VerticalMarquee";
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
      className="flex items-center justify-center w-full h-screen border-b bg-background border-text-50"
    >
      <div className="absolute z-10 flex justify-center w-full overflow-hidden mb-80">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
          }}
        >
          <h1 className="text-primary font-bold text-[256px] leading-none origin-center">
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
          <WhiteBlob />
        </motion.div>
      </div>
      <CycleImages images={images} interval={1000} className="z-20" />
      <VerticalMarquee />
      <div className="absolute bottom-0 right-0 flex pr-24 text-white shadow">
        <p className=" bg-text pl-10 pr-20 py-4 rounded-tl-[40px] text-xl">
          {t("home.hero.p")}
        </p>
        <div className="px-8 py-5 -ml-10 bg-primary rounded-tl-[40px] rounded-br-[40px]">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
