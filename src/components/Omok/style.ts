import styled from "styled-components";

export const Layout = styled.div`
  max-width: max-content;
  max-height: max-content;
  background-color: #dbb578;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 2.2vw);
  grid-template-rows: repeat(18, 2.2vw);
`;

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #000;
`;

export const Dots = styled.div`
  width: 30vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 10vw;
`;
