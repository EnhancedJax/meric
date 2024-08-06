import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://placehold.co/400x100",
    w: 400,
    h: 100,
    l: "25vw",
    t: "15vh",
    r: "auto",
    parallax: 0,
  },
  {
    src: "https://placehold.co/400x100",
    w: 300,
    h: 50,
    l: "auto",
    t: "25vh",
    r: "20vw",
    parallax: -150,
  },
  {
    src: "https://placehold.co/400x100",
    w: 500,
    h: 150,
    l: "50vw",
    t: "35vh",
    r: "auto",
    parallax: 0,
  },
];

export default function Section3() {
  const softSvgRef = useRef(null);
  const sectionRef = useRef(null);
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
        { height: 0 },
        {
          height: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[200vh]" ref={sectionRef}>
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
      <span className="absolute text-white">Hello world</span>
      <div className="h-full bg-primary">
        {images.map((image, index) => (
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
