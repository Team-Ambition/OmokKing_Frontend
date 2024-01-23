import React, { useEffect, useState } from "react";
import * as S from "./style";

import Button from "../../components/Button";
import MyPage from "../../components/Modals/MyPage";
import RoomCreate from "../../components/Modals/RoomCreate";
import RoomList from "../../components/Modals/RoomList";
import customAxios from "../../lib/customAxios";
import axios from "axios";

const Main = () => {
  const [isMyPageModal, setIsMyPageModal] = useState<boolean>(false);
  const [isRoomCreateModal, setIsRoomCreateModal] = useState<boolean>(false);
  const [isRoomListModal, setIsRoomListModal] = useState<boolean>(false);
  const [isLoggined, setIsLoggined] = useState<boolean>(false);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customAxios.get("/auth/userInfo");
        console.log(data);
        if (data.name && data.profileImg) {
          setIsLoggined(!!accessToken);
        } else {
          localStorage.removeItem("accessToken");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
                  localStorage.removeItem("accessToken");
                  window.location.reload();
                }}
              />
            </>
          ) : (
            <Button
              title="로그인"
              onClickMethod={() => {
                window.location.href =
                  "https://omoking.jamkris.kro.kr/auth/google";
              }}
            />
          )}
        </S.Buttons>
      </S.Items>
      {isRoomListModal && <RoomList setIsRoomListModal={setIsRoomListModal} />}
      {isRoomCreateModal && (
        <RoomCreate setIsRoomCreateModal={setIsRoomCreateModal} />
      )}
      {isMyPageModal && <MyPage setIsMyPageModal={setIsMyPageModal} />}
    </S.Layout>
  );
};

export default Main;
