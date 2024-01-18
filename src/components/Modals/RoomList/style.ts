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
  height: 500px;
  background: #bd8154;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  margin-top: 5%;
`;

export const Refresh = styled.img`
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 40px;
  font-family: "Sejong Bold";
`;

export const Cancel = styled.img`
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  gap: 12px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  width: 480px;
  padding: 5px 0 5px 0;
  border-radius: 10px;
  :nth-child(2) {
    margin-right: 10%;
  }
`;

export const RoomName = styled.p`
  font-size: 24px;
  font-family: "Sejong Bold";
  margin-left: 10%;
`;
