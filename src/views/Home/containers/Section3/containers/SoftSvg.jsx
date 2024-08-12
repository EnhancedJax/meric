import React from "react";

const SoftSvg = React.forwardRef((props, ref) => {
  return (
    <div
      className="absolute w-full h-0 overflow-visible bottom-full text-primary"
      ref={ref}
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
  );
});

export default SoftSvg;
