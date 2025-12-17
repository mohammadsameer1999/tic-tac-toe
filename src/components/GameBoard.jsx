import { useState } from "react";
const initialGameBoard = [
    [null, null, null,],
    [null, null, null,],
    [null, null, null,]

];


export default function GameBoard({onSelectSquare, turns}) {
//  const [gameBoard,setGameBoard] =  useState(initialGameBoard);
let  gameBoard = initialGameBoard;
for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
}

//  function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard( (prevGameBoard) => {
//         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updateBoard[rowIndex] [colIndex] = activePlayerSymbol;

//         return updateBoard;

//     });
//     onSelectSquare();
//  }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>{row.map( (playerSymbol, colIndex) => (
                <l1 key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex,colIndex) }>{playerSymbol}</button>

                </l1>
            ))}</ol>
        </li> )}

       {/* <li>
         <ol>
            <l1></l1>
        <l1></l1>
        <l1></l1>
         </ol>
       </li>

        <l1></l1>
        <l1></l1> */}
    </ol>

}