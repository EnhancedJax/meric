import styled from "styled-components";

export const CobeContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  top: 230px;
  mask-image: linear-gradient(180deg, white 50%, transparent 80%);
  -webkit-mask-image: linear-gradient(180deg, white 50%, transparent 80%);
  cursor: none;
`;

export const MobileCobeContainer = styled.div`
  width: 300px;
  height: 300px;
  position: static;
  top: 0;
`;
