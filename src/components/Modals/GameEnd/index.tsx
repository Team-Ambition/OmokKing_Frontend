import React from "react";
import * as S from "./style";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

const GameEnd = () => {
  const history = useNavigate();
  
  return (
    <S.ModalOverlay>
      <S.Layout>
        <S.Profile>
          <S.ProfileImg src="../../../../img/Profile.png" />
          <S.ProfileName>추성우</S.ProfileName>
        </S.Profile>
        <S.End>
          <S.EndImg
            src={0 ? "../../../../img/Win.svg" : "../../../../img/Lose.svg"}
          />
          <S.EndTitle>{0 ? "Win!" : "Lose!"}</S.EndTitle>
        </S.End>
        <S.Button>
          <Button
            title="방나가기"
            onClickMethod={() => {
              history("/");
            }}
          />
        </S.Button>
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default GameEnd;
