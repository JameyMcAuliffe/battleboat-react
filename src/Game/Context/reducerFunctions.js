// const shipSetupReducer = (state, action) => {
//     return {
//         ...state,
//         boardState: {
//             ...state.boardState,
//             user: {
//                 ...state.boardState.user,
//                 board: action.payload
//             }
//         }
//     }
// }

const userShipReducer = (state, action) => {
    return {
        ...state,
        boardState: {
            ...state.boardState,
            user: {
                ...state.boardState.user,
                board: action.payload
            }
        }
    }
}

const placeUserShipReducer = (state, action) => {
    return {
        ...state,
        boardState: {
            ...state.boardState,
            user: {
                ...state.boardState.user,
                board: action.payload.board,
                ships: action.payload.ships
            }
        }
    }
}

export {userShipReducer, placeUserShipReducer};