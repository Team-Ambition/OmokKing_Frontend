import React from "react";
import * as S from "./style";

type OwnProps = {
  title: string;
};

const Button = ({ title }: OwnProps) => {
  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
    </S.Layout>
  );
};

export default Button;
