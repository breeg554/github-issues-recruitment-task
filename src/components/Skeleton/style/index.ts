import styled, { css, keyframes } from "styled-components";
const BASE_COLOR = "#d7d7d7";

const shine = keyframes`
  0% {
    left: 0;
  }
  
   100%{
    left: 100%;
  }
   
  `;

const animation = css`
  animation: ${shine} 0.7s infinite ease-in-out;
`;
interface Props {
  width?: string;
  height?: string;
  color?: string;
  circle?: boolean;
  animate?: boolean;
}

export const Skeleton = styled.div<Props>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  border-radius: ${({ circle }) => (circle ? "50%" : "2px")};
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50px;
    transform: translate(-50%, 0);
    background-image: ${({ color }) =>
      `linear-gradient(90deg, ${color} 0px, #dadada 40px, ${color} 80px) `};
    background-repeat: no-repeat;
    ${({ animate }) => (animate ? animation : null)};
  }
`;
Skeleton.defaultProps = {
  width: "100%",
  height: "150px",
  color: BASE_COLOR,
  circle: false,
  animate: true,
};
