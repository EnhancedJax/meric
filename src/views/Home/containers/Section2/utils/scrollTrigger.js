import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollTrigger(
  sectionRef,
  contentRef,
  animatedImagesRef,
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

        animatedImagesRef.current &&
          gsap.to(animatedImagesRef.current, {
            opacity: progress > 0.9 ? 1 - (progress - 0.9) * 10 : 1,
            translateX: progress > 0.9 ? (progress - 0.9) * 10 * -200 : 0,
            duration: 0,
          });

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
