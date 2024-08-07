import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  margin: auto;
  position: relative;
`;

export function Cobe({ markers = [], focusIndex = null }) {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const locationToAngles = (lat, long) => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };
  const focusIndexRef = useRef(focusIndex);
  const focusRef = useRef([0, 0]);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    focusIndexRef.current = focusIndex;
    focusRef.current =
      focusIndex === null ? [0, 0] : locationToAngles(...markers[focusIndex]);
    r.set(0);
  }, [focusIndex]);

  useEffect(() => {
    let width = 0;
    let phi = 0;
    let theta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      markerColor: [1, 0, 0],
      markers: markers
        .map(([lat, long]) => [
          {
            location: [lat, long],
            size: 0.1,
          },
        ])
        .flat(),
      mapSamples: 16000,
      mapBrightness: 1,
      baseColor: [1, 1, 1],
      glowColor: [1.2, 1.2, 1.2],
      onRender: (state) => {
        if (!pointerInteracting.current && focusIndexRef.current === null) {
          phi += 0.005;
        }
        if (focusIndexRef.current === null) {
          state.phi = phi + r.get();
        } else {
          state.phi = phi + r.get();
          state.theta = theta;
          const [focusPhi, focusTheta] = focusRef.current;
          const distPositive = (focusPhi - phi + doublePi) % doublePi;
          const distNegative = (phi - focusPhi + doublePi) % doublePi;
          // Control the speed
          if (distPositive < distNegative) {
            phi += distPositive * 0.08;
          } else {
            phi -= distNegative * 0.08;
          }
          theta = theta * 0.92 + focusTheta * 0.08;
        }
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <Container>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          // canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          // canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          // canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </Container>
  );
}
