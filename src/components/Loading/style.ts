import styled, { keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const LoadingWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;
