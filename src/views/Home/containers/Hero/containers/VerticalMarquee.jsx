import styled from "styled-components";
import Background from "./Background";

const MarqueeAnimate = styled.div`
  @keyframes marquee {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  animation: marquee 10s linear infinite;
`;

const MarqueeContainer = styled.div`
  mask-image: linear-gradient(180deg, transparent 30%, white 100%);
  -webkit-mask-image: linear-gradient(180deg, transparent 30%, white 100%);
`;

export default function VerticalMarquee() {
  return (
    <MarqueeContainer className="absolute w-full h-screen overflow-hidden">
      <MarqueeAnimate>
        <Background className="w-full h-screen border border-text-50" />
        <Background className="w-full h-screen" />
      </MarqueeAnimate>
    </MarqueeContainer>
  );
}
