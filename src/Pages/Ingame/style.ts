import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bd8154;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  gap: 15px;
  &:first-child {
   margin-left: 3%; 
  }
  &:nth-child(3) {
    margin-right: 3%;
  }
`;

export const Left = styled.div`
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 125px;
  height: 125px;
`;

export const RemainTime = styled.p`
  font-family: "Sejong Bold";
  font-size: 40px;
`;

export const Right = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-family: "Sejong Bold";
  font-size: 40px;
`;

export const Stone = styled.img`
  width: 50px;
  height: 50px;
`;
