import React from "react";
import * as S from "./style";
import Loading from "../../Loading";

const GameStart = () => {
  return (
    <S.ModalOverlay>
      <S.Layout>
        <S.Main>
          <S.Profile>
            <S.Name>추성우</S.Name>
            <S.Img src="../../../../img/Profile.png" alt="내 프로필" />
          </S.Profile>
          <S.VS>VS</S.VS>
          {1 ? (
            <S.Profile>
              <S.Img src="../../../../img/Profile.png" alt="상대 프로필" />
              <S.Name>이승현</S.Name>
            </S.Profile>
          ) : (
            <Loading />
          )}
        </S.Main>
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default GameStart;
