import React, { useEffect, useState } from "react";
import * as S from "./style";

import Button from "../../components/Button";
import MyPage from "../../components/Modals/MyPage";
import RoomCreate from "../../components/Modals/RoomCreate";
import RoomList from "../../components/Modals/RoomList";
import useUser from "../../hooks/useUser";

const Main = () => {
  const { isLoggined } = useUser();
  const [isMyPageModal, setIsMyPageModal] = useState<boolean>(false);
  const [isRoomCreateModal, setIsRoomCreateModal] = useState<boolean>(false);
  const [isRoomListModal, setIsRoomListModal] = useState<boolean>(false);

  return (
    <S.Layout>
      <S.Omok src="../../../img/MainBackground.svg" alt="바둑판" />
      <S.Layout2 />
      <S.Items isLoggined={isLoggined}>
        <S.Icon src="../../../img/Icon.svg" alt="" />
        <S.Title>오목킹</S.Title>
        <S.Buttons>
          {isLoggined ? (
            <>
              <Button
                title="게임참가"
                onClickMethod={() => {
                  setIsRoomListModal(true);
                }}
              />
              <Button
                title="게임생성"
                onClickMethod={() => {
                  setIsRoomCreateModal(true);
                }}
              />
              <Button
                title="마이페이지"
                onClickMethod={() => {
                  setIsMyPageModal(true);
                }}
              />
              <Button
                title="로그아웃"
                onClickMethod={() => {
                  window.location.href =
                    "http://localhost:3000/auth/google/logout";
                  localStorage.removeItem("accessToken");
                }}
              />
            </>
          ) : (
            <Button
              title="로그인"
              onClickMethod={() => {
                window.location.href = "http://localhost:3000/auth/google";
              }}
            />
          )}
        </S.Buttons>
      </S.Items>
      {isRoomListModal && <RoomList setIsRoomListModal={setIsRoomListModal} />}
      {isRoomCreateModal && (
        <RoomCreate
          setIsRoomCreateModal={setIsRoomCreateModal}
          isRoomCreateModal={isRoomCreateModal}
        />
      )}
      {isMyPageModal && <MyPage setIsMyPageModal={setIsMyPageModal} />}
    </S.Layout>
  );
};

export default Main;
