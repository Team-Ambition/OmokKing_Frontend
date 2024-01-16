import React, { useState } from "react";
import * as S from "./style";

import Button from "../../components/Button";
import MyPage from "../../components/Modals/MyPage";

const Main = () => {
  const [isMyPageModal, setIsMyPageModal] = useState<boolean>(false);

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
              <Button title="게임생성" onClickMethod={() => {}} />
              <Button
                title="마이페이지"
                onClickMethod={() => {
                  console.log(isMyPageModal);
                  setIsMyPageModal(true);
                  console.log(isMyPageModal);
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
    </S.Layout>
  );
};

export default Main;
