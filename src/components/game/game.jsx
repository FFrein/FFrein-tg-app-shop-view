import React, { useCallback, useEffect, useState } from "react";
import "./game.css";

import { useTg } from "../hooks/useTg";

const Game = (props) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isMove, setMove] = useState(false);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      // Не позволяйте изменять уже занятые клетки или если уже есть победитель
      return;
    }
    setMove(true);

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  const {tg, sendData} = useTg();
// eslint-disable-next-line react-hooks/exhaustive-deps
  const onSendData = useCallback(()=>{
    sendData(board);
    tg.WebApp.sendData("asd");
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
  function senddd(){
    sendData(board);
    tg.WebApp.sendData("asd");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("setParams");
    tg?.MainButton.setParams({
      text: "Отправить ход"
    });
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("isMove");
    if (!isMove) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("onEvent");
    tg?.WebApp?.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg?.WebApp?.offEvent('mainButtonClicked', onSendData);
    };
  });

  return (
    <div>
      <button onClick={onSendData}>asd</button>
      <button onClick={senddd}>asd</button>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

// Вспомогательная функция для определения победителя
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
