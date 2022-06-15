const shipSetupReducer = (state, action) => {
    return {
        ...state,
        boardState: {
            ...state.boardState,
            user: action.payload
        }
    }
}

const moveShipReducer = (state, action) => {
    return {
        ...state,
        boardState: {
            ...state.boardState,
            user: action.payload
        }
    }
}

export {shipSetupReducer, moveShipReducer};