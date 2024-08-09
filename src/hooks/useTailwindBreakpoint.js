import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export function useTailwindBreakpoint(breakpoint) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const breakpoints = fullConfig.theme.screens;
      const breakpointWidth = parseInt(breakpoints[breakpoint]);

      if (isNaN(breakpointWidth)) {
        console.error(`Invalid breakpoint: ${breakpoint}`);
        return;
      }

      setIsAboveBreakpoint(window.innerWidth >= breakpointWidth);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [breakpoint]);

  return isAboveBreakpoint;
}
