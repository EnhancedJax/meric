import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function MP({ children, ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, {});
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.p>
  );
}
