import React, { useEffect } from "react";
import * as S from "./style";
import useModal from "../../../hooks/useModal";

type OwnProps = {
  setIsMyPageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyPage = ({ setIsMyPageModal }: OwnProps) => {
  const { handleOutsideClick } = useModal(setIsMyPageModal);

  return (
    <S.ModalOverlay onClick={handleOutsideClick}>
      <S.Layout>
        <S.Cancel
          src="../../../../img/Cancel.svg"
          alt="X"
          onClick={() => {
            setIsMyPageModal(false);
          }}
        />
        <S.Title>마이페이지</S.Title>
        <S.Profile src="../../../../img/Profile.png" alt="프로필사진" />
        <S.Name>추성우</S.Name>
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default MyPage;
