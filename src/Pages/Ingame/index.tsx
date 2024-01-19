import React from "react";
import * as S from "./style";
import Omok from "../../components/Omok";

const Ingame = () => {
  return (
    <S.Layout>
      <S.Profile>
        <S.Left>
          <S.ProfileImg src="../../../img/Profile.png" />
          <S.RemainTime>10:00</S.RemainTime>
        </S.Left>
        <S.Right>
          <S.Name>추성우</S.Name>
          <S.Stone
            src={1 ? "../../../img/Black.svg" : "../../../img/White.svg"}
          />
        </S.Right>
      </S.Profile>
      <Omok />
      <S.Profile>
        <S.Right>
          <S.Stone
            src={1 ? "../../../img/White.svg" : "../../../img/Black.svg"}
          />
          <S.Name>추성우</S.Name>
        </S.Right>
        <S.Left>
          <S.ProfileImg src="../../../img/Profile.png" />
          <S.RemainTime>8:30</S.RemainTime>
        </S.Left>
      </S.Profile>
    </S.Layout>
  );
};

export default Ingame;
