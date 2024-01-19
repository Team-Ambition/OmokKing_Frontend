import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  width: 640px;
  height: 300px;
  background: #bd8154;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 20px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 40px;
  font-family: "Sejong Bold";
`;

export const Img = styled.img`
    width: 120px;
`;

export const VS = styled.p`
  font-size: 40px;
  font-family: "Sejong Bold";
  color: white;
`;
