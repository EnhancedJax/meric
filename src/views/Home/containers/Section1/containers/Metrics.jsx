import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { METRIC_ITEMS } from "../../../../../constants";

export default function Metrics({ t }) {
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, {});
  const { scrollYProgress } = useScroll({
    target: metricsRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={metricsRef}
      className="w-full py-12 text-white md:py-8"
      style={{
        backgroundImage: "url(section1_bg.jpg)",
        backgroundPosition: "bottom right",
      }}
    >
      <motion.div
        className="flex justify-between px-6 md:justify-center md:gap-20 clampcontainer md:px-0"
        style={{
          translateY: useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [-100, 0, 0, 100]
          ),
        }}
      >
        {METRIC_ITEMS.map((item, index) => (
          <MetricItem
            key={index}
            end={item.end}
            text={t(`home.section1.${item.text}`)}
            inView={metricsInView}
          />
        ))}
      </motion.div>
    </section>
  );
}

function MetricItem({ end, text, inView }) {
  return (
    <div className="flex flex-col gap-2.5 md:gap-5">
      <span className="text-5xl font-bold md:text-7xl">
        <CountUp start={inView ? 0 : null} end={end} duration={2} />+
      </span>
      <span className="text-sm font-light md:text-lg">{text}</span>
    </div>
  );
}
