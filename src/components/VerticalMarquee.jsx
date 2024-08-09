import styled from "styled-components";

const MarqueeAnimate = styled.div`
  @keyframes marquee {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  animation: marquee ${({ speed }) => speed}s linear infinite;
`;

export default function VerticalMarquee({ children, speed = 10, ...props }) {
  return (
    <div {...props}>
      <MarqueeAnimate speed={speed} className="h-full overflow-visible">
        {children}
        {children}
      </MarqueeAnimate>
    </div>
  );
}
