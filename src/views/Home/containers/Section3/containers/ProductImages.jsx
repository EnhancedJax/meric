import { motion, useTransform } from "framer-motion";
import { PRODUCT_IMAGES } from "../../../../../constants";

export default function ProductImages({
  scrollYProgress,
  isMd,
  // setActiveIndex,
}) {
  const parallax = (amount) =>
    useTransform(scrollYProgress, [0, 1], [0, amount]);

  return (
    <div className="flex flex-col items-center h-full bg-primary">
      <div className="h-px" />
      {PRODUCT_IMAGES.map((image, index) => (
        <div
          key={`Section3-image-${index}`}
          className="relative flex-grow w-full"
        >
          <motion.div
            className="absolute z-10 overflow-visible"
            style={{
              width: isMd ? image.w : image.w * 0.5,
              height: isMd ? image.h : image.h * 0.5,
              left: image.l,
              right: image.r,
              top: image.t,
              y: parallax(image.parallax),
            }}
            // whileHover={{ scale: 1.1 }}
            // onMouseEnter={() => setActiveIndex(index)}
            // onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              className="object-cover w-full h-full"
              src={image.src}
              alt={`${image.name}-${index}`}
            />
            {/* <p className="hidden w-full p-1 font-medium text-center drop-shadow-md md:block">
              {image.name}
            </p> */}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
