import React from "react";
import * as S from "./style";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingDot />
      <S.LoadingDot style={{ animationDelay: "0.2s", margin: "0px 10px" }} />
      <S.LoadingDot style={{ animationDelay: "0.4s" }} />
    </S.LoadingWrapper>
  );
};

export default Loading;
