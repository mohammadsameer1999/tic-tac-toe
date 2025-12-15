import Player from './components/player.jsx'
function App() {


  return (
    // <h1>React Tic-Tac-Toe</h1>
    <main>
      <div id='game-container'>

        <ol id="players">
          <Player name="player 1" symbol="X" />
          <Player name= "Player 2" symbol= "O"/>

          {/* <li>
            <span className="player">

              <span className="player-name">Player 2</span>

              <span className="player-symbol">O</span>

            </span>

            <button>Edit</button>
          </li> */}

        </ol>

        GAME BOARDS

      </div>

      LOG

    </main>

  )
}

export default App
