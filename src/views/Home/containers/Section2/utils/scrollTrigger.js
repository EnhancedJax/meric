import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollTrigger(
  sectionRef,
  contentRef,
  contentRefs,
  setActivePart,
  isMd
) {
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

        contentRefs.forEach((contentRef, index) => {
          const contentElement = contentRef.current;
          const contentRect = contentElement.getBoundingClientRect();

          if (contentRect.top < sectionHeight * threshold) {
            setActivePart(index);
          }
        });
      },
    });

    return st;
  }, sectionRef);

  return () => {
    ctx.revert();
  };
}
