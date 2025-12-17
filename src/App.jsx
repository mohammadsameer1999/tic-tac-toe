import { useState } from 'react'

import Player from './components/player.jsx'
import GameBoard from './components/gameBoard.jsx'
import Log from './components/Log.jsx';
function App() {

 const [gameTurns, setGameTurns] =  useState([]);

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {

    setActivePlayer((currActivePlayer) => (currActivePlayer === 'X' ? 'O' : 'X'));

    setGameTurns( (prevTurns) => {

      let currentPlayer = 'x';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X')  {

        currentPlayer = 'O';
      }

      const updateTurns = [

        {square: {row : rowIndex, col : colIndex}, player: currentPlayer},

        ...prevTurns];

      return updateTurns;
    });
  }


  return (
    // <h1>React Tic-Tac-Toe</h1>
    <main>
      <div id='game-container'>

        <ol id="players" className='highlight-player'>

          <Player 
          intialName="player 1" 
          symbol="X" 
          isActive={activePlayer === 'X'}
           />

          <Player 
          intialName="Player 2" 
          symbol="O" 
          isActive={activePlayer === 'O'} 
          />

         

        </ol>

        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        turns = {gameTurns} />


      </div>

      <Log turns={gameTurns}/>

    </main>

  )
}

export default App
