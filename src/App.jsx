import Player from './components/player.jsx'
import GameBoard from './components/gameBoard.jsx'
import { useState } from 'react'
import Log from './components/Log.jsx';
function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }


  return (
    // <h1>React Tic-Tac-Toe</h1>
    <main>
      <div id='game-container'>

        <ol id="players" className='highlight-player'>

          <Player intialName="player 1" symbol="X" isActive={activePlayer === 'X'} />

          <Player intialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />

          {/* <li>
            <span className="player">

              <span className="player-name">Player 2</span>

              <span className="player-symbol">O</span>

            </span>

            <button>Edit</button>
          </li> */}

        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />


      </div>

      <Log/>

    </main>

  )
}

export default App
