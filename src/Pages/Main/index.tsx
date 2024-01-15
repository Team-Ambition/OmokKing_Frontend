import React from "react";
import * as S from "./style";

import Button from "../../components/Button";

const Main = () => {
  return (
    <S.Layout>
      <Button
        title="로그인"
        onClickMethod={() => {
          console.log(1);
        }}
      />
    </S.Layout>
  );
};

export default Main;
