import styled from "styled-components";

export const Layout = styled.div`
  width: 680px;
  height: 680px;
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
