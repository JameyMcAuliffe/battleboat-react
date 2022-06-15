import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import { defaultBoardState, shipsArray } from './defaultBoardState';

let defaultState = {
    boardState: defaultBoardState,
    setup: true,
    ships: shipsArray
}

export const GameContext = React.createContext(defaultState);

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, defaultState);

    //Actions
    const shipSetup = (selectedSquares) => {
        dispatch({
            type: 'SHIP_SETUP',
            payload: selectedSquares
        });
    }

    const moveShip = (newSquares) => {
        dispatch({
            type: 'MOVE_SHIP',
            payload: newSquares
        })
    }

    return (<GameContext.Provider value={{
        state,
        shipSetup,
        moveShip
    }}>
        {children}
    </GameContext.Provider>)
}
