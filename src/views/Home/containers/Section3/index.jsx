import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTailwindBreakpoint } from "../../../../hooks/useTailwindBreakpoint";
import CenterContent from "./containers/CenterContent";
import ProductImages from "./containers/ProductImages";
import SoftSvg from "./containers/SoftSvg";
import { setupScrollTriggers } from "./utils/scrollTriggers";

export default function Section3() {
  const { t } = useTranslation();
  const softSvgRef = useRef(null);
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const isMd = useTailwindBreakpoint("md");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const cleanup = setupScrollTriggers(sectionRef, softSvgRef, centerRef);
    return cleanup;
  }, [isMd]);

  return (
    <section
      id="section-products"
      className="relative w-full h-[200vh] mt-[200px]"
      ref={sectionRef}
      data-cursor-color="text"
    >
      <SoftSvg ref={softSvgRef} />
      <CenterContent
        ref={centerRef}
        scrollYProgress={scrollYProgress}
        t={t}
        // activeIndex={activeIndex}
      />
      <ProductImages
        scrollYProgress={scrollYProgress}
        isMd={isMd}
        // setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
