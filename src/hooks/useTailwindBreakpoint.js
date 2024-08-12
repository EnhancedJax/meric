import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export function useTailwindBreakpoint(breakpoint) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
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
      }
      const newIsPortait = window.innerWidth < window.innerHeight;
      if (isReady) {
        if (isPortrait !== newIsPortait) {
          window.location.reload(); // device rotated
        }
      } else {
        setIsPortrait(newIsPortait);
      }
      setIsReady(true);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [breakpoint, isAboveBreakpoint, isReady]);

  return isAboveBreakpoint;
}
