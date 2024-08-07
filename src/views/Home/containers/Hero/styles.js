import Marquee from "react-fast-marquee";
import styled from "styled-components";

export const WhiteBlob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  background: radial-gradient(closest-side, white 20%, transparent 100%);
  width: 100%;
  height: 150%;
`;

export const StyledMarquee = styled(Marquee)`
  width: 100vw;
  height: 100vh;
`;
