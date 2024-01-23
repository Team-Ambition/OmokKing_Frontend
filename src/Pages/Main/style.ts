import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffa71a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Omok = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
`;

export const Layout2 = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(217, 217, 217, 0.5);
`;

export const Items = styled.div<{ isLoggined: boolean }>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => (props.isLoggined ? "55vh" : "30vh")};
  justify-content: space-between;
  margin-bottom: ${(props) => (props.isLoggined ? "" : "10%")};
`;

export const Icon = styled.img`
  width: 6vw;
`;

export const Title = styled.p`
  font-family: "Sejong Bold";
  font-size: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
