import styled from "styled-components";

export const CobeContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  top: 230px;
  mask-image: linear-gradient(180deg, white 50%, transparent 90%);
  -webkit-mask-image: linear-gradient(180deg, white 50%, transparent 90%);
  cursor: none;
`;

export const MobileCobeContainer = styled.div`
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1/1;
  position: static;
  top: 0;
`;
