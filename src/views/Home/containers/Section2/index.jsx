import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTailwindBreakpoint } from "../../../../hooks/useTailwindBreakpoint";
import AnimatedImages from "./containers/AnimatedImages";
import ContentArea from "./containers/ContentArea";
import PartIndicator from "./containers/PartIndicator";
import SectionHeader from "./containers/SectionHeader";
import { setupScrollTrigger } from "./utils/scrollTrigger";

export default function Section2() {
  const sectionRef = useRef(null);
  const animatedImagesRef = useRef(null);
  const contentRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const [activePart, setActivePart] = useState(0);
  const { t } = useTranslation();
  const isMd = useTailwindBreakpoint("md");

  useEffect(() => {
    const cleanup = setupScrollTrigger(
      sectionRef,
      contentRef,
      animatedImagesRef,
      [content1Ref, content2Ref, content3Ref],
      setActivePart,
      isMd
    );
    return cleanup;
  }, [isMd]);

  return (
    <section id="section-services" className="bg-white text-text">
      <SectionHeader t={t} />
      <section
        ref={sectionRef}
        className="relative w-full h-screen pt-4 overflow-hidden"
      >
        {isMd && (
          <AnimatedImages
            activePart={activePart}
            animatedImagesRef={animatedImagesRef}
          />
        )}
        <PartIndicator activePart={activePart} t={t} />
        <ContentArea
          contentRef={contentRef}
          content1Ref={content1Ref}
          content2Ref={content2Ref}
          content3Ref={content3Ref}
          activePart={activePart}
          isMd={isMd}
          t={t}
        />
      </section>
    </section>
  );
}
