import React, { useState, useEffect } from "react";
import * as S from "./style";
import useModal from "../../../hooks/useModal";
import Button from "../../Button";

type OwnProps = {
  setIsRoomCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  isRoomCreateModal: boolean;
};

const RoomCreate = ({ setIsRoomCreateModal, isRoomCreateModal }: OwnProps) => {
  const [isInput, setIsInput] = useState("");
  const { handleOutsideClick } = useModal(setIsRoomCreateModal);

  const handleCreate = () => {
    
  };

  return (
    <S.ModalOverlay onClick={handleOutsideClick}>
      <S.Layout>
        <S.Cancel
          src="../../../../img/Cancel.svg"
          alt="X"
          onClick={() => {
            setIsRoomCreateModal(false);
          }}
        />
        <S.Title>방 생성</S.Title>
        <S.RoomInput
          type="text"
          placeholder="방 이름을 입력해주세요."
          onChange={(e) => {
            setIsInput(e.target.value);
          }}
        />
        <Button
          title="생성하기"
          onClickMethod={() => {
            handleCreate();
          }}
        />
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default RoomCreate;
