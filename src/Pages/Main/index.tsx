import React, { useState } from "react";
import * as S from "./style";

import Button from "../../components/Button";
import MyPage from "../../components/Modals/MyPage";
import RoomCreate from "../../components/Modals/RoomCreate";

const Main = () => {
  const [isMyPageModal, setIsMyPageModal] = useState<boolean>(false);
  const [isRoomCreateModal, setIsRoomCreateModal] = useState<boolean>(false);

  const multipleButtons = true;
  return (
    <S.Layout>
      <S.Omok src="../../../img/MainBackground.svg" alt="바둑판" />
      <S.Layout2 />
      <S.Items multipleButtons={multipleButtons}>
        <S.Icon src="../../../img/Icon.svg" alt="" />
        <S.Title>오목킹</S.Title>
        <S.Buttons>
          {multipleButtons ? (
            <>
              <Button title="게임참가" onClickMethod={() => {}} />
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
              <Button title="로그아웃" onClickMethod={() => {}} />
            </>
          ) : (
            <Button title="로그인" onClickMethod={() => {}} />
          )}
        </S.Buttons>
      </S.Items>
      {isMyPageModal && <MyPage setIsMyPageModal={setIsMyPageModal} />}
      {isRoomCreateModal && (
        <RoomCreate setIsRoomCreateModal={setIsRoomCreateModal} />
      )}
    </S.Layout>
  );
};

export default Main;
