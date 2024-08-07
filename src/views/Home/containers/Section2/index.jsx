import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import H1 from "../../../../components/H1";
import { SERVICES_IMAGES } from "../../../../constants";
gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const [activePart, setActivePart] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${content.offsetHeight - section.offsetHeight}`,
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
          const threshold = sectionHeight * 0.6;

          [content1Ref, content2Ref, content3Ref].forEach(
            (contentRef, index) => {
              const contentElement = contentRef.current;
              const contentRect = contentElement.getBoundingClientRect();

              if (contentRect.top < threshold) {
                setActivePart(index);
              }
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="section-services" className="bg-white text-text">
      <div className="py-12">
        <H1>{t("home.section2.h1")}</H1>
      </div>
      <section
        ref={sectionRef}
        className="relative w-full h-screen py-4 overflow-hidden"
      >
        <div
          ref={leftRef}
          className="absolute z-10 w-[500px] h-[calc(100%-2rem)] bg-text-5 rounded-r-[64px] top-4 left-0 flex justify-center items-center"
        >
          <img
            src="section2_pattern.svg"
            className="absolute bottom-0 left-0 h-full origin-bottom-left -z-10"
          />
          <div className="w-full h-full">
            {SERVICES_IMAGES.map((item, index) => (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center w-full h-full gap-6"
              >
                <div className="flex flex-col justify-center w-1/4 gap-12 h-1/2">
                  {item.slice(0, 3).map((image, indexx) => (
                    <motion.img
                      key={`Section2-${index}-image-${indexx}`}
                      src={image}
                      className="w-full aspect-square rounded-tl-3xl rounded-br-3xl"
                      initial={{ y: "100%" }}
                      animate={{ y: activePart === index ? 0 : "-100%" }}
                      transition={{
                        duration: 0.5,
                        delay: [0, 0.3, 0.1][indexx],
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-center w-1/4 gap-12 h-1/2">
                  {item.slice(3).map((image, indexx) => (
                    <motion.img
                      key={`Section2-${index}-image-${indexx + 3}`}
                      src={image}
                      className="w-full aspect-square rounded-tl-3xl rounded-br-3xl"
                      initial={{ y: "100%" }}
                      animate={{ y: activePart === index ? 0 : "-100%" }}
                      transition={{
                        duration: 0.5,
                        delay: [0.4, 0.2][indexx],
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          className="absolute z-10 w-[130px] h-full top-0 right-8 flex flex-col justify-center items-center space-y-4"
        >
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

        <div ref={contentRef} className="relative pt-4 left-[572px] w-2/5">
          <p className="absolute top-0 text-5xl ">{t("home.section2.p")}</p>
          <div
            style={{
              height: `calc(50vh - ${
                content1Ref?.current?.offsetHeight / 2 || 0
              }px - 32px)`,
            }}
          />
          {[0, 1, 2].map((i, index) => (
            <div
              key={i}
              ref={
                i === 0 ? content1Ref : index === 1 ? content2Ref : content3Ref
              }
              className={`text-text ${index !== 2 ? "mb-[300px]" : ""} w-full`}
            >
              <h2 className="text-4xl font-bold">
                {t(`home.section2.s${i + 1}title`)}
              </h2>
              <p className="">{t(`home.section2.s${i + 1}p`)}</p>
            </div>
          ))}
          <div
            style={{
              height: `calc(50vh - ${
                content3Ref?.current?.offsetHeight / 2 || 0
              }px - 32px)`,
            }}
          />
        </div>
      </section>
    </section>
  );
}
