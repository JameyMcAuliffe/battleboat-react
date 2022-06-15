
import { GameProvider } from './Game/Context/GameContext';
import Game from './Game/game';

import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <h1>Battleboat</h1>
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
