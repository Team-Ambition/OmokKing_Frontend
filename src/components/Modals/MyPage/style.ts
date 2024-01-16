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

export const Cancel = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 40px;
  font-family: "Sejong Bold";
  margin-top: 5%;
`;

export const Profile = styled.img`
  border-radius: 150px;
  width: 120px;
  height: 120px;
  margin-top: 4%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-family: "Sejong Bold";
  margin-top: 1.5%;
`;
