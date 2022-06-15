import React, { useContext } from 'react';

import { GameContext } from './Context/GameContext';
import Board from './Board/board';
import Setup from './Setup/setup';


import './game.css';

const Game = () => {

    const { state } = useContext(GameContext);
    const { setup } = state;

    return (
        <div>
            {<div className="container">
                <div className="board">
                    {setup ? <Setup /> : <Board />}
                </div>
            </div>}
        </div>
    )
}

export default Game;