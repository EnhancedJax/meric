import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import H1 from "../../../../components/H1";
import { PRODUCT_IMAGES } from "../../../../constants";
import { GradientBlob } from "./styles";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const { t } = useTranslation();
  const softSvgRef = useRef(null);
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallax = (amount) =>
    useTransform(scrollYProgress, [0, 1], [0, amount]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        softSvgRef.current,
        { height: "0vw" },
        {
          height: "15vw",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "50 bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top -50",
        end: "bottom bottom",
        pin: centerRef.current,
        pinSpacing: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="section-products"
      className="relative w-full h-[200vh] mt-[300px]"
      ref={sectionRef}
      data-cursor-color="text"
    >
      <div
        className="absolute top-0 w-full h-0 -translate-y-full text-primary"
        ref={softSvgRef}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M 0 100 V 90.4211 Q 50 -81.9985 100 90.4211 V 100 z" />
        </svg>
      </div>
      <div
        ref={centerRef}
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen"
      >
        <motion.div
          className="relative w-[500px] md:p-0 p-6"
          style={{ y: parallax(-100) }}
        >
          <GradientBlob />
          <div className="mb-3 w-fit">
            <H1>{t("home.section3.h1")}</H1>
          </div>
          <h2 className="mb-6 text-5xl font-bold">
            {t("home.section3.title")}
          </h2>
          <p>{t("home.section3.p")}</p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center h-full bg-primary">
        <div className="h-px" />
        {PRODUCT_IMAGES.map((image, index) => (
          <motion.img
            key={`Section3-image-${index}`}
            src={image.src}
            alt={`Image ${index}`}
            className="object-cover "
            style={{
              width: image.w,
              height: image.h,
              marginLeft: image.l,
              marginTop: image.t,
              y: parallax(image.parallax),
            }}
          />
        ))}
      </div>
    </section>
  );
}
