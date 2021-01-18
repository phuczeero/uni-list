import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props {}

export function Spinner(props: Props) {
  return (
    <Svg viewBox="-24 -24 48 48">
      <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></Circle>
    </Svg>
  );
}

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

const Svg = styled.svg`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: ${p => p.theme.sizes.spinner}px;
  width: ${p => p.theme.sizes.spinner}px;
  transform-origin: center;
`;

const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: ${p => p.theme.colors.primary};
  stroke-linecap: round;
`;
