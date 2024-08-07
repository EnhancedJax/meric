import gsap from "gsap";
import { icons } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  z-index: 10000;
  user-select: none;
  pointer-events: none;
`;

const CursorCircle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 100%;
`;

const CursorIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Cursor() {
  const [cursorIcon, setCursorIcon] = useState(null);
  const [cursorColor, setCursorColor] = useState("primary");
  const [cursorIconColor, setCursorIconColor] = useState("white");
  const cursorWrapperRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursorWrapper = cursorWrapperRef.current;
    const cursorCircle = cursorCircleRef.current;
    if (isTouchDevice || !cursorWrapper || !cursorCircle) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      // check if the mouse cursor is over some link or button
      const toExpand =
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[data-cursor-icon]");

      // using the GSAP power to animate some properties
      gsap.to(cursorWrapper, {
        x: x - 10,
        y: y - 10,
        duration: 1,
        ease: "elastic",
      });

      gsap.to(cursorCircle, {
        opacity: toExpand ? 0.6 : 1,
        transform: `scale(${toExpand ? 3.5 : 1})`,
        duration: 1,
        ease: "elastic",
      });

      const targetCursorIcon = target?.closest("[data-cursor-icon]");
      const targetCursorIconColor = target?.closest("[data-cursor-icon-color]");
      const targetCursorColor = target?.closest("[data-cursor-color]");
      if (targetCursorIcon) {
        setCursorIcon(targetCursorIcon.dataset.cursorIcon);
      } else {
        setCursorIcon(null);
      }
      if (targetCursorColor) {
        setCursorColor(targetCursorColor.dataset.cursorColor);
      } else {
        setCursorColor("primary");
      }
      if (targetCursorIconColor) {
        setCursorIconColor(targetCursorIconColor.dataset.cursorIconColor);
      } else {
        setCursorIconColor("white");
      }
    });

    document.addEventListener("mouseleave", () => {
      gsap.to(cursorCircle, {
        duration: 0.7,
        opacity: 0,
      });
    });

    // Add mousedown and mouseup event listeners
    window.addEventListener("mousedown", () => {
      gsap.to(cursorWrapper, {
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    window.addEventListener("mouseup", () => {
      gsap.to(cursorWrapper, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <CursorWrapper ref={cursorWrapperRef}>
      <CursorCircle
        ref={cursorCircleRef}
        className={`bg-${cursorColor}`}
      ></CursorCircle>
      <CursorIcon>
        <LucideIcon icon={cursorIcon} color={cursorIconColor} />
      </CursorIcon>
    </CursorWrapper>
  );
}

function LucideIcon({ icon, color }) {
  const Icon = icons[icon];
  return <>{icon && <Icon className={`text-${color}`} size={28} />}</>;
}