import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import H1 from "../../../../components/H1";
import { SERVICES_IMAGES } from "../../../../constants";
import { useTailwindBreakpoint } from "../../../../hooks/useTailwindBreakpoint";
import AnimatedImages, {
  AnimatedImageGroup,
} from "./containers/AnimatedImages";
import Spacer from "./containers/Spacer";
gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const [activePart, setActivePart] = useState(0);
  const { t } = useTranslation();
  const isMd = useTailwindBreakpoint("md");

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    let ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${content.offsetHeight}`,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(content, {
            y: () => -(content.offsetHeight - section.offsetHeight) * progress,
            duration: 0,
          });

          // Update Part colors
          const sectionHeight = section.offsetHeight;
          const threshold = isMd ? 0.6 : 1;

          [content1Ref, content2Ref, content3Ref].forEach(
            (contentRef, index) => {
              const contentElement = contentRef.current;
              const contentRect = contentElement.getBoundingClientRect();

              if (contentRect.top < sectionHeight * threshold) {
                setActivePart(index);
              }
            }
          );
        },
      });

      return st; // Return the ScrollTrigger instance
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMd]); // Add isMd to the dependency array

  return (
    <section id="section-services" className="bg-white text-text">
      <div className="px-6 py-12 md:px-0">
        <div className="mb-6 w-fit md:w-full md:mb-0">
          <H1>{t("home.section2.h1")}</H1>
        </div>
        <p className="text-3xl md:hidden">{t("home.section2.p")}</p>
      </div>
      <section
        ref={sectionRef}
        className="relative w-full h-screen py-4 overflow-hidden"
      >
        {isMd && (
          <div className="absolute z-10 md:w-[300px] lg:w-[500px] h-full bg-text-5 top-0 left-0 flex justify-center items-center">
            <img
              src="section2_pattern.svg"
              className="absolute bottom-0 left-0 origin-bottom-left -z-10"
            />
            <AnimatedImages activePart={activePart} />
          </div>
        )}

        <div className="absolute z-10 w-[130px] h-full top-0 left-4 right-auto md:left-auto md:right-8 flex flex-col justify-center items-center space-y-4">
          {[
            t("home.section2.s1"),
            t("home.section2.s2"),
            t("home.section2.s3"),
          ].map((title, index) => (
            <div
              key={`Indicator-${index}`}
              className="relative flex items-center w-full h-14"
            >
              {activePart === index && (
                <motion.div
                  className="w-0.5 flex-none h-full rounded-full bg-text z-10"
                  layoutId="partIndicator"
                />
              )}
              <div className="w-0.5 flex-none h-full rounded-full bg-neutral-200 top-0 left-0 absolute" />
              <motion.span
                className="absolute flex-grow left-3"
                style={{
                  color: activePart === index ? "rgb(var(--text))" : "#E5E5E5",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {title}
              </motion.span>
            </div>
          ))}
        </div>

        <div
          ref={contentRef}
          className="relative md:pt-4 left-1/3 md:left-[348px] lg:left-[572px] w-2/3 md:w-2/5"
        >
          <p className="absolute top-0 hidden text-5xl md:block">
            {t("home.section2.p")}
          </p>
          <Spacer
            isVisible={isMd}
            height={`calc(50vh - ${
              content1Ref?.current?.offsetHeight / 2 || 0
            }px - 32px)`}
          />
          {[0, 1, 2].map((i, index) => (
            <div key={`Section2-content-${i}`}>
              {!isMd && (
                <div className="relative w-full h-[40vh] bg-text-5 mb-12">
                  <AnimatedImageGroup
                    activePart={activePart}
                    index={i}
                    item={SERVICES_IMAGES[i]}
                  />
                </div>
              )}
              <div
                ref={
                  i === 0
                    ? content1Ref
                    : index === 1
                    ? content2Ref
                    : content3Ref
                }
                className={`text-text ${
                  index !== 2 ? "mb-[150px] md:mb-[300px]" : ""
                } w-full`}
              >
                <h2 className="mb-6 text-4xl font-bold">
                  {t(`home.section2.s${i + 1}title`)}
                </h2>
                <p className="">{t(`home.section2.s${i + 1}p`)}</p>
              </div>
            </div>
          ))}
          <Spacer
            height={`calc(50vh - ${
              content1Ref?.current?.offsetHeight / 2 || 0
            }px - 32px)`}
          />
        </div>
      </section>
    </section>
  );
}
