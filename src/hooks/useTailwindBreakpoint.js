import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export function useTailwindBreakpoint(breakpoint) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const breakpoints = fullConfig.theme.screens;
      const breakpointWidth = parseInt(breakpoints[breakpoint]);

      if (isNaN(breakpointWidth)) {
        console.error(`Invalid breakpoint: ${breakpoint}`);
        return;
      }

      const result = window.innerWidth >= breakpointWidth;
      if (isAboveBreakpoint !== result) {
        setIsAboveBreakpoint(result);
        if (isReady) {
          console.log("Refreshing due to device change");
          window.location.reload();
        }
      }
      setIsReady(true);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [breakpoint, isAboveBreakpoint, isReady]);

  return isAboveBreakpoint;
}
