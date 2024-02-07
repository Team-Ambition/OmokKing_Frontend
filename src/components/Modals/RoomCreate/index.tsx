import React, { useState, useEffect } from "react";
import * as S from "./style";
import useModal from "../../../hooks/useModal";
import Button from "../../Button";
import { roomNew, error, socket } from "../../../socket/socketio";
import useUser from "../../../hooks/useUser";

type OwnProps = {
  setIsRoomCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  isRoomCreateModal: boolean;
};

const RoomCreate = ({ setIsRoomCreateModal, isRoomCreateModal }: OwnProps) => {
  const [isInput, setIsInput] = useState("");
  const { handleOutsideClick } = useModal(setIsRoomCreateModal);
  const { data } = useUser();

  const handleCreateRoom = () => {
    if (isInput.length == 0 || isInput.length > 12) {
      alert("방 제목의 길이는 1~")
      return;
    }
    roomNew(isInput, data.name, data.profileImg);
    error();
    socket.on("join", (message) => {
      console.log(message);
    });
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
          autoFocus
        />
        <Button
          title="생성하기"
          onClickMethod={() => {
            handleCreateRoom();
          }}
        />
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default RoomCreate;
