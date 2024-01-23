import React, { useEffect } from "react";
import * as S from "./style";
import useModal from "../../../hooks/useModal";
import useUser from "../../../hooks/useUser";

type OwnProps = {
  setIsMyPageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyPage = ({ setIsMyPageModal }: OwnProps) => {
  const { handleOutsideClick } = useModal(setIsMyPageModal);
  const { data } = useUser();

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
        <S.Profile src={data.profileImg} alt="프로필사진" />
        <S.Name>{data.name}</S.Name>
      </S.Layout>
    </S.ModalOverlay>
  );
};

export default MyPage;
