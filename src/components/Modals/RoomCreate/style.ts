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

export const RoomInput = styled.input`
  border-radius: 10px;
  background: #d9d9d9;
  width: 22vw;
  height: 6vh;
  margin-top: 7%;
  border: none;
  margin-bottom: 5%;
  padding-left: 2%;
  padding-right: 2%;
  font-family: "Sejong Bold";
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #474747;
  }
`;
