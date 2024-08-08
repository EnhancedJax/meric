import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const sections = [
  {
    images: [
      "https://placehold.co/100x100/FF5733/FFFFFF?text=Section+1+Image+1",
      "https://placehold.co/100x100/33FF57/FFFFFF?text=Section+1+Image+2",
    ],
  },
  {
    images: [
      "https://placehold.co/100x100/3357FF/FFFFFF?text=Section+2+Image+1",
      "https://placehold.co/100x100/FF33F1/FFFFFF?text=Section+2+Image+2",
    ],
  },
  {
    images: [
      "https://placehold.co/100x100/33FFF1/FFFFFF?text=Section+3+Image+1",
      "https://placehold.co/100x100/F1FF33/FFFFFF?text=Section+3+Image+2",
    ],
  },
];

const AnimatedComponent = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    // Trigger initial animation
    setState(0);
  }, []);

  const handleStateChange = () => {
    setState((prevState) => {
      const newState = (prevState + 1) % 3;
      return newState;
    });
  };

  return (
    <div
      className="relative w-[500px] h-[500px] overflow-hidden bg-gray-200 cursor-pointer bg-red-500"
      onClick={handleStateChange}
    >
      {sections.map((section, index) => (
        <motion.div
          className="absolute w-full h-full"
          key={index}
          animate={
            state === index
              ? { y: 0 }
              : { y: (state > index ? 1 : -1) * 100, opacity: 0 }
          }
        >
          <img src={section.images[0]} alt="Section 1" />
          <img src={section.images[1]} alt="Section 1" />
        </motion.div>
      ))}
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <AnimatedComponent />
    </div>
  );
}
