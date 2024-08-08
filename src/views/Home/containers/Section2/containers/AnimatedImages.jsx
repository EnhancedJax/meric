import { motion } from "framer-motion";
import { SERVICES_IMAGES } from "../../../../../constants";

export default function AnimatedImages({ activePart }) {
  return (
    <div className="absolute z-10 md:w-[300px] lg:w-[500px] h-full bg-text-5 top-0 left-0 flex justify-center items-center">
      <img
        src="section2_pattern.svg"
        className="absolute bottom-0 left-0 origin-bottom-left -z-10"
      />
      {SERVICES_IMAGES.map((item, index) => (
        <AnimatedImageGroup
          key={`Section2-imagecontainer-${index}`}
          item={item}
          activePart={activePart}
          index={index}
        />
      ))}
    </div>
  );
}

export function AnimatedImageGroup({ item, activePart, index }) {
  const direction = activePart > index ? -1 : 1; // down is -1, up is 1
  const shouldAnimate = activePart === index;
  return (
    <div className="absolute flex items-center justify-center w-full h-full gap-[5%]">
      <div className="flex flex-col justify-center w-1/3 md:w-1/4 gap-[5%] h-full">
        {[0, 2, 4].map((imageIndex) => (
          <AnimatedImage
            key={`Section2-${index}-image-${imageIndex}`}
            image={item[imageIndex]}
            imgIndex={imageIndex}
            direction={direction}
            shouldAnimate={shouldAnimate}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center w-1/3 md:w-1/4 gap-[5%] h-full">
        {[1, 3].map((imageIndex) => (
          <AnimatedImage
            key={`Section2-${index}-image-${imageIndex}`}
            image={item[imageIndex]}
            imgIndex={imageIndex}
            direction={direction}
            shouldAnimate={shouldAnimate}
          />
        ))}
      </div>
    </div>
  );
}

const AnimatedImage = ({ image, direction, shouldAnimate, imgIndex }) => {
  return (
    <motion.img
      src={image}
      className="w-full aspect-square rounded-tl-3xl rounded-br-3xl"
      animate={
        shouldAnimate
          ? { y: 0, opacity: 1 }
          : { y: direction * 300, opacity: 0 }
      }
      transition={{
        duration: 0.3 + imgIndex * 0.1,
        delay: shouldAnimate ? 0.3 : 0,
        ease: "circInOut",
      }}
    />
  );
};