import React from "react";
import * as S from "./style";

import Button from "../../components/Button";

const Main = () => {
  const multipleButtons = false;
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
              <Button
                title="게임참가"
                onClickMethod={() => {
                  console.log(1);
                }}
              />
              <Button
                title="게임생성"
                onClickMethod={() => {
                  console.log(1);
                }}
              />
              <Button
                title="마이페이지"
                onClickMethod={() => {
                  console.log(1);
                }}
              />
              <Button
                title="로그아웃"
                onClickMethod={() => {
                  console.log(1);
                }}
              />
            </>
          ) : (
            <Button
              title="로그인"
              onClickMethod={() => {
                console.log(1);
              }}
            />
          )}
        </S.Buttons>
      </S.Items>
    </S.Layout>
  );
};

export default Main;
