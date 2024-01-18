import React from "react";
import * as S from "./style";
import useModal from "../../../hooks/useModal";
import Button from "../../Button";

type OwnProps = {
  setIsRoomListModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoomList = ({ setIsRoomListModal }: OwnProps) => {
  const { handleOutsideClick } = useModal(setIsRoomListModal);

  return (
    <S.ModalOverlay onClick={handleOutsideClick}>
      <S.Layout>
        <S.Header>
          <S.Refresh src="../../../../img/Refresh.svg" alt="새로고침" />
          <S.Title>게임 참가</S.Title>
          <S.Cancel src="../../../../img/Cancel.svg" alt="X" />
        </S.Header>
        <S.List>
          <S.ListItem>
            <S.RoomName>드루온나 개시키야</S.RoomName>
            <Button title="참가" onClickMethod={() => {}} />
          </S.ListItem>
        </S.List>
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default RoomList;
