import React, { useReducer } from 'react';
import GameReducer from './GameReducer';
import { defaultBoardState } from './defaultBoardState';

let defaultState = {
    boardState: defaultBoardState,
    setup: true
}

export const GameContext = React.createContext(defaultState);

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GameReducer, defaultState);

    //Actions
    const shipSetup = (selectedSquares) => {
        dispatch({
            type: 'USER_SHIP_REDUCER',
            payload: selectedSquares
        });
    }

    // const moveShip = (newSquares) => {
    //     dispatch({
    //         type: 'MOVE_SHIP',
    //         payload: newSquares
    //     })
    // }

    const placeShip = (boardState) => {
        dispatch({
            type: 'PLACE_USER_SHIP',
            payload: boardState
        })
    }

    return (<GameContext.Provider value={{
        state,
        shipSetup,
        //moveShip,
        placeShip
    }}>
        {children}
    </GameContext.Provider>)
}
