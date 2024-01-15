import React from "react";
import * as S from "./style";

type OwnProps = {
  title: string;
  onClickMethod: () => void;
};

const Button = ({ title, onClickMethod }: OwnProps) => {
  return (
    <S.Layout onClick={onClickMethod}>
      <S.Title>{title}</S.Title>
    </S.Layout>
  );
};

export default Button;
