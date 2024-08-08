import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollTriggers(sectionRef, softSvgRef, centerRef) {
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

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top -50",
      end: "bottom bottom",
      pin: centerRef.current,
      pinSpacing: false,
    });

    return st;
  });

  return () => ctx.revert();
}
