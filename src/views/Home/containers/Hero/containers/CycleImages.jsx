import React, { useEffect, useState } from "react";

export default function CycleImages({ images, interval = 3000, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <>
      {images && images.length > 0 && (
        <img
          src={images[currentIndex]}
          {...props}
          alt={`Image ${currentIndex + 1}`}
        />
      )}
    </>
  );
}
