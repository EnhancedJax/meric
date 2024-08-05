import { useState } from "react";
import { useInView } from "react-hook-inview";
import Accordion from "../../../../components/Accordion";
import { Cobe } from "../../../../components/Cobe";
import { MARKERS } from "../../../../constants";
import { CobeContainer } from "./styles";

export default function Contact() {
  const [focusIndex, setFocusIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section
      className="flex items-center w-screen h-screen pb-10 bg-cover bg-text"
      style={{
        backgroundImage: "url('ContactBackground.png')",
      }}
      ref={ref}
    >
      <div className="container relative flex flex-col items-center justify-end text-white">
        <CobeContainer>
          {inView && <Cobe markers={MARKERS} focusIndex={focusIndex} />}
        </CobeContainer>
        <div className="w-[630px] text-center z-10">
          <h1 className="text-6xl font-bold">Let's work together</h1>
          <div>Tell us some information and we’ll get back to you soon!</div>
        </div>
        <Accordion
          items={[
            {
              title: "First",
              content: "First",
              onClick: () => {
                setFocusIndex(0);
              },
            },
            {
              title: "Second",
              content: "Second",
              onClick: () => {
                setFocusIndex(1);
              },
            },
            {
              title: "Third",
              content: "Third",
              onClick: () => {
                setFocusIndex(2);
              },
            },
          ]}
        />
      </div>
    </section>
  );
}
