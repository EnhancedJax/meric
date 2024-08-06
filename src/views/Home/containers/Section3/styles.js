import styled from "styled-components";

export const GradientBlob = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 204, 149, 0.8) 23%,
    rgba(255, 204, 149, 0) 100%
  );
  /* filter: blur(100px); */
  width: 800px;
  height: 600px;
  position: absolute;
  left: 20%;
  top: 20%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
