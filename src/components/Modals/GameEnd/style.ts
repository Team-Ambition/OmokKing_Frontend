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
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

export const ProfileImg = styled.img`
  border-radius: 150px;
  width: 120px;
  height: 120px;
`;

export const ProfileName = styled.p`
  font-family: "Sejong Bold";
`;

export const End = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EndImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const EndTitle = styled.p`
  font-size: 80px;
  color: white;
`;

export const Button = styled.div`
  position: absolute;
  bottom: 3%;
  right: 2%;
`;
