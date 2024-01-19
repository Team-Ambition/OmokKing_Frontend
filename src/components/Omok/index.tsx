import React from "react";
import * as S from "./style";
import Dot from "../Dot";

const Omok = () => {
  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < 18; i++) {
      const row = [];
      for (let j = 0; j < 18; j++) {
        row.push(<S.Cell key={`${i}-${j}`} />);
      }
      board.push(row);
    }
    return board;
  };

  return (
    <S.Layout>
      <S.BoardContainer>
        {renderBoard().map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell) => cell)}
          </React.Fragment>
        ))}
      </S.BoardContainer>
      <Dot />
    </S.Layout>
  );
};

export default Omok;
