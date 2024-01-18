import React from "react";
import * as S from "./style";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const history = useNavigate();
  return (
    <S.Layout>
      <S.Layout2 />
      <S.Main>
        <S.Text>ERROR 404</S.Text>
        <Button
          title="돌아가기"
          onClickMethod={() => {
            history("/");
          }}
        />
      </S.Main>
    </S.Layout>
  );
};

export default Page404;
