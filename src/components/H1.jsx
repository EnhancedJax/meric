import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function H1({ text }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      className="flex items-center gap-5 py-2.5 w-full justify-center h-min "
      ref={ref}
    >
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.2, ease: "backOut" }}
        className="w-2 h-2 rounded-full bg-text"
      />
      <h1 className="text-xl font-bold text-text">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "20%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.05 }}
            className="inline-block"
            style={{
              width: letter === " " ? "0.5em" : "auto",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.2, ease: "backOut" }}
        className="w-2 h-2 rounded-full bg-text"
      />
    </div>
  );
}
